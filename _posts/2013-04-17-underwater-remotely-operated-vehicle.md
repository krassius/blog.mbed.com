---
layout:         post-mbed-org
title:          "Underwater Remotely Operated Vehicle"
date:           2013-04-17T11:00:27.000Z
author:         Amit Naran
tags:           ROV, underwater
originalUrl:    https://developer.mbed.org/blog/entry/Underwater-Remotely-Operated-Vehicle/
---

<p>
  <span><span class="authortext"><a href="/users/scotto/"><img alt=
  "" class="icon" src=
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAQABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABAYHCP/EACUQAAEDAwMDBQAAAAAAAAAAAAECAwQFBhEAIUESEzEiUWFxgf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAZEQEAAwEBAAAAAAAAAAAAAAABAAMhAkH/2gAMAwEAAhEDEQA/ALpHNOU6qTWIjmywrpdJKQTwfcfeg6le1JRFkKjOxERYbpiOAo6S2tJHp38kZHjWKzfFyKpop71/TnYqgUFpXcwOQSSMkA8ZGl2m3DV5kN6l1m4JRjiSX1NPqU6C6RurO+/z+6W7pN8gVBoT/9k="></a>
  <a href="/users/scotto/">Scott O'Brien</a></span></span> has
  <a href="/users/scotto/notebook/scottrov/">blogged</a> about an
  underwater robot he has built for his final year individual
  project at the University of Westminster using a couple <a href=
  "/handbook/mbed-Microcontrollers">mbed microcontrollers</a>.
</p>
<div class="flex-video">
  <iframe width="420" height="315" src=
  "https://www.youtube.com/embed/x2vWEfYG3sE" frameborder="0"
  allowfullscreen="allowfullscreen"></iframe>
</div>
<p>
  The craft consists of a PVC frame and uses seven modified bilge
  pump motors to level and move the vehicle.
</p>
<p>
  <img width="300" alt="Bottom Controller" title=
  "Bottom Controller" src=
  "https://developer.mbed.org/media/uploads/anaran/300xNx_scaled_rov_bottom_controller.jpg.pagespeed.ic.JOZKFb981c.jpg">
</p>
<p>
  As well as controlling the motors, the <a href=
  "/handbook/mbed-NXP-LPC1768">LPC1768 mbed</a> in the bottom
  controller interfaces various sensors including an IMU board
  fitted with a 3-axis accelerometer, a 3-axis gyroscope, a 3-axis
  magnetometer, and a micro-SD card socket.
</p>
<p>
  <img width="300" alt="Top Controller" title="Top Controller" src=
  "https://developer.mbed.org/media/uploads/anaran/300xNx_scaled_rov_top_controller.jpg.pagespeed.ic.GWAQ-XSLNl.jpg">
</p>
<p>
  The top controller features an LCD display with two analog thumb
  joysticks to manoeuvre and uses RS232 to interface the ROV.
</p>
<p>
  Read Scott's blog <a href=
  "/users/scotto/notebook/scottrov/"><strong>here</strong></a>
</p>

