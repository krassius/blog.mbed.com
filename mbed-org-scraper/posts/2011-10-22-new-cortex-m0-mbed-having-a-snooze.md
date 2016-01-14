---
layout:         post-mbed-org
title:          "New Cortex-M0 mbed caught having a snooze!"
date:           2011-10-22T18:30:02.000Z
author:         Simon Ford
tags:           
originalUrl:    https://developer.mbed.org/blog/entry/New-Cortex-M0-mbed-having-a-snooze/
---

<p>Here is the new Cortex-m0 board being sent to sleep, woken up by a button
  to increment and update a screen, then going back to sleep:</p>
<div class="flex-video">
  <iframe width="420" height="315" src="https://www.youtube.com/embed/ZH00kHjL_DA"
  frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>
<p>It is running from a couple of AA&apos;s, and takes a couple of mA when
  not doing anything.</p>
<p>Chris hooked this up yesterday for us to test some new sleep() and deepsleep()
  functions of the mbed C/C++ SDK. The code for this example uses deepsleep(),
  and looks like:</p>
<div class="flashbox fcode">
  <h4 class="ftitle">Simple deepsleep and interrupt wakeup example</h4><pre class="mbed-code" offset="0">#include &quot;mbed.h&quot;
#include &quot;TextLCD.h&quot;

TextLCD lcd(p21, p23, p24, p25, p26, p27);
InterruptIn wakeup(p14);

int i = 0;

void count() {
    lcd.locate (0,1);
    lcd.printf(&quot;%d&quot;,i);
    i++;
    wait(0.5);
}

int main () {
    wakeup.rise(NULL);  // Setup rising edge interrupt (no handler function needed)

    lcd.printf(&quot;Hello World!&quot;);

    while (1) {
        deepsleep();  // Deep sleep until external interrupt
        count();      // We&apos;ve come out of sleep due to interrupt, so count!
    }
}
</pre>
</div>
<p>For both sleep() and deepsleep(), all state is retained so you can see
  it is a nice simple programming model. Should be great for quickly prototyping
  some things that need to run off batteries.</p>
<p>So all is looking good; hope you&apos;ll like it!</p>
<p>For more info on this cortex-m0 board as it goes through beta to release,
  you can signup to:</p>
<ul>
  <li><a href="http://eepurl.com/gtul5" rel="nofollow">m0-release mailing list</a>

  </li>
</ul>
