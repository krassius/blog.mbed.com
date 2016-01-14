---
layout:         post-mbed-org
title:          "EMC Testing mbedEMC RequirementsThe test houseThe testsIn case of emergencyThe results"
date:           2011-11-17T15:15:37.000Z
author:         Chris Styles
tags:           
originalUrl:    https://developer.mbed.org/blog/entry/EMC-Testing-mbed/
---

<p>The mbed NXP LPC11U24 is now entering its final stages of testing before
  release. The hardware is good, the libraries are good, production test
  is in place, and so it is time to do some more formal testing. Last week
  I booked an hour in the anechoic chamber at <a href="http://www.dbtechnology.co.uk"
  rel="nofollow">dB Technology</a> to see what the radiated emission characteristics
  of mbed NXP LPC11U24 look like.</p>
<p>
  <img src="https://developer.mbed.org/media/uploads/chris/mbedontable.jpg"
  alt="/media/uploads/chris/mbedontable.jpg" title="/media/uploads/chris/mbedontable.jpg">
</p>
 <h2>EMC Requirements</h2>

<p>All electronic products are required to be tested for their compliance
  to various regulations for electromagnetic emissions and immunity, unless
  they are exempt for a particular reason. As mbed is not an end product
  but a testing and prototyping tool/module not intended for domestic use,
  full compliance is not required. However, Should any one design a product
  that uses mbed, the final product would be required to comply, and so we
  had them tested just to get a benchmark of their performance.</p>

<h2>The test house</h2>

<p>As Cambridge, UK, has a very active electronics design community, it is
  not surprising to find that EMC testing facilities are not too far away.
  To test mbed, we used a local company <a href="http://www.dbtechnology.co.uk"
  rel="nofollow">dB Technology</a> based just a few miles north of Cambridge,
  in a village called Cottenham, with Dave Smith being the Engineer assign
  to see us through the process.</p>
<table>
  <tr>
    <td>
      <img src="https://developer.mbed.org/media/uploads/chris/dbtechnology.jpg"
      alt="/media/uploads/chris/dbtechnology.jpg" title="/media/uploads/chris/dbtechnology.jpg">
    </td>
  </tr>
  <tr>
    <td><em>dB technology, in a nice rural location!</em>
    </td>
  </tr>
</table>

<h2>The tests</h2>

<p>For our purposes, we were only doing radiated emissions testing and not
  carrying out any immunity testing. This required a 1 hour slot in the anechoic
  chamber at dB Technology.</p>
<table>
  <tr>
    <td>
      <img src="https://developer.mbed.org/media/uploads/chris/readytotest.jpg"
      alt="/media/uploads/chris/readytotest.jpg" title="/media/uploads/chris/readytotest.jpg">
    </td>
    <td>
      <img src="https://developer.mbed.org/media/uploads/chris/mbedontable.jpg"
      alt="/media/uploads/chris/mbedontable.jpg" title="/media/uploads/chris/mbedontable.jpg">
    </td>
  </tr>
  <tr>
    <td><em>mbed in a workshop board - ready!</em>
    </td>
    <td><em>mbed on rotating platform in the Chamber</em>
    </td>
  </tr>
</table>
<p>For the test the mbed would be running a &quot;worst case&quot; scenario,
  one that would lead to the highest emissions. This means using interfaces
  that have high frequency clocks, toggling pins and transmitting data. For
  the LCP1768 mbed, this is sending Ethernet packets and communicating with
  the host over USB, while the LPC11U24 mbed was just the USB functionality.</p>
<p>As the test progresses the platform rotates so the that test test up is
  viewed from all angles by the antenna. For the first set of tests the equipment
  is sweeping from 25MHz to 1GHz, looking for emissions in this part of the
  spectrum. The antenna is on a pneumatic mount, and halfway through the
  test a surprising &quot;Psssssssht&quot; signals that the sweep/rotate
  process is now taking place with the antenna polarized vertically!</p>
<table>
  <tr>
    <td>
      <img src="https://developer.mbed.org/media/uploads/chris/mountedantenna.jpg"
      alt="/media/uploads/chris/mountedantenna.jpg" title="/media/uploads/chris/mountedantenna.jpg">
    </td>
    <td>
      <img src="https://developer.mbed.org/media/uploads/chris/takeaim.jpg"
      alt="/media/uploads/chris/takeaim.jpg" title="/media/uploads/chris/takeaim.jpg">
    </td>
  </tr>
  <tr>
    <td><em>The Antenna on its pneumatic mount.</em>
    </td>
    <td><em>Looking down the &quot;barrel&quot; of the Antenna at mbed.</em>
    </td>
  </tr>
</table>
<p>When the testing to 1GHz is completed, there is a brief pause while the
  antenna is changed to one that is suitable for 1GHz and upwards. Although
  our testing will only go to 3GHz, the test equipment at dB technology is
  capable to testing up to 26GHz!</p>
<p>The test equipment is a fairly unassuming stack of instrumentation and
  measurement equipment not really out of place in a lab environment. The
  really impressive part of the process is the automation. It seems that,
  at least for this basic testing, there is a template test result document,
  and that test data capture is automated, as is the formatting and insertion
  of the data into the test report! It is only a 15 minute drive back to
  the office, but my phone notified me that I&apos;d received an email when
  I was less than half way, and the email had the test report attached.</p>
<table>
  <tr>
    <td>
      <img src="https://developer.mbed.org/media/uploads/chris/testgear.jpg"
      alt="/media/uploads/chris/testgear.jpg" title="/media/uploads/chris/testgear.jpg">
    </td>
    <td>
      <img src="https://developer.mbed.org/media/uploads/chris/peek.jpg" alt="/media/uploads/chris/peek.jpg"
      title="/media/uploads/chris/peek.jpg">
    </td>
  </tr>
  <tr>
    <td><em>Unassuming stack of test kit.</em>
    </td>
    <td><em> Peeking through the mesh into the chamber <br></em>
    </td>
  </tr>
</table>
<p>All of the test rooms are RF sheilded by having the walls, floors and
  ceilings completely clad in metal sheeting, needless to say, I was not
  available to talk on my cellphone during the test. Even the windows were
  made with glass containing wire mess, and then covered with several addition
  layers of wire mesh.</p>

<h2>In case of emergency</h2>

<p>One of the most curious things I saw was the emergency equipment by the
  exit of the control room. All the usual fayre, electrical isolation, fire
  extinguishers, panic button. Oh, and a solar powered calculator. Go figure
  - literally!</p>
<table>
  <tr>
    <td>
      <img src="https://developer.mbed.org/media/uploads/chris/emergency.jpg"
      alt="/media/uploads/chris/emergency.jpg" title="/media/uploads/chris/emergency.jpg">
    </td>
  </tr>
  <tr>
    <td><em> In case of emergency, compute the optimal escape route? </em>
    </td>
  </tr>
</table>

<h2>The results</h2>

<p>The results are interesting and give an indication of mbeds EMC performance.
  They can be summarised as :</p>
<ul>
  <li>The LPC11U24 mbed, across the full spectrum there is a healthy margin
    between emissions, and the allowable limit for industrial use. There are
    also good margins for teh domistic allowable limit, except a single spike
    at around 200MHz</li>
</ul>
<ul>
  <li>The LPC1768 mbed is significantly more spiky, with one violation of the
    more relaxed &quot;industrial&quot; limits at 48MHz. At other points the
    more strict &quot;domestic&quot; limits are breached.</li>
</ul>
<ul>
  <li><a href="/media/uploads/chris/emc_t3246_summary_090710.pdf">mbed NXP LPC1768 EMC Results</a> 
  </li>
  <li><a href="/media/uploads/chris/emc_t4135_summary_111110.pdf">mbed NXP LPC11U24 EMC Results</a> 
  </li>
</ul>
