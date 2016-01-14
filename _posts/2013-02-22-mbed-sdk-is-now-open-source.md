---
layout:         post-mbed-org
title:          "mbed SDK is now Open Source!"
date:           2013-02-22T20:48:20.000Z
author:         Emilio Monti
tags:           mbed SDK, open source
originalUrl:    https://developer.mbed.org/blog/entry/mbed-SDK-is-now-Open-Source/
---

<div style="padding: 10px; float:right">
  <p>
    <img src=
    "https://developer.mbed.org/media/uploads/simon/mbed-sdk-open-source.png"
    alt="/media/uploads/simon/mbed-sdk-open-source.png" title=
    "/media/uploads/simon/mbed-sdk-open-source.png">
  </p>
</div>
<p>
  We are pleased to announce that we have just released the full
  mbed SDK under a permissive open source license!
</p>
<h2>
  About the mbed SDK
</h2>
<p>
  The mbed Software Development Kit (SDK) is a C/C++
  microcontroller software platform already relied upon by tens of
  thousands of developers to write code for ARM microcontrollers.
  It has always been free for commercial and noncommercial use, but
  this latest release under an open source license will extend its
  applicability further to be relied on in more commercial, open
  source and educational projects.
</p>
<p>
  We've designed the mbed SDK to provide enough hardware
  abstraction to be intuitive and concise, but powerful enough to
  build complex projects. It includes all the base level startup
  code, C runtime and library pre-integrated and tested for the
  target microcontrollers, and high-level MCU peripheral APIs that
  allow you to drive the peripherals of the microcontrollers
  without going near a datasheet. It is built on the low-level ARM
  CMSIS APIs, which is great for allowing you to code down to the
  metal if needed. In addition to RTOS, USB and Networking
  libraries, the <a href="http://mbed.org/cookbook">mbed
  Cookbook</a> now has hundreds of reusable peripheral and module
  libraries that have been built on top of the SDK by the hard work
  of the mbed developer community.
</p>
<h2>
  Open Source License
</h2>
<p>
  The SDK is now licensed under the permissive Apache 2.0 open
  source licence.
</p>
<p>
  We wanted to make sure the license we chose made it possible to
  use the SDK in both commercial and personal projects with
  confidence, including no obligations to open source your own code
  if you didn't want to. Whilst we encourage sharing of code and
  experience to be reusable by others, we certainly don't want to
  enforce it, and a permissive license provides that freedom for
  our users to keep the options open.
</p>
<p>
  The most widely used permissive licenses are MIT, BSD and Apache
  2.0. We've been a fan of MIT for a while because the license and
  intent is so simple to understand, but the Apache 2.0 license, as
  used by Android, is really the result of bring the MIT/BSD-style
  license up to date. It meant a bit more work on our part to
  ensure we could release under this license, but the result is
  much better for everyone choosing to use the SDK, especially in a
  commercial environment where choosing to use open source code may
  depend on the better guarantees Apache 2.0 brings.
</p>
<p>
  We'll also be making it easy for and encouraging other
  contributed code to be published under the same Apache 2.0
  license, so there is a growing level of consistency in the
  licensing of other code published on mbed.org too.
</p>
<h2>
  Why now?
</h2>
<p>
  Up to this point, we've always provided the SDK as a pre-built
  library. One of our main reasons for doing this was to establish
  a really stable API that developers could rely on and build up
  trust in, and ensure we got the feedback when they couldn't do
  something. We also wanted to avoid people dipping in to and
  coming to rely on the library internals meaning we couldn't
  transparently change the implementation details in the future
  without breaking compatibility.
</p>
<p>
  And the main reason we wanted to be able to change the
  implementation details under the hood without impacting API
  compatibility was to do what we've just spent the last year
  working hard on; the SDK now gives you transparent portability
  for code based on the SDK across:
</p>
<ul>
  <li>Multiple microcontrollers: Our official <a href=
  "/handbook/mbed-Microcontrollers">mbed Microcontrollers</a> and
  other supported hardware targets
  </li>
  <li>Multiple toolchains: Our <a href=
  "/handbook/mbed-Compiler">Free Online Compiler</a> and other
  <a href="/handbook/Exporting-to-offline-toolchains">Professional
  and Open Source Toolchains</a>
  </li>
</ul>
<p>
  This is really powerful. All the effort we've put in to making
  and testing the SDK to be transparently portable also means
  libraries built on the mbed SDK, such as all component and module
  libraries already in the <a href="http://mbed.org/cookbook">mbed
  Cookbook</a>, can be written once and used totally unchanged
  across targets and toolchains! This is great for enabling reuse
  and continued improvement in library quality and functionality.
</p>
<p>
  With the APIs now established with such a critical mass and SDK
  trusted by so many, and all this portability framework now in
  place, the build-only library restriction has achieved the goals
  we set out for. There is still a lot more to do on the SDK to get
  it where we are aiming, but benefits of it being open as we work
  on it now outweigh the costs, so the time is right to donate the
  source to the community as well. Thanks for your patience!
</p>
<h2>
  What it means for the community
</h2>
<p>
  We have been lucky enough to attract and build a very friendly
  and active community, and members have a huge breadth and depth
  of knowledge and expertise in mbed and lots of related
  technologies. There are already thousands of <a href=
  "/code">published open source programs and libraries</a> based on
  the SDK, so this means the source for the whole program stack is
  now available for all these programs.
</p>
<p>
  We think the most important aspects of open sourcing of the mbed
  SDK and giving the community access to all the mbed library
  sources, and its multi-toolchain build system, will be:
</p>
<ul>
  <li>Developers working on commercial products will not have to
  worry of any lock-in and they will be able to modify trade-offs
  unsuitable for their embedded system
  </li>
  <li>Open source projects based on the mbed platform will be able
  to provide a completely open software stack
  </li>
  <li>Those looking to learn or contribute will now be able to
  delve in to the depth of the lowest level implementations
  </li>
</ul>
<p>
  Whilst the SDK is already very established and stable, it is
  still very much a work in progress for where we've set our
  sights. We hope that working on it more publicly will also help
  make sure we end up in the right place for all our developers we
  support.
</p>
<p>
  In these first few years of mbed it has been amazing to witness
  what everyone has been able to achieve with the mbed platform,
  very often going beyond our original use cases. We hope this
  milestone is the next step in making the platform even more
  powerful, flexible and applicable to lots of projects that could
  benefit from our work and all the efforts of the amazing mbed
  developer community!
</p>
<p>
  To read more and get access to the mbed SDK, see:
</p>
<ul>
  <li>
    <a href="http://mbed.org/handbook/mbed-SDK">mbed SDK</a>
  </li>
</ul>
<p>
  For more information on the mbed project, see:
</p>
<ul>
  <li>
    <a href="http://mbed.org/explore">Explore mbed</a>
  </li>
</ul>
<p>
  Have fun and keep innovating!
</p>

