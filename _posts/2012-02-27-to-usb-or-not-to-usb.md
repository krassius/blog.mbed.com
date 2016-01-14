---
layout:         post-mbed-org
title:          "To USB, or not to USB?"
date:           2012-02-27T14:59:55.000Z
author:         Simon Ford
tags:           Cortex-M0, LPC11U24, lpc11uxx, USB
originalUrl:    https://developer.mbed.org/blog/entry/To-USB-or-not-to-USB/
---

<p>
  Universal Serial Bus (USB) was a revolution for device
  communication, and has long become the standard of choice for
  connecting devices to desktop, mobile and embedded computing
  platforms. It has made adding new devices to a system simple and
  reliable, whilst also driving innovation in what devices can be
  developed. Brilliant!
</p>
<p>
  USB has been so successful that using it for connectivity is no
  longer a feature, but a requirement. So why do so many embedded
  devices continue to be developed like it is the 90's?!
</p>
<p>
  <img src=
  "https://developer.mbed.org/media/uploads/simon/xserial-meet-usb-640.jpg.pagespeed.ic.aHLTVB9Ls4.jpg"
  alt="Ready when you are" title="Ready when you are">
</p>
<p>
  As anyone who has looked at a laptop recently will realise,
  serial ports don't feature. And as much as we love USB-RS232
  converter leads (and the blue screens of death that tend to come
  with them), they really shouldn't be an acceptable solution!
</p>
<p>
  Worse than this, they fail to unlock all the performance and
  flexibility that USB has to offer, which includes it being one of
  the greatest universal power connector standards on earth.
</p>
<h2>
  Making the move to USB
</h2>
<p>
  One of the reasons USB often doesn't make it in to the design
  spec is that it is naturally a more complex standard than a
  serial or parallel port, and simplicity often wins. But as we've
  already considered, that simplicity comes as a result of
  conjuring a false reality of the world it is going in to!
</p>
<p>
  So what are the options for developing a USB device?
</p>
<p>
  The two main ways to add USB to a design are:
</p>
<ol>
  <li>A USB Bridge IC
  </li>
  <li>A microcontroller with built-in USB
  </li>
</ol>
<p>
  Of these two, the simplest approach is adding a USB bridge IC to
  your design. These tend to be a fixed-function USB to UART
  bridge, providing a USB virtual serial port that connects to a
  UART of a microcontroller. The implementation is simply adding
  some hardware, with the disadvantage being limited flexibility in
  USB functionality, and the cost of a two-chip solution.
</p>
<p>
  The microcontroller with built-in USB interface is attractive
  because it is a single-chip solution (lower cost and board
  space), and provides lots of flexibility in the type of USB
  device that can be implemented. The downside is added firmware
  complexity to cope with; USB is not trivial to implement, and on
  constrained microcontrollers often has integrated at a fairly low
  level, so could easily be a step change in software complexity
  and risk for building a given device.
</p>
<h2>
  Upcoming changes in the trade-offs
</h2>
<p>
  The trade-off has generally been if you need simplicity, go for
  the bridge and accept the cost and flexibility downsides. If you
  need flexibility or low cost, go for the MCU and deal with the
  overhead and complexity of implementing it.
</p>
<p>
  However, this equation is changing; the entrance of new
  ultra-low-cost 32-bit microcontrollers with USB.
</p>
<p>
  These new devices are the same cost or less than the 8/16-bit
  microcontrollers that have dominated this space, but with all the
  advantages 32-bit brings in terms of performance and
  productivity. The trade-off starts to look something like:
</p>
<p>
  <img width="640" alt="USB Device Options" title=
  "USB Device Options" src=
  "https://developer.mbed.org/media/uploads/simon/640xNxusb-device-options.jpg.pagespeed.ic.OMgC7Kos9I.jpg">
</p>
<p>
  As these low cost modern 32-bit microcontrollers emerge, it means
  you can end up having it all; a single-chip solutions,
  flexibility in your device, great headroom and simplicity through
  being able to apply software abstraction, and all at a price
  point to match or beat 8/16-bit! What is not to love?!
</p>
<p>
  Btw, if you want to understand more about the advantages, there
  is some good information on the Cortex-M pages on the ARM website
  about <a href=
  "http://www.arm.com/products/processors/cortex-m/index.php" rel=
  "nofollow">moving from 8/16-bit microcontrollers</a> which is
  worth a read.
</p>
<h2>
  Plug 'n' Play Prototyping for USB Devices!
</h2>
<p>
  We discovered a good example of these upcoming devices early last
  year when we were in discussions with NXP, and found out about
  their development of what became the NXP LPC11Uxx range of ARM
  Cortex-M0 based microcontrollers. When we heard the spec and
  price point for these devices, we realised the opportunities for
  applying them were huge, which is why we thought it'd be a great
  candidate for an mbed Microcontroller!
</p>
<p>
  So for our second mbed Microcontroller design, we've taken the
  newest NXP Cortex-M0 in the range, the LPC11U24, an built a
  platform designed to make prototyping low-cost USB devices a
  snap, and let you concentrate on inventing the applications.
</p>
<p>
  The new mbed NXP LPC11U24 Microcontroller board is packaged in
  the same DIP form-factor to gives access to the NXP LPC11U24 MCU,
  and includes I2C, SPI, UART and ADC interfaces. This provides
  easy access to prototyping with a powerful MCU that can form the
  foundation of future USB device implementations.
</p>
<p>
  <img src="http://mbed.org/media/uploads/simon/m0-pinout.png" alt=
  "http://mbed.org/media/uploads/simon/m0-pinout.png" title=
  "http://mbed.org/media/uploads/simon/m0-pinout.png">
</p>
<p>
  mbed NXP LPC11U24 Microcontroller:
</p>
<ul>
  <li>
    <a href=
    "http://mbed.org/handbook/mbed-NXP-LPC11U24">http://mbed.org/handbook/mbed-NXP-LPC11U24</a>
  </li>
</ul>
<p>
  We've implemented a complete set of open-source USB libraries
  including USB Mouse, Keyboard, HID, Serial, MIDI, MSC and Audio
  classes that make reliably creating a new USB device a matter of
  a few lines of code. Hopefully this will get you up and running
  in no time at all!
</p>
<p>
  Open-source USB Device libraries:
</p>
<ul>
  <li>
    <a href=
    "http://mbed.org/handbook/USBDevice">http://mbed.org/handbook/USBDevice</a>
  </li>
</ul>
<p>
  Also, look out for a new demo we built for embedded world :) No
  one has quite guessed it yet:
</p>
<ul>
  <li>
    <a href=
    "http://mbed.org/blog/entry/Can-you-guess-what-it-is-yet/">Can
    you guess what it is yet?</a>
  </li>
</ul>
<h2>
  mbed NXP LPC11U24 now in full production!
</h2>
<p>
  The mbed NXP LPC11U24 is now in full production and available in
  distributors with an RRP of $45 (including access to the tools,
  libraries and developer website).
</p>
<p>
  If you have been thinking about building something with USB, or
  have always put it off until "next time", why not <a href=
  "http://mbed.org/handbook/Order">order a few to experiment
  with!</a>
</p>

