---
layout:         post-mbed-org
title:          "mbed application board - First preproduction boards"
date:           2012-10-04T09:40:40.000Z
author:         Chris Styles
tags:           application, Board, mbed
originalUrl:    https://developer.mbed.org/blog/entry/mbed-application-board-Its-nearly-here/
---

<p>The first samples of the mbed Application Board are back from the manufacturers,
  <a
  href="http://mbed.org/blog/entry/manufacturing-mbed/">L-TEK</a>. There are a few minor tweeks to make before we press the &quot;GO&quot;
    button for full production, but the tests so far have worked great.</p>
<p>
  <img src="https://developer.mbed.org/media/uploads/chris/_scaled_top.jpg"
  alt="/media/uploads/chris/_scaled_top.jpg" title="/media/uploads/chris/_scaled_top.jpg">
  <img src="https://developer.mbed.org/media/uploads/chris/_scaled_underside.jpg"
  alt="/media/uploads/chris/_scaled_underside.jpg" title="/media/uploads/chris/_scaled_underside.jpg">
</p>
<p>The three lucky winners who will get one of these application boards in
  exchange for writing a driver and associated cookbook page are, in no particular
  order :</p>
<ul>
  <li><a href="/users/Sissors/">Erik Olieman</a> - MMA7660 3-axis +/1 1.5g Accelerometer</li>
  <li><a href="/users/dreschpe/">Peter Drescher</a> - C12832 Graphics LCD Screen</li>
  <li><a href="/users/mshoemaker/">Matthew Shoemaker</a> - LM75B I2C Temperature
    sensor</li>
</ul>
<p>A big thanks to all the people who applied - Keep your eyes out, we may
  well do another competition for &quot;the most interesting application&quot;!</p>
<p>Over the coming weeks, libraries, &quot;hello world&quot; examples, cookbook
  pages and so on will start to appear for the application board, along with
  the schematics and all of the support materials you&apos;d expect. I&apos;m
  aiming for it to be available in time for the Christmas rush ;-). I will
  be working with all your favourite distributors to get it on the shelves
  and arrange pre-ordering.</p>
<p>In the mean time, a few people asked about the Xbee socket. This has been
  designed to accept the popular Xbee Zigbee module or the RN-XV wifly module.
  We&apos;ve also made sure that the USB Host socket can be powered externally
  so that a <a href="/cookbook/VodafoneUSBModem">Vodafone USB Modem</a> can
  be used. That&apos;s a whole lot of wireless communication!</p>
<p>Keep your eyes out for the announcement when they become available, and
  in the mean time, check out the fully loaded board, complete with Wifi!</p>
<p>
  <img src="https://developer.mbed.org/media/uploads/chris/_scaled_wifi.jpg"
  alt="/media/uploads/chris/_scaled_wifi.jpg" title="/media/uploads/chris/_scaled_wifi.jpg">
</p>
<p>For those interested interested in the the minor tweek to be made...</p>
<p>There was a slight error in the footprint for the MMA7660 accelerometer.
  Some of the copper pads were in the wrong order - very frustrating for
  a board that was otherwise electrically perfect (Arrrgh!!). If you want
  to see how I proved the fix, here is a photo from down the barrel of our
  microscope. That&apos;s enamel coated wires from the PCB pads, onto the
  pads of the devices&apos; DFN-10 3mmx3mm package. I like the occasional
  challenge!</p>
<p>
  <img src="https://developer.mbed.org/media/uploads/chris/mod.jpg" alt="/media/uploads/chris/mod.jpg"
  title="/media/uploads/chris/mod.jpg">
</p>
