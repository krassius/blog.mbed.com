---
layout:         post-mbed-org
title:          "BLE Development Update"
date:           2014-01-09T21:17:36.000Z
author:         Sam Grove
tags:           
originalUrl:    https://developer.mbed.org/blog/entry/BLE-Development-Update/
---

<p>A little while back you may have noticed we started working on a Bluetooth
  Low Energy API for mbed, and a partnership with Nordic Semiconductor to
  make it available on a microcontroller with the Bluetooth LE radio built
  in. It has been developing really well, so we thought we&apos;d share some
  of the progress with you!</p>
<p>The main goal is to enable <a href="http://mbed.org/handbook/BluetoothLE">Bluetooth LE</a> and
  create an API that allows you to focus on creating interesting and innovative
  applications, instead of reading through the core Bluetooth specifications
  (which we certainly have had to!). We&apos;re also building hardware and
  an HDK to simplify creating the physical devices themselves.</p>
<p>The initial development we have done is based on a two-chip solution.
  In the labs we use a mbed LPC1768 talking to the nRF51822 development board
  over UART running Nordics Bluetooth LE Stack (aka SoftDevice). As the API
  is almost complete, we&apos;ll soon move to fully integrating this to a
  single chip solution, with mbed running natively on the Cortex-M0 in the
  nRF51822 chip!</p>
<p>An example of how this looks, you can create a common Bluetooth Low Energy
  service like the Battery Level service or a Beacon using the example programs:</p>
<p>[Not found]</p>
<p>[Not found]</p>
<p>There&apos;s still a fair amount of design effort involved, but if you&apos;re
  really eager and want to help with development and testing, you can see
  all the work we are doing under the <a href="http://mbed.org/teams/Bluetooth-Low-Energy/">Bluetooth Low Energy Development Team</a> we&apos;ve
  setup, including the <a href="http://mbed.org/teams/Bluetooth-Low-Energy/wiki/Homepage#hardware-requirements">hardware we&apos;re using and recreate our lab setup</a>.
  We&apos;d love to hear what you think so far. At this stage while it is
  all still in development, some familiarity with BLE will be helpful and
  an understanding that this is not ready for general use, but you should
  be able to get something working!</p>
<p>And if you are interested in being a tester when this reaches beta on
  the single-chip hardware, please tell us what you might build!</p>
