---
layout:         post-mbed-org
title:          "mbed + Pololu 3pi = fun! (Part 1)"
date:           2010-12-01T11:34:58.000Z
author:         Chris Styles
tags:           3pi, bluetooth, m3pi, pololu, robot
originalUrl:    https://developer.mbed.org/blog/entry/mbed--Pololu-3pi--fun-Part-1/
---

<p>
  We're doing some experiments to add an mbed brain and bluetooth
  to the already awesome 3pi robot base from <a href=
  "http://www.pololu.com">Pololu</a>.&nbsp;The plan is that it can
  be remotely controlled from a PC or phone application over
  bluetooth, scripted, or made fully autonomous robot such as a
  line follower.
</p>
<p>
  The big plan is to run a "Robot Racing" event at the
  upcoming&nbsp;<a href="http://vault.eetimes.com/armconference/"
  style="text-decoration: none; color: #0073bd !important;">ARM
  Techcon</a> with it, all controlled via android devices. We'll
  also publish all the design files so anyone can build one! Here
  is where we've gotten so far...
</p>
<p>
  We started by looking at the software side of how to control the
  3pi robot base. A search on the Pololu website struck gold almost
  immediately, as they've written some firmware for the robot MCU
  that means that it can be controlled externally by sending
  commands and parameters to it over a UART.&nbsp;It is called the
  "3pi Serial Slave"&nbsp;example, and exposes&nbsp;a control
  interface over the UART at 115,200bps, so would be nice and
  responsive.
</p>
<p>
  The code&nbsp;and libraries are&nbsp;published along with some
  great instructions and tutorials about how to get the firmware
  built (it needs AVR&nbsp;Studio IDE, WinAVR GCC compiler and some
  Pololu libraries; having to install an IDE, toolchain and library
  did seem a bit retro though :-) With the firmware built, the next
  problem was how to actually&nbsp;get the image into the 3pi.
  Well,&nbsp;<a href="http://mbed.org/users/aberk/" style=
  "text-decoration: none; color: #0073bd !important;">Aaron</a> had
  written an&nbsp;AVR ISP routine so that mbed can flash AVR chips
  (check out&nbsp;Aarons&nbsp;<a href=
  "http://mbed.org/users/aberk/notebook/avr910-in-system-programming-using-mbed/"
  style="text-decoration: none; color: #0073bd !important;">AVR
  ISP</a> page), so with a few wires the mbed happily programmed
  the 3pi with the Serial Slave program! Excellent!
</p>
<p>
  From a hardware perspective, there is a rather convenient
  expansion kit, including hardware an connectors (<a href=
  "http://www.pololu.com/catalog/product/979" style=
  "text-decoration: none; color: #0073bd !important;">expansion
  kit</a>). A quick look at the&nbsp;<a href=
  "http://www.pololu.com/file/0J119/3pi_schematic.pdf" style=
  "text-decoration: none; color: #0073bd !important;">schematics,</a>
  and it is obvious how to hook it all up, so in no time at all,
  mbed was mounted.
</p>
<p>
  <img alt="" height="400" src=
  "http://mbed.org/media/uploads/chris/_scaled_m3piphoto.jpg"
  width="400">
</p>
<p>
  The software on the mbed side is where things get interesting, as
  this is where all the possibilities are. The first experiments
  with simple control, sending motor values all go very well, and
  soon, it is time to be more adventurous. The first adventure is
  the start of an API. At this point I decide that&nbsp;mbed + 3pi
  is now called "m3pi", and so I set about building a&nbsp;class to
  expose&nbsp;the 3pi to the mbed developers.&nbsp;At the most
  basic level we have this :
</p>
<pre style=
"margin-bottom: 1em; background-color: #ffffff; font-size: 1.1em; padding: 0.5em; border: 1px solid #cccccc;">

void left_motor (float);
void right_motor (float);
</pre>
<p>
  Each motors is controlled with a&nbsp;floating point&nbsp;value
  between -1.0 and 1.0 to encode the full speed in both directions.
  All movement can be built on top of this control interface.
</p>
<p>
  The next inspiration came from <a href=
  "http://mbed.org/users/MichaelW/">Michael Walker</a>, who
  suggested that we should make the m3pi class RPC'able. A great
  idea that meant that control could conceptually come from
  anywhere. The logical step then was to make it RPC'able over a
  bluetooth link.
</p>
<p>
  Enter the&nbsp;Roving Networks&nbsp;<a href=
  "http://www.rovingnetworks.com/rn-42.php" style=
  "text-decoration: none; color: #0073bd !important;">RN42</a>
  bluetooth module. This exposes itself to the system as a serial
  port, and when it pairs with a device it automatically enters
  data mode, so it is really very simple to use. So now we have a
  bluetooth device that we can pair with all sorts of interesting
  devices, which can then control the m3pi motors by&nbsp;RPC
  calls.
</p>
<p>
  With an androider hacker to hand and one quick app later,
  proportional control of the motors was done using RPC calls from
  an Android phone over bluetooth, and naturally, the
  accelerometers were the obvious input device. As accelerometers
  are rather noisy, some over sampling and low pass filtering was
  needed in software to help the control be as smooth as possible.
  Here are the results:
</p>
<p>
  &nbsp;
</p>
<p>
  <object data="http://www.youtube.com/v/fWySN6zg_hA" height="350"
  style=
  "background-color: #ffffcc; background-position: 50% 50%; border: 1px dotted #cc0000;"
  type="application/x-shockwave-flash" width="425">
    <param name="data" value=
    "http://www.youtube.com/v/fWySN6zg_hA">
    <param name="src" value="http://www.youtube.com/v/fWySN6zg_hA">
  </object>
</p>
<p>
  So, the culmination of all this hackery was that all the
  hardware, programming, interface, protocol and communication
  steps have been solved, and we can drive the 3pi robot using an
  android phone.&nbsp;This is just a first prototype, but it proves
  the idea!
</p>
<p>
  &nbsp;
</p>
<p>
  Stay tuned for a follow up where we'll show you how we get on
  with improving the hardware and building up the software...
</p>

