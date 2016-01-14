---
layout:         post-mbed-org
title:          "Vodafone USB Modem driver released!"
date:           2013-02-21T09:03:10.000Z
author:         Chris Styles
tags:           3G modem, Vodafone
originalUrl:    https://developer.mbed.org/blog/entry/Vodafone-USB-Modem-driver-released/
---

<p>
  We are pleased to announce the release of the VodafoneUSBModem
  mbed library, enabling you to connect your microcontroller to a
  mobile network using a cheap off-the-shelf USB 3G modem!
</p>
<p>
  <img src=
  "https://developer.mbed.org/media/uploads/chris/vfapp.png" alt=
  "/media/uploads/chris/vfapp.png" title=
  "/media/uploads/chris/vfapp.png">
</p>
<p>
  This extends the networking capabilities supported by the mbed
  NXP LPC1768 to cover the full range of ethernet, wifi and 3G, so
  mbed will be even better for rapid prototyping of M2M and IoT
  devices, however they want to connect to the internet!
</p>
<p>
  Here are some more details of what it enables...
</p>
<p>
  The VodafoneUSBModem library has been under development in
  collaboration with Vodafone and our mbed beta testers, and is now
  stable and ready for widespread use. By adding a Vodafone USB
  Modem to your mbed LPC1768 setup (plus a few wires!), the
  functionality that you'll have available over a cellular
  connection is:
</p>
<ul>
  <li>SMS send/receive
  </li>
  <li>TCP/IP Sockets interface
  </li>
  <li>NTP Client
  </li>
  <li>HTTP Client
  </li>
  <li>Web Socket client
  </li>
</ul>
<p>
  There are of course other protocols that can be supported, and
  the library has been published as open-soucre under the
  permissive MIT license, so is open for porting and extension - we
  expect more features to be published back to mbed.org as the
  developments get underway!
</p>
<p>
  To give this technology a try, see the <a href=
  "http://mbed.org/cookbook/VodafoneUSBModem">Vodafone USB
  Modem</a> page for information on where to get your modem, how to
  set up your hardware and some hello world programs for the
  various protocols and APIs. Take a look at the <a href=
  "/cookbook/IOT">Internet of Things Demo</a> for some more ideas:
</p>
<div class="flex-video">
  <iframe width="420" height="315" src=
  "https://www.youtube.com/embed/JlLfKJ6ZLmw" frameborder="0"
  allowfullscreen="allowfullscreen"></iframe>
</div>
<p>
  It also works with the upcoming Application Board, meaning you
  can just plug in an mbed and USB modem and you have a fully
  functional development platform. Please contact us if you'd be
  interested in purchasing a complete bundle, as we'll consider
  making one available if there is enough interest.
</p>
<p>
  The library uses the same <a href=
  "/handbook/Networking">Networking</a> architecture as the Wifi
  and Ethernet libraries, so switching your prototype between the
  different transport types can be as simple as changing a few
  lines of code; this addition really makes mbed an ideal
  prototyping platform for connected microcontroller devices!
</p>
<p>
  Please feel free to comment if you have any interesting or
  unusual applications! We'd love to hear what you create with
  this. Now go and prototype your bit of the Internet of Things!
</p>

