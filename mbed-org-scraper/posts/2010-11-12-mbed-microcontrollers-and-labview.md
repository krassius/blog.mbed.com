---
layout:         post-mbed-org
title:          "mbed Microcontrollers and LabView!"
date:           2010-11-12T16:45:57.000Z
author:         Simon Ford
tags:           interface, labview, mbed, ni
originalUrl:    https://developer.mbed.org/blog/entry/mbed-Microcontrollers-and-LabView/
---

<p>I was invited to talk at the recent NI Days conference in London about
  the experiments we&apos;ve been doing around hooking mbed up to LabView.
  The talk is a backgrounder and some basic demos of how to get them talking,
  and I was joined by Ian Bell from NI to show how you can even target microcontrollers
  directly from LabView. The talk was videoed, so here it is for anyone interested
  in LabView and mbed working together...</p>
<p><a href="http://tv.theiet.org/channels/ni/9993.cfm"><img alt="" height="531" src="http://mbed.org/media/uploads/simon/labview-talk.png" width="407"></a>
</p>
<ul>
  <li><a href="http://tv.theiet.org/channels/ni/9993.cfm">NIDays 2010: Rapid Prototyping using ARM Mbed Microcontrollers and LabVIEW</a>
  </li>
</ul>
<p>Since I submitted the talk,&#xA0;Michael&#xA0;Walker did some great work
  plumbing in LabView to the mbed RPC interfaces, so you can now use directly
  objects in LabView to represent C++ objects in mbed, in a similar way to
  the native NI DAQmx interfaces.</p>
<p>Here is an example of creating and using a DigitalOut directly LabView.
  Note that the code on the mbed is just a common serial RPC binary, so this
  requires no coding on the mbed side:</p>
<p>
  <img alt="" height="353" src="http://mbed.org/media/uploads/MichaelW/ledserialsnippet.png"
  width="489">
</p>
<p>And by switching the RPC handler, you can swap over to a different transport
  mechanism such as Ethernet/HTTP:</p>
<p>
  <img alt="" height="353" src="http://mbed.org/media/uploads/MichaelW/ledhttpsnippet.png"
  width="567">
</p>
<p>Hopefully this should make it very quick to start getting them interacting.
  For all the information and resources we have so far for hooking up LabView
  to mbed, see:</p>
<ul>
  <li><a href="http://mbed.org/cookbook/Interfacing-with-LabVIEW">http://mbed.org/cookbook/Interfacing-with-LabVIEW</a>
  </li>
</ul>
<p>It is only a start, and we&apos;re not LabView experts, so if anyone has
  ideas of ways to improve and extend this interface, please jump in to the
  cookbook!</p>
