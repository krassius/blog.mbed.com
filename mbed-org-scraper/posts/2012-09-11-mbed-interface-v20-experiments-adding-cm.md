---
layout:         post-mbed-org
title:          "mbed Interface v2.0 experiments - Adding CMSIS-DAP debug!"
date:           2012-09-11T21:54:35.000Z
author:         Simon Ford
tags:           CMSIS-DAP, debug, mbed Interface, offline
originalUrl:    https://developer.mbed.org/blog/entry/mbed-Interface-v20-experiments-Adding-CM/
---

<p>A peek at something we&apos;re working on in the labs; v2.0 of our mbed
  Interface!</p>
<p>
  <img src="https://developer.mbed.org/media/uploads/simon/cmsis-dap.png"
  alt="/media/uploads/simon/cmsis-dap.png" title="/media/uploads/simon/cmsis-dap.png">
</p>
<p>The mbed Interface v2.0 adds support for the new CMSIS-DAP driverless
  USB debug connection, so in addition to the drag n drop FLASH programming
  you use with mbed, when you export to a full debug toolchain, you will
  be able to perform full debug with the same mbed hardware!</p>
<p>Here is a video showing it in action:</p>
<div class="flex-video">
  <iframe width="420" height="315" src="https://www.youtube.com/embed/25ZNx6EvANo"
  frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>
<p>All the usual debug capabilities are supported:</p>
<ul>
  <li>set breakpoints</li>
  <li>start/stop/step the execution</li>
  <li>inspect local variables</li>
  <li>inspect memory</li>
  <li>inspect core registers</li>
</ul>
<p>We&apos;re even planning on supplying this as a firmware update for the
  mbed Microcontrollers, so you&apos;ll be able to get this functionality
  for your existing mbeds as well as new ones!</p>
<p>If you are interested in this functionality, please register here:</p>
<ul>
  <li><a href="http://bit.ly/NNzdnw" rel="nofollow"><strong>Register your interest!</strong></a>

  </li>
</ul>
<p>We&apos;ll also be looking for a group of keen mbed users to help us test
  the new interface and report bugs; we&apos;ll contact the list above when
  we&apos;re ready to start the beta.</p>
