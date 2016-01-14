---
layout:         post-mbed-org
title:          "Library Update: Serial buses and ethernet enhancements."
date:           2010-11-27T08:20:33.000Z
author:         Jon Ward
tags:           library, SerialHalfDuplex, SPIHalfDuplex, SPISlave, updates
originalUrl:    https://developer.mbed.org/blog/entry/140/
---

<p>
  Version 22 of the library is now live. Highlights are:
</p>
<ul>
  <li>I2C repeated start
  </li>
  <li>SPI half-duplex and slave classes
  </li>
  <li>Serial half-duplex class
  </li>
  <li>Ethernet link setting
  </li>
</ul>
<h2>
  I2C Repeated-Start
</h2>
<p>
  As requested in&nbsp;<a href=
  "http://mbed.org/blog/entry/140/">http://mbed.org/forum/mbed/topic/586/</a>
  and in other places, repeated start is now supported.
</p>
<p>
  The read() and write() methods of the I2C class now have an
  optional boolean parameter 'repeated'. It defaults to false (no
  repeated start) so the behaviour remains as before, but if you
  set this to true, then the stop bit is not set, and a repeated
  start is possible:
</p>
<pre>
// CMPS03 - magnetic compass example

#include "mbed.h"

I2C compass(p28, p27);

int main() {
    char cmd[] = { 0x02 };
    char buf[2];

    compass.frequency(100000);

    while(1) {
        compass.write(0xC0, cmd, 1, true);   // Repeated start
        compass.read(0xC0, buf, 2, false);   // No repeated start

        int d = (buf[0] &lt;&lt; 8) + buf[1];
        float f = (float) d / 10.0;

        printf("Read: %f\n", f);
        wait(0.5);
    }
}
</pre>
<h2>
  SPIHalfDuplex, SPISlave
</h2>
<p>
  There are now two new SPI classes: SPIHalfDuplex, and SPISlave.
</p>
<p>
  The SPISlave allows the mbed to act as the slave half of a SPI
  master-slave relationship. Note that the chip select is required
  for this to work (pin 8, if using the pin (5, 6, 7) block, and
  pin 14 for the pin (11, 12, 13) block.
</p>
<p>
  SPIHalfDuplex makes the mbed a master of shared data-in/data-out
  single line SPI system. This still requires both the MOSI and
  MISO pins, but they are simply connected together outside of the
  mbed; no additional tri-state buffers are needed. Also, because
  some of of these shared data line SPI-like devices return a
  different number of bits to that in the command, it has an extra
  method slave_format(int sbits) - which allows you to define the
  number of data bits in the response. An example of this is the
  <a href=
  "http://www.maxim-ic.com/quick_view2.cfm/qv_pk/3080">MAXIM
  MAX6662 SPI thermometer</a>, which is commanded by 8 bits, and
  replies with 16.
</p>
<h2>
  SerialHalfDuplex
</h2>
<p>
  This new Serial class, like SPIHalfDuplex, allows serial
  communications over a shared single data line. Again, both pins
  are required for transmit and received, tied together externally,
  but no additional pulls or buffers are needed. All the usual
  baud/putc/getc/printf methods are available.
</p>
<h2>
  Ethernet Enhancements
</h2>
<p>
  By default, an ethernet device auto-negotiates the speed and
  duplex settings of the link. However, not all networking
  equipment supports this, so a new method, set_link(), allows you
  to force the speed/duplex settings of the link (or set it back to
  auto-negotiate).
</p>
<h2>
  API Documentation
</h2>
<p>
  There have also been a few minor documenation corrections,
  including the missing documentation for the "wait" functions (as
  pointed out in&nbsp;<a href=
  "http://mbed.org/forum/helloworld/topic/788/">http://mbed.org/forum/helloworld/topic/788/</a>).
</p>
<h2>
  Updating to the new Library
</h2>
<p>
  As usual, to get these updates for existing programs, simply
  click on the mbed library in your compiler project and choose
  "Update to latest revision!". New programs will automatically
  pull it in.
</p>
<p>
  Any problems, suggestions or thumbs ups, please tell us in the
  Bugs/Suggestions forum!
</p>

