---
layout:         post-mbed-org
title:          "Rapid Migration of 8051 to mbed Cortex-M0 Microcontroller"
date:           2012-01-30T13:02:39.000Z
author:         Amit Naran
tags:           M0, mbed, offline, USB
originalUrl:    https://developer.mbed.org/blog/entry/Rapid-Migration-of-8051-to-mbed-Cortex-M/
---

<p>
  Jim Carver, Technical Director of Advanced Processor
  Architectures at Avnet Electronics, has just sent us a link to an
  interesting presentation he put together about migrating an
  existing 8051 based NXP RGB LED board to the ARM Cortex-M0 using
  the new <a href="/handbook/mbed-NXP-LPC11U24">mbed LPC11U24
  microcontroller.</a>
</p>
<p>
  <a href=
  "http://avnet.na5.acrobat.com/_a786229625/usbwmbednxp/default/Viewer.swf"
  rel="nofollow"><img height="450" width="600" alt=
  "Avnet Presentation" src=
  "https://developer.mbed.org/media/uploads/anaran/600x450x_scaled_avnet_presentation.png.pagespeed.ic.Dz68s4mK-U.jpg"
  title="Avnet Presentation"></a>
</p>
<p>
  Jim describes how he used mbed to port the existing 8051 code to
  the Cortex-M0. He then goes on to add a <a href=
  "/handbook/USBHID">USBHID</a> interface using the mbed <a href=
  "/handbook/USBDevice">USB libraries</a>to add control from a
  custom PC GUI "in a snap"!
</p>
<p>
  He then also makes use of another one of our <a href=
  "/handbook/Exporting-to-offline-toolchains">new features</a>;
  exporting his code developed using the online mbed compiler to
  the offline Keil µVision4 tool suite, for enhanced debug support
  offered by the enterprise toolchain. Here he optimises his
  solution to use the built-in NXP USB ROM drivers allowing him to
  improve the code size.
</p>
<p>
  We liked Jim's closing comments too! "mbed is a truly innovative
  solution for engineers needing a fast simple solution for
  evaluating system prototyping proof of concept" and "moving from
  mbed to µVision4 was fast and debugging with the µVision4
  debugger was a snap".
</p>
<p>
  Thanks to Jim for sharing this presentation; you can find it
  here:
</p>
<ul>
  <li>
    <a href=
    "http://avnet.na5.acrobat.com/_a786229625/usbwmbednxp/default/Viewer.swf"
    rel="nofollow">Avnet - Converting 8051 to M0</a>
  </li>
</ul>

