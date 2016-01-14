---
layout:         post-mbed-org
title:          "Full debugging interface on mbed-enabled platforms!What is CMSIS-DAP?Why the need for CMSIS-DAP?How CMSIS-DAP can be integrated?Overview of the CMSIS-DAP standardExample: Read memory over CMSIS-DAPUse CMSIS-DAP to debug your projects"
date:           2013-04-02T16:32:49.000Z
author:         Samuel Mokrani
tags:           CMSIS-DAP, FRDM-KL25Z, JTAG, keil, mbed, MDK, SWD
originalUrl:    https://developer.mbed.org/blog/entry/Debugging-on-mbed-enabled-platforms/
---

<div style="padding: 10px; float:right">
  <p>
    <img width="450" alt="800" title="800" src="https://developer.mbed.org/media/uploads/samux/uvision_debug_lpc1768.png.pagespeed.ce.F0sROGiJ3r.png">
  </p>
</div>
<p>We are pleased to announce we have added CMSIS-DAP support to the mbed
  HDK firmware for the following targets:</p>
<ul>
  <li><strong>mbed NXP LPC1768</strong>

  </li>
  <li><strong>mbed NXP LPC11U24</strong>

  </li>
  <li><strong>FRDM-KL25Z</strong>

  </li>
</ul>
<p>The new firmware upgrade, in addition to a drag n drop flash programming
  and a virtual serial port interface, <strong>provide a CMSIS-DAP interface in order to fully debug your platform</strong> for
  tools that support the CMSIS-DAP protocol.</p>
<p>This, combined with the exporting to toolchain features, means if and
  when you transition to a full debug toolchain as part of productisation,
  you don&apos;t need to change your hardware to:</p>
<ul>
  <li><strong>set breakpoints</strong> to stop the program at some event or at
    a specified instruction to examine the current state</li>
  <li><strong>step by step execute</strong> a program to track the control flow</li>
  <li><strong>check variables</strong> values</li>
  <li><strong>inspect and modify memory</strong> contents</li>
</ul>
<p>You can now upgrade your board very easily to support full CMSIS-DAP debug.
  Just select your board and follow the instructions:</p>
<ul>
  <li><strong><a href="https://mbed.org/handbook/Firmware">Firmware upgrade</a></strong>

  </li>
</ul>
<p>Whilst the Online IDE doesn&apos;t support a debugger, here is an example
  of using this new feature with uVision MDK:</p>
<ul>
  <li><strong><a href="http://mbed.org/handbook/CMSIS-DAP-MDK">mbed CMSIS-DAP interface with Keil MDK</a></strong>

  </li>
</ul>
<p>In this post, I would like to explain in more detail how CMSIS-DAP works.</p>
 <h2>What is CMSIS-DAP?</h2>

<p>CMSIS-DAP provides a standardized way to access the Coresight Debug Access
  Port (DAP) of an ARM Cortex microcontroller via USB. CMSIS-DAP is generally
  implemented as an on-board interface chip, providing direct USB connection
  from a development board to a debugger running on a host computer on one
  side, and over JTAG (Joint Test Action Group) or SWD (Serial Wire Debug)
  to the target device to access the Coresight DAP on the other.</p>

<h2>Why the need for CMSIS-DAP?</h2>

<p>Before the CMSIS-DAP standard, a lot of USB wigglers implemented their
  own protocols. With this configuration, the host debugger has to be aware
  of these different protocols and has to implement all of them, which produces
  a lot of fragmentation and re-inventing the wheel. At the same time, the
  protocols were usually defined at the JTAG level, meaning they are slow.
  CMSIS-DAP provides a standardised interface for debuggers that is defined
  at the Coresight DAP level, allowing for a standard interface and fast
  driverless implementations.</p>

<h2>How CMSIS-DAP can be integrated?</h2>

<p>The CMSIS-DAP firmware has been implemented as part of the <a href="/handbook/mbed-HDK">mbed HDK</a>.
  In addition to the existing Mass Storage and the Virtual Serial port interfaces,
  a new HID endpoint is used to establish a CMSIS-DAP communication with
  a debugger. We chose to use a HID communication as HID drivers are built-in
  in all Operating Systems, there is no need for a specific driver to be
  installed on the host computer.</p>
<p>
  <img src="https://developer.mbed.org/media/uploads/samux/cmsis-dap-6.png"
  alt="/media/uploads/samux/cmsis-dap-6.png" title="/media/uploads/samux/cmsis-dap-6.png">
</p>
<p>This means all mbed-enabled boards now have CMSIS-DAP built in (even ones
  already sold via a firmware upgrade), and if you implement the mbed HDK
  as part of your own development board or product, CMSIS-DAP will be freely
  available on that too!</p>

<h2>Overview of the CMSIS-DAP standard</h2>

<p>Packets are exchanged between the host debugger and the Interface Chip.
  Basically, the host sends a command and the debug unit sends the response
  of the command.</p>
<p>Different types of commands can be issued by the host:</p>
<ul>
  <li><strong>General Commands</strong>: request information and control the
    debug unit. Also used to connect/disconnect the debug unit.</li>
  <li><strong>Common SWD/JTAG commands</strong>: used for instance to set the
    clock speed</li>
  <li><strong>SWD specific commands</strong>: configure the parameters for SWD
    mode</li>
  <li><strong>JTAG specific commands</strong>: configure the JTAG device chain</li>
  <li><strong>Transfer Commands</strong>: read/write <a href="http://www.arm.com/products/system-ip/coresight/index.php"
    rel="nofollow">CoreSight</a> registers. These commands are independent of
    the transport (SWD or JTAG)</li>
</ul>

<h2>Example: Read memory over CMSIS-DAP</h2>

<p>Let&apos;s say that a debugger needs to read the value at a specific location
  in memory. The following commands have to be sent by the host:</p>
<ul>
  <li><strong>Transfer Command</strong>: write the <strong>CSW register</strong> (Control/Status
    Word Register). This will configure the transfer (32bits/16bits/8bits transfer)</li>
  <li><strong>Transfer Command</strong>: write the <strong>TAR register</strong> (Transfer
    Address Register) with the address of the memory location</li>
  <li><strong>Transfer Command</strong>: read the <strong>DRW register</strong> (Data
    Read/Write register) to read the value at the location specified earlier</li>
</ul>

<h2>Use CMSIS-DAP to debug your projects</h2>

<p>To use it, you just need to update the firmware on your board (don&apos;t
  worry, it is easily upgraded and reverted) and connect with a CMSIS-DAP
  compliant toolchain. We&apos;ve been using MDK as one of our test toolchains
  which has CMSIS-DAP support in it publicly from MDK uVision 4.60. To find
  out more about enabling your board with CMSIS-DAP, installing Keil MDK
  and debugging your first applications, please see the following page:</p>
<ul>
  <li><strong><a href="/handbook/CMSIS-DAP-MDK">Try mbed CMSIS DAP for MDK</a></strong>

  </li>
</ul>
<p>We&apos;ll be announcing more supported toolchains and scripts as they
  become available!</p>
