---
layout:         post-mbed-org
title:          "Library Update: CAN, Serial transmit and I2C"
date:           2010-06-18T16:13:17.000Z
author:         Jon Ward
tags:           CAN, I2C, library, Serial, updates
originalUrl:    https://developer.mbed.org/blog/entry/Library-Update-CAN-Serial-transmit-and-1/
---

<p>
  We've put a new version of the library live (version
  23).&nbsp;The highlights are:
</p>
<ul>
  <li>CAN fixes
  </li>
  <li>Serial transmit interrupt added
  </li>
  <li>I2C low level routines added
  </li>
</ul>
<p>
  <span style=
  "font-family: 'Trebuchet MS', sans-serif; font-size: 15px; font-weight: bold;">
  CAN</span>
</p>
<p>
  A number of CAN fixes have been implemented. Firstly, the
  frequency() method has been improved, and now should manage most
  frequencies requested. Secondly, self-reception has been turned
  off. Finally, the CAN interface pins which are not brought out on
  mbed, are now capable of being enabled in the library.
</p>
<p>
  <span style=
  "font-family: 'Trebuchet MS', sans-serif; font-size: 15px; font-weight: bold;">
  Serial</span>
</p>
<p>
  You can now attach a function to a Serial object which is
  triggered when the transmit buffer is empty. The attach() method
  has been updated with a new second paramter 'type', which can be
  set to Serial::RxIrq or Serial::TxIrq (defaults to RxIrq for
  backward compatability). You can have a receive interrupt routine
  defined, a transmit interrupt routine, or both (or neither).
</p>
<h3>
  I2C
</h3>
<p>
  Due to popular request, the I2C class now has low level
  byte-access control. This is of the form start(), stop(), and
  overloaded read() and write() methods. The new read() takes a
  parameter which indicates whether to ACK or NoACK, and the new
  write() returns a 1 if the byte was ACK'd, and a 0 if it was
  NACK'd. The old read() and write() still operate as before -
  these still have merit as they handle the internal state machine
  of the I2C block in the LPC1768/2368.
</p>
<pre>
// Talk to the CMPS03 I2C digital compass
#include "mbed.h"

int main() {
    I2C cmp(p28, p27);                          // I2C Compass

    printf("Reset!\n");
    cmp.frequency(100000);

    while(1) {
        cmp.start();                            // Start condition
        cmp.write(0xC0);                        // Address 0xC0 write
        cmp.write(0x02);                        // Register 2
        cmp.start();                            // Repeated start
        cmp.write(0xC1);                        // Address 0xC0 read
        int d = cmp.read(I2C::ACK) &lt;&lt; 8;  // Read upper 8 bits, with ACK
        d += cmp.read(I2C::NoACK);              // Read lower 8 bits, no ACK
        cmp.stop();                             // Stop condition
        printf("%d\n", d);                    // Print result
        wait(0.5);
    }
}
</pre>
<p>
  <span style=
  "font-family: 'Trebuchet MS', sans-serif; font-size: 19px; font-weight: bold;">
  Updating to the new Library</span>
</p>
<p style="text-align: justify;">
  As usual, to get these updates for existing programs, simply
  click on the mbed library in your compiler project and choose
  "Update to latest revision!". New programs will automatically
  pull it in.
</p>
<p style="text-align: justify;">
  Any problems, suggestions or thumbs ups, please tell us in the
  Bugs/Suggestions forum!
</p>

