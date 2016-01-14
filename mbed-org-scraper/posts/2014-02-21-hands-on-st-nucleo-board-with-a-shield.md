---
layout:         post-mbed-org
title:          "Hands-on: ST Nucleo board with a shield"
date:           2014-02-21T17:44:11.000Z
author:         Mihail Stoyanov
tags:           arduino, Nucleo, shields, ST
originalUrl:    https://developer.mbed.org/blog/entry/Hands-on-ST-Nucleo-board-with-a-shield/
---

<p>
  The mbed platform support has been expanded <a href=
  "/blog/entry/STMicroelectronics-mbed-enabled-Nucleo/">recently</a>
  to include a new family of boards - the ST Nucleo. <a href=
  "/platforms/?tvend=10">Four boards</a> are supported at the time
  of this writing and ST's plans are to release a full line of
  STM32 Microcontrollers in the Nucleo family, all of which will
  have out-of-the-box support for the mbed ecosystem. In this blog
  post I'll show you how easy it is to use the a ST Nucleo board on
  mbed.
</p>
<p>
  First, this is how the board packaging looks (click to enlarge):
</p>
<p>
  <a href="/media/uploads/screamer/st_nucleo_1.jpg"><img src=
  "https://developer.mbed.org/thumb?filename=uploads%2Fscreamer%2Fst_nucleo_1.jpg&amp;size=400x300"
  alt="Click to enlarge" title="Click to enlarge"></a> <a href=
  "/media/uploads/screamer/st_nucleo_2.jpg"><img src=
  "https://developer.mbed.org/thumb?filename=uploads%2Fscreamer%2Fst_nucleo_2.jpg&amp;size=400x300"
  alt="Click to enlarge" title="Click to enlarge"></a>
</p>
<p>
  When connected for first time, the green LED blinks with a
  familiar rate, hinting that the preloaded program is in fact the
  mbed Blinky Hello World program. The USB storage device of the
  Nucleo contains an mbed.htm file, which, when clicked, takes me
  to the mbed website and gets the board added to my account.
</p>
<p>
  Like the whole Nucleo family, the <a href=
  "/platforms/ST-Nucleo-L152RE">ST Nucleo L152RE</a> has 2 type of
  headers - <a href=
  "/media/platforms/ST-Nucleo-L152RE-Arduino.png">Arduino</a> and
  <a href=
  "/media/uploads/screamer/st-nucleo-l152re-morpho.png">Morpho</a>.
  The Arduino header standard is popular for the compatibility and
  ease of use it offers. In this example I'm using the Arduino
  shield <a href="/components/Freetronics-LCD-Shield/">16x2 LCD by
  Freetronics</a>.
</p>
<p>
  <a href="/media/uploads/screamer/st_nucleo_3.jpg"><img src=
  "https://developer.mbed.org/thumb?filename=uploads%2Fscreamer%2Fst_nucleo_3.jpg&amp;size=400x300"
  alt="Click to enlarge" title="Click to enlarge"></a> <a href=
  "/media/uploads/screamer/st_nucleo_3a.jpg"><img src=
  "https://developer.mbed.org/thumb?filename=uploads%2Fscreamer%2Fst_nucleo_3a.jpg&amp;size=400x300"
  alt="Click to enlarge" title="Click to enlarge"></a>
</p>
<p>
  This LCD already has a page in <a href="/components/">mbed
  Components</a>, which provides an example program and library
  contributed by <a href="/users/KKempeneers/">Koen Kempeneers</a>.
</p>
<p>
  <a href="/components/Freetronics-LCD-Shield/"><img src=
  "https://developer.mbed.org/thumb?filename=uploads%2Fscreamer%2F2014-02-21_16-20-14.png&amp;size=600x390"
  alt="Click to enlarge" title="Click to enlarge"></a>
</p>
<p>
  Clicking on “Import program” takes me to the mbed Online Compiler
  to import the program into my workspace.
</p>
<p>
  <img src=
  "https://developer.mbed.org/media/uploads/screamer/2014-02-20_22-59-19.png"
  alt="/media/uploads/screamer/2014-02-20_22-59-19.png" title=
  "/media/uploads/screamer/2014-02-20_22-59-19.png">
</p>
<p>
  I'm opening main.cpp and the first thing I notice is that the
  initialization string for the LCD library is using Arduino pin
  names, meaning that I won't have to change them - everything is
  pre-set for me.
</p>
<div class="flashbox fcode">
  <h4 class="ftitle"></h4>
  <pre class="mbed-code" offset="0">
freetronicsLCDShield lcdshield(D8, D9, D4, D5, D6, D7, D3, A0);
</pre>
</div>
<p>
  Тhe second thing I notice is that the program is more than a
  Hello World program. It's a full-featured demo of the shield and
  library, which is somewhat too complex for my example.
</p>
<p>
  I'm replacing the code with the simplified:
</p>
<div class="flashbox fcode">
  <h4 class="ftitle">
    main.cpp
  </h4>
  <pre class="mbed-code" offset="0">
#include "mbed.h"
#include "freetronicsLCDShield.h"

freetronicsLCDShield lcdshield(D8, D9, D4, D5, D6, D7, D3, A0);

int main() {
    lcdshield.setBackLight(true);
    lcdshield.printf("mbed application");
}
</pre>
</div>
<p>
  And then hit "Compile" which successfully compiles my code and
  prompts me for a save location.
</p>
<p>
  But before saving the compiled binary I'd like to attach the LCD
  shield. Note that some shields, like this LCD screen, use less
  pins than the full Arduino headers, so remember to be extra
  careful when attaching them. If you get it wrong you might damage
  the board and/or the shield.
</p>
<p>
  Now that I have the LCD shield correctly mounted, I reconnect the
  board to the PC. The backlight turns on and the first row of the
  display filled with squares indicating that it's powered
  properly.
</p>
<p>
  <a href="/media/uploads/screamer/st_nucleo_4.jpg"><img src=
  "https://developer.mbed.org/thumb?filename=uploads%2Fscreamer%2Fst_nucleo_4.jpg&amp;size=400x300"
  alt="Click to enlarge" title="Click to enlarge"></a>
</p>
<p>
  I then save the binary to the Nucleo’s USB storage device, which
  “consumes” the binary and restarts the board. A moment later the
  following text appears on the LCD screen:
</p>
<p>
  <a href="/media/uploads/screamer/st_nucleo_5.jpg"><img src=
  "https://developer.mbed.org/thumb?filename=uploads%2Fscreamer%2Fst_nucleo_5.jpg&amp;size=400x300"
  alt="Click to enlarge" title="Click to enlarge"></a>
</p>
<p>
  Ah, sweet success!
</p>

