---
layout:         post-mbed-org
title:          "Announcing our plans for mbed v3.0Command-line Toolsmbed OSmbed Device ServerRelease RoadmapTeam and PartnersConclusion"
date:           2015-04-01T22:40:26.000Z
author:         Simon Ford
tags:           
originalUrl:    https://developer.mbed.org/blog/entry/Announcing-our-plans-for-mbed-v30/
---

<p>We are really pleased to announce our plans for the next generation of
  mbed!</p>
<p>As you are all aware, we have been working hard on pushing the boundaries
  of abstraction, productivity and collaboration in the embedded space for
  a while. Last year it became obvious to us that 1) with the right investment,
  we could take our thinking even further and also make it applicable to
  production-grade software development, 2) the disruptive jump in complexity
  brought on by Internet of Things (IoT) devices was going to be a huge catalyst
  for a new industry that would expect the levels of productivity we aspire
  to deliver, and 3) there were a lot of people that agreed with us.</p>
<p>The revolutions in web 2.0 and smartphones were enabled by the creation
  of platforms and ecosystems, and the widespread innovation they made possible.
  The complexity and requirements for IoT development at scale means classic
  embedded development as is just won&apos;t meet the needs, so embedded
  must enter the platform era too!</p>
<p>So we have been working on investing in mbed to deliver a proper full-stack
  platform that could be used for production software development. That means
  the technology, the team, the partners and ecosystem to make it possible.
  Today, we finally get to share our plans!</p>
<p>Here are some of the fundamental highlights for mbed v3.0:</p>

<h2>Command-line Tools</h2>

<div style="padding: 10px; float:right">
  <p>
    <img src="https://mbed.org/assets/uploads/icon_os.png" alt="Command-line Tools"
    title="Command-line Tools">
  </p>
</div>
<p>We are working on command-line tools for mbed! To put simply, that means
  you&apos;ll be able to download our SDK tools package to create, work with
  and build mbed programs on your own machine.</p>
<p>But it goes a bit deeper than that. The underlying build tool we are creating
  (yotta) is very much inspired by the very successful <a href="https://www.npmjs.org/"
  rel="nofollow">NPM</a>, and deals not only with building code, but also
  managing and working with software components and dependencies properly
  using <a href="http://semver.org/" rel="nofollow">Semantic Versioning</a> rules.
  This will give us a path to well managed software component releases for
  our core libraries and across the whole community, and an easy and powerful
  way to build and manage your projects with no fuss.</p>
<p>That doesn&apos;t mean the Web IDE is going away; it&apos;ll be using
  these same tools hosted behind the scenes on our servers, so will continue
  to be a great way to get instant access to a latest and greatest development
  environment. It just wont be the only way :)</p>
<p>You may have seen we started working on a more advanced test framework
  earlier in the year. Well that&apos;ll be a key integrated part of v3.0
  such that we can move to unit and regression testing being the standard,
  for us and the whole community.</p>

<h2>mbed OS</h2>

<p>The biggest fundamental investment we are making in v3.0 is a full-stack
  platform you can rely upon to build an application, that brings connectivity,
  OS primitives, power management and security in to the core. This is mbed
  OS.</p>
<p>Here is the high level view:</p>
<p>
  <img src="https://mbed.org/assets/uploads/mbed_os_dppage2_diagram2-01.png"
  alt="mbed OS overview" title="mbed OS overview">
</p>
<p>Things like the peripheral APIs and components of the Application Framework
  have always been part of our core SDK, and grown incrementally. This has
  worked very well for providing portability across different target microcontrollers
  and toolchains, and also in terms of management of the code itself. We
  will be making investments at in these areas for improving power and event
  management.</p>
<p>But on top of this, we have had a huge number of contributed libraries
  and components that have enabled all sorts of things, some of which have
  become near essential components. We have an optional RTOS (among other
  contributed RTOSes) that can included, but doesn&apos;t need to be. We
  have various networking libraries and various versions of each people have
  provided, but it is sometimes not clear which to use or where to feed back
  bugs. At the same time, we have identified some holes in functionality
  we think are important, so we have worked out how to make them available.</p>
<p>So it is time to pull some of this functionality in to the core so we
  chose one way of doing it that can become stable, well integrated and relied
  upon by all users. Here is some more on what we are doing for each of those
  features:</p>

<h3>Connectivity</h3>

<div style="padding: 10px; float:right">
  <p>
    <img src="https://mbed.org/assets/uploads/mbed_feature_symbol_connectivity.png"
    alt="Connectivity" title="Connectivity">
  </p>
</div>
<p>Wireless connectivity can be really complex, but generally abstracted
  to some very simple common interfaces. We are building those transports
  and interfaces in to the core.</p>
<p>The really key standards for wireless connectivity that we are working
  on are:</p>
<ul>
  <li>Bluetooth Smart - Ideal for ultra-low power connections to Smartphones,
    Tablets and Laptops for things like wearables and smartphone accessories</li>
  <li>Wi-Fi - The standard home and office IP backhaul found almost everywhere,
    with Wi-Fi modules getting exceptionally cheap</li>
  <li><a href="http://www.threadgroup.org/" rel="nofollow">Thread</a> - The new
    low-power wireless mesh IP network for home applications</li>
  <li>6LoWPAN - Sub-GHz IP based mesh-networking for industrial and outdoor
    applications</li>
  <li>Cellular - IP connectivity away from WLAN infrastructure</li>
</ul>
<p>Each of these can be made accessible to users in a consistent way, and
  with Wi-Fi, Thread, 6LoWPAN and Cellular, the IP abstraction works transparently.</p>

<h3>Power Management</h3>

<div style="padding: 10px; float:right">
  <p>
    <img src="https://mbed.org/assets/uploads/mbed_feature_symbol_efficiency.png"
    alt="Power Management" title="Power Management">
  </p>
</div>
<p>Power management can&apos;t be an afterthought as it has implications
  down to how drivers are written and how you construct code. When you are
  running from a coin-cell, these things matter.</p>
<p>We are starting with extending our HAL to support non-blocking drivers
  and callbacks by default, and then building on that the hooks and intelligence
  in to our Application Framework to allow programming patterns that are
  conducive to energy efficiency and enable the processor and peripherals
  to go to sleep automatically when they are not in use.</p>

<h3>Security</h3>

<div style="padding: 10px; float:right">
  <p>
    <img src="https://mbed.org/assets/uploads/mbed_feature_symbol_security.png"
    alt="Security" title="Security">
  </p>
</div>
<p>When you are building connected devices, security is not an optional feature.
  Yet, without access to the trusted libraries you need or the standard security
  patterns you should use, it is hard to know how to get it right. Using
  IP helps us a lot as the models of end-to-end security of the web are well
  understood.</p>
<p>To avoid the various half-ports and implementation mistakes that mean
  you haven&apos;t really got the security you thought you had, we are going
  to be providing pre-integrated implementations of <a href="http://en.wikipedia.org/wiki/Datagram_Transport_Layer_Security"
  rel="nofollow">TLS</a> and <a href="http://en.wikipedia.org/wiki/Datagram_Transport_Layer_Security"
  rel="nofollow">DTLS</a> (a.k.a SSL) and how to use them so you can get your
  devices securely connected in a standard and trusted way.</p>
<p>We are also working on implementing the security schemes needed to securely
  bootstrap devices on to the network, and some really interesting technology
  to provide protection of things like keys and certificates within the device
  so they can&apos;t be leaked - something that will quickly become an essential
  requirement for connected devices.</p>

<h2>mbed Device Server</h2>

<div style="padding: 10px; float:right">
  <p>
    <img src="https://mbed.org/assets/uploads/icon_mbedds.png" alt="mbed Device Server"
    title="mbed Device Server">
  </p>
</div>
<p>This is a new thing we are working on to help make connected devices connected.
  We are building a scalable, industry strength Device Server that we can
  license to cloud and service providers to help them get IoT devices connected
  in to their platforms.</p>
<p>It is basically analogous to a Web Server that accepts connections from
  mobile phones or web browsers, but in this case, handles the connections
  from IoT devices and all the differences in protocols and behaviours they
  have.</p>
<p>It makes the devices accessible through standard REST APIs so they can
  be accessed by enterprise software, web applications and cloud stacks.
  So properly bringing the devices in to the world of the web.</p>

<h2>Release Roadmap</h2>

<p>To be clear, this is not something we are releasing now. We have been
  preparing the groundwork to start rolling this out since we really pressed
  go one year ago, but there is still a lot of work to do. We decided it
  was now the right time to share our plans, as our approach is an ecosystem
  one. This is something we are working on with a lot of partners, and a
  lot more still are aligning with what we are doing, so it is important
  to provide the visibility to allow the success and impact we want to achieve.</p>
<p>Our aim is to release a first proper version of mbed OS in a year, and
  we will be introducing early versions of components and functionality at
  alpha release milestones. You can find the mbed OS release schedule here:</p>
<p><a href="http://mbed.org/technology/os/">http://mbed.org/technology/os/</a>
</p>
<p>More information on the releases themselves as we go, but for the first
  one, expect some focus on Bluetooth Smart, 6LoWPAN mesh networking and
  our HAL!</p>

<h2>Team and Partners</h2>

<p>We have come a long way! You may not realise, but we have now setup as
  a totally new business unit in ARM, have whole floors to ourselves and
  locations around the world. And most importantly, been hiring some really
  smart people!</p>
<p>
  <img src="https://mbed.org/assets/uploads/teamweek.jpg" alt="Some of us together for a Summer Team Week in Cambridge"
  title="Some of us together for a Summer Team Week in Cambridge">
<em>Some of us together for a Summer Team Week in Cambridge</em>
</p>
<p>We are still growing fast, so if you think you should be part of the team,
  helping us on our mission, check out some of our latest <a href="http://mbed.org/about/jobs/">job postings</a>.</p>
<p>But to be clear, it hasn&apos;t been just our team working on this for
  a long time. This is something we&apos;re building in partnership with
  many other of the top tech companies. Yesterday, we held our invite-only
  mbed Connect event to go in to more details with some of these top companies;
  this year we had to make space for over 150! It was also very rewarding
  to be able to share the list of launch partners who are signed up to work
  with us to make mbed a success for everyone:</p>
<p>
  <img src="https://developer.mbed.org/media/uploads/stevep/xpartners_1.png.pagespeed.ic.oxJ4O7m3c6.png"
  alt="ARM mbed partners" title="ARM mbed partners">
</p>

<h2>Conclusion</h2>

<p>I hope you are as excited about what I&apos;ve laid out here as I am,
  and we are looking forward to start rolling this out. Look out for more
  information later this year!</p>
<p>And if you didn&apos;t notice already, we have moved our developer site
  to a dedicated developer domain, and made way for a front end site to lay
  out our plans and partners for pushing mbed even further at the root
  <a
  href="http://mbed.org">http://mbed.org</a>. Everything should still work fine, but please tell
    us if you find things broken!</p>
<p>Thanks to everyone who has been part of the journey so far, and we looking
  forward to working with everyone to continue to take mbed further than
  we could have ever imagined!</p>
