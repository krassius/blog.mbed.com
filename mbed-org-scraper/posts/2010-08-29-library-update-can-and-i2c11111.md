---
layout:         post-mbed-org
title:          "Library Update: CAN and I2CCANI2CSlaveI2C bugfixEthernet bugfix"
date:           2010-08-29T07:46:39.000Z
author:         Jon Ward
tags:           
originalUrl:    https://developer.mbed.org/blog/entry/Library-Update-CAN-and-I2C11111/
---

<p>Version 24 of the library has gone live. Highlights are:</p>
<ul>
  <li>CAN additions</li>
  <li>I2C Slave class</li>
  <li>I2C, Ethernet bugfixes</li>
</ul>
 <h2>CAN</h2> 
<div>
  <ul>
    <li>The CAN class now has an attach() method, which is triggered on the reception
      of a CAN frame. This works in an identical manner to the attach() methods
      of other classes i.e. takes a function or member function which returns
      void, and has not parameters.</li>
    <li>In addition there is a new method called monitor(bool silent), which puts
      the CAN interface into silent monitor mode. When the interface is in monitor
      mode, it can receive messages, but it will not ACK them, and cannot transmit.</li>
    <li>Finally, the sampling point set by the frequency() method has been tweaked.</li>
  </ul>
</div>
 <h2>I2CSlave</h2> 
<div>A new I2CSlave class has been added. This uses the receive() poll method
  to see if the slave has been addressed, and can use both the multi-byte
  and single byte read() and write() methods as the I2C class. It can also
  distinguish if the slave has been directly addressed, or whether it has
  received the general call address:</div>
<div> <pre>#include 

I2CSlave slave(p9, p10);

int main() {
    char buf[10];
    char msg[] = &quot;Slave!&quot;;

    slave.address(0x30);
    while (1) {
        int i = slave.receive();
        switch (i) {
            case I2CSlave::ReadAddressed:             // Master has performed a read on the slave
                slave.write(msg, strlen(msg) + 1);    // Includes null char
                break;
            case I2CSlave::WriteGeneral:              // Master has performed a general call write
                slave.read(buf, 10);
                printf(&quot;Read G: %s\n&quot;, buf);
                break;
            case I2CSlave::WriteAddressed:            // Master has performed an addressed write
                slave.read(buf, 10);
                printf(&quot;Read A: %s\n&quot;, buf);
                break;
        }
        for(int i = 0; i &lt; 10; i++) buf[i] = 0;       // Clear buffer
    }
}</pre> 
</div>
 <h2>I2C bugfix</h2> 
<div>Version 23 introduced a bug into the reading of multiple bytes on I2C.
  Version 24 fixes this.</div>
 <h2>Ethernet bugfix</h2> 
<div>There was a small bug in re-initialisation of the Ethernet class, which
  has been fixed.</div>
<div>
  <p style="text-align: justify;"><span style="font-family: &apos;Trebuchet MS&apos;, sans-serif; font-size: 19px; font-weight: bold;">Updating to the new Library</span>
  </p>
  <p style="text-align: justify;">As usual, to get these updates for existing programs, simply click on
    the mbed library in your compiler project and choose &quot;Update to latest
    revision!&quot;. New programs will automatically pull it in.</p>
  <p style="text-align: justify;">Any problems, suggestions or thumbs ups, please tell us in the Bugs/Suggestions
    forum!</p>
</div>
