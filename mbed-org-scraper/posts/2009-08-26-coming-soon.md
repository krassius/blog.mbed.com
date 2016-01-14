---
layout:         post-mbed-org
title:          "Coming Soon!"
date:           2009-08-26T11:22:38.000Z
author:         Simon Ford
tags:           library, mbed, updates, website
originalUrl:    https://developer.mbed.org/blog/entry/22/
---

<p>
  Just to let you know, we have some new stuff on the way. There
  will be a few hickups as we roll it out i'm sure, so appologies
  in advance. But here is what is coming, 3) being most
  important...
</p>
<p>
  1) There is a new board on the way! Same idea, better MCU. Should
  be (is) very cool. We've made it so the mbed libraries work on it
  too, so there will be little impact as a user, apart from getting
  an upgrade. It'll be an Cortex-M3 core btw :)
</p>
<p>
  2) The libraries (and compiler) have changed a lot underneath to
  let us support two cores with the same MCU library; most of this
  wont impact anyone, but the main noticable library change that
  will impact everything (requiring code changes) is pins now use
  names (enumerations) instead of just numbers (int). i.e.
</p>
<pre style=
"margin-bottom: 1em; background-color: #ffffff; font-size: 1.1em; padding: 0.5em; border: 1px solid #cccccc;">

SPI spi(5, 6, 7); // mosi, miso, sclk
</pre>
<p>
  becomes
</p>
<pre style=
"margin-bottom: 1em; background-color: #ffffff; font-size: 1.1em; padding: 0.5em; border: 1px solid #cccccc;">

SPI spi(p5, p6, p7); // mosi, miso, sclk
</pre>
<p>
  and the prototype is:
</p>
<pre style=
"margin-bottom: 1em; background-color: #ffffff; font-size: 1.1em; padding: 0.5em; border: 1px solid #cccccc;">

SPI(PinName mosi, PinName miso, PinName sclk);
</pre>
<p>
  The main reason to do this is to allow us to also use the
  underlying pin names of the MCU if desired (e.g. P0_3), which
  means if you ported your code to a custom PCB you've made with
  the MCU, you have access to all the MCU pins. It is an annoying
  change as all code needs to be adapted, but it is a fairly
  trivial change, and gives some useful features for next-step
  prototyping on a custom board.
</p>
<p>
  3) We're going public! We've been working hard on the website to
  enable it to go live properly, and we'll be opening it all up
  when we put out the new board! So that means the board will be
  more generally available soon.
</p>
<p>
  I often get questions about how much people can say about mbed,
  and up until now, the general response has been "not very much".
  The main reason was, if it didn't work, we wanted to be able to
  walk away without having made big promises or upsetting anyone,
  and just be glad we tried.
</p>
<p>
  But the response has been awesome, and the technology far
  exceeded our early ideas, so there is now no looking back and I'm
  very happy to say mbed will soon be more public! So that means,
  when the new site goes live i'm going to lift my "ban" on
  blogging, flickring, youtubing etc. i.e. you will have
  permissions to go nuts!
</p>
<p>
  You could probably tell that was coming as we even signed up to
  twitter :) You can follow us at http://twitter.com/mbedmicro
  (@mbedmicro).
</p>
<p>
  I'd recommend that anything that gets posted related to mbed
  should be tagged with "mbed", as that gives us a really nice way
  for people to search what is going on.
</p>
<p>
  For anyone working on projects that are in a video-able or
  photograph-able state, it'd be great if you could start posting
  them to the forum or to us. Last event we did we made a big
  pinboard of project photos, so it'd be cool to make a bigger one
  at our next event. So show us what you are up to :)
</p>
<p>
  I'm also looking to feature two or three demos at any events we
  do; if you've got something cool, make sure you tell us and we'll
  pick the best three :)
</p>
<p>
  So lots of fun stuff to come; thanks to everyone for your help
  getting this far.
</p>
<p>
  Happy mbed-ing!
</p>

