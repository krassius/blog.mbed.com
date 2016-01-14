---
layout:         post-mbed-org
title:          "HTML5 for Microcontrollers!"
date:           2011-10-30T18:01:26.000Z
author:         Simon Ford
tags:           
originalUrl:    https://developer.mbed.org/blog/entry/HTML5-for-Microcontrollers/
---

<p>
  HTML5 already holds some pretty exciting prospects for web
  application developers, but there is no reason why it should stop
  there. If you can get microcontrollers to start talking the same
  language too, the opportunities for the Internet of Things
  enabled by HTML5 could be amazing!
</p>
<p>
  This project shows an early glimpse of how you can build Internet
  of Things sensors with mbed that can be quickly deployed using
  just a smartphone, and transmit their real-time sensor data to a
  server that can be visualised on different clients, all using
  these new HTML5 web standards:
</p>
<div class="flex-video">
  <iframe width="420" height="315" src=
  "https://www.youtube.com/embed/ie6cKRPf4kQ" frameborder="0"
  allowfullscreen="allowfullscreen"></iframe>
</div>
<p>
  You can see immediately from the demo just how natural the
  deployment and interaction feel, and why HTML5 could be a key
  enabler in the Internet of Things.
</p>
<h2>
  The hardware
</h2>
<p>
  The mbed Microcontroller reads it's attached sensors and sends
  the real-time data to a server over Wifi using HTML5 Websockets.
  In our case, the messages are simple JSON messages to a simple
  websockets server hub.
</p>
<p>
  This example uses the new <a href="/handbook/m0-release">mbed
  Cortex-M0 beta</a> to make battery-powered prototypes of sensors
  communicating via wifi:
</p>
<p>
  <img src=
  "https://developer.mbed.org/media/uploads/simon/sensor-prototype.png"
  alt="/media/uploads/simon/sensor-prototype.png" title=
  "/media/uploads/simon/sensor-prototype.png">
</p>
<p>
  Of course, the same concept works over any transport, such as
  using the mbed NXP LPC1768 built-in Ethernet to make wired
  websockets connections.
</p>
<h2>
  Viewing the data stream on a web page
</h2>
<p>
  The real time data from any sensor can be viewed on any client
  using HTML5 Canvas just by subscribing to the stream:
</p>
<p>
  <img src=
  "https://developer.mbed.org/media/uploads/simon/sensor-prototype-demo.png"
  alt="/media/uploads/simon/sensor-prototype-demo.png" title=
  "/media/uploads/simon/sensor-prototype-demo.png">
</p>
<p>
  This is just an example - the clients for this data can range
  from simple viewers such as this that just display the data they
  see, to complex databases, filters and triggers; anything that
  can listen on a websocket connection.
</p>
<h2>
  The code
</h2>
<p>
  As an overview, here is the main C/C++ code running on the mbed
  microcontroller that makes it all work:
</p>
<div class="flashbox fprogram">
  <h4 class="ftitle">
    <a class="button small radius" style=
    "font-weight: bold; position: relative; float: right;" href=
    "https://developer.mbed.org/compiler/#import:/users/samux/code/websockets_hello_world_wifi/"
    target="compiler">Import program</a><a href=
    "/users/samux/programs/websockets_hello_world_wifi/latest/docs/main_8cpp_source.html">
    <div class="wiki-api-header">
      <a href=
      "/users/samux/code/websockets_hello_world_wifi/docs/7b9912c6d812/main_8cpp_source.html">
      websockets_hello_world_wifi - main.cpp</a>
    </div></a>
  </h4>
  <div>
    <div class="wiki-api-snippet">
      <div class="contents">
        <div class="fragment">
          <pre class="fragment">
<a name="l00001" id="l00001"></a><span class=
"linenumber">00001 </span><span class=
"preprocessor">#include "mbed.h"</span>
<a name="l00002" id="l00002"></a><span class=
"linenumber">00002 </span><span class=
"preprocessor">#include "Wifly.h"</span>
<a name="l00003" id="l00003"></a><span class=
"linenumber">00003 </span><span class=
"preprocessor">#include "Websocket.h"</span>
<a name="l00004" id="l00004"></a><span class=
"linenumber">00004 </span>
<a name="l00005" id="l00005"></a><span class=
"linenumber">00005 </span>DigitalOut l1(LED1);
<a name="l00006" id="l00006"></a><span class=
"linenumber">00006 </span>
<a name="l00007" id="l00007"></a><span class=
"linenumber">00007 </span><span class=
"comment">//Here, we create an instance, with pins 9 and 10 connecting to the</span>
<a name="l00008" id="l00008"></a><span class=
"linenumber">00008 </span><span class=
"comment">//WiFly's TX and RX pins, and pin 21 to RESET. We are connecting to the</span>
<a name="l00009" id="l00009"></a><span class=
"linenumber">00009 </span><span class=
"comment">//"mbed" network, password "password", and we are using WPA.</span>
<a name="l00010" id="l00010"></a><span class=
"linenumber">00010 </span>Wifly wifly(p9, p10, p21, <span class=
"stringliteral">"mbed"</span>, <span class=
"stringliteral">"password"</span>, <span class=
"keyword">true</span>);
<a name="l00011" id="l00011"></a><span class=
"linenumber">00011 </span>
<a name="l00012" id="l00012"></a><span class=
"linenumber">00012 </span><span class=
"comment">//Here, we create a Websocket instance in 'rw' (read-write) mode</span>
<a name="l00013" id="l00013"></a><span class=
"linenumber">00013 </span><span class=
"comment">//on the 'samux' channel</span>
<a name="l00014" id="l00014"></a><span class=
"linenumber">00014 </span>Websocket ws(<span class=
"stringliteral">"ws://sockets.mbed.org/ws/samux/rw"</span>, &amp;wifly);
<a name="l00015" id="l00015"></a><span class=
"linenumber">00015 </span>
<a name="l00016" id="l00016"></a><span class=
"linenumber">00016 </span>
<a name="l00017" id="l00017"></a><span class=
"linenumber">00017 </span><span class=
"keywordtype">int</span> main() {
<a name="l00018" id="l00018"></a><span class=
"linenumber">00018 </span>    <span class=
"keywordtype">char</span> recv[40];
<a name="l00019" id="l00019"></a><span class=
"linenumber">00019 </span>
<a name="l00020" id="l00020"></a><span class=
"linenumber">00020 </span>    <span class=
"keywordflow">while</span> (1) {
<a name="l00021" id="l00021"></a><span class=
"linenumber">00021 </span>
<a name="l00022" id="l00022"></a><span class=
"linenumber">00022 </span>        <span class=
"comment">//we connect the network</span>
<a name="l00023" id="l00023"></a><span class=
"linenumber">00023 </span>        <span class=
"keywordflow">while</span> (!wifly.join()) {
<a name="l00024" id="l00024"></a><span class=
"linenumber">00024 </span>            wifly.reset();
<a name="l00025" id="l00025"></a><span class=
"linenumber">00025 </span>        }
<a name="l00026" id="l00026"></a><span class=
"linenumber">00026 </span>
<a name="l00027" id="l00027"></a><span class=
"linenumber">00027 </span>        <span class=
"comment">//we connect to the websocket server</span>
<a name="l00028" id="l00028"></a><span class=
"linenumber">00028 </span>        <span class=
"keywordflow">while</span> (!ws.connect());
<a name="l00029" id="l00029"></a><span class=
"linenumber">00029 </span>
<a name="l00030" id="l00030"></a><span class=
"linenumber">00030 </span>        <span class=
"keywordflow">while</span> (1) {
<a name="l00031" id="l00031"></a><span class=
"linenumber">00031 </span>            wait(0.5);
<a name="l00032" id="l00032"></a><span class=
"linenumber">00032 </span>
<a name="l00033" id="l00033"></a><span class=
"linenumber">00033 </span>            <span class=
"comment">//Send Hello world</span>
<a name="l00034" id="l00034"></a><span class=
"linenumber">00034 </span>            ws.send(<span class=
"stringliteral">"Hello World! over Wifi"</span>);
<a name="l00035" id="l00035"></a><span class=
"linenumber">00035 </span>
<a name="l00036" id="l00036"></a><span class=
"linenumber">00036 </span>            <span class=
"comment">// if a message is available, print it</span>
<a name="l00037" id="l00037"></a><span class=
"linenumber">00037 </span>            <span class=
"keywordflow">if</span> (ws.read(recv)) {
<a name="l00038" id="l00038"></a><span class=
"linenumber">00038 </span>                <span class=
"comment">// show that we receive messages</span>
<a name="l00039" id="l00039"></a><span class=
"linenumber">00039 </span>                l1 = !l1;
<a name="l00040" id="l00040"></a><span class=
"linenumber">00040 </span>            }
<a name="l00041" id="l00041"></a><span class=
"linenumber">00041 </span>        }
<a name="l00042" id="l00042"></a><span class=
"linenumber">00042 </span>    }
<a name="l00043" id="l00043"></a><span class=
"linenumber">00043 </span>}
</pre>
        </div>
      </div>
    </div>
  </div>
</div>
<p>
  Hopefully that gives a good feel for how quickly these prototypes
  can be put together.
</p>
<p>
  The technology is coming, so it is now just up to you to create
  the killer apps! For all the dirty details of how to build it to
  get you on your way, see:
</p>
<ul>
  <li>
    <a href="/cookbook/IOT">Internet of Things in the mbed
    Cookbook</a>
  </li>
</ul>

