---
layout:         post-mbed-org
title:          "Debugging from GDB using pyOCD!Use python to control your mbed platformUse GDB to debug your mbed projects"
date:           2013-04-05T16:19:56.000Z
author:         Samuel Mokrani
tags:           CMSIS-DAP, mbed, python, USB
originalUrl:    https://developer.mbed.org/blog/entry/Debugging-from-GDB-using-pyOCD/
---

<p>We are pleased to release a python library which allows to drive the Debug
  Access Port of Cortex-M microcontrollers over CMSIS-DAP!</p>

<h1>What can be achieved with pyOCD?</h1>

<ul>
  <li>Debugging using GDB, as a gdbserver is integrated on the library</li>
  <li>Writing python applications that can communicate with the CMSIS-DAP and
    coresight debug interface:
    <ul>
      <li>read/write memory</li>
      <li>read/write core registers</li>
      <li>set breakpoints</li>
      <li>flash new binary</li>
      <li>run/stop/step the execution</li>
    </ul>
  </li>
  <li>Act as a great reference to show how the CMSIS-DAP protocol works</li>
</ul>
<p>Currently, the library works on Windows (using pyWinUSB as backend) and
  on Linux (using pyUSB as backend).</p>
 <h1>Quick overview</h1>


<h2>Use python to control your mbed platform</h2>

<div class="flashbox fcode">
  <h4 class="ftitle"> </h4><pre class="mbed-code" offset="0">from pyOCD.board import MbedBoard

board = MbedBoard.chooseBoard()

target = board.target
flash = board.flash

target.resume()
target.halt()
print &quot;pc: 0x%X&quot; % target.readCoreRegister(&quot;pc&quot;)
    pc: 0xA64

target.step()
print &quot;pc: 0x%X&quot; % target.readCoreRegister(&quot;pc&quot;)
    pc: 0xA30

flash.flashBinary(&quot;binaries/l1_lpc1768.bin&quot;)

print &quot;pc: 0x%X&quot; % target.readCoreRegister(&quot;pc&quot;)
    pc: 0x10000000

target.reset()
target.halt()
print &quot;pc: 0x%X&quot; % target.readCoreRegister(&quot;pc&quot;)
    pc: 0xAAC

board.uninit()
</pre>
</div>
<h2>Use GDB to debug your mbed projects</h2>

<p>Before using GDB, a .elf file has to be generated with a GCC toolchain.</p>
<ul>
  <li>Python code to start a GDB server on port 3333</li>
</ul>
<div class="flashbox fcode">
  <h4 class="ftitle"> </h4><pre class="mbed-code" offset="0">from pyOCD.gdbserver import GDBServer
from pyOCD.board import MbedBoard

board = MbedBoard.chooseBoard()

# start gdbserver on port 3333
gdb = GDBServer(board, 3333)
</pre>
</div>
<ul>
  <li>Debug the target from GDB:</li>
</ul>
<div class="flashbox fcode">
  <h4 class="ftitle"> </h4><pre class="mbed-code" offset="0">arm-none-eabi-gdb l1_lpc1768.elf

&lt;gdb&gt; target remote localhost:3333
&lt;gdb&gt; load
&lt;gdb&gt; continue
</pre>
</div>
<h1>Get Started</h1>

<p><strong>All the source code is available on our <a href="https://github.com/mbedmicro/mbed/tree/master/workspace_tools/debugger" rel="nofollow">git repository</a></strong> under <strong>workspace_tools/debugger</strong>
</p>
<p>You can quickly get started with pyOCD by reading the README. It provides
  all the information that you need to know concerning the dependencies,
  installation and how to use the library. There are even some sample programs
  to get started even quicker!</p>

<h1>Conclusion</h1>

<p>pyOCD provides a simple and efficient solution to debug mbed platforms
  over CMSIS-DAP.</p>
<p>We expect quite soon the support of all the mbed platforms in OpenOCD
  as well. There is even a fork of OpenOCD adding CMSIS-DAP support:
<strong><a href="https://github.com/TheShed/OpenOCD-CMSIS-DAP/tree/cmsis-dap" rel="nofollow">cmsis-dap support in OpenOCD</a></strong>
</p>
<p>Have fun with pyOCD!</p>
