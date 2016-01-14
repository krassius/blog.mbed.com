---
layout:         post-mbed-org
title:          "Library Update - Features and Fixes"
date:           2010-01-03T23:02:07.000Z
author:         Simon Ford
tags:           library, updates
originalUrl:    https://developer.mbed.org/blog/entry/16/
---

<p>edit: updated to newer syntax</p>
<p>I said in the last library update that we were spending a lot of time&#xA0;(John
  in particular!) working on getting the foundations right. Well,&#xA0;it
  wasn&apos;t an excuse, and it is starting to pay off :) Here comes v6...</p>
<p>And yes, we now have RPC! This is an idea i&apos;ve had floating around
  a&#xA0;long time, and in many prototypes, but is finally here in it&apos;s
  first&#xA0;official form...</p>
<p>&#xA0;</p> <pre>#include &quot;mbed.h&quot; 
DigitalOut led(p1, &quot;led&quot;); 
int main() { 
        char result[64]; 
        rpc(&quot;/led/write,p1&quot;, result); 
        printf(&quot;%s\n&quot;, result); 
        rpc(&quot;/led/read&quot;, result); 
        printf(&quot;%s\n&quot;, result); 
} </pre> 
<p>Remote-procedure call of mbed Interfaces! Of course, the fun part is&#xA0;that
  what generates the rpc strings is totally flexible. Hopefully&#xA0;there
  is much fun to be had here! In particular, the plan is to use&#xA0;the
  RPC to be able to control the mbed over any transport mechanism&#xA0;(serial,
  http, bluetooth, ...) form any language (python, javascript,&#xA0;teraterm,
  ...).</p>
<p>It is built so you can create objects remotely too (new/delete), and&#xA0;even
  make your own classes that plug in to the RPC :) I&apos;ll put more on&#xA0;http://mbed.co.uk/projects/cookbook/wiki/RPC.</p>
<p>But there is other stuff too! Here are the other things that made it&#xA0;in
  this release:</p>
<p>The Real-Time Clock is now functioning, and will run as long as there&#xA0;is
  power connected, either through one of the main power supplies, or&#xA0;through
  the 3.3v VB (Battery Backup) input, designed for a coin-cell&#xA0;battery.
  The standard C functions time() and friends work, and there&#xA0;are a
  couple of helper functions to simplify things; set_time() allows&#xA0;you
  to set it, and time_str() returns a string with a human readable&#xA0;time.
  Look in the api under RTC, and we&apos;ll also aim to put up some&#xA0;examples
  in the Cookbook.</p>
<p>AnalogIn and AnalogOut now support read_u16() and write_u16() methods.&#xA0;This
  should give a natural way to access analog interfaces when&#xA0;dealing
  with samples, and be faster. We haven&apos;t done any optimisation&#xA0;yet,
  so they will likely get even faster in time too...</p>
<p>The multiplier that Ticker and Timeout intervals were seeing of ~105%&#xA0;has
  now been fixed. I have a photo of a frequency generator to prove&#xA0;it!
  (but google doesn&apos;t let you attach them easily). They should now&#xA0;actually
  be able to time :)</p>
<p>A new function, mbedinfo(), can be called at any point and will dump&#xA0;out
  memory stats and other such stuff to stdout (USB serial port).&#xA0;This
  is useful just to check the state of memory etc, and is meant to&#xA0;be
  a similar dumping ground to how PHP uses phpinfo().</p>
<p>For debugging and error reporting, we&apos;ll be moving to using error(),&#xA0;and
  plain old printf(). For the techies, error() goes to stderr and&#xA0;then
  dies, and printf() goes to stdout, which in the default case&#xA0;means
  it appears on the USB serial. We&apos;ll be depricating the ugly DEBUG()
  and ERROR() functions.</p>
<p>And for completeness, here are the other notable features and fixes:</p>
<ul>
  <li>DigitalIn rise and fall interrupts can now attach object methods as&#xA0;well
    as static functions</li>
  <li>Serial and SPI interfaces support specifying &quot;Not Connected&quot;
    (NC)&#xA0;on selected pins</li>
  <li>p1-p4 now map to LED1-LED4, so you can just do &quot;DigitalOut led(p1);&quot;&#xA0;now</li>
  <li>The Timer object was not reseting when reset() was called while&#xA0;running
    - FIXED</li>
  <li>SPI format now uses a single mode parameter rather than seperate&#xA0;pol
    and pha</li>
  <li>A prototype SPI3 class has crept in, which supports devices with a&#xA0;single
    bi-directional data pin</li>
</ul>
<p>When you start a new project, you will automatically pull in the new&#xA0;mbed
  Library. For existing projects, clicking on the mbed library in&#xA0;your
  file tree should provide you with an &quot;update&quot; button. As ever,&#xA0;please
  bring to our attention any problems, questions or suggestions&#xA0;you
  have.</p>
<p>Have Fun!&#xA0;
  <br>Simon</p>
