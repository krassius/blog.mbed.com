---
layout:         post-mbed-org
title:          "Library Update: Real-Time Clock"
date:           2014-02-17T16:21:15.000Z
author:         Simon Ford
tags:           library, RTC, time, updates
originalUrl:    https://developer.mbed.org/blog/entry/103/
---

<p>
  We thought it was about time to get time() working...
</p>
<p>
  The mbed Microcontroller has a Real-Time Clock (RTC) on it, which
  is a built in hardware clock that can keep track of the time and
  date. We've now done the plumbing to make use of it sane, and you
  can now just use standard C functions to read, set and format the
  time. Ideal for data logging and other time related functions!
</p>
<p>
  The basic function to read the time is named time(). This returns
  the time in seconds since January 1st 1970, often known as the
  <a href="http://en.wikipedia.org/wiki/Unix_time">UNIX
  timestamp</a>. This is a fairly universal way to define time, and
  can be transformed in to other string forms using C functions.
  The function time() actually takes a pointer as an argument, but
  in most case you'll just want to pass NULL. Here is a most basic
  example to get the current time:
</p>
<pre>
#include "mbed.h"

int main() {
    while(1) {
        time_t seconds = time(NULL);
        printf("Seconds since January 1, 1970: %d\n", seconds);
        wait(1);
    }
}
</pre>
<ul>
  <li>
    <a href=
    "/users/simon/published/9f83debd199f193afa6ef1899a179386/time_example.zip">
    time example project</a>
  </li>
</ul>
<p>
  Of course, that isn't much use until the time has been set
  somehow, as the RTC won't have been setup. Here is the minimal
  way to set the time, in this case providing the UNIX timestamp:
</p>
<pre>
#include "mbed.h"

int main() {
    set_time(1256729737);  // Set RTC time to Wed, 28 Oct 2009 11:35:37
}
</pre>
<ul>
  <li>
    <a href=
    "/users/simon/published/e75334ef020edf2c65db34904ab77177/set_time_example.zip">
    set_time example project</a>
  </li>
</ul>
<p>
  A natural thing to want to do is display the time and/or date in
  a human readable way, either on a screen, in a file, or over a
  terminal. For that, C provides a number of functions to help do
  this. This example shows these functions in use:
</p>
<pre>
#include "mbed.h"

int main() {
    while(1) {
        time_t seconds = time(NULL);

        printf("Time as seconds since January 1, 1970 = %d\n", seconds);

        printf("Time as a basic string = %s", ctime(&amp;seconds));

        char buffer[32];
        strftime(buffer, 32, "%I:%M %p\n", localtime(&amp;seconds));
        printf("Time as a custom formatted string = %s", buffer);

        wait(1);
    }
}
</pre>
<ul>
  <li>
    <a href=
    "/users/simon/published/a6025c53b25b0c6fbca86d13ff812ad0/time_example2.zip">
    formatted time example project 2</a>
  </li>
</ul>
<p>
  The results of this are shown below:
</p>
<p>
  <img alt="" height="296" src=
  "https://developer.mbed.org/media/uploads/simon/396x296xtime.png.pagespeed.ic.A-xYnLIZsO.png"
  width="396">
</p>
<p>
  For all the string formatting options, see the list of format
  specifiers in the&nbsp;<a href=
  "/projects/libraries/api/mbed/trunk/rtc_time#strftime">strftime
  function</a> api documentation.
</p>
<p>
  While we were testing, Rolf said he thought it'd be nice to be
  able to set the time from the terminal, so here is the final
  example for this post that does just that:
</p>
<pre>
// Example to setup the Real-Time Clock from a terminal, sford

#include "mbed.h"

int main() {

    // get the current time from the terminal
    struct tm t;
    printf("Enter current date and time:\n");
    printf("YYYY MM DD HH MM SS[enter]\n");    
    scanf("%d %d %d %d %d %d", &amp;t.tm_year, &amp;t.tm_mon, &amp;t.tm_mday
                             , &amp;t.tm_hour, &amp;t.tm_min, &amp;t.tm_sec);

    // adjust for tm structure required values
    t.tm_year = t.tm_year - 1900;
    t.tm_mon = t.tm_mon - 1;
    
    // set the time
    set_time(mktime(&amp;t));
        
    // display the time
    while(1) {    
        time_t seconds = time(NULL);
        printf("Time as a basic string = %s", ctime(&amp;seconds));
        wait(1);
    }
}
</pre>
<ul>
  <li>
    <a href=
    "/users/simon/published/76821e304d9989193d7687c22d9195c6/set_time_example2.zip">
    set time via terminal project example</a>
  </li>
</ul>
<p>
  Hopefully this gives you a good insight in to how to use the RTC
  from software, but of course one of the nice features of the RTC
  is that it is designed to support a battery backup. This means
  just like your PC or various equipment around the house, the mbed
  can keep time even when the power is disconnected.
</p>
<p>
  It obviously needs some source of power to keep the clock
  running, but it is very tiny and this is where the
  <strong>VB</strong> pin comes in. By connecting a 3V battery to
  this pin, the clock can be kept running for a long time with only
  a single coin cell (watch battery). Wire a 3v coin cell battery
  between VB and GND, and when you disconnect the main power (e.g.
  USB cable) the clock will continue to run:
</p>
<p>
  <img alt="" height="240" src=
  "https://developer.mbed.org/media/uploads/simon/320x240xvb.jpg.pagespeed.ic._Yjp0TyO0H.jpg"
  width="320">
</p>
<p>
  For full details of the time related functions, see the time API
  page:
</p>
<ul>
  <li>
    <a href="/projects/libraries/api/mbed/trunk/rtc_time">Time API
    Functions</a>
  </li>
</ul>
<p>
  To update to this new library version, as ever just start a new
  project or select the existing mbed library in an existing one
  and hit "Update". Please feedback any problems/questions to the
  forum.
</p>
<p>
  Have Fun!
</p>

