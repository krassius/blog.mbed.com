---
layout:         post-mbed-org
title:          "Bootloading a custom LPC1768 PCB using your mbed!"
date:           2011-10-04T06:36:20.000Z
author:         Simon Ford
tags:           
originalUrl:    https://developer.mbed.org/blog/entry/Bootloading-a-custom-LPC1768-PCB-using-y/
---

<p>
  After you've finished building a prototype with mbed and have
  progressed to spinning your own custom product PCB using the
  LPC1768, the same program binary can just work on it too; the
  .bin files really are just a raw ARM binary images for the
  LPC1768 chip.
</p>
<p>
  But you'll need a way to get it in to the microcontrollers FLASH.
  It looks like &amp;lt;&amp;lt;user daugihao=""&amp;gt;&amp;gt;
  has been busy and written some code that turns your mbed in to a
  drag-n-drop programmer to drive the LPC1768 chip's bootloader, so
  you can use an mbed to program your custom board!
</p>
<p>
  <img src="http://mbed.org/media/uploads/daugihao/process.jpg"
  alt="http://mbed.org/media/uploads/daugihao/process.jpg" title=
  "http://mbed.org/media/uploads/daugihao/process.jpg">
</p>
<p>
  You can see his full write-up in the cookbook:
</p>
<ul>
  <li>
    <a href=
    "http://mbed.org/cookbook/lpc-bootloader">http://mbed.org/cookbook/lpc-bootloader</a>
  </li>
</ul>
<p>
  Looks like it could be very useful!
</p>

