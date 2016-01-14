---
layout:         post-mbed-org
title:          "Working with the BBC on micro:bit: Part 1 - using the mbed HDKBBC micro:bit is mbed EnabledStart with known working partsLayout the HDK, any size will doForm factor prototypes and reducing the number of components"
date:           2015-07-16T11:31:17.000Z
author:         Jonathan Austin
tags:           BBC, micro:bit
originalUrl:    https://developer.mbed.org/blog/entry/bbc-microbit-mbed-hdk/
---

<p>For the last few months, we&#x2019;ve been hard at work helping the BBC
  and its partners in the <a href="http://www.bbc.co.uk/programmes/articles/1gkwk58DPmRzt2TzDp3pr9x/about-make-it-digital"
  rel="nofollow">Make it Digital</a> campaign turn the BBC micro:bit into
  an awesome reality. With the <a href="http://www.bbc.co.uk/mediacentre/mediapacks/microbit"
  rel="nofollow">launch announcement today</a>, we are now able to talk a
  lot more about the BBC micro:bit, mbed, and how together with its partners
  the BBC has built a working mbed Enabled board in just four months.</p>
<p>We are used to having our heads stuck in the details of how to build embedded
  systems, but normally we are doing that in order to make fundamental building
  blocks so that other people can create mbed Enabled platforms quickly.
  This project has been different, though: as well as our usual role as mbed,
  we&#x2019;ve stepped to the other side of the silkscreen and worked with
  the BBC and partners to build and test the early prototypes of the BBC
  micro:bit hardware.</p>
<p><a href="/media/uploads/katiedmo/picture_1.jpg"><img src="https://developer.mbed.org/thumb?filename=uploads/katiedmo/picture_1.jpg&amp;size=400" alt="/thumb?filename=uploads/katiedmo/picture_1.jpg&amp;size=400" title="/thumb?filename=uploads/katiedmo/picture_1.jpg&amp;size=400"></a>
  <br>
</p>
<p>This is the first of a series of blog posts about how the micro:bit was
  put together, how it was built and tested, and what we&#x2019;ve learned
  by eating our own dog food and putting ourselves in our partners&#x2019;
  shoes.</p>
<ul>
  <li>Part 1: Building the hardware &#x2013; using the HDK and testing the early
    boards.</li>
  <li>Part 2: Bringing up the software and supporting Lancaster University in
    building the micro:bit runtime.</li>
  <li>Part 3: Development tools and the compile API.</li>
</ul>

<h2>BBC micro:bit is mbed Enabled</h2>

<p>So how has mbed helped the BBC micro:bit project? Here&#x2019;s a slide
  I presented at the first Hardware Working Group meeting as a proposal:</p>
<p>
  <img src="https://developer.mbed.org/media/uploads/katiedmo/picture_2.png"
  alt="/media/uploads/katiedmo/picture_2.png" title="/media/uploads/katiedmo/picture_2.png">
</p>
<p>We thought that building micro:bit based on the mbed SDK and HDK would
  be great for the project; by using open source, deployed, tested components
  as a foundation, the idea of having something produced in enormous quantities
  within months of the &#x2018;go&#x2019; date seemed less daunting.</p>

<h2>Start with known working parts</h2>

<p>One of the most time consuming parts of an embedded project can be the
  early &#x201C;trust nothing&#x201D; stage: when you can&#x2019;t be sure
  whether your tools, your design, your test system or your own sanity is
  the reason something doesn&#x2019;t work. By basing the BBC micro:bit on
  the mbed HDK it was possible for the other groups in the project to start
  working and testing with other (known good!) mbed Enabled boards, knowing
  that they would be able to switch over to the micro:bit when it was ready.
  Given the aggressive schedule, the partners working on the programming
  environments and smartphone apps needed something to work with while the
  boards were being designed and made.</p>
<p>On the hardware side, the BBC had done extensive trials in schools with
  earlier hardware that had LED matrices, and they knew they wanted to keep
  that feature &#x2013; would we be able to drive all the LEDs directly from
  the nRF51822 without needing extra drivers? Could we scan the matrix fast
  enough and have the image look clear? Would the BLE radio interrupts give
  visual glitches on the &#x2018;display&#x2019;? For a quick answer, Lawrence
  (from upBeat Product Development) made some nice LED matrix boards, and
  we plugged them into a <a href="https://developer.mbed.org/platforms/Nordic-nRF51822/">Nordic NRF51822 development kit</a>,
  which uses the same chip as the micro:bit, and is a very similar board.</p>
<p><a href="/media/uploads/katiedmo/picture_3_v2.jpg"><img src="https://developer.mbed.org/thumb?filename=uploads/katiedmo/picture_3_v2.jpg&amp;size=600" alt="/thumb?filename=uploads/katiedmo/picture_3_v2.jpg&amp;size=600" title="/thumb?filename=uploads/katiedmo/picture_3_v2.jpg&amp;size=600"></a>
  <br>
<sup><em>Click to enlarge</em></sup>
</p>
<p>It works!</p>

<h2>Layout the HDK, any size will do</h2>

<p>The next step was to take the <a href="https://developer.mbed.org/teams/mbed/code/mbed-HDK/">HDK</a>,
  add the micro:bit specific components and lay it out on a board with the
  LEDs so we could test in earnest. <a href="https://developer.mbed.org/users/chris/">Chris</a>,
  dusting off his Eagle gloves, took on this task. The resultant board, called
  &#x2018;the square board&#x2019;, had a run of 10, was not at all square,
  and didn&#x2019;t work out of the box. Luckily, Marcelo is good with his
  soldering iron; in the picture below you can see the workaround for selecting
  the wrong USB connector part: desolder it and put the cables directly onto
  the board! This kind of mistake is easy to make when you&#x2019;re picking
  up a new part or design, and it&#x2019;s led us to think about how much
  we can provide alongside the HDKs - we&#x2019;ve got some exciting plans
  to announce soon.</p>
<p><a href="/media/uploads/katiedmo/picture_4.jpg"><img src="https://developer.mbed.org/thumb?filename=uploads/katiedmo/picture_4.jpg&amp;size=600" alt="/thumb?filename=uploads/katiedmo/picture_4.jpg&amp;size=600" title="/thumb?filename=uploads/katiedmo/picture_4.jpg&amp;size=600"></a>
  <br>
<sup><em>Click to enlarge</em></sup>
</p>
<p>The &#x2018;square board&#x2019; was also the first place we tried driving
  the LED matrix with animations. Yes, that&#x2019;s on a plane&#x2026;</p>
<p><a href="/media/uploads/katiedmo/picture_5.png"><img src="https://developer.mbed.org/thumb?filename=uploads/katiedmo/picture_5.png&amp;size=600" alt="/thumb?filename=uploads/katiedmo/picture_5.png&amp;size=600" title="/thumb?filename=uploads/katiedmo/picture_5.png&amp;size=600"></a>
  <br>
<sup><em>Click to enlarge</em></sup>
</p>

<h2>Form factor prototypes and reducing the number of components</h2>

<p>As the project progressed, it became clear we needed some form factor
  prototypes. This is the kind of task we&#x2019;re usually one step removed
  from, but given the need for a quick turnaround, and the fact that Chris
  had already done the layout for &#x2018;the square board&#x2019;, he was
  the natural choice for &#x2018;square board two&#x2019; (which I can report
  is also not square&#x2026;). There are a few neat tricks in the micro:bit
  to save cost, such as using the on-chip regulator of the KL26 to regulate
  USB 5V to 3.3 for the Nordic chip. While I&#x2019;m sure mbed users deploying
  the HDK regularly use these techniques, it&#x2019;s been great seeing them
  up close, and that&#x2019;s given us a chance to factor them back into
  the sources, hopefully saving our downstream developers time, money, and
  hassle. We also needed to check that the layout for the board could be
  done in the size desired, on a two-layer board.</p>
<p>Here&#x2019;s Chris, proudly holding the first &#x2018;SB2&#x2019; that
  came back from the board house. Answer: yes, it fits! I owe Chris at least
  one beer.</p>
<p>
  <img src="https://developer.mbed.org/media/uploads/katiedmo/picture_6_v2.jpg"
  alt="/media/uploads/katiedmo/picture_6_v2.jpg" title="/media/uploads/katiedmo/picture_6_v2.jpg">
</p>
<p>Sadly, as we&#x2019;d spent a lot of the time with the first square board
  debugging the USB issues, we didn&#x2019;t yet have a working port of the
  interface firmware. This meant that the new SB2 wasn&#x2019;t easy to program.
  We were posting boards around to partners in the project, and we needed
  a way to program them&#x2026;</p>
<p><a href="/media/uploads/katiedmo/picture_7.jpg"><img src="https://developer.mbed.org/thumb?filename=uploads/katiedmo/picture_7.jpg&amp;size=600" alt="/thumb?filename=uploads/katiedmo/picture_7.jpg&amp;size=600" title="/thumb?filename=uploads/katiedmo/picture_7.jpg&amp;size=600"></a>
  <br>
<sup><em>Click to enlarge</em></sup>
</p>
<p>Luckily, it&#x2019;s possible to use the Nordic &#x2013;DK board as an
  external programmer for another nrf51. The experience is just like using
  mbed normally, but there&#x2019;s not much documentation around this on
  mbed. We wanted to make the information available to other mbed developers
  &#x2013; it&#x2019;s a useful trick, and again, the kind of thing we don&#x2019;t
  necessarily encounter day to day. The page <a href="https://developer.mbed.org/users/MarceloSalazar/notebook/programming-a-minibeacon-bluetooth-module-nordic-n/">here</a> was
  our way of getting the useful information out, without tipping anyone off
  that BBC micro:bit was on its way. On the plus side, if you manage to brick
  your beacons, it&#x2019;ll help you out, too.</p>
<p>The SB2 design is what we&#x2019;ve handed over to Farnell for them to
  start the process of taking the board to manufacture in volume. Meanwhile,
  our focus has shifted to getting involved in the software work, porting
  the mbed SDK to the micro:bit board, and supporting the other partners
  building tools on top of the SDK; I&#x2019;ll write much more about that
  in the second installment of this series of blog posts.</p>
<p>The BBC is doing something ambitious and ground-breaking by giving away
  a micro:bit to every year 7 pupil in the country, and it&#x2019;s a privilege
  to be involved. We can&#x2019;t wait to see what people start building
  with their micro:bits!</p>
<p>Below are some other photos from the hardware design stages that we hope
  might be of interest.</p>
<p><a href="/media/uploads/katiedmo/picture_8.png"><img src="https://developer.mbed.org/thumb?filename=uploads/katiedmo/picture_8.png&amp;size=850" alt="/thumb?filename=uploads/katiedmo/picture_8.png&amp;size=850" title="/thumb?filename=uploads/katiedmo/picture_8.png&amp;size=850"></a>
  <br>
<sup><em>Click to enlarge</em></sup>
</p>
<p>One of the early planning sessions for our involvement in the BBC micro:bit
  project. Notice the &#x2018;EEK&#x2019; on the right hand side.</p>
<p><a href="/media/uploads/katiedmo/picture_9.jpg"><img src="https://developer.mbed.org/thumb?filename=uploads/katiedmo/picture_9.jpg&amp;size=600" alt="/thumb?filename=uploads/katiedmo/picture_9.jpg&amp;size=600" title="/thumb?filename=uploads/katiedmo/picture_9.jpg&amp;size=600"></a>
  <br>
<sup><em>Click to enlarge</em></sup>
</p>
<p>Don&#x2019;t get your wires crossed! <em>(Also, don&#x2019;t draw diagrams like this. Top pin, top label; bottom pin, bottom label.)</em>
</p>
<p><a href="/media/uploads/katiedmo/picture_10.jpg"><img src="https://developer.mbed.org/thumb?filename=uploads/katiedmo/picture_10.jpg&amp;size=600x800" alt="/thumb?filename=uploads/katiedmo/picture_10.jpg&amp;size=600x800" title="/thumb?filename=uploads/katiedmo/picture_10.jpg&amp;size=600x800"></a>
  <br>
<sup><em>Click to enlarge</em></sup>
</p>
<p>Boards, yet to be populated. These were the first boards with the excellent
  design from Technology Will Save Us. Colours are not final.</p>
<p><a href="/media/uploads/katiedmo/picture_11.jpg"><img src="https://developer.mbed.org/thumb?filename=uploads/katiedmo/picture_11.jpg&amp;size=600" alt="/thumb?filename=uploads/katiedmo/picture_11.jpg&amp;size=600" title="/thumb?filename=uploads/katiedmo/picture_11.jpg&amp;size=600"></a>
  <br>
<sup><em>Click to enlarge</em></sup>
</p>
<p>Four generations of BBC micro:bit prototype, ready to do something amazing.</p>
