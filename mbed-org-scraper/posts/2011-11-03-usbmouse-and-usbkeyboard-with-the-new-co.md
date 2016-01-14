---
layout:         post-mbed-org
title:          "USBMouse and USBKeyboard with the new Cortex-M0 mbed!"
date:           2011-11-03T23:30:08.000Z
author:         Simon Ford
tags:           
originalUrl:    https://developer.mbed.org/blog/entry/USBMouse-and-USBKeyboard-with-the-new-Co/
---

<p>You&apos;ve probably seen we&apos;ve got a new mbed Microcontroller on
  its way, based on the upcoming Cortex-M0 LPC11U24 from NXP.</p>
<p>What you perhaps didn&apos;t realise is quite how great this is going
  to be for building USB devices!</p>
<div class="flex-video">
  <iframe width="420" height="315" src="https://www.youtube.com/embed/1lSjP6E7RV4"
  frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>
<p>This video shows how to emulate a USB mouse using the new libraries we&apos;re
  creating for it. You can programatically send movement, button clicks and
  states, and even scroll the scroll wheel, and of course do this dependant
  on any sensors or logic you like. A really neat feature is the absolute
  version of the mouse, meaning you can move to a location on the screen;
  great for direct interaction with program interfaces.</p>
<p>Another example is emulating a keyboard:</p>
<div class="flex-video">
  <iframe width="420" height="315" src="https://www.youtube.com/embed/NKSlkUcoOjY"
  frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>
<p>In this example, we&apos;re sending media keys to control the PC media
  player, but you could of course type strings or send interesting keycode
  combinations and sequences. For example, in our &quot;robot racing&quot;
  setup, we had a laser beam breaker sending a keypress that was picked up
  by Javascript to start the timer and trigger other behaviour in a standard
  webpage.</p>
<p>A raw USBHID interface is also available to allow driverless custom interfaces
  to your favourite USB-capable programming language on the PC. We also have
  some other interfaces on the way, including USB MIDI (Musical Instrument
  Digital Interface) and USB Virtual Serial.</p>
<p>The examples are demonstrated on the upcoming LPC11U24 mbed, which is
  going to be a great platform for prototyping USB devices; the chip it uses
  is going to be cheaper than a dedicated USB to Serial bridge, and you get
  a microcontroller included!</p>
<p>To see more about the upcoming mbed NXP LPC11U24, and to get on the mailing
  list to know when they hit the shops, see:</p>
<ul>
  <li><a href="/handbook/m0-release">m0-release</a>

  </li>
</ul>
