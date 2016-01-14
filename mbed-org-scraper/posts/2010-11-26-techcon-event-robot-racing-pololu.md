---
layout:         post-mbed-org
title:          "mbed Robot Racing!The Pits!DevelopmentCome and have a go!"
date:           2010-11-26T13:46:42.000Z
author:         Simon Ford
tags:           event, m3pi, racing, robot, techcon
originalUrl:    https://developer.mbed.org/blog/entry/techcon-event-robot-racing-pololu/
---

<p>
  mbed Robot Racing is ready to go! After a few weeks of frantic
  designing and building, we're setup at ARM Techcon and looking
  forward to two days of robot action! Make sure you come and take
  part, as there are prizes to be won! Here is what we've setup,
  and how it all works...
</p>
<p>
  <span style=
  "font-family: 'Trebuchet MS', sans-serif; font-size: 19px; font-weight: bold;">
  <img alt="" height="143" src=
  "http://mbed.org/media/uploads/chris/_scaled_mbed_robot_racing_logo.png"
  width="400"><br></span>
</p>
<p>
  <span style=
  "font-family: 'Trebuchet MS', sans-serif; font-size: 19px; font-weight: bold;">
  The Racing!</span>
</p>
<p>
  <object data="http://www.youtube.com/v/iyby-1_aMkU" height="350"
  style=
  "background-color: #ffffcc; background-position: 50% 50%; border: 1px dotted #cc0000;"
  type="application/x-shockwave-flash" width="425">
    <param name="data" value=
    "http://www.youtube.com/v/iyby-1_aMkU">
    <param name="src" value="http://www.youtube.com/v/iyby-1_aMkU">
  </object>
</p>
<p>
  Race an mbed Robot around the track as fast as possible; the
  fastest time wins an Android Tablet and m3pi robot!
</p>
<p>
  You can race by remote control using an Archos Android Tablet,
  which commands the robot over bluetooth when you tilt the
  device!&nbsp;The robot racing website will time you and upload
  your time to the Robot Racing leader board.
</p>
<h2>
  The Pits!
</h2>
<p>
  Or you can visit "The Pits" to program the robots yourself,
  either to follow a set of commands, or as a line follower to
  follow the line around the center of the track. This is how you
  can squeeze out extra time, so use the Rapid Prototyping powers
  of mbed to knock together a quick line follower to beat all
  others!
</p>
<p>
  For all the details, see:
</p>
<ul>
  <li>
    <a href="http://mbed.org/cookbook/mbed-Robot-Racing">mbed Robot
    Racing</a>
  </li>
</ul>
<p>
  <span style=
  "font-family: 'Trebuchet MS', sans-serif; font-size: 19px; font-weight: bold;">
  How does it work?</span>
</p>
<p>
  The whole setup lets you race the mbed m3pi robot from a Android
  Tablet, whilst a webpage automatically times you and takes your
  picture as you cross the line, ready to be uploaded to the leader
  board!
</p>
<p>
  <img alt="" height="271" src=
  "http://mbed.org/media/uploads/simon/robot-racing-setup2.png"
  width="680">
</p>
<p>
  <strong>Robot Remote Control:</strong> The mbed m3pi robot has
  motors and line sensors, but also a <strong>Bluetooth</strong>
  module. This allows other things with Bluetooth to connect to it,
  like a mobile phone or a new <strong>Archos Android
  Tablet</strong>! We programmed a custom Android app that reads
  the <strong>accelerometer</strong> values of the tablet, and then
  tells the robot what to do based on those readings. So you can
  drive the robot by wiggling the phone!
</p>
<p>
  <img alt="" height="344" src=
  "http://mbed.org/media/uploads/simon/robot-racing-parts.png"
  width="442">
</p>
<p>
  <strong>Website Timer Leaderboard:</strong> We also have a leader
  board website, but with some twists. This website also times you
  and takes your picture! A beam breaker is setup on the track,
  connected to another mbed. <strong>The mbed is emulating a USB
  keyboard</strong>, which is plugged in to the PC viewing the
  website. When the beam is broken, the mbed detects this and then
  "presses" a chosen key on the emulated keyboard. Javascript on
  the website is looking out for this using a onkeypress() handler,
  so when it sees this, it starts a big Javascript timer running.
  When the robot crosses the line to finish, a second key is sent
  and the Javascript stops the timer.
</p>
<p>
  It also triggers a Flash app to take a snap from a webcam to
  catch a photo of you as you finish the lap! Click submit and your
  time and photo is entered in to the leader board:
</p>
<p>
  <img alt="" height="388" src=
  "http://mbed.org/media/uploads/simon/robot-racing-web.png" width=
  "550">
</p>
<h2>
  Development
</h2>
<p>
  This all started some weeks ago when we started experimenting
  with the excellent Pololu 3pi robot, and then came up with the
  idea of a race. To find out more, here are some of the blog posts
  and resources related to putting this together:
</p>
<ul>
  <li>
    <a href=
    "http://mbed.org/blog/entry/mbed--Pololu-3pi--fun-Part-1/">mbed
    + Pololu 3pi = fun! (Part 1)</a>
  </li>
  <li>
    <a href=
    "http://mbed.org/blog/entry/mbed--Pololu-3pi--fun-part-2/">mbed
    + Pololu 3pi = fun! (Part 2)</a>
  </li>
  <li>
    <a href="http://mbed.org/cookbook/m3pi">m3pi Robot</a>
  </li>
  <li>
    <a href="http://mbed.org/cookbook/m3pi-Development">m3pi Robot
    Development</a>
  </li>
</ul>
<h2>
  Come and have a go!
</h2>
<p>
  Make sure if you visit ARM Techcon, you come and say hi and have
  a race! The winners get a prize, but there is also a prize draw
  for anyone who has taken part so there are no excuses!
</p>
<p>
  And we're especially interested to have some people sit down and
  try and build some record breaking line followers! Come and show
  us your skills!
</p>

