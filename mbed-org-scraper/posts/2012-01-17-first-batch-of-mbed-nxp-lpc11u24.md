---
layout:         post-mbed-org
title:          "First batch of mbed NXP LPC11U24's in distributors now!SpecificationsUSB Device LibrariesOther Interfaces and the mbed C++ SDKCompatibilityGet hold of one!Embedded World and full availability"
date:           2012-01-17T18:08:05.000Z
author:         Amit Naran
tags:           
originalUrl:    https://developer.mbed.org/blog/entry/First-batch-of-mbed-NXP-LPC11U24/
---

<div style="padding: 10px; float:right">
  <p><a href="/order"><img src="https://developer.mbed.org/media/uploads/simon/xorder-an-mbed.png.pagespeed.ic.cdKqe7v91E.png" alt="Order and mbed Microcontroller" title="Order and mbed Microcontroller"></a> 
  </p>
</div>
<p>Our first batch of the <a href="http://mbed.org/handbook/mbed-NXP-LPC11U24">mbed NXP LPC11U24 Microcontroller</a> are
  now officially available! <a href="http://mbed.org/order/">Order one here!</a>
</p>
<p>
  <img src="http://mbed.org/media/uploads/simon/m0-pinout.png" alt="mbed NXP LPC11U24 pinout"
  title="mbed NXP LPC11U24 pinout">
</p>
<p>This latest mbed is designed for prototyping USB devices, battery powered
  applications, and 32-bit ARM Cortex-M0 designs, and will be a great little
  brother to our existing <a href="http://mbed.org/handbook/mbed-NXP-LPC1768">mbed NXP LPC1768 Microcontroller</a>.</p>
<p>Here are the specifications, some of the libraries we&apos;ve built for
  you, and some examples of it in action:</p>
 <h2>Specifications</h2>

<p>
  <img src="http://mbed.org/media/uploads/simon/lpc11u24-sideways.jpg" alt="mbed"
  title="mbed">
</p>
<ul>
  <li>NXP LPC11U24 MCU</li>
  <li>Low power ARM&#xAE; Cortex&#x2122;-M0 Core</li>
  <li>48MHz, 8KB RAM, 32KB FLASH</li>
  <li>USB Device, 2xSPI, I2C , UART, 6xADC, GPIO</li>
  <li>40-pin DIP form-factor</li>
  <li>Supported with the mbed Online Compiler and mbed.org developer website</li>
  <li>Approx $45, including access to the tools</li>
</ul>
<p>See the <a href="http://mbed.org/handbook/mbed-NXP-LPC11U24">mbed NXP LPC11U24</a> handbook
  page to find out all the details.</p>

<h2>USB Device Libraries</h2>

<p>This mbed is great for prototyping USB devices. The LPC11U24 is a very
  low-cost chip, but you get built in USB device and a 32-bit ARM Cortex-M0
  core, so it can be the basis for all sorts of designs.</p>
<p>
  <img src="https://developer.mbed.org/media/uploads/simon/_scaled_lpc11u00.jpg"
  alt="/media/uploads/simon/_scaled_lpc11u00.jpg" title="/media/uploads/simon/_scaled_lpc11u00.jpg">
</p>
<p>We&apos;ve already implemented libraries for the following USB interfaces
  that you can build on:</p>
<ul>
  <li><a href="/handbook/USBMouse">/handbook/USBMouse</a> - Emulate a USB Mouse
    with absolute or relative positioning</li>
  <li><a href="/handbook/USBKeyboard">/handbook/USBKeyboard</a> - Emulate a USB
    Keyboard, sending normal and media control keys</li>
  <li><a href="/handbook/USBHID">/handbook/USBHID</a> - Communicate over a raw
    USBHID interface, for driverless comms with a custom PC app</li>
  <li><a href="/handbook/USBMIDI">/handbook/USBMIDI</a> - Send and recieve MIDI
    messages to control and be controlled by PC music sequencers etc</li>
  <li><a href="/handbook/USBSerial">/handbook/USBSerial</a> - Create a virtual
    serial port over the USB port. Great to easily communicate with a computer.</li>
  <li><a href="/handbook/USBAudio">/handbook/USBAudio</a> - Create a USBAudio
    device able to receive audio stream from a computer over USB.</li>
  <li><a href="/handbook/USBMSD">/handbook/USBMSD</a> - Generic class which implements
    the Mass Storage Device protocol in order to access all kinds of block
    storage chips</li>
</ul>
<p>We&apos;ve got Hello World examples showing how to use them, so you can
  just concentrate on writing your USB applications; here are a couple of
  examples:</p>
<table>
  <tr>
    <td>
      <div class="flex-video">
        <iframe width="420" height="315" src="https://www.youtube.com/embed/NKSlkUcoOjY"
        frameborder="0" allowfullscreen="allowfullscreen"></iframe>
      </div>
    </td>
    <td>
      <div class="flex-video">
        <iframe width="420" height="315" src="https://www.youtube.com/embed/pRiYQ6Dv-uY"
        frameborder="0" allowfullscreen="allowfullscreen"></iframe>
      </div>
    </td>
  </tr>
  <tr>
    <td>USB Keyboard</td>
    <td>USB MIDI</td>
  </tr>
</table>
<p>You can see all the details on the USB Devices and how to use them on
  the handbook page:</p>
<ul>
  <li><a href="/handbook/USBDevice">/handbook/USBDevice</a> - Using mbed as a
    USB Device</li>
</ul>

<h2>Other Interfaces and the mbed C++ SDK</h2>

<p>The mbed NXP LPC11U24 includes many other interfaces too, all supported
  in the mbed C++ SDK:</p>
<ul>
  <li><a href="/handbook/DigitalOut">/handbook/DigitalOut</a> - Configure and
    control a digital output pin.</li>
  <li><a href="/handbook/DigitalIn">/handbook/DigitalIn</a> - Configure and control
    a digital input pin.</li>
  <li><a href="/handbook/PwmOut">/handbook/PwmOut</a> - Pulse-width modulated
    output</li>
  <li><a href="/handbook/AnalogIn">/handbook/AnalogIn</a> - Read the voltage
    applied to an analog input pin</li>
  <li><a href="/handbook/Serial">/handbook/Serial</a> - Serial/UART bus</li>
  <li><a href="/handbook/SPI">/handbook/SPI</a> - SPI bus master</li>
  <li><a href="/handbook/I2C">/handbook/I2C</a> - I&#xB2;C bus master</li>
  <li><a href="/handbook/InterruptIn">/handbook/InterruptIn</a> - Trigger an
    event when a digital input pin changes.</li>
</ul>
<p>All the details can be found in the <a href="http://mbed.org/handbook/Homepage">mbed Handbook</a>.</p>

<h2>Compatibility</h2>

<p>One really nice feature is that most of the contributed libraries in the
  <a
  href="/cookbook">mbed Cookbook</a>for accelerometers, sensors, actuators, LCDs etc will
    work out of the box too.</p>
<p>As they use the mbed SDK libraries, you just have to use the latest mbed
  SDK and compile them for the different target, and they should spring in
  to life; no code changes needed!</p>

<h2>Get hold of one!</h2>

<p>To get hold of one of this first batch, take a look at our order page
  to find a distributor!</p>
<ul>
  <li><a href="http://mbed.org/order/">order</a>

  </li>
</ul>
<p>If you want to understand more, why not take the <a href="/handbook/Tour">mbed Tour</a>
</p>

<h2>Embedded World and full availability</h2>

<p>We&apos;ll be at Embedded World with some demos where we plan to announce
  full availability; if you are around, come and say hi!</p>
<p>And if you get your hands on one of these first batch and are building
  something that could be a great demo, get in touch as we&apos;ve still
  got one demo slot left on our stand to fill. Just give us an email at support@mbed.org
  with the details and we might choose it to display along side ours :)</p>
