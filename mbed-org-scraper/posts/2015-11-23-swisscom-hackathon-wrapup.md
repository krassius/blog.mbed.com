---
layout:         post-mbed-org
title:          "Swisscom Hackathon WrapupSwisscom Zurich Hackathon 2015 Wrapup : ARMmbed + ST Nucleo + Semtech LoRA + Actility cloudFriday: Ideas, team building, and start of the hack!Saturday : coffee and tea and cucumber soda oh my!Sunday : Sleepless Swiss Shenanigans and PresentationsTLDR;"
date:           2015-11-23T20:55:36.000Z
author:         Austin mbed
tags:           Actility, ARMmbed, hackathon, Semtech, ST, Swisscom
originalUrl:    https://developer.mbed.org/blog/entry/Swisscom-Hackathon-Wrapup/
---

<h2>
  Swisscom Zurich Hackathon 2015 Wrapup : ARMmbed + ST Nucleo +
  Semtech LoRA + Actility cloud
</h2>
<p>
  Last weekend the ARM mbed team attended the LoRa-focused Swisscom
  Hackathon at <a href="zurich.impacthub.ch/">Impact Hub
  Zurich</a>. With 100 hackers organized into 14 teams and a
  tremendous amount of support from the mentors some truly amazing
  projects were created.
</p>
<p>
  The Swisscom Hackathon was focused on using the low power LoRa
  radio network that Swisscom are piloting in Zurich and Geneva
  using 30 LoRa gateways. Hackers used the ARM mbed ecosystem
  (www.mbed.com or developer.mbed.org/ ?) to build code for the
  <a href="developer.mbed.org/components/SX1276MB1xAS/">Semtech
  LoRA shield</a> on a <a href=
  "developer.mbed.org/platforms/ST-Nucleo-L152RE/">ST Nucleo
  board</a> that connected to the <a href=
  "www.thingpark.com/en">Actility front end</a> for the Swisscom
  cloud platform. Prior to the event the mbed team had hosted a
  series of workshops on <a href=
  "https://www.dropbox.com/sh/adkw093wti7imtd/AAA1-hVbWjOwywWPOy__RWzja?dl=0"
  rel="nofollow">Getting started with LoRA using Semtech
  shields</a> and <a href=
  "https://www.dropbox.com/s/80na0z220w3e6h8/LoRaWAN_on_MBED_Bootcamp%20%20-%20Actility.pdf?dl=0"
  rel="nofollow">Getting started with the Actility cloud</a>. With
  over 110K packets sent and less than 0.00001% packet drop the
  LoRa network really shone through as a stable backbone for
  enabling the Internet of Things (IoT). <img src=
  "https://developer.mbed.org/media/uploads/mbedAustin/swisscomhackathonbp_qIIwZT6.png"
  alt="/media/uploads/mbedAustin/swisscomhackathonbp_qIIwZT6.png"
  title=
  "/media/uploads/mbedAustin/swisscomhackathonbp_qIIwZT6.png">
</p>
<h2>
  Friday: Ideas, team building, and start of the hack!
</h2>
<p>
  Friday night was a huge rush of ideas, presentations and team
  forming. Kicking off the night was a presentation from Christian
  Stammel from Wearable Technologies
  (www.wearable-technologies.com/) on the future of IoT, wearable
  devices on and in your body, and how LoRa is poised to be a key
  enabling technology in the future. Following the intro,
  presentation of challenges from Swiss Rail and others to use IoT
  to increase customer happiness, and dinner, teams formed up and
  the hacking began.
</p>
<p>
  The mbed team started the hack with a ton of Semtech Lora
  shields, ST Nucleo boards, and Seeed Grove sensors. By Sunday
  night every piece of hardware was used in epic hacks!
</p>
<ul class="polaroids large">
  <li>
    <a title=" Sensors &amp; Buttons"><img src=
    "https://developer.mbed.org/media/uploads/mbedAustin/xswisscomhackathon_sensors.jpg.pagespeed.ic.uXhHr_9bup.jpg"></a>
  </li>
  <li>
    <a title=" Example Setup"><img src=
    "https://developer.mbed.org/media/uploads/mbedAustin/img_20151107_140727.jpg.pagespeed.ce.mZOc_xblGs.jpg"></a>
  </li>
</ul>
<h2>
  Saturday : coffee and tea and cucumber soda oh my!
</h2>
<p>
  Saturday was a flurry of activity from early in the morning to
  late in the evening. With an active coffee bar open at Impact Hub
  all day and evening everyone was fully fueled and hacking all day
  long.
</p>
<p>
  Various Prototypes started, fell and evolved over the course of
  the day. Lots of the coolest discussion happened on the <a href=
  "http://iot.dribd.at/" rel="nofollow">DribDat forums</a> that
  were spun up for the event.
</p>
<ul class="polaroids medium">
  <li>
    <a title=" Caffine"><img src=
    "https://developer.mbed.org/media/uploads/mbedAustin/img_20151107_174944.jpg.pagespeed.ce.uf703lE3xr.jpg"></a>
  </li>
  <li>
    <a title=" Semtech Help"><img src=
    "https://developer.mbed.org/media/uploads/mbedAustin/img_20151107_141015.jpg.pagespeed.ce.Ze7ERkpe7B.jpg"></a>
  </li>
  <li>
    <a title=" Hackers Hacking"><img src=
    "https://developer.mbed.org/media/uploads/mbedAustin/img_20151107_135012.jpg.pagespeed.ce.pk0h3N5KZK.jpg"></a>
  </li>
</ul>
<h4>
  Smart Train pass
</h4>
<ul class="polaroids large">
  <li>
    <a title=" Product Mockup"><img src=
    "http://s8.postimg.org/lfzgkwk79/smar_Ticket_future.png"></a>
  </li>
</ul>
<p>
  These guys put together an automatic train ticket system that
  relays the position of the user back to the main base using LoRA,
  thus enabling the back end to determine if the person has entered
  a train or not and charge them appropriately. They had some
  really cool error detection algorithms that accounted for
  pedestrians walking near but not on the train and likewise for
  users in cars near the train but not on it.
</p>
<h4>
  Umbrella.io : the umbrella corporation
</h4>
<ul class="polaroids large">
  <li>
    <a title=" Connected Umbrella"><img src=
    "https://developer.mbed.org/media/uploads/mbedAustin/img_20151108_120357.jpg.pagespeed.ce.ahdfCYhZcl.jpg"></a>
  </li>
</ul>
<p>
  These guys had an awesome vision and implementation for connected
  umbrellas that took two forms, one personal and one commercial.
</p>
<p>
  The personal application used the low power LoRA radio to connect
  to the internet and visually display the expected weather for the
  day on the hilt of the umbrella, so the user could know if they
  would need the umbrella that day depending on the color of the
  hilt. In the morning with just simple touch on your umbrella,
  you’ll know if you need it for that day or if you're good to go.
</p>
<p>
  The commercial application was an umbrella rental / loaner system
  that would encourage customer and brand loyalty by giving the
  user an umbrella for free, and in return periodically reminding
  them to come into the store. There was even a suggested idea for
  gamification to use the umbrella as a rewards card / interactive
  system for user engagement at stores and around town.
</p>
<h4>
  GrosiAlarm - Non-invasive elder care for dementia patients
</h4>
<ul class="polaroids medium">
  <li>
    <a title=" The Goal"><img src=
    "https://developer.mbed.org/media/uploads/mbedAustin/img_20151108_115454.jpg.pagespeed.ce.pCMM7zueF7.jpg"></a>
  </li>
  <li>
    <a title=" The Team"><img src=
    "https://developer.mbed.org/media/uploads/mbedAustin/img_20151108_120047.jpg.pagespeed.ce.Ds9wKkM9lG.jpg"></a>
  </li>
  <li>
    <a title=" The Hardware"><img src=
    "https://developer.mbed.org/media/uploads/mbedAustin/img_20151108_120121.jpg.pagespeed.ce.1-DWAn0HR8.jpg"></a>
  </li>
</ul>
<p>
  The GrossiAlarm team put together a wonderful elder care device
  that both gave piece of mind to those responsible for the elder
  patient while still respecting the personal privacy and dignity
  of the patient. The basic premise of the device was a watch that
  would use LoRA to report the location of the user back to a
  home-base server. The location however would not be given to the
  care-givers unless the patient wandered outside of a set safe
  zone boundary, because as one hacker said he "didn’t want to know
  when grandma was going on her dates". The only exception to this
  privacy rule would be if the patient activated a special
  emergency button mode that then would report the patient’s
  precise location to loved ones and if no response was received in
  a set amount of time, emergency services would be notified.
</p>
<h4>
  iPusher - BLE notifications for delays using LoRA backend
</h4>
<ul class="polaroids large">
  <li>
    <a title=" iPusher Plan"><img src=
    "https://developer.mbed.org/media/uploads/mbedAustin/img_20151108_110249.jpg.pagespeed.ce.D88SLsnRRk.jpg"></a>
  </li>
  <li>
    <a title=" Prototype Hardware"><img src=
    "https://developer.mbed.org/media/uploads/mbedAustin/img_20151108_110029.jpg.pagespeed.ce.LvaDyrTP9d.jpg"></a>
  </li>
</ul>
<p>
  The iPusher team developed base stations that connect to the
  backend over LoRA and notify those around the base stations via
  Eddystone of events pertinent to their location. The idea was to
  have one in every train station, so if a delay was affecting a
  particular station, the message would be sent out over Eddystone
  beacons to notify those at the station with up-to-date
  information on their cellular devices. Think interactive in depth
  reports and real-time updates as they actually occur.
</p>
<h2>
  Sunday : Sleepless Swiss Shenanigans and Presentations
</h2>
<p>
  On Sunday everyone got an early start and worked on polishing
  their demos and presentations for judging. After a tremendous
  amount of effort, caffeine and nerves all the presentations
  concluded and the judges announced the following winners:
</p>
<h4>
  In first place:
</h4>
<p>
  <a href="http://iot.dribd.at/project/17" rel="nofollow">Team
  MechartLab+ with their Grosi Alarm</a> - A tracking and alarm
  watch for dementia sufferers, allowing a geofence to be defined
  that triggers the alarm, if the wearer strays outside. They took
  home first price for their excellent total concept presentation.
</p>
<ul class="polaroids large">
  <li>
    <a title=" 1st place - Team MechartLab+"><img src=
    "https://developer.mbed.org/media/uploads/mbedAustin/img_20151108_130901.jpg.pagespeed.ce.r2n18LtJu1.jpg"></a>
  </li>
</ul>
<h4>
  In second place:
</h4>
<p>
  <a href="http://iot.dribd.at/project/20" rel="nofollow">Dr. M
  &amp; Friends’ - LoRa-connected smart ticket</a> sharing its
  position and speed through the LoRa network, allowing automatic
  charging when you travel on a train.
</p>
<ul class="polaroids large">
  <li>
    <a title=" 2nd place - Dr. M &amp; Friends'"><img src=
    "https://developer.mbed.org/media/uploads/mbedAustin/img_20151108_130650.jpg.pagespeed.ce.Ka-oH3W833.jpg"></a>
  </li>
</ul>
<p>
  <br>
</p>
<h4>
  In third place:
</h4>
<p>
  <a href="http://iot.dribd.at/project/19" rel="nofollow">Mila’s
  Umbrella-as-a-service</a> - Showing that as a service business
  models can be applied to low cost products.
</p>
<ul class="polaroids large">
  <li>
    <a title=" 3rd place - Mila's Umbrella-as-a-service"><img src=
    "https://developer.mbed.org/media/uploads/mbedAustin/img_20151108_130515.jpg.pagespeed.ce.EdL5CLePJj.jpg"></a>
  </li>
</ul>
<p>
  <br>
</p>
<h4>
  And, the audience award (measured by applause):
</h4>
<p>
  <a href="http://iot.dribd.at/project/13" rel="nofollow">Team
  Panda’s SBB Chill</a> - allowing you to find a suitable train
  seat based on the profiles of travelers – quiet, working,
  listening to music etc.
</p>
<ul class="polaroids large">
  <li>
    <a title=" Audience Favorite - Team Panda"><img src=
    "https://developer.mbed.org/media/uploads/mbedAustin/img_20151108_131857.jpg.pagespeed.ce.l35PRNMOjb.jpg"></a>
  </li>
</ul>
<p>
  All in all, a very good event with lots of innovative prototype
  products using LoRa and the other technologies and really good
  feedback at the end – all questions about event support and
  technologies etc received close to the highest grades. As all us
  people offering technology and support got to work very close
  together, and we are all looking forward to the next event!
</p>
<h2>
  TLDR;
</h2>
<p>
  Awesome 48 hour LoRA focused Hackathon hosted by Swisscom at
  Impact Hub Zurich. Using the ARM mbed IoT Device Platform, ST
  Nucleo boards, Semtech LoRA radios, and Actility frontend for the
  Swisscom Cloud 100 hackers build awesomeness. Some won, some
  lost, some walked away with venture capital connections, but
  everyone had a great time and learned a lot about how to use LoRA
  to enable IoT in products and projects going forward. For a full
  list of groups and their projects see the <a href=
  "http://iot.dribd.at/event/1" rel="nofollow">DribDat page for the
  Hackathon</a>.
</p>

