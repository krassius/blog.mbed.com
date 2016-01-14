---
layout:         post-mbed-org
title:          "pyOCD Binary Version"
date:           2014-08-08T17:32:07.000Z
author:         Martin Kojtal
tags:           pyOCD
originalUrl:    https://developer.mbed.org/blog/entry/pyOCD-Binary-Version/
---

<p>We have been working on creating an easier way for the mbed community
  to use the pyOCD library for programming and debugging the ARM&#xAE; Cortex&#xAE;-M
  microcontrollers using CMSIS-DAP. Here is an update on our work.</p>
<p>
  <br>
</p>
<p><strong>Driving force for this project:</strong>
</p>
<p>The pyOCD library provided by mbed is quite powerful. However, installing
  it manually on an OS can be very time consuming and error prone. Multiple
  Python libraries need to be configured and the mixture of 32-bit and 64-bit
  Python libraries can be troublesome for those who are not very familiar
  with Python.</p>
<p>So the above circumstances have been the driving force for our embedded
  toolchain group to start such a binary release project. Our aim is to provide
  a stable and standalone gdb server based on pyOCD, which can be used directly
  along with <a href="https://launchpad.net/gcc-arm-embedded/" rel="nofollow">our toolchain</a> without
  any installation and configure.</p>
<p><strong>Current development status:</strong>
</p>
<p>We are now posting a <a href="https://launchpad.net/gcc-arm-embedded-misc/pyocd-binary/"
  rel="nofollow">weekly release on Launchpad</a>. We have also established
  a daily test routine based on Jenkins to test the binary releases against
  <a
  href="http://mbed.org/platforms/mbed-LPC1768/">NXP&#x2019;s LPC1768</a>and <a href="http://mbed.org/platforms/FRDM-KL46Z/">Freescale&#x2019;s FRDM-KL46Z</a> platforms
    on Windows 7 32-bit/64-bit and Ubuntu 10.04 LTS.</p>
<p>Up till now, we have only supported Windows 7 and Linux because Mac OS
  has not been formally supported by pyOCD trunk. For the Linux release,
  we have only tested the pyOCD binary on debian based Linux distributions.
  We are looking for help to test on other Linux distributions and would
  greatly appreciate your feedback and help us out by reporting bugs to us.
  In addition, the build document to generate such a binary release has also
  been merged into <a href="https://github.com/mbedmicro/pyOCD/blob/master/HOW_TO_BUILD.md"
  rel="nofollow">pyOCD trunk on github</a>, developers are welcomed to have
  a try by themselves and improve this document.</p>
<p><strong>How to use it:</strong>
</p>
<p>If you have never used pyOCD to debug your project before, this part will
  teach you how to use this binary version to accelerate your development.</p>
<p><strong>Step 1:</strong> Preparing your project</p>
<ul>
  <li>mbed already provides quite a few example projects based on different
    toolchains. Let&#x2019;s export the <em>blinky</em> example using the ARM
    gnu embedded toolchain <a href="http://mbed.org/teams/mbed/code/mbed_blinky/export">http://mbed.org/teams/mbed/code/mbed_blinky/export</a> 
  </li>
  <li>You can download the toolchain at <a href="https://launchpad.net/gcc-arm-embedded"
    rel="nofollow">https://launchpad.net/gcc-arm-embedded</a>.</li>
</ul>
<p><strong>Step 2:</strong> Downloading your debug tool</p>
<ul>
  <li>Download the correct variant of our binary release at <a href="https://launchpad.net/gcc-arm-embedded-misc/pyocd-binary/"
    rel="nofollow">https://launchpad.net/gcc-arm-embedded-misc/pyocd-binary/</a>.</li>
  <li>Install gcc-arm-embedded, pyOCD binary and then unzip the example program</li>
</ul>
<p><strong>Step 3:</strong> Enjoying your debugging now!</p>
<ul>
  <li>Run pyocd_win.exe/pyocd_linux [options]</li>
</ul>
<p>We have already provided some flexible options like the server port number
  and board id to control the pyOCD, and feel free to add more useful options
  on the pyOCD trunk at <a href="https://github.com/mbedmicro/pyOCD/blob/master/test/gdb_server.py"
  rel="nofollow">/test/gdb_server.py</a>!</p>
<p>Build your project with the arm gnu embedded toolchain, and launch the
  pyOCD and gdb at the cmd line:</p>
<div class="flashbox fcode">
  <h4 class="ftitle"> </h4><pre class="mbed-code" offset="0">make clean all
arm-none-eabi-gdb *.elf
&lt;gdb&gt; target remote localhost:3333
&lt;gdb&gt; load
&lt;gdb&gt; continue
</pre>
</div>
<p><strong>Advantages of the new pyOCD binary version:</strong>
</p>
<ol>
  <li><strong>Ready to use:</strong>
The binary release will save developers
    quite a bit of time when configuring the development environment. For a
    developer working with the mbed platform, using <a href="https://launchpad.net/gcc-arm-embedded"
    rel="nofollow">ARM gnu embedded toolchain</a> along with the <a href="https://launchpad.net/gcc-arm-embedded-misc/pyocd-binary/"
    rel="nofollow">pyOCD binary release</a> that are both hosted on Launchpad
    can help a developer to start their work at any time and with any PC with
    USB interface. This is currently the most powerful combination of open
    source tools.</li>
  <li><strong>More powerful and flexible:</strong>
Before this project, pyOCD
    only had a simple test case named &#x2018;gdb_test.py&#x2019; to show the
    user how to use pyOCD as a gdb server, but actually the library provides
    more powerful function than the original test case presented. So a more
    powerful test case named &#x2018;gdb_server.py&#x2019; was introduced to
    the pyOCD trunk; the binary release is also based on this test case. Although
    it is still under development, it has already begun to provide users with
    additional accessible options to control the behavior of the pyOCD.</li>
  <li><strong>Brings more contributors to the pyOCD and mbed community:</strong>
A
    bonus of this type of binary release is that it can help to increase the
    number of pyOCD users. With the now easier to use pyOCD binary release,
    more developers should have a try on this cool gdb server, which will also
    bring about more user demands, such as wanting a faster pyOCD or providing
    more functions. This kind of user number increase will definitely bring
    about more developer contributions on pyOCD and hopefully the whole mbed
    community.</li>
</ol>
<p><strong>Look into the future:</strong>
</p>
<p>From my perspective pyOCD is still very young, but as it is newly designed
  based on python, it will have some unique advantages over other older debugging
  tools. Such a binary release project would be a good chance to see how
  pyOCD can step forward as a standalone debugging tool. As mbed is building
  its own ecosystem, it has already established its own cloud IDE, embedded
  OS, software framework, and also the debugging environment: CMSIS DAP +
  pyOCD. Therefore, a binary release project of pyOCD would also be a good
  starting point and chance for mbed to generalize the debugging interface
  of the entire ARM embedded target.</p>
