---
layout:         post-mbed-org
title:          "mbed + Pololu 3pi = fun (part 2)"
date:           2010-11-09T10:20:09.000Z
author:         Chris Styles
tags:           3pi, m3pi, pololu
originalUrl:    https://developer.mbed.org/blog/entry/mbed--Pololu-3pi--fun-part-2/
---

<p>
  As the mbed project is all about "Rapid Prototyping", we tend to
  give ourselves crazy deadlines for any demos we do. This is just
  to make sure we practice what we preach! I posted about our
  experiments&nbsp;with an mbed, RN42&nbsp;Bluetooth&nbsp;module
  and Pololu 3pi robot, so with that working it was all about
  turning it in to an event for <a href=
  "http://vault.eetimes.com/armconference/">ARM Tech Con</a>; "mbed
  Robot Racing!"&nbsp;Here is what we did next to have it ready for
  the show....
</p>
<p>
  The first step was to design a PCB for the m3pi and a RN42
  breakout, and get that sent out for manufacture quickly. With
  only a couple of weeks to do all this, knowing your critical
  paths is important! We then sourced the parts, and when the
  boards were back assembled the PCBs by hand.
</p>
<p>
  Meanwhile, we built some libraries to make the m3pi easy to use,
  and put together an Android App that could control the m3pi using
  those libraries over bluetooth. We also put together a custom
  website to automatically capture lap times, and all the graphics,
  booth plans and logistics needed to hold the event. Everything
  was in development in parallel, which made things rather
  interesting!
</p>
<p>
  First up is the really great work that <a href=
  "http://mbed.org/users/Lykos1986/">Ioannis Kedros</a> has done on
  the hardware and assembly. We've gone from the initial
  experiments undertake on the <a href=
  "http://mbed.org/cookbook/m3pi-Development">m3pi Development</a>
  page, so a working example of that design. My personal favorite
  is the NiMH charging circuit which means our m3pis are fitted
  with NiMH batteries which never have to be removed, and are
  safely charged from a low cost DC wall adaptor. Just for ease of
  use in development this has been a great feature. (Big thanks to
  Ioannis for hand soldering all the tiny SMD charge controller
  IC's!)
</p>
<p>
  <img alt="" height="200" src=
  "http://mbed.org/media/uploads/chris/m3pi-layout.png" width=
  "225">
</p>
<p>
  If you want to look at the <a href=
  "http://mbed.org/media/uploads/chris/m3pi-schematic.pdf">m3pi
  schematics</a> or download the <a href=
  "http://mbed.org/media/uploads/chris/m3pi.zip">m3pi Eagle
  project</a>, they are all available on the <a href=
  "http://mbed.org/cookbook/m3pi">m3pi</a> page, along with the
  schematics and Eagle project for the RN42 breakout.
</p>
<p>
  Here is the finished "m3pi" hardware:
</p>
<p>
  <img alt="" height="400" src=
  "http://mbed.org/media/uploads/chris/_scaled_processed_dscf7015_am.jpg"
  style="" width="400">
</p>
<p>
  The next up was the firmware, and the m3pi library class was
  born. With such minimal hardware connection, the interface was
  straight forward, just a serial port and a reset line. With the
  hardware being fixed by the PCB design, it could be argued that
  no configuration is needed at all, and that might be the next
  logical step. For the class itself, the idea of basic motor
  control was expended with other methods for forward, backward,
  left and right - hand shortcuts. When the 3pi is in slave mode,
  its LCD is accessible, so the m3pi class was derived from Stream,
  meaning that an implementation of putc for the LCD would give us
  printf for free. With a growing number of methods, and <a href=
  "http://mbed.org/users/MichaelW">Michael Walkers</a>
  introduction&nbsp;of RPC the m3pi class quickly became a great
  interface to the Pololu 3pi.
</p>
<p>
  You can see the <a href=
  "http://mbed.org/users/chris/libraries/m3pi/lhhd8f/docs/classm3pi.html">
  published library</a> for full details of the class.
</p>
<p>
  Meanwhile, we put together a track design. Remember that behind
  all this hardware and software effort was the idea to run a
  racing event! We named it <a href=
  "http://mbed.org/cookbook/mbedRobotRacing">mbed Robot Racing</a>
  and decided it need a logo:
</p>
<p>
  <img alt="" height="143" src=
  "http://mbed.org/media/uploads/chris/_scaled_mbed_robot_racing_logo.png"
  width="400">
</p>
<p>
  Here is the resulting track; it is actually 8'x4' (2.4m x 1.2m)!
</p>
<p>
  <img alt="" height="226" src=
  "http://mbed.org/media/uploads/chris/_scaled_mbed_robot_racetrack.png"
  width="400">
</p>
<p>
  So we now have a robot and a lovely track to drive the m3pi
  around, but there are still bits missing. The idea of the event
  is to race a time trial, the fastest laps wins. You can drive
  interactively by an Android Tablet, program a fixed path with
  LOGO style commands, or program a line following algorithm; so we
  needed the Android App and examples of LOGO style commands and a
  line follower.
</p>
<p>
  The android app was put together by Phil Day. Initially, there
  were problems with the Bluetooth connection dropping on the test
  mobile phone we were using, but when we switched to using an
  <a href=
  "http://www.archos.com/products/ta/archos_28it/index.html">Archos
  Internet Tablet</a>, all Bluetooth problems went away. The final
  aspect with this one was to get it to feel right, and after just
  two days locked in a darkened room, Phil emerged with a nicely
  working app. It even had the logo in the background. Thanks Phil!
</p>
<p>
  The last hurdle was the time trial. This needed some way of
  timing. We decided that beam breaking was the way to go as we had
  a fancy Balluff sensor to hand, but how to keep and display the
  time?
</p>
<p>
  This is where the combined imagination of <a href=
  "http://mbed.org/users/simon">Simon</a> and <a href=
  "http://mbed.org/users/dan">Dan</a> really took over, and this is
  the scheme that emerged. The beam breaker hooks up to the mbed,
  which is also running some USB HID code to make it look like a
  USB keyboard when plugged into a PC. Meanwhile, a web browser is
  open on the PC, and is running some JavaScript that is listening
  for the characters send by the "USB keyboard" to know when to
  start/stop/reset a rather nice timer display running in the
  browser. Simple huh? Well, thats not the end of the story. At the
  end of the lap, a flash object which has access to the webcam is
  able to take a picture. The Javascript now has the time of the
  lap and photo courtesy of the webcam. Add the name of the
  contestant by good old fashioned "typing it in" and the
  contestants name, lap time and photo is now in the database, and
  in the leader board in the appropriate position. Simple!
</p>
<p>
  With all that in place, now it is time to get on a plane to ARM
  Techcon and get it setup!
</p>
<p>
  Over the coming weeks, we'll be making sure that all the
  resources needed to build the different bits of <a href=
  "http://mbed.org/cookbook/mbedRobotRacing">mbed Robot Racing</a>
  are available in the cookbook, so if anyone wants run their own
  please be sure to let us know!
</p>
<p>
  And here is the little video we put together for when we announce
  the event...
</p>
<p>
  <object data="http://www.youtube.com/v/iyby-1_aMkU" height="350"
  type="application/x-shockwave-flash" width="425">
    <param name="data" value=
    "http://www.youtube.com/v/iyby-1_aMkU">
    <param name="src" value="http://www.youtube.com/v/iyby-1_aMkU">
  </object>
</p>
<p>
  If you are going to be at ARM Techcon, make sure you drop by!
</p>

