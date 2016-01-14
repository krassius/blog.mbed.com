---
layout:         post-mbed-org
title:          "What have you been cooking?"
date:           2010-12-03T12:10:20.000Z
author:         Simon Ford
tags:           cookbook, libraries
originalUrl:    https://developer.mbed.org/blog/entry/What-have-you-been-cooking/
---

<p>The mbed website has a community-contributed area called the &quot;Cookbook&quot;,
  which is becoming a bit like wikipedia for electronic components. Each
  page collects together information for a component you might want to hook
  up to mbed, with a library and wiring information needed to get you up
  and running in a flash.</p>
<p>Here is a summary of a few things you have been cooking up recently...</p>
<p>First up, it looks like&#xA0;<a href="http://mbed.org/users/shintamainjp/">Nakumura-san</a> has
  been busy working with a Sparkfun LinkSprite Colour Camera, and has published
  a first version of a library to control it:</p>
<table border="0">
  <tbody>
    <tr>
      <td>
        <img alt="" height="218" src="http://mbed.org/media/uploads/shintamainjp/ls_y201_overview.png"
        width="242">
      </td>
      <td>
        <img alt="" height="300" src="http://mbed.org/media/uploads/shintamainjp/_scaled_dsc04198.jpg"
        width="400">
      </td>
    </tr>
  </tbody>
</table>
<p>You can see the results on his&#xA0;<a href="http://mbed.org/cookbook/Camera_LS_Y201">Camera LS Y201</a> Cookbook
  page, and a picture of what I can only guess is his room!</p>
<p><a href="http://mbed.org/users/Kerpower/">Stephane</a> has been working
  away on a 3.2&quot; touch screen from 4D systems:</p>
<p>
  <img alt="" height="240" src="http://mbed.org/media/uploads/Kerpower/p1254239816.jpg"
  width="320">
</p>
<p>You can see a writeup and a library on the <a href="http://mbed.org/cookbook/4D-SGC-TFT-Screen">4D SGC TFT Screen</a> cookbook
  page. This should be a great way to add interactive menus and controls
  to machinery or other devices that run&#xA0;separate&#xA0;from a computer
  but need complex controls.</p>
<p>There was already a library for the SRF08 ultrasonic rangefinder, but
  we&apos;ve also put up an example library for the cheaper SRF05 Ultrasonic
  Rangefinder:</p>
<p>
  <img alt="" height="202" src="http://mbed.org/media/uploads/simon/srf05.jpg"
  width="300">
</p>
<p>This is a great device for things like measuring distance, or&#xA0;obstacle&#xA0;detection.
  Head over to the <a href="http://mbed.org/cookbook/SRF05-Ultrasonic-Ranger">SRF05 cookbook page</a> for
  the hello world and library to get this one going.</p>
<p><a href="http://mbed.org/users/AjK/">Andy </a>has put together a library
  for the MAX7456 onscreen display chip:</p>
<p>
  <img alt="" height="188" src="http://mbed.org/media/uploads/simon/09168-1_i_ma.jpg"
  width="188">
</p>
<p>This lets you do text overlay on a PAL or NTSC signal. There is a <a href="http://www.sparkfun.com/products/9168">MAX7456 breakout board for it available from Sparkfun</a>.
  Check out his <a href="http://mbed.org/cookbook/MODMAX7456">MODMAX7456 Cookbook page</a> for
  all the details.</p>
<p><a href="http://mbed.org/users/soldeerridder/">Gerrit</a> has put together
  a library to control a Si570; a frequency synthesizer controlled vi I2C:</p>
<p>
  <img alt="" height="370" src="http://mbed.org/media/uploads/soldeerridder/si570_sr.jpg"
  width="281">
</p>
<p>Apparently, this is a very popular device for those experimenting with
  amateur radio. You can read more on the <a href="http://mbed.org/cookbook/Si570">Si570 cookbook page</a>.</p>
<p>All these contributions are likely to be a work in progress, but they
  will always be a great starting point to avoid reinventing the wheel. And
  as you use them, please feel free to add information, insights and improvements!</p>
<p>If any of your projects have sprung information and libraries around different
  devices and peripherals, or your notebook is filling up with information
  that could be really useful to others, why not have a go at starting a
  cookbook page for a device to collect it all together.</p>
<p>Happy cooking!</p>
