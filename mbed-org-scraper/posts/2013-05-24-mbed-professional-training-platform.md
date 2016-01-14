---
layout:         post-mbed-org
title:          "mbed as a Professional Training Platform"
date:           2013-05-24T10:47:24.000Z
author:         Emilio Monti
tags:           CMSIS-DAP, MQTT, professional, TDD, training
originalUrl:    https://developer.mbed.org/blog/entry/mbed-professional-training-platform/
---

<p>This week we are glad to host a blog post from Niall Cooling (CEO of Feabhas
  Limited) about how the recent addition of offline development and debugging
  (through <a href="/blog/entry/Debugging-on-mbed-enabled-platforms/">CMSIS-DAP</a>)
  has allowed Feabhas to choose mbed as an ideal platform for their professional
  training courses:</p>
<div class="flashbox fquote">
  <h4 class="ftitle"><span class="authortext"><a href="/users/feabhas/"><img alt="" class="icon" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAMG/8QAIRAAAQQCAgMBAQAAAAAAAAAAAgEDBAUREgYhAAdBFKH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EAB0RAAAGAwEAAAAAAAAAAAAAAAABAgME8BIiMSH/2gAMAwEAAhEDEQA/AMT7J5JYRXXaerrpsSc2wLxOPK2CAK56TO23SfPDcAnXFi1Jr7xoP3xRB1HQxq80edS66zlP6nhvevKeJvXlfKpo7FlIeb0fN1ol0USIUTRVRFXBL2ufmMeT9HXfD3J9uxczoFTJFptIxyJRiLgBtsgGSqg4yi67d/M48vbkvFI9VpbwG43HVH1I87ej/9k="></a> <a href="/users/feabhas/"> Niall Cooling</a></span> wrote: </h4>
  <p>
    <div style="padding: 10px; float:right">
      <p>
        <img src="https://developer.mbed.org/media/uploads/emilmont/feabhas_logo.png"
        alt="/media/uploads/emilmont/feabhas_logo.png" title="/media/uploads/emilmont/feabhas_logo.png">
      </p>
    </div>
  </p>
  <p>As a company who&#x2019;s been involved with training many thousands of
    embedded software engineers over the last 18 years (in technologies such
    as C, C++ and Real-Time Operating Systems) our goal was always to try and
    recreate an engineer&#x2019;s everyday environment in the training courses.
    To this end we have always used embedded target boards on which an application
    is programmed. Initially we started with a Renesas SH-2 based system, but
    over a decade ago we switched to an ARM7TDMI (NXP LPC21xx) target.</p>
  <p>However, with the announcement and release of the Cortex-M family of microcontrollers
    we made the decision to port our training to a Cortex-M3 based system.
    Ideally we like to use off-the-shelf hardware where possible, but have
    always struggled to find target system that fit our requirements. As we
    work very closely with ARM (as both a provider of training to ARM and an
    ARM Approved Training Center) we were made aware of the mbed in its very
    early days.</p>
  <p>Initially we thought the concept of the mbed was a great idea, but unfortunately
    had to rule it out on a number of reasons:</p>
  <ol>
    <li>We need an offline IDE (e.g. Keil uVision or IAR EW) as when training
      on a customer site we cannot guarantee internet access - may sites, for
      security reasons, are locked down.</li>
    <li>As great as the mbed library is, it actually hides all the code we are
      teaching engineers to develop (e.g GPIO, programming UARTs, handling interrupts,
      fault handling, etc.)</li>
    <li>As a consequence of (2) we also need source level debugging (e.g. breakpoint,
      reading assembler, memory access, single-step, etc.) and visibility of
      the build process (e.g. what the compiler &amp; linker are doing, memory
      maps, etc.)</li>
  </ol>
  <p>Even though I was a fan of the mbed (I did some early work on <a href="http://blog.feabhas.com/2012/04/iot-mqtt-publish-and-subscriber-c-code/"
    rel="nofollow">MQTT with the mbed</a>) we didn&#x2019;t pursue it as a
    viable target, instead prototyping our own board deliberately based around
    the same core as the original mbed platform (NXP LPC17xx series). Students
    are always asking for hardware they can continue to experiment with after
    the course and by using the same core it allowed us to point them at the
    mbed. As an aside, in the <a href="http://www.feabhas.com/content/c-embedded-developers-7"
    rel="nofollow">Embedded C++ courses</a>, we recommend students take a look
    at the mbed libraries to illustrate how well device drivers can be wrapped
    in C++ objects.</p>
  <p>Luckily for us, before we&#x2019;d gone into full production, ARM announced
    CMSIS-DAP and its support for the mbed. So recently we have spent some
    time experimenting with CMSIS-DAP using the mbed and the Keil uVision IDE.
    The details of which are:</p>
  <ol>
    <li><a href="http://blog.feabhas.com/2013/04/native-cc-application-development-for-the-mbed-using-cmsis-dap/"
      rel="nofollow">Native C/C++ Application development for the mbed using CMSIS-DAP</a>

    </li>
    <li><a href="http://blog.feabhas.com/2013/04/user-io-from-mbed-with-cmsis-dap/"
      rel="nofollow">User I/O from mbed with CMSIS-DAP</a>

    </li>
    <li><a href="http://blog.feabhas.com/2013/04/rehosting-armcc-for-the-mbed-with-cmsis-dap/"
      rel="nofollow">Rehosting ARMCC for the mbed with CMSIS-DAP</a>

    </li>
    <li><a href="http://blog.feabhas.com/2013/05/test-driven-development-tdd-with-the-mbed/"
      rel="nofollow">Test Driven Development (TDD) with the mbed</a>

    </li>
  </ol>
  <p>The great news is that mbed + CMSIS-DAP meet our needs and as such we
    are redesigning our training platform to be to accommodate an mbed rather
    than mounting the NXP LPC1768 directly. We also have a <a href="http://blog.feabhas.com/2013/05/test-driven-development-tdd-with-the-mbed/"
    rel="nofollow">full TDD (Test Driven Development) setup using the mbed</a>,
    the <a href="http://throwtheswitch.org/white-papers/unity-intro.html" rel="nofollow">Unity TDD framework</a> and
    a little bit of Python for use on our <a href="http://www.feabhas.com/content/embedded-software-testing"
    rel="nofollow">embedded software testing course</a>.</p>
  <p>You can find me at: <a href="https://mbed.org/users/feabhas/">https://mbed.org/users/feabhas/</a>
  </p>
  <p></p>
</div>
