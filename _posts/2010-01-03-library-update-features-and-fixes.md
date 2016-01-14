---
layout:         post-mbed-org
title:          "Library Update - Features and Fixes"
date:           2010-01-03T23:02:07.000Z
author:         Simon Ford
tags:           library, updates
originalUrl:    https://developer.mbed.org/blog/entry/16/
---

<p>
  edit: updated to newer syntax
</p>
<p>
  I said in the last library update that we were spending a lot of
  time&nbsp;(John in particular!) working on getting the
  foundations right. Well,&nbsp;it wasn't an excuse, and it is
  starting to pay off :) Here comes v6...
</p>
<p>
  And yes, we now have RPC! This is an idea i've had floating
  around a&nbsp;long time, and in many prototypes, but is finally
  here in it's first&nbsp;official form...
</p>
<p>
  &nbsp;
</p>
<pre>
#include "mbed.h" 
DigitalOut led(p1, "led"); 
int main() { 
        char result[64]; 
        rpc("/led/write,p1", result); 
        printf("%s\n", result); 
        rpc("/led/read", result); 
        printf("%s\n", result); 
} 
</pre>
<p>
  Remote-procedure call of mbed Interfaces! Of course, the fun part
  is&nbsp;that what generates the rpc strings is totally flexible.
  Hopefully&nbsp;there is much fun to be had here! In particular,
  the plan is to use&nbsp;the RPC to be able to control the mbed
  over any transport mechanism&nbsp;(serial, http, bluetooth, ...)
  form any language (python, javascript,&nbsp;teraterm, ...).
</p>
<p>
  It is built so you can create objects remotely too (new/delete),
  and&nbsp;even make your own classes that plug in to the RPC :)
  I'll put more
  on&nbsp;http://mbed.co.uk/projects/cookbook/wiki/RPC.
</p>
<p>
  But there is other stuff too! Here are the other things that made
  it&nbsp;in this release:
</p>
<p>
  The Real-Time Clock is now functioning, and will run as long as
  there&nbsp;is power connected, either through one of the main
  power supplies, or&nbsp;through the 3.3v VB (Battery Backup)
  input, designed for a coin-cell&nbsp;battery. The standard C
  functions time() and friends work, and there&nbsp;are a couple of
  helper functions to simplify things; set_time() allows&nbsp;you
  to set it, and time_str() returns a string with a human
  readable&nbsp;time. Look in the api under RTC, and we'll also aim
  to put up some&nbsp;examples in the Cookbook.
</p>
<p>
  AnalogIn and AnalogOut now support read_u16() and write_u16()
  methods.&nbsp;This should give a natural way to access analog
  interfaces when&nbsp;dealing with samples, and be faster. We
  haven't done any optimisation&nbsp;yet, so they will likely get
  even faster in time too...
</p>
<p>
  The multiplier that Ticker and Timeout intervals were seeing of
  ~105%&nbsp;has now been fixed. I have a photo of a frequency
  generator to prove&nbsp;it! (but google doesn't let you attach
  them easily). They should now&nbsp;actually be able to time :)
</p>
<p>
  A new function, mbedinfo(), can be called at any point and will
  dump&nbsp;out memory stats and other such stuff to stdout (USB
  serial port).&nbsp;This is useful just to check the state of
  memory etc, and is meant to&nbsp;be a similar dumping ground to
  how PHP uses phpinfo().
</p>
<p>
  For debugging and error reporting, we'll be moving to using
  error(),&nbsp;and plain old printf(). For the techies, error()
  goes to stderr and&nbsp;then dies, and printf() goes to stdout,
  which in the default case&nbsp;means it appears on the USB
  serial. We'll be depricating the ugly DEBUG() and ERROR()
  functions.
</p>
<p>
  And for completeness, here are the other notable features and
  fixes:
</p>
<ul>
  <li>DigitalIn rise and fall interrupts can now attach object
  methods as&nbsp;well as static functions
  </li>
  <li>Serial and SPI interfaces support specifying "Not Connected"
  (NC)&nbsp;on selected pins
  </li>
  <li>p1-p4 now map to LED1-LED4, so you can just do "DigitalOut
  led(p1);"&nbsp;now
  </li>
  <li>The Timer object was not reseting when reset() was called
  while&nbsp;running - FIXED
  </li>
  <li>SPI format now uses a single mode parameter rather than
  seperate&nbsp;pol and pha
  </li>
  <li>A prototype SPI3 class has crept in, which supports devices
  with a&nbsp;single bi-directional data pin
  </li>
</ul>
<p>
  When you start a new project, you will automatically pull in the
  new&nbsp;mbed Library. For existing projects, clicking on the
  mbed library in&nbsp;your file tree should provide you with an
  "update" button. As ever,&nbsp;please bring to our attention any
  problems, questions or suggestions&nbsp;you have.
</p>
<p>
  Have Fun!&nbsp;<br>
  Simon
</p>

