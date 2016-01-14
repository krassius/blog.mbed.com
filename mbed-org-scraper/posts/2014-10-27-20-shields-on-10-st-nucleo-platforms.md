---
layout:         post-mbed-org
title:          "20 Shields Supported on 10 ST Nucleo Platforms"
date:           2014-10-27T10:13:20.000Z
author:         Mihail Stoyanov
tags:           shields, ST, ST Nucleo, ST Nucleo F401RE
originalUrl:    https://developer.mbed.org/blog/entry/20-shields-on-10-st-nucleo-platforms/
---

<p>
  When <a href="/teams/ST">STMicroelectronics</a> joined mbed, they
  were very interested in code quality, shield form factor
  components and cross target compatibility. This lined up quite
  well with the development of the <a href=
  "/teams/SDK-Development/wiki/Mbed-SDK-automated-test-suite/">mbed
  automated test suite</a> and our <a href="/components/">component
  database</a> initiative - one solid library and example program
  for all platforms being developed by groups of people all around
  the world with similar interests.
</p>
<p>
  In fact, <a href="/teams/ST">ST</a> was the first to pioneer the
  use of the <a href=
  "/teams/SDK-Development/wiki/Mbed-SDK-automated-test-suite/">mbed
  automated test suite</a> for platform support development on mbed
  and through it set a quality acceptance criteria for a target
  support in the mbed SDK.
</p>
<p>
  Some months later, together with the <a href="/teams/ST">ST
  team</a>, we are happy to announce that 20 shields are now fully
  supported and tested across <a href="/platforms/?tvend=10">10 ST
  Nucleo platforms</a> on mbed. Here is a picture of the hardware
  used:
</p>
<p>
  <img src=
  "https://developer.mbed.org/media/uploads/screamer/x20_shields-_10_st_nucleo_v2.jpg,qv=2.pagespeed.ic.yNe06MGYxr.jpg"
  alt="/media/uploads/screamer/20_shields-_10_st_nucleo_v2.jpg?v=2"
  title=
  "/media/uploads/screamer/20_shields-_10_st_nucleo_v2.jpg?v=2">
</p>
<p>
  While working our way to support these, we noticed that some of
  the existing libraries have static pin definitions, supposedly
  from the original hardware they were developed on. Others contain
  leftover code from a non-mbed software kits/platforms that they
  were ported from. Also not all of them were well documented and
  some would have no documentation at all.
</p>
<p>
  We tracked how many of the existing component libraries are
  regularly maintained and what's the average time for a pull
  requests to be accepted for component libraries hosted under user
  (non-team) accounts. We have noticed that in some cases it would
  take weeks for a pull request to be accepted if the component
  library author is not around and this makes it hard to contribute
  and collaborate.
</p>
<p>
  On the hardware side, a small number of shields use a dedicated 6
  pin SPI connector, which is not implemented on most of the
  platforms on mbed and these shields require bridging between the
  6 pin SPI connector and D10-D13. Also other shields require
  similar bridging for PWM connectivity. Once identified these
  incompatibilities should be explained on the component pages, so
  everyone can implement the provided workaround (if any).
</p>
<p>
  This lead us to believe we have to set some ground rules to make
  it work for everyone:
</p>
<ul>
  <li>
    <strong>References</strong> - component libraries should
    contain no static peripheral code/references
  </li>
  <li>
    <strong>Routines</strong> - libraries should use the mbed SDK
    library methods/routines whenever possible
  </li>
  <li>
    <strong>Defines</strong> - hardware specific defines should be
    reduced to minimum and parameters should be used instead
  </li>
  <li>
    <strong>Documentation</strong> - a well documented code is
    mandatory, not optional
  </li>
  <li>
    <strong>Pin naming</strong> - example programs should refer to
    pins using the Arduino pin naming standard, e.g. A0-A5, D0-D15
  </li>
  <li>
    <strong>Teams</strong> - the code should be published in teams,
    not in user accounts, so team of developers would manage and
    accept new contributions
  </li>
  <li>
    <strong>Workarounds</strong> - any deviation from the shield
    connectivity standard should be documented on the component
    page and a workaround provided
  </li>
</ul>
<p>
  To enable a team-managed collaboration workflow, we forked the
  component libraries and examples into two new teams that everyone
  can join in - <strong><a href=
  "/teams/components/">components</a></strong> and <strong><a href=
  "/teams/shields/">shields</a></strong> teams. The <a href=
  "/teams/components/">components</a> team is focused around any
  component libraries - either in shield or non-shield form factor,
  grove, etc. The <a href="/teams/shields/">shields</a> team
  contains only example programs for shield components and does not
  contain/support any libraries.
</p>
<p>
  Here's a list of all shields with cross-platform support on mbed:
</p>
<table>
  <tr>
    <td></td>
    <th>
      Shield name
    </th>
    <th>
      Shield type
    </th>
    <th>
      Product page
    </th>
    <th>
      Support status
    </th>
  </tr>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/thumb?filename=components/components/appshield_1.png&amp;size=24x16"
      alt=
      "/thumb?filename=components/components/appshield_1.png&amp;size=24x16"
      title=
      "/thumb?filename=components/components/appshield_1.png&amp;size=24x16">
    </td>
    <td>
      <a href="/components/mbed-Application-Shield/">mbed
      Application Shield</a>
    </td>
    <td>
      Display, Sensors
    </td>
    <td>
      <a href=
      "http://www.coolcomponents.co.uk/mbed-application-shield.html"
      rel="nofollow">Click to view</a>
    </td>
    <td>
      Supported
    </td>
  </tr>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/thumb?filename=components/components/lcd-shield-front-001_large.pngv1308222352&amp;size=24x16"
      alt=
      "/thumb?filename=components/components/lcd-shield-front-001_large.pngv1308222352&amp;size=24x16"
      title=
      "/thumb?filename=components/components/lcd-shield-front-001_large.pngv1308222352&amp;size=24x16">
    </td>
    <td>
      <a href="/components/Freetronics-LCD-Shield/">Freetronics
      16x2 LCD</a>
    </td>
    <td>
      Display
    </td>
    <td>
      <a href=
      "http://www.freetronics.com/products/lcd-keypad-shield#.Uyhej4UQPlZ"
      rel="nofollow">Click to view</a>
    </td>
    <td>
      Supported
    </td>
  </tr>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/thumb?filename=components/components/TFT_Shield.jpg&amp;size=24x16"
      alt=
      "/thumb?filename=components/components/TFT_Shield.jpg&amp;size=24x16"
      title=
      "/thumb?filename=components/components/TFT_Shield.jpg&amp;size=24x16">
    </td>
    <td>
      <a href=
      "/components/Seeed-Studio-28-TFT-Touch-Shield-V20/">Seeed
      2.8" TFT Touch V2</a>
    </td>
    <td>
      Display
    </td>
    <td>
      <a href=
      "http://www.seeedstudio.com/depot/28-TFT-Touch-Shield-V20-p-1286.html"
      rel="nofollow">Click to view</a>
    </td>
    <td>
      Supported
    </td>
  </tr>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/thumb?filename=components/components/SD_card_shieldV4.0.jpg&amp;size=24x16"
      alt=
      "/thumb?filename=components/components/SD_card_shieldV4.0.jpg&amp;size=24x16"
      title=
      "/thumb?filename=components/components/SD_card_shieldV4.0.jpg&amp;size=24x16">
    </td>
    <td>
      <a href="/components/Seeed-Studio-SD-Card-shield-V40/">Seeed
      SDCard V4b</a>
    </td>
    <td>
      Storage
    </td>
    <td>
      <a href=
      "http://www.seeedstudio.com/depot/SD-Card-Shield-V4-p-1381.html"
      rel="nofollow">Click to view</a>
    </td>
    <td>
      Supported
    </td>
  </tr>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/thumb?filename=components/components/500px-IMG_0039.jpg&amp;size=24x16"
      alt=
      "/thumb?filename=components/components/500px-IMG_0039.jpg&amp;size=24x16"
      title=
      "/thumb?filename=components/components/500px-IMG_0039.jpg&amp;size=24x16">
    </td>
    <td>
      <a href="/components/Seeed-Ethernet-Shield-V20/">W5200
      Ethernet</a>
    </td>
    <td>
      Connectivity
    </td>
    <td>
      <a href=
      "http://www.seeedstudio.com/depot/W5200-Ethernet-Shield-p-1577.html"
      rel="nofollow">Click to view</a>
    </td>
    <td>
      Supported
    </td>
  </tr>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/thumb?filename=components/components/IMG_7577.JPG&amp;size=24x16"
      alt=
      "/thumb?filename=components/components/IMG_7577.JPG&amp;size=24x16"
      title=
      "/thumb?filename=components/components/IMG_7577.JPG&amp;size=24x16">
    </td>
    <td>
      <a href="/components/Seeed-Wifi-Shield/">Seeed Wifi</a>
    </td>
    <td>
      Connectivity
    </td>
    <td>
      <a href=
      "http://www.seeedstudio.com/depot/wifi-shield-p-1220.html"
      rel="nofollow">Click to view</a>
    </td>
    <td>
      Supported
    </td>
  </tr>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/thumb?filename=components/components/Bluetooth20Sld.jpg&amp;size=24x16"
      alt=
      "/thumb?filename=components/components/Bluetooth20Sld.jpg&amp;size=24x16"
      title=
      "/thumb?filename=components/components/Bluetooth20Sld.jpg&amp;size=24x16">
    </td>
    <td>
      <a href="/components/Seeed-Bluetooth-Shield/">Seeed
      Bluetooth</a>
    </td>
    <td>
      Connectivity
    </td>
    <td>
      <a href=
      "http://www.seeedstudio.com/depot/Bluetooth-Shield-p-866.html?cPath=19_21"
      rel="nofollow">Click to view</a>
    </td>
    <td>
      Supported
    </td>
  </tr>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/thumb?filename=components/components/NFC20SLD.jpg&amp;size=24x16"
      alt=
      "/thumb?filename=components/components/NFC20SLD.jpg&amp;size=24x16"
      title=
      "/thumb?filename=components/components/NFC20SLD.jpg&amp;size=24x16">
    </td>
    <td>
      <a href="/components/Seeed-NFC-Shield-V20/">Seeed NFC V2</a>
    </td>
    <td>
      Connectivity
    </td>
    <td>
      <a href=
      "http://www.seeedstudio.com/depot/NFC-Shield-V20-p-1370.html"
      rel="nofollow">Click to view</a>
    </td>
    <td>
      Supported
    </td>
  </tr>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/thumb?filename=components/components/Xbeeshield_01.jpg&amp;size=24x16"
      alt=
      "/thumb?filename=components/components/Xbeeshield_01.jpg&amp;size=24x16"
      title=
      "/thumb?filename=components/components/Xbeeshield_01.jpg&amp;size=24x16">
    </td>
    <td>
      <a href="/components/Seeed-XBee-Shield-V20/">Seeed XBee
      V2</a>
    </td>
    <td>
      Connectivity
    </td>
    <td>
      <a href=
      "http://www.seeedstudio.com/depot/XBee-Shield-V20-p-1375.html"
      rel="nofollow">Click to view</a>
    </td>
    <td>
      Supported
    </td>
  </tr>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/thumb?filename=components/components/GPRS_ShieldV2.0.jpg&amp;size=24x16"
      alt=
      "/thumb?filename=components/components/GPRS_ShieldV2.0.jpg&amp;size=24x16"
      title=
      "/thumb?filename=components/components/GPRS_ShieldV2.0.jpg&amp;size=24x16">
    </td>
    <td>
      <a href="/components/Seeed-GPRS-Shield-V20/">Seeed GPRS
      V2</a>
    </td>
    <td>
      Connectivity
    </td>
    <td>
      <a href=
      "http://www.seeedstudio.com/depot/GPRS-Shield-V20-p-1379.html"
      rel="nofollow">Click to view</a>
    </td>
    <td>
      Supported
    </td>
  </tr>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/thumb?filename=components/components/2014-04-16_22.18.52.jpg&amp;size=24x16"
      alt=
      "/thumb?filename=components/components/2014-04-16_22.18.52.jpg&amp;size=24x16"
      title=
      "/thumb?filename=components/components/2014-04-16_22.18.52.jpg&amp;size=24x16">
    </td>
    <td>
      <a href="/components/Ciseco-SRF-Shield/">Ciseco SRF</a>
    </td>
    <td>
      Connectivity
    </td>
    <td>
      <a href=
      "http://shop.ciseco.co.uk/srf-shield-wireless-transciever-for-all-arduino-type-boards/"
      rel="nofollow">Click to view</a>
    </td>
    <td>
      Supported
    </td>
  </tr>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/thumb?filename=components/components/photo_2.JPG&amp;size=24x16"
      alt=
      "/thumb?filename=components/components/photo_2.JPG&amp;size=24x16"
      title=
      "/thumb?filename=components/components/photo_2.JPG&amp;size=24x16">
    </td>
    <td>
      <a href="/components/Sparkfun-GPS-Shield/">Sparkfun GPS</a>
    </td>
    <td>
      Sensors
    </td>
    <td>
      <a href="http://www.sparkfun.com/products/10710" rel=
      "nofollow">Click to view</a>
    </td>
    <td>
      Supported
    </td>
  </tr>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/thumb?filename=components/components/Milti-axis.PNG&amp;size=24x16"
      alt=
      "/thumb?filename=components/components/Milti-axis.PNG&amp;size=24x16"
      title=
      "/thumb?filename=components/components/Milti-axis.PNG&amp;size=24x16">
    </td>
    <td>
      <a href=
      "/components/Freescale-Multi-Sensor-Shield/">Freescale
      Multi-Sensor</a>
    </td>
    <td>
      Sensors
    </td>
    <td>
      <a href=
      "http://www.freescale.com/webapp/sps/site/prod_summary.jsp?code=FRDM-FXS-MULTI"
      rel="nofollow">Click to view</a>
    </td>
    <td>
      Supported
    </td>
  </tr>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/thumb?filename=components/components/Motorshield.jpg&amp;size=24x16"
      alt=
      "/thumb?filename=components/components/Motorshield.jpg&amp;size=24x16"
      title=
      "/thumb?filename=components/components/Motorshield.jpg&amp;size=24x16">
    </td>
    <td>
      <a href="/components/Seeed-Motor-Shield-V20/">Seeed Motor
      V2</a>
    </td>
    <td>
      Drivers
    </td>
    <td>
      <a href=
      "http://www.seeedstudio.com/depot/Motor-Shield-V20-p-1377.html"
      rel="nofollow">Click to view</a>
    </td>
    <td>
      Supported
    </td>
  </tr>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/thumb?filename=components/components/Shield_bot_01.jpg&amp;size=24x16"
      alt=
      "/thumb?filename=components/components/Shield_bot_01.jpg&amp;size=24x16"
      title=
      "/thumb?filename=components/components/Shield_bot_01.jpg&amp;size=24x16">
    </td>
    <td>
      <a href="/components/Seeed-Studio-Shield-Robot/">Seeed
      Bot</a>
    </td>
    <td>
      Drivers
    </td>
    <td>
      <a href=
      "http://www.seeedstudio.com/depot/Shield-Bot-p-1380.html"
      rel="nofollow">Click to view</a>
    </td>
    <td>
      Supported
    </td>
  </tr>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/thumb?filename=components/components/2a218b143711342426c968360c3f95cc.image.530x397.jpg&amp;size=24x16"
      alt=
      "/thumb?filename=components/components/2a218b143711342426c968360c3f95cc.image.530x397.jpg&amp;size=24x16"
      title=
      "/thumb?filename=components/components/2a218b143711342426c968360c3f95cc.image.530x397.jpg&amp;size=24x16">
    </td>
    <td>
      <a href="/components/Seeed-EL-Shield/">Seeed EL</a>
    </td>
    <td>
      Drivers
    </td>
    <td>
      <a href=
      "http://www.seeedstudio.com/depot/EL-Shield-p-1287.html" rel=
      "nofollow">Click to view</a>
    </td>
    <td>
      Supported
    </td>
  </tr>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/thumb?filename=components/components/Relayshield_01.jpg&amp;size=24x16"
      alt=
      "/thumb?filename=components/components/Relayshield_01.jpg&amp;size=24x16"
      title=
      "/thumb?filename=components/components/Relayshield_01.jpg&amp;size=24x16">
    </td>
    <td>
      <a href="/components/Seeed-Relay-Shield-V20/">Seeed Relay
      V2</a>
    </td>
    <td>
      Actuators
    </td>
    <td>
      <a href=
      "http://www.seeedstudio.com/depot/Relay-shield-V20-p-1376.html"
      rel="nofollow">Click to view</a>
    </td>
    <td>
      Supported
    </td>
  </tr>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/thumb?filename=components/components/Energy_Shield.jpg&amp;size=24x16"
      alt=
      "/thumb?filename=components/components/Energy_Shield.jpg&amp;size=24x16"
      title=
      "/thumb?filename=components/components/Energy_Shield.jpg&amp;size=24x16">
    </td>
    <td>
      <a href="/components/Seeed-Energy-Shield/">Seeed Energy</a>
    </td>
    <td>
      Power supply
    </td>
    <td>
      <a href=
      "http://www.seeedstudio.com/depot/Energy-Shield-p-1373.html"
      rel="nofollow">Click to view</a>
    </td>
    <td>
      Supported
    </td>
  </tr>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/thumb?filename=components/components/Seeed_Solar_Shield.jpg&amp;size=24x16"
      alt=
      "/thumb?filename=components/components/Seeed_Solar_Shield.jpg&amp;size=24x16"
      title=
      "/thumb?filename=components/components/Seeed_Solar_Shield.jpg&amp;size=24x16">
    </td>
    <td>
      <a href="/components/Seeed-Solar-Shield/">Seeed Charger
      V2</a>
    </td>
    <td>
      Power supply
    </td>
    <td>
      <a href=
      "http://www.seeedstudio.com/depot/Solar-Charger-Shield-V2-p-914.html"
      rel="nofollow">Click to view</a>
    </td>
    <td>
      Supported
    </td>
  </tr>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/thumb?filename=components/components/ae6c622dee3885e07e94e5716c732a46.image.530x397.jpg&amp;size=24x16"
      alt=
      "/thumb?filename=components/components/ae6c622dee3885e07e94e5716c732a46.image.530x397.jpg&amp;size=24x16"
      title=
      "/thumb?filename=components/components/ae6c622dee3885e07e94e5716c732a46.image.530x397.jpg&amp;size=24x16">
    </td>
    <td>
      <a href="/components/Seeed-Grove-Shield-V2/">Seeed Grove
      V2</a>
    </td>
    <td>
      Hook-up
    </td>
    <td>
      <a href=
      "http://www.seeedstudio.com/depot/Base-Shield-V2-p-1378.html"
      rel="nofollow">Click to view</a>
    </td>
    <td>
      Supported
    </td>
  </tr>
</table>
<p>
  <strong>And last but not least</strong>, if you'd like to expand
  this list and add support for more components on mbed then join
  the teams <strong><a href=
  "/teams/components/">components</a></strong> and <strong><a href=
  "/teams/shields/">shields</a></strong>!
</p>

