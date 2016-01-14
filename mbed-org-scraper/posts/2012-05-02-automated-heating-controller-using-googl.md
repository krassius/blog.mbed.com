---
layout:         post-mbed-org
title:          "Automated Heating Controller using Google Calendar"
date:           2012-05-02T20:09:51.000Z
author:         Amit Naran
tags:           Automation, Calendar, google
originalUrl:    https://developer.mbed.org/blog/entry/Automated-Heating-Controller-using-Googl/
---

<p>This is an awesome mbed project using Google Calendar to remotely control
  a home heating system.</p>
<div class="flex-video">
  <iframe width="420" height="315" src="https://www.youtube.com/embed/NlhNqCOUpZ4"
  frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>
<p>mbed developer, Shack Dweller, describes using an Ethernet-connected
  <a
  href="/handbook/mbed-NXP-LPC1768">mbed NXP LPC1768 Microcontroller</a>, a DS18S20 temperature sensor, and
    a relay to control his heating unit based on events setup in a Google Calendar.</p>
<p>He describes the Google API developers guide as &quot;scary read at first&quot;
  but simplifies the process by using private address for his calendar and
  avoiding authentication. Using Google API GET requests, he polls the calendar
  to return events in XML and uses the current ambient temperature to switch
  the heater using a solid state relay. He has posted his code <a href="http://ferntreeshack.blogspot.com.au/2012/04/google-api-and-smartphone-features.html"
  rel="nofollow">here</a>
</p>
<p>
  <img src="https://developer.mbed.org/media/uploads/anaran/_scaled_heater2.jpg"
  alt="/media/uploads/anaran/_scaled_heater2.jpg" title="/media/uploads/anaran/_scaled_heater2.jpg">
</p>
<p>Great project with countless opportunities, great stuff.</p>
<p>Read more about the project on his <a href="http://ferntreeshack.blogspot.com.au/2012/04/wiring-it-up-heater-automation.html"
  rel="nofollow">blog</a>
</p>
