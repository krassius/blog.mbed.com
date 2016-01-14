---
layout:         post-mbed-org
title:          "mbed.org cloud now being served from mbed Microcontrollers!"
date:           2010-04-20T22:21:11.000Z
author:         Chris Styles
tags:           mbed, webserver, website
originalUrl:    https://developer.mbed.org/blog/entry/128/
---

<p>
  You may have noticed some slight disruption on the website last
  night, here is why. After a few weeks of planning, research and
  development, we've finally bought up an array of 10 mbeds to
  serve the mbed cloud.
</p>
<p>
  One of mbeds earliest mantras is "eat your own dog food", a
  philosophy that has lead to us developing the core mbed libraries
  within the online compiler and&nbsp;the site from within itself.
</p>
<p>
  After some great work done&nbsp;by the mbed community, most
  notably Rolf Meyer's HTTPServer and Igor Skochinsky's USB Host
  mass storage class, it became technically feasible to serve the
  mbed website from mbed hardware. The opportunity to eat our own
  dog food again proved too tempting.
</p>
<h3>
  Setup
</h3>
<p>
  It was clear that the mbed array needed a little assistance, and
  so a commercial load balancer was used to distribute the incoming
  request amoung the 4 webservers. Each server has it's own 16Gb
  USB Flash drive attached, and is dedicated to serving specific
  content, namely Web/Forum/Blog, the compiler, users A-K, users
  L-Z.
</p>
<p>
  The remaining 6 mbeds are used as parallel processing nodes, each
  one containing the same library of standard tasks needed to keep
  the infrastructure going. The webservers&nbsp;break down&nbsp;the
  requests into serialised sub-tasks and farms them to the nodes,
  which are all hooked up essentially in parallel.
</p>
<p>
  The initial setup employs AA NiMH batteries as the power source,
  which means&nbsp;UPS functionality is provided by design.
</p>
<h3>
  Installation
</h3>
<p>
  The existing infrastructure remains in place during this
  experiment so we can switch back quickly if there are any
  hiccups.
</p>
<p>
  <img alt="" height="320" src=
  "http://mbed.org/media/uploads/chris/small_dscf5101.jpg" width=
  "240">
</p>
<p>
  We unpacked the prebuilt and pretested breadboard based system
  that makes up&nbsp;the new server cluster. If the experiment goes
  well, this will be turned into a proper PCB implementation, with
  clusters of&nbsp;16 mbeds.
</p>
<p>
  <img alt="" height="240" src=
  "http://mbed.org/media/uploads/chris/small_dscf5108.jpg" width=
  "320">
</p>
<p>
  The assembly was moved into position in the rack.
</p>
<p>
  <img alt="" height="240" src=
  "http://mbed.org/media/uploads/chris/small_dscf5097.jpg" width=
  "320">
</p>
<p>
  Cliff the IT guy was drafted in, partly to make sure we didn't
  unplug stuff we shouldn't, but also to help hook it all up,
  ensure there were enough network ports, power ports and so on.
</p>
<p>
  <img alt="" height="240" src=
  "http://mbed.org/media/uploads/chris/small_dscf5116.jpg" width=
  "320">
</p>
<p>
  The array of mbeds is installed, the four webserver/disks visible
  to the right, and the six nodes visible on the left. There is
  nothing left to do but power it up....
</p>
<p>
  <img alt="" height="240" src=
  "http://mbed.org/media/uploads/chris/small_dscf5124.jpg" width=
  "320">
</p>
<p>
  In thier new home, the development board powers up and is all
  looking good. There are a few anomilies with IP addresses which
  are soon resolved. The mbeds are reporting over their USB serial
  ports that they are functional.&nbsp;Last step is to flick the
  switch that tells the load balancer where to point incoming
  traffic to.
</p>
<p>
  <object data="http://www.youtube.com/v/n1C6eiZT1LE" height="350"
  type="application/x-shockwave-flash" width="425">
    <param name="data" value=
    "http://www.youtube.com/v/n1C6eiZT1LE">
    <param name="src" value="http://www.youtube.com/v/n1C6eiZT1LE">
  </object> &nbsp;
</p>
<p>
  Success!
</p>
<h3>
  Conclusion
</h3>
<p>
  If it all runs well, we'll&nbsp;start work on&nbsp;PCB of mbeds
  that will have a backplane architecture so it&nbsp;can scale with
  the site.
</p>
<p>
  The final architecture we're aiming to implement is :
</p>
<p>
  <img alt="" height="282" src=
  "http://mbed.org/media/uploads/chris/mbedclusters.png" width=
  "411">
</p>
<p>
  &nbsp;
</p>
<p>
  The clusters will be broken down on a per function basis, so the
  clustering is hierarchical. We'll also look to make the load
  balancers based on mbed, so only the border router is dedicated
  non-mbed hardware.
</p>
<p>
  There is a lot of work to be done still, but this is a great
  first step.
</p>
<p>
  The changeover went a lot smoother than expected, and the mbed
  cloud is handling the traffic quite well.
</p>
<p>
  Of course, there are both pros and cons to the new setup.
</p>
<p>
  Pros:
</p>
<ul>
  <li>Adding nodes to the mbed cloud is cheap and easy
  </li>
  <li>USB stick storage is solid state - means no risk of disk
  failure
  </li>
  <li>Near zero boot time for servers!
  </li>
</ul>
<p>
  Cons:
</p>
<ul>
  <li>The actual CPU power available has been reduced, so try to
  not make unnecessary compiles. Also, excessive compiles will run
  our batteries down faster
  </li>
  <li>The batteries will inevitably eventually run flat, and
  unfortunately the website will be unavailable while we recharge
  them
  </li>
</ul>

