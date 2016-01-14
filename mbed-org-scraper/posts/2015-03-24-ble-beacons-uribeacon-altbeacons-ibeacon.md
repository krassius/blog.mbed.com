---
layout:         post-mbed-org
title:          "Understanding the different types of BLE BeaconsOverviewiBeaconAltBeaconURIBeacon (pronounced YUR-ee-BEE-kun)ConclusionTL;DR"
date:           2015-03-24T17:04:00.000Z
author:         Austin mbed
tags:           alt beacon, AltBeacon, beacon, BLE, iBeacon, URI Beacon, URIBeacon
originalUrl:    https://developer.mbed.org/blog/entry/BLE-Beacons-URIBeacon-AltBeacons-iBeacon/
---

<p>
  Bluetooth Low Energy (BLE) Beacons - there are several types
  available (URIBeacon, AltBeacon, iBeacon), each with their own
  standards and advantages. Some are open and free, some are closed
  and cost money. This article will cover the three main types of
  beacons available, their advantages, disadvantages, derivatives
  and some low level implementation details on how beacons work.
  Make sure to check out all the <a href=
  "http://developer.mbed.org/platforms/?connectivity=3">mbed
  enabled BLE platforms</a> that can be used as BLE Beacons.
</p>
<h2>
  Overview
</h2>
<p>
  Bluetooth Low Energy (BLE) has the ability to exchange data in
  one of two states: connected and advertising modes. Connected
  mode uses the Generic Attribute (GATT) layer to transfer data in
  a one-to-one connection. Advertising mode uses the Generic Access
  Profile (GAP) layer to broadcast data out to anyone who is
  listening. Advertising mode is a one-to-many transfer and has no
  guarantees about data coherence.
</p>
<p>
  BLE Beacons take advantage of the GAP advertising mode to
  broadcast data out in periodic, specially formatted advertising
  packets. Each type of beacon uses a custom specification to
  partition up the advertising data, giving it meaning. I'm going
  to take a look at the three existing types of beacons, URI
  Beacons, iBeacons, and AltBeacons. All beacon types are supported
  on <a href=
  "http://developer.mbed.org/teams/Bluetooth-Low-Energy/">the mbed
  BLE team page</a> and have example projects with documentation if
  you would like to try them out.
</p>
<h2>
  iBeacon
</h2>
<p>
  Apple’s iBeacon was the first BLE Beacon technology to come out,
  so most beacons take inspiration from the iBeacon data format.
  iBeacons are enabled in several of the Apple SDKs and can be read
  and broadcast from any BLE-enabled iDevice. The iBeacon is a
  proprietary, closed standard. There is a large ecosystem around
  iBeacons and a large pool of resources for developers, but you
  have to be part of Apple’s developer community.
</p>
<h3>
  Data Spec
</h3>
<p>
  iBeacons broadcast four pieces of information:
</p>
<ol>
  <li>A UUID that identifies the beacon.
  </li>
  <li>A Major number identifying a subset of beacons within a large
  group.
  </li>
  <li>A Minor number identifying a specific beacon.
  </li>
  <li>A TX power level in 2's compliment, indicating the signal
  strength one meter from the device. This number must be
  calibrated for each device by the user or manufacturer.
  </li>
</ol>
<p>
  A scanning application reads the UUID, major number and minor
  number and references them against a database to get information
  about the beacon; the beacon itself carries no descriptive
  information - it requires this external database to be useful.
  The TX power field is used with the measured signal strength to
  determine how far away the beacon is from the smart phone. Please
  note that TxPower must be calibrated on a beacon-by-beacon basis
  by the user to be accurate.
</p>
<p>
  <img src=
  "https://developer.mbed.org/media/uploads/mbedAustin/diagramredo.png"
  alt="/media/uploads/mbedAustin/diagramredo.png" title=
  "/media/uploads/mbedAustin/diagramredo.png">
</p>
<p>
  The iBeacon Prefix contains the hex data : 0x0201061AFF004C0215.
  This breaks down as follows:
</p>
<ul>
  <li>0x020106 defines the advertising packet as BLE General
  Discoverable and BR/EDR high-speed incompatible. Effectively it
  says this is only broadcasting, not connecting.
  </li>
  <li>0x1AFF says the following data is 26 bytes long and is
  Manufacturer Specific Data.
  </li>
  <li>0x004C is Apple’s Bluetooth Sig ID and is the part of this
  spec that makes it Apple-dependent.
  </li>
  <li>0x02 is a secondary ID that denotes a proximity beacon, which
  is used by all iBeacons.
  </li>
  <li>0x15 defines the remaining length to be 21 bytes (16+2+2+1).
  </li>
</ul>
<p>
  The remaining fields are rather self explanatory. The proximity
  UUID is a standard 16byte/128bit BLE UUID and is typically unique
  to a company. The major and minor numbers are used to denote
  assets within that UUID; common uses are major numbers being
  stores (so 65,536 stores possible) with minor numbers being
  individual tags within the stores (again 65,536 possible tags per
  store).
</p>
<h3>
  Examples
</h3>
<ol>
  <li>A coffee shop has iBeacons on a rack of coffee and by a
  register. When a customer walks in and gets close enough their
  coffee shop, a smartphone app sees the iBeacon, searches the
  coffee shop’s iBeacon database, recognizes the iBeacon as
  belonging to coffeeShop X, then sees there is a valid coupon for
  ground coffee, and notifies the user of the coupon.
  </li>
  <li>iDevices can broadcast an iBeacon. This can be used to
  automate check-ins at events and track movements throughout
  venues.
  </li>
  <li>See embedded device code on the <a href=
  "http://developer.mbed.org/teams/Bluetooth-Low-Energy/code/BLE_iBeacon/">
    mbed iBeacon device page.</a>
  </li>
</ol>
<p>
  This is an example of how to set up an iBeacon device to
  broadcast a UUID with major and minor numbers using the mbed
  BLE_API. Please note the tx power level should be user calibrated
  to the measurement as measured 1meter from the device.
</p>
<div class="flashbox fcode">
  <h4 class="ftitle">
    iBeacon_Example
  </h4>
  <pre class="mbed-code" offset="0">
#include "mbed.h"
#include "iBeaconService.h"
...
BLEDevice ble;
const uint8_t uuid[] = {0xE2, 0x0A, 0x39, 0xF4, 0x73, 0xF5, 0x4B, 0xC4,     // 16Byte UUID
                        0xA1, 0x2F, 0x17, 0xD1, 0xAD, 0x07, 0xA9, 0x61
                       };
uint16_t majorNumber = 1122;  // 2 byte major number
uint16_t minorNumber = 3344;  // 2 byte minor number
uint16_t txPower = 0xC8;      // 1 byte tx power level
...
int main(void){
    ...
    iBeaconService ibeacon(ble, uuid, majorNumber, minorNumber, txPower);
    ....
    while(1){
        ble.waitForEvent();
    }
}
</pre>
</div>
<h3>
  Thoughts
</h3>
<p>
  iBeacons are cool, widely supported, and because they're an Apple
  product everyone is working with them and the ecosystem is as
  robust as possible. The only limitation is that a database is
  required to give meaning to the iBeacon data. Without a database
  the UUIDs are meaningless. You can find the <a href=
  "http://developer.mbed.org/teams/Bluetooth-Low-Energy/code/BLE_iBeacon/">
  mbed iBeacon example here.</a>
</p>
<h3>
  Derivatives
</h3>
<p>
  A popular derivative is to replace the 0x004C code with a
  different company code, for example the 0x0059 that is assigned
  to Nordic Semiconductor. The <a href=
  "https://play.google.com/store/apps/details?id=no.nordicsemi.android.nrfbeacon"
  rel="nofollow">nRF Beacon</a> application and <a href=
  "https://www.nordicsemi.com/eng/Products/Bluetooth-Smart-Bluetooth-low-energy/nRF51822-Bluetooth-Smart-Beacon-Kit"
  rel="nofollow">nrf51822 Bluetooth Smart Beacon Kit</a> are
  examples of this.
</p>
<p>
  Some companies provide examples that don't explicitly use the
  iBeacon spec.
</p>
<h2>
  AltBeacon
</h2>
<p>
  AltBeacons is an open-spec, free beacon design provided by Radius
  Networks. It looks to be gaining some momentum. The AltBeacon
  spec seems to be a direct response to the closed source iBeacon
  spec that Apple is using; it covers the same functionality that
  an iBeacon has but is not company-specific. That said, it is not
  as widely supported (yet).
</p>
<p>
  It is worth noting that while iBeacons have 20 of 27 bytes
  available for user data (UUID+Major+Minor) the AltBeacons have 25
  of 28 bytes available (MFG ID, BeaconCode, BeaconID, MFG RSVD).
  This means there can be more data delivered per message.
</p>
<h3>
  Data Spec
</h3>
<p>
  The <a href="http://github.com/AltBeacon/spec" rel=
  "nofollow">AltBeacon spec</a> is 28bytes (26B are user
  modifiable). The first two bytes of the AltBeacon are not user
  modifiable but are set by the BLE stack. ADV Length is 0x1B and
  ADV Type is 0xFF; these will specify the length of the
  advertising data packet and the type as manufacturing data
  respectively. After that everything is up to the user and can be
  shoved into an advertising manufacturer data field. Note that in
  most cases the MFG ID will correlate to the Bluetooth Sig
  assigned numbers document.
</p>
<p>
  <img width="AltBeacon Spec]]" alt=
  "[[http://github.com/AltBeacon/spec" title=
  "[[http://github.com/AltBeacon/spec" src=
  "https://raw.githubusercontent.com/AltBeacon/spec/master/altbeacon-spec-exploded-view.png">
</p>
<h3>
  Examples
</h3>
<p>
  The same examples that are used for iBeacons apply to AltBeacons,
  with the following modifications:
</p>
<ol>
  <li>The ability to have different Manufacturer IDs.
  </li>
  <li>The ability to have different Beacon codes.
  </li>
  <li>The one byte of reserved data at the end that holds specific
  manufacturer information.
  </li>
</ol>
<p>
  With AltBeacon it becomes possible to have application-specific
  UUIDs rather than company-specific, giving the ability to change
  the company ID instead. While nothing is currently taking
  advantage of this, I can imagine beacons that broadcast the UUID
  for a beacon service, say for a temperature service, which would
  then provide the manufacturing company info and the temperature,
  in this way providing a temperature value that anyone who walks
  by can view.
</p>
<p>
  Here is an example of how to program an mbed enabled BLE platform
  to behave as an AltBeacon.
</p>
<div class="flashbox fcode">
  <h4 class="ftitle">
    AltBeacon_Example
  </h4>
  <pre class="mbed-code" offset="0">
#include "mbed.h"
#include "AltBeaconService.h"
...
BLEDevice ble;
uint8_t beaconID[] = {  0x00,0x01,0x02,0x03,0x04,0x05,0x06,0x07,0x08,0x09,     // 16B of UUID + 4B subdivided as needed.
                        0x10,0x11,0x12,0x13,0x14,0x15,0x00,0x01,0x00,0x02 };
uint16_t manufacturerID = 0x5900; //Nordic SIG ID
int8_t rssi = -122;
...
int main(void){
    ...
    AltBeaconService altbeacon(ble, manufacturerID, beaconID, rssi); // Add AltBeacon service to BLE object
    ...
    while(1){
        ble.waitForEvent();
    }
}
</pre>
</div>
<h3>
  Thoughts
</h3>
<p>
  AltBeacons have great possibilities. They make good use of the
  space they have, are more or less backwards compatible with
  iBeacons, and are open source. That said it is a very new spec,
  almost no one is using it yet, and it has an uphill battle to
  fight against the iBeacons’ market penetration. In time I think,
  more and more people will use AltBeacons simply because they can
  carry more data and have a wider use case - a cherry on the
  open-spec cake. You can find the <a href=
  "http://developer.mbed.org/teams/Bluetooth-Low-Energy/code/BLE_AltBeacon/">
  mbed AltBeacon example code here</a>.
</p>
<h2>
  URIBeacon (pronounced YUR-ee-BEE-kun)
</h2>
<p>
  URIBeacons are a <a href="https://github.com/google/uribeacon"
  rel="nofollow">Google project</a> that is part of their <a href=
  "http://google.github.io/physical-web/" rel="nofollow">Physical
  Web</a> initiative. The project seems to be under heavy
  development and likely to improve greatly over time. Right now
  URIBeacons are like iBeacons with a URL in the payload - this
  makes them very similar to QR codes that operate over BLE. They
  give short links to the internet via BLE advertising packets.
  This enables things like a movie poster that directs you to the
  movie’s website, or promotional codes at a coffee shop that
  direct you to a webpage with a coupon you can show the cashier.
</p>
<p>
  It is worth noting that unlike iBeacons and AltBeacons, which are
  used primarily as “set up once and leave running forever”,
  URIBeacons have a configuration service; they are meant to be
  updated with new information and change over time. Also, a
  database is required to give meaning to the data in iBeacons and
  AltBeacons, whereas with URIBeacons the whole internet is the
  database.
</p>
<h3>
  Data Spec
</h3>
<p>
  The <a href=
  "https://github.com/google/uribeacon/tree/master/specification"
  rel="nofollow">URIBeacon spec</a> uses 28B of the 31B available
  in an advertising packet. Of these 28 bytes,19 are used to encode
  the URI being sent. The prefix ('www.','<a href="http://'" rel=
  "nofollow">http://'</a>, etc) and suffix ('.org/','.com/', etc)
  are each encoded to a single byte. This saves space overhead, but
  has the unfortunate side effect of limiting what domains can be
  short-coded to those supported by the official specification.
  Currently only www addresses (both http and https) and UUIDs can
  be transmitted via a URIBeacon. Things like ssh: <em>and
  gopher:</em> are not supported. The suffix is also encoded to a
  single byte, but only if it is one of the well defined ones. This
  means a url of '<a href="http://www.google.com" rel=
  "nofollow">http://www.google.com</a>' would be encoded down to
  eight bytes, one for '<a href="http://www.'" rel=
  "nofollow">http://www.'</a>, six for 'google' and one for '.com'.
  For a full list of supported prefixes and suffixes you should see
  the official spec. If you use the supported prefixes, it is
  possible to have a URL of 17 characters (with one byte for the
  prefix and one byte for the suffix). It is worth noting that the
  URIBeacons are meant to be used with URL shortening services like
  <a href="http://goo.gl" rel="nofollow">goo.gl</a>, <a href=
  "http://bit.ly" rel="nofollow">bit.ly</a>, <a href=
  "http://tin.ly" rel="nofollow">tin.ly</a> which will shorten any
  long URL to eight to ten bytes.
</p>
<p>
  <img width="URIBeacon Specification]]" alt=
  "[[http://github.com/google/uribeacon/tree/master/specification"
  title=
  "[[http://github.com/google/uribeacon/tree/master/specification"
  src=
  "https://raw.githubusercontent.com/google/uribeacon/master/specification/uribeacon-figure.png">
</p>
<h3>
  Examples
</h3>
<ol>
  <li>Coupon code: A business has a URIBeacon that broadcasts a
  link to a coupon on the website. Customers follow the link and
  show the coupon to the cashier. Because the URIBeacon can be
  updated, it is possible to enable time-sensitive links. For
  example the coupons can show up only at a certain time of day.
  </li>
  <li>Interactivity: For interactive things, it is possible to have
  users follow a URIBeacon link to a webpage where they could
  control a third party service. For example, lights on an
  internet-connected display. In this case, the URIBeacons serve as
  a way to get users to the control webpage. This could also apply
  to interactive historical markers, or anything that could be
  enhanced by having web content attached to it.
  </li>
  <li>Games: Because URIBeacons are modifiable, they could be left
  open so anyone could modify them. Therefore lending an element of
  community participation or gamifying the experience to see who
  can control how many beacons.
  </li>
</ol>
<p>
  Here is an example of how to program an mbed enabled BLE platform
  to behave as a URIBeacon. Notice that the URIBeacon has the
  ability to load its data from persistant storage, making it
  possible to update over the air and change the URI it is
  broadcasting.
</p>
<div class="flashbox fcode">
  <h4 class="ftitle">
    URIBeacon_Example
  </h4>
  <pre class="mbed-code" offset="0">
#include "mbed.h"
#include "URIBeaconConfigService.h"
...
int main(void){
    ...
    URIBeaconConfigService::Params_t params;
    bool fetchedFromPersistentStorage = loadURIBeaconConfigParams(&amp;params);
    URIBeaconConfigService(ble, params, !fetchedFromPersistentStorage, "http://mbed.org", defaultAdvPowerLevels);
    ...
    while(1){
        ble.waitForEvent();
    }
}
</pre>
</div>
<h3>
  Thoughts
</h3>
<p>
  URIBeacons are a cool piece of tech. The fact that they don't
  rely on an external database to give meaning to the data they
  carry like iBeacons and AltBeacons dos mean they can be more
  useful with less overhead. At the moment, they are essentially
  BLE QR codes: just broadcasting short links to the internet and
  some other forms of data. However, I think that the future of
  URIBeacons is even more interesting. The possibility of sending
  data through GET requests using the BLE IP service (or BLIP, as I
  like to call it) and opening a bi-directional pipe of information
  from the URIBeacon to the internet enables using a web page to
  control the beacon. This means there will be no need for a
  special smartphone app for each application; just have the
  URIBeacon point to a website that controls it, and use a
  smartphone’s native browser to control the URIBeacon. I think
  this is the most interesting thing about URIBeacons is not what
  they do, but what they can do: be an enabler for a truly
  pervasive IoT ecosystem. You can find the <a href=
  "http://developer.mbed.org/teams/Bluetooth-Low-Energy/code/BLE_URIBeacon/">
  mbed URIBeacon example code here</a>.
</p>
<h2>
  Conclusion
</h2>
<p>
  Beacons are handy pieces of tech. The iBeacon and AltBeacon are
  very similar, and seem to be designed to be the same thing. The
  only differences are that iBecaons are closed source and widely
  supported, whereas AltBeacons are open source and still not
  widely used. Both broadcast a UUID and a couple of bytes of data
  specific to the device. iBeacons have slightly less space than
  AltBeacons and are more heavily regulated, but ultimately both
  are one-way communication methods, and both require an external
  database and a smartphone app (or smartphone background service)
  to be useful.
</p>
<p>
  URIBeacons are a different animal entirely. They broadcast data
  across the same channel as the other beacons, but that is where
  the similarity ends. URIBeacons hand out links to the internet.
  This enables them to link to more relevant content, and possibly
  context-aware content. In addition, URIBeacons are meant to be
  easily modifiable. Further, with the adoption of the BLE IP
  standard, it may be possible for a URIBeacon to talk to the
  internet through the receiving phone, meaning the URIBeacons can
  have a two-way communication channel. I believe URIBeacons are
  already the most useful of the beacon lot, and will become even
  more useful as the spec continues to evolve.
</p>
<h2>
  TL;DR
</h2>
<p>
  iBeacons and AltBeacons are almost the same thing: they broadcast
  a UUID from the beacon itself and use external databases to give
  beacons meaning. iBeacons are closed source, Apple-branded, and
  widely used; AltBeacons are open source and provide more data
  fields to use, but few people use them yet. URI Beacons are
  different: they don't require an external database, instead they
  use web links to either link to data directly or, in the future,
  possibly as a two-way communication method. That said there is a
  heavier app-side workload to URIBeacons as compared with iBeacons
  or AltBeacons. iBeacons are currently the most widely used, but I
  think URIBeacons have a great deal of untapped potentia and will
  become a driving force of IoT in the future.
</p>

