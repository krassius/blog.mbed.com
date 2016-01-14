---
layout:         post-mbed-com
title:          "Controlling web apps with micro:bit via mbed Device Server"
date:           2015-09-18T12:00:00.000Z
author:         ojford
tags:
originalUrl:    http://blog.mbed.com/post/129343127347/controlling-web-apps-with-microbit-via-mbed
---

<p>
  As an intern with the ARM mbed team this summer, I’ve been
  working with <a href=
  "http://www.bbc.co.uk/programmes/articles/4hVG2Br1W1LKCmw8nSm9WnQ/introducing-the-bbc-micro-bit">
  micro:bit</a> and similar BLE-enabled mbed devices. In
  particular, I’ve been viewing them as resource-providers that an
  IoT-aware web app can use for control, displaying output, and so
  on. This experience has honestly taken me from ‘technically
  curious’, to ‘IoT believer’; in that which follows, I hope that I
  can motivate you to create some such web app too. Let others know
  in the in the forums if you do!
</p>
<p>
  <img src=
  "https://developer.mbed.org/media/cache/platforms/Front_Angle_1_No_Background.png.250x250_q85.jpg.pagespeed.ce.dwT1A7FwwR.jpg"
  alt="micro:bit">
</p>
<p>
  micro:bit has two momentary-action switches, and 25 LEDs. Using a
  standardised resource model, I can describe the device in a
  generic way as “here’s the stuff it has”, rather than something
  specific, like “micro:bit v1”. That’s a key requirement for the
  IoT: no easily outdated code like <code>if device_name in
  ['foo1', 'foo2', ..., 'bar99']</code>.
</p>
<p>
  For this resource model, I turned to the Open Mobile Alliance’s
  (OMA) <a href=
  "https://en.wikipedia.org/wiki/OMA_LWM2M">LightWeight
  Machine-to-Machine protocol</a>. LWM2M describes object types (of
  which there can be many instances) and the resources they may
  have. Perhaps a short JSON-like example will make it clearer:
</p>
<pre><code>
{
   3200:{
       0:{
           5500:STATE,
           5501:COUNT,
           5505:CTR_RESET
       },
       1:{
           5500:STATE,
           5501:COUNT,
           5505:CTR_RESET
       }
   }
}
</code></pre>
<p>
  This snippet describes a collection that has only one object
  type: <code>3200</code>, which is the LWM2M Object ID for a
  Digital Input. Beneath this we see there are two instances of
  this object type, indicated by the keys <code>0</code> and
  <code>1</code>.
</p>
<p>
  Sound familiar? This is approaching a description of a micro:bit!
  Delving one layer deeper, we see that each LWM2M Object Instance
  has three <em>resources</em> - indicated by their LWM2M Resource
  IDs of <code>5500</code> (state), <code>5501</code> (counter
  value), and <code>5505</code> (counter reset). The counter reset
  may seem slightly more abstract: it is an <em>executable</em>
  resource, while the others, as readable resources, are perhaps
  more intuitive.
</p>
<p>
  So my first task was to set up micro:bit or other mbed devices
  with this description of themselves; I did so over BLE, by
  mapping object <em>instances</em> to GATT Services, and their
  resources to GATT Characteristics. This allowed me to discover
  (if you’ll pardon the pun) a device’s LWM2M resources, simply by
  connecting to it and discovering all of its services.
</p>
<p>
  In order to keep it generic, I started by writing an
  <code>LWM2MObject</code> C++ class, and derived classes
  <code>LWM2MObject3200</code>, <code>LWM2MObject3201</code>
  (Digital Output - ah! LEDs!). Each mbed device then has a C++
  object for each such instance that is physically connected.
</p>
<p>
  So with a single, straightforward header file, I can target the
  nRF51 board:
</p>
<pre><code>
#include "PinNames.h"
#include "lwm2m-types.h"

#define NUM_3200_INST 2
#define NUM_3201_INST 2

const PinName lw3200Pin[NUM_3200_INST] = {
   BUTTON1,
   BUTTON2
};

const PinName lw3201Pin[NUM_3201_INST] = {
   LED1,
   LED2
};

#include "lwm2m-3200.h"
#include "lwm2m-3201.h"
</code></pre>
<p>
  Here all I’ve needed to do is define the number of instances of
  each Object ID I have available, and on which pins they reside -
  the mbed header <code>PinNames.h</code> makes this part
  super-easy. Then I simply <code>#include</code> the LWM2M headers
  with the relevant LWM2M Object classes, and that’s it! LWM2M for
  a new mbed target.
</p>
<p>
  Even <code>main.cpp</code> only requires changing a single line:
  <code>#include "lwm2m-nrf51"</code>. It then configures as many
  LWM2M Objects - and interactions with them from BLE callbacks -
  as the header says it has, <em>at compile-time</em>. At run-time,
  it simply starts advertising, and then begins the event loop.
</p>
<p>
  Using Nordic Semiconductor’s mobile app reveals the four
  services, their available characteristics, and the correct
  read/write/notify properties. Awesome!
</p>
<p>
  <img src="http://i.imgur.com/EwUWnor.png" alt=
  "nRF Master Control Panel screenshot">
</p>
<p>
  Next up, I needed to <em>connect</em> this somehow. Having a
  bunch of resources available over BLE is great, but I’m interning
  in IoT, not “BLEoT”! So I took a look at the <a href=
  "http://www.mbed.com/en/development/cloud/mbed-device-server/">mbed
  Device Server</a> (mDS).
</p>
<p>
  mDS facilitates authenticated HTTP access to IoT devices that
  interact with it over the <a href="http://">Constrained
  Application Protocol</a> (CoAP): a lighter weight protocol
  modelled after HTTP for - you guessed it - constrained (power,
  memory) applications. Exactly what I needed to talk to my device
  from a web app.
</p>
<p>
  First, I needed to add a proxy layer to get my BLE device talking
  to mDS over CoAP, since the device has no IP connection of its
  own.
</p>
<p>
  Foreseeing another use later, I decided to split this into a
  library offering an abstract picture of an LWM2M device, and the
  proxy tool itself, which would use the library but consist
  chiefly of a CoAP server.
</p>
<p>
  I decided to write this library for Node.js, exporting an object
  with different types of peripherals - for now only
  <code>BLEPeripheral(uuid)</code> - but with the BLE
  implementation kept separate from the common API.
</p>
<p>
  To connect and crawl the device, I used <a href=
  "https://github.com/thegecko/bleat">Bleat</a> (BLE Abstraction
  Tool), a platform-independent BLE interface. On the device, I’d
  encoded LWM2M Resource IDs in a GATT Characteristic Descriptor,
  and Object ID/instances in the GATT Service UUID - so it was
  straightforward to rebuild the LWM2M model in a JS object.
</p>
<p>
  With this in hand, I started on a CoAP server with the <a href=
  "https://github.com/mcollina/noble">noble</a> library. The server
  is then responsible for registering the device (along with all
  the resources my LWM2M peripheral library discovered), and
  servicing CoAP requests to read, write, or subscribe to resources
  from mDS. Such requests are proxied over BLE with an easy API
  like
  <code>peripheral.getLWM2MResource(3200,0,5500).read(dataHandlerFn)</code>
  thanks to the library I wrote earlier.
</p>
<p>
  Great! So now my Thing is on the Internet! Much closer to being
  able to write that web app. Actually, this is sufficient - mDS
  offers an HTTP web interface to access <em>endpoints</em> (each
  micro:bit, or mbed device) and their resources. But I wanted to
  write this application with a view of an LWM2M device, rather
  than the (even more generic, in a way) CoAP/mDS picture of an
  endpoint and resources on it identified by their path/URI.
</p>
<p>
  Thankfully, LWM2M specifies a URI scheme composed as
  <code>'{object id}/{object instance}/{resource id}'</code>. This
  is how mDS accesses my CoAP server, and will also allow me to
  rebuild that LWM2M resource model.
</p>
<p>
  This was my reason for library-fying the peripheral abstraction
  earlier - I now wanted to add another peripheral type to abstract
  LWM2M endpoints on mDS.
</p>
<p>
  But first, another library. <em>Library all the things</em>. I
  thought a Node.js library for accessing endpoints and their
  resources on mDS would be handy whether or not the endpoint held
  an LWM2M representation; so I wrote this first with an API devoid
  of the phrase ‘LWM2M’, and then used it to add a new peripheral
  type.
</p>
<p>
  This is less confusing than it sounds. Really, the new
  <code>ConnectorPeripheral</code> is just a wrapper around the
  Connector library to fetch all resources on the given endpoint
  (just like <code>BLEPeripheral</code> fetches all services and
  characteristics on a device of a given UUID). Then it constructs
  the LWM2M resource model by splitting CoAP URIs on
  <code>'/'</code>. By the reverse process, it can turn LWM2M
  Resource-driven API calls into Connector-library API calls with a
  supplied URI.
</p>
<p>
  <img src="http://i.imgur.com/waxIFKo.png" alt="diagram">
</p>
<p>
  Finally, time for the web app. For a simple but pretty nifty
  demo, a tone matrix was suggested. This is a grid of clickable
  squares, and at a regular interval different tones on the
  pentatonic scale are played, corresponding to those that have
  been enabled by a click.
</p>
<p>
  <img src="http://i.imgur.com/qY9h9dP.png" alt="Tone Matrix">
</p>
<p>
  I’ll happily admit that I don’t know much at all about music -
  certainly not what constitutes a 'pentatonic scale’ - so I was
  glad to find <a href=
  "https://github.com/carlbarrdahl/tonematrix">carlbarrdahl/ToneMatrix</a>
  available on Github. Thanks, Carl!
</p>
<p>
  I forked Carl’s work and added a Node server to serve his static
  files and allow me to require my <code>ConnectorPeripheral</code>
  library. Then I added a socket.io event in each direction so my
  Node app could be aware of mouse-clicks on the web, and I could
  send device button-presses back.
</p>
<p>
  All that remained was to add the ability to attach an mDS
  endpoint to a particular square on the matrix. I set up a
  <code>PUT</code> route to <code>/register/{ROW}/{COL}</code>,
  with the headers <code>MDS_HOST</code>, <code>MDS_DOMAIN</code>,
  <code>MDS_AUTH</code>, and <code>MDS_ENDPOINT</code>.
</p>
<p>
  These four headers in a registration request are all that the web
  app needs in order to attach multiple micro:bits to different
  squares on the matrix. They can not only belong to different
  people (domains, authentications), but also be on different mDS
  hosts.
</p>
<p>
  Once attached, all I have to do is <code>getLWM2MResource(3200,
  5500)</code> to find a Digital Input’s State resource, and then
  call its <code>notify</code> method with a function that sends
  the <code>’device-toggle'</code> event over <a href=
  "http://socket.io/docs/">socket.io</a> to the front-end.
  Similarly, I call a Digital Output’s State resource’s
  <code>write</code> method on <code>'web-toggle'</code> event
  <em>from</em> the front-end.
</p>
<p>
  That’s it! <code>ToneMatrix</code> controlled by a micro:bit over
  BLE, CoAP, and HTTP from mbed Device Server.
</p>
<p>
  I’ve had a great summer here at ARM mbed, and have enjoyed using
  mbed Device Server to create an IoT-aware web app. I am shortly
  heading back to university, but look forward to seeing more IoT
  projects shared on <a href="http://forums.mbed.com/">the mbed
  forums</a>!
</p>
