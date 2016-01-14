---
layout:         post-mbed-org
title:          "Library Update: Added Ports, Faster Digital I/O, and some tweaks"
date:           2011-11-24T20:45:57.000Z
author:         Jon Ward
tags:           library, updates
originalUrl:    https://developer.mbed.org/blog/entry/135/
---

<p>
  We've put live a version of the mbed library with some new
  features and some behavioural&nbsp;improvements. The main
  highlights are:
</p>
<ul>
  <li>Increased speed of the DigitalIn, DigitalInOut and DigitalOut
  interfaces
  </li>
  <li>Open Drain mode available for DigitalIn and DigitalInOut
  </li>
  <li>New PortIn, PortInOut and PortOut interfaces to writing
  quickly to a number of pins on a port
  </li>
</ul>
<p>
  Here are the full details...
</p>
<h2>
  Digital I/O
</h2>
<p>
  Based on some feedback, we've improved the behaviour of the
  Digital I/O interfaces:
</p>
<p>
  The DigitalIn, DigitalInOut and DigitalOut classes have been
  optimised to improve performance (see Igor Skochinsky's excellent
  analysis in&nbsp;<a href=
  "http://mbed.org/users/igorsk/notebook/fast-gpio-with-c-templates/">http://mbed.org/users/igorsk/notebook/fast-gpio-with-c-templates/</a>).
  Reads are at about 2x previous speeds, DigitalOut's speed is over
  5x as fast, and DigitalInOut's write is over 4x as fast. Also
  there is now no overhead between using the assignment, or the
  read/write methods. This also means Bus I/O, which is built on
  these, is faster too.
</p>
<p>
  DigitalIn and DigitalInOut now also has an open drain option via
  the mode() method (as requested in&nbsp;<a href=
  "http://mbed.org/forum/mbed/topic/178/">http://mbed.org/forum/mbed/topic/178/</a>)
</p>
<pre>
DigitalInOut od(p21);
od.mode(OpenDrain);
</pre>
<h2>
  Ports
</h2>
<p>
  We've added PortIn, PortInOut and PortOut classes to complement
  the Digital I/O and Bus I/O interfaces. The main distinction is:
</p>
<ul>
  <li>Digital I/O allows you to easily access any single digital
  pin
  </li>
  <li>Port I/O allows you to access pins on an underlying MCU port,
  specified by the port ID and a bit mask
  </li>
  <li>Bus I/O allows you to construct a "virtual port" made up of
  any pins in any bit position
  </li>
</ul>
<p>
  The Bus I/O is the most flexible way to create a collection of
  pins that can be written in one go, but at the cost of
  performance; it is really just a collection of Digital I/O pins
  that are written to one after the other.&nbsp;For performance,
  writing to multiple pins on a Port I/O is much better, and has
  similar performance to a single Digital I/O pin. The downside vs
  Bus I/O is less flexibility of pin selection and layout.
</p>
<p>
  When you create a Port class, you give the constructor the port
  name, and a mask which indicates which bits of that port are
  going to be active. You then read from or write to the 32-bit
  port, with each bit indicating the pin on the port. The class
  ignores the bits which are for pins you set as '0' in the mask.
  This has the nice property that multiple Port interfaces can
  coexist on the same physical port.
</p>
<p>
  Here is an example:
</p>
<pre>
#include "mbed.h"

// LED1 = P1.18  LED2 = P1.20  LED3 = P1.21  LED4 = P1.23

PortOut leds(Port1, 0x00B40000);   // the mask indicates which bits are considered part of the port

int main() {
    while(1) {
        leds = 0x00A00000;
        wait(1);
        leds = 0x00140000;
        wait(1);
    }
}
</pre>
<p>
  There are&nbsp;obviously&nbsp;only some pins of ports available,
  but there is an 8-bit bus available which could be useful for
  parallel interfaces:
</p>
<pre>
       +----------+
GND   -+ 1     40 +- Vout
      -+ 2     39 +-    
      -+ 3     38 +-     
      -+ 4     37 +-    
P0.9  -+ 5     36 +-
P0.8  -+ 6     35 +-
P0.7  -+ 7     34 +-
P0.6  -+ 8     33 +-
P0.0  -+ 9     32 +-
P0.1  -+ 10    31 +-
P0.18 -+ 11    30 +- P0.4
P0.17 -+ 12    29 +- P0.5
P0.15 -+ 13    28 +- P0.10
P0.16 -+ 14    27 +- P0.11
P0.23 -+ 15    26 +- P2.0
P0.24 -+ 16    25 +- P2.1
P0.25 -+ 17    24 +- P2.2
P0.26 -+ 18    23 +- P2.3
P1.30 -+ 19    22 +- P2.4
P1.31 -+ 20    21 +- P2.5
       +----------+ 

LED1   LED2   LED3  LED4
P1.18  P1.20  P1.21 P1.23   
</pre>
<h2>
  Other Tweaks
</h2>
<p>
  Here are some of the other tweaks that made it in...
</p>
<ul>
  <li>set_time() now also clears the RTC sub-second counter;
  reported in&nbsp;<a href=
  "http://mbed.org/forum/helloworld/topic/700/" style=
  "text-decoration: none; color: #0073bd !important;">http://mbed.org/forum/helloworld/topic/700/</a>
  </li>
  <li>calling time() now starts the RTC running if it isn't already
  (so you get relative timing, even if no absolute time is set)
  </li>
  <li>PwmOut: changing the period now maintains the duty cycle for
  that PWM; reported in&nbsp;<a href=
  "http://mbed.org/forum/mbed/topic/513/" style=
  "text-decoration: none; color: #0073bd !important;">http://mbed.org/forum/mbed/topic/513/</a>
  </li>
  <li>The baudrate method for Serial now does a full fractional
  baud rate calculation to provide the optimum settings for any
  baudrate requested.
  </li>
</ul>
<p>
  To get these updates for existing programs, simply click on the
  mbed library in your compiler project and choose "Update to
  latest revision!". Any problems, suggestions or thumbs ups,
  please tell us in the Bugs/Suggestions forum!
</p>
<p>
  That's it for this library update. We do have some more new
  features and improvements that are in the works now, which
  hopefully will get to you soon.
</p>

