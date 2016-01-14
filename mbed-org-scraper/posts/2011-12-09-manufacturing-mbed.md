---
layout:         post-mbed-org
title:          "Manufacturing mbed!Manufacturing, LTEK and SloveniaGetting on with some work!The processDid it work?... and relaxSome other interesting stuffBack to mbed"
date:           2011-12-09T14:14:10.000Z
author:         Chris Styles
tags:           
originalUrl:    https://developer.mbed.org/blog/entry/manufacturing-mbed/
---

<p>
  The first batch of mbed NXP LPC11U24 have now made it through
  production! It made me reflect on the journey from concept to
  release, so I thought it might be interesting to take another
  look behind the scenes, this time at maufacturing.
</p>
<table>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/media/uploads/chris/small_dscf8306.jpg"
      alt="/media/uploads/chris/small_dscf8306.jpg" title=
      "/media/uploads/chris/small_dscf8306.jpg">
    </td>
    <td>
      <div class="flex-video">
        <iframe width="420" height="315" src=
        "https://www.youtube.com/embed/XWFL9IRkGsg" frameborder="0"
        allowfullscreen="allowfullscreen"></iframe>
      </div>
    </td>
  </tr>
  <tr>
    <th>
      Ingredients
    </th>
    <th>
      Equipment
    </th>
  </tr>
</table>
<h2>
  Manufacturing, LTEK and Slovenia
</h2>
<p>
  I traveled to Sentjernej, Slovenia to visit LTEK d.o.o to oversee
  the first batch of mbed NXP LPC11U24 being manufactured.
</p>
<p>
  We've been working with LTEK since the beginning of the mbed, and
  as well as manufacturing all the mbed hardware that we've all
  come to know and love, they have also assembled various
  prototypes and experiments for us too (which is probably worth
  it's own blog article).
</p>
<p>
  This was my second visit to Slovenia, and I have come to really
  like the Slovenian culture. The traditions and work ethic of the
  country's communist past are still in place - work starts early,
  but finishes early. In the past this was to allow the population
  to work in their job and also tend to their own farm land.
  Tending to the land is still a pass time, but it seems to be more
  in the pursuit of wine making (more on that later!)
</p>
<table>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/media/uploads/chris/small_dscf8195.jpg"
      alt="/media/uploads/chris/small_dscf8195.jpg" title=
      "/media/uploads/chris/small_dscf8195.jpg">
    </td>
  </tr>
  <tr>
    <th>
      Arrived at LTEK, Sentjernej
    </th>
  </tr>
</table>
<h2>
  Getting on with some work!
</h2>
<p>
  On arrival the first person to greet me is Rok Sinkovec. I talk
  to Rok regularly on skype and email, so its more like seeing an
  old friend than going on a factory visit.
</p>
<p>
  Since my last visit, there have been substantial changes at the
  LTEK factory. LTEK has grown as mbed has grown - we've shared
  growing pains. Manufacturing in tens of thousands presents a very
  different set of problems compared with the small batches of 25
  we were originally building for experimentation back when we
  started mbed!
</p>
<p>
  The first new toy Rok shows me is their new board
  loader/unloader. This gets stacked with bare PCB panels, and it
  loads them down the production line in a nice automated fashion,
  with the completed panels being re-stacked at the other end.
</p>
<table>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/media/uploads/chris/small_dscf8131.jpg"
      alt="/media/uploads/chris/small_dscf8131.jpg" title=
      "/media/uploads/chris/small_dscf8131.jpg">
    </td>
    <td>
      <img src=
      "https://developer.mbed.org/media/uploads/chris/small_dscf8213.jpg"
      alt="/media/uploads/chris/small_dscf8213.jpg" title=
      "/media/uploads/chris/small_dscf8213.jpg">
    </td>
  </tr>
  <tr>
    <th>
      Rok and his new toy
    </th>
    <th>
      Completed panels
    </th>
  </tr>
</table>
<h2>
  The process
</h2>
<p>
  For those unfamilar with the PCB production line process, here it
  is in a few simple steps :
</p>
<h3>
  Preparation
</h3>
<p>
  A good deal of time is spent preparing the production line. The
  PCB panels are loaded, the reels of component are placed in
  special trolleys, the solder stencils are placed in the solder
  printer and calibrated.
</p>
<p>
  One thing that I am surprised to learn about is how traceable the
  process is. The pick and place machine reads barcodes containing
  part numbers and batch codes when the components are loaded, and
  knows and keeps log which panels of which products they were
  placed on.
</p>
<table>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/media/uploads/chris/small_dscf8123.jpg"
      alt="/media/uploads/chris/small_dscf8123.jpg" title=
      "/media/uploads/chris/small_dscf8123.jpg">
    </td>
  </tr>
</table>
<p>
  For this test batch, the mbed Interface devices are programmed in
  a special little jig LTEK have made, so that the parts that are
  placed are already programmed, and should just work when the come
  off the line.
</p>
<h3>
  Solder Printing
</h3>
<p>
  For surface mount production, a solder paste is applied to the
  PCB precisely where it is needed using a stencil, rather like
  silkscreen printing. With such small dimensions involved (0.5mm
  between the pins of an LPC11U24), the calibration is essential to
  make sure the solder goes in the right places.
</p>
<table>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/media/uploads/chris/small_dscf8209.jpg"
      alt="/media/uploads/chris/small_dscf8209.jpg" title=
      "/media/uploads/chris/small_dscf8209.jpg">
    </td>
    <td>
      <img src=
      "https://developer.mbed.org/media/uploads/chris/small_dscf8140.jpg"
      alt="/media/uploads/chris/small_dscf8140.jpg" title=
      "/media/uploads/chris/small_dscf8140.jpg">
    </td>
  </tr>
  <tr>
    <th>
      First stop - Solder paste
    </th>
    <th>
      A pasted panel
    </th>
  </tr>
</table>
<h3>
  Pick and Place
</h3>
<p>
  Once the PCB panel has had it's solder printed, continues down
  the line into the pick and place machine. This is where the magic
  happens. Photos and video clips of how fast and accurate such
  tiny components are placed (we used 0402 passives, at 1.0mm x
  0.5mm) do not do it justice.
</p>
<table>
  <tr>
    <td>
      <div class="flex-video">
        <iframe width="420" height="315" src=
        "https://www.youtube.com/embed/XWFL9IRkGsg" frameborder="0"
        allowfullscreen="allowfullscreen"></iframe>
      </div>
    </td>
    <td>
      <img src=
      "https://developer.mbed.org/media/uploads/chris/small_dscf8141.jpg"
      alt="/media/uploads/chris/small_dscf8141.jpg" title=
      "/media/uploads/chris/small_dscf8141.jpg">
    </td>
  </tr>
  <tr>
    <th>
      Stunning!
    </th>
    <th>
      Placed panel
    </th>
  </tr>
</table>
<p>
  Essentially the pick and place machine is placing the components
  into position, and the solder paste that has been printed does a
  very good job at holding the components in place. It is quite
  safe to handle a populated panel before it is soldered.
</p>
<h3>
  Reflow
</h3>
<p>
  The reflow oven isn't all that exciting. It is a conveyor belt
  through and oven that has a specific temperature profile. As the
  panel makes its way through it is heated gently to get the board
  uniformly up to temperature. The heat is then increased to get
  the board temperature to the point where solder paste re-flows
  and becomes molten solder. The last stage of the oven gently
  cools the board evenly.
</p>
<table>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/media/uploads/chris/small_dscf8147.jpg"
      alt="/media/uploads/chris/small_dscf8147.jpg" title=
      "/media/uploads/chris/small_dscf8147.jpg">
    </td>
  </tr>
  <tr>
    <th>
      A view down the line
    </th>
  </tr>
</table>
<p>
  There are design best practices to help keep things simple at
  this stage. The main problem during reflow is "tombstoning" when
  the solder melts on one end of a resistor or capacitor before the
  other. The surface tension of the molten end lifts the component
  vertical, like a tombstone. There are tips and tricks that can
  help prevent this. Usually after a few panels have run through
  the line, the components most at risk from tomb stoning will be
  identified.
</p>
<p>
  For persistent offenders, it is sometimes worthwhile placing an
  0603 component instead. An 0603 will fit on the the footprint of
  an 0402 and is far less likely to tombstone. In general, the
  smaller the component, the more likely it is to tombstone.
</p>
<h2>
  Did it work?
</h2>
<p>
  Being at the end of the production line is daunting. When the
  first panel comes off, there is no reason not to test it right
  away, in front of everyone. They'll all know instantly if it's
  worked or not!
</p>
<p>
  Fortunately for me, the first ones off worked perfectly the first
  time!*
</p>
<table>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/media/uploads/chris/small_dscf8237.jpg"
      alt="/media/uploads/chris/small_dscf8237.jpg" title=
      "/media/uploads/chris/small_dscf8237.jpg">
    </td>
    <td>
      <div class="flex-video">
        <iframe width="420" height="315" src=
        "https://www.youtube.com/embed/VAzz1NyfzUc" frameborder="0"
        allowfullscreen="allowfullscreen"></iframe>
      </div>
    </td>
  </tr>
  <tr>
    <th>
      The first panel off the line
    </th>
    <th>
      Blinky, 10 mins after production!
    </th>
  </tr>
</table>
<p>
  (*) There were a a few minor blips, as my first program was
  compiled for LPC1768 and so didn't work! It only took a few
  minutes to spot the problem.
</p>
<h2>
  ... and relax
</h2>
<p>
  At 3pm we all decamp to Radko's (the proprietor of LTEK) wine
  house for a BBQ, complete with (very good) home made wine. I
  particularly liked the phrase when reaching for some bottled
  water "Drink the wine! The water we pay for!".
</p>
<p>
  Excellent hospitality, food and wine, and company.
</p>
<table>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/media/uploads/chris/small_img_0708.jpg"
      alt="/media/uploads/chris/small_img_0708.jpg" title=
      "/media/uploads/chris/small_img_0708.jpg">
    </td>
  </tr>
  <tr>
    <th>
      Rok - Same pose, different machine!
    </th>
  </tr>
</table>
<table>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/media/uploads/chris/small_img_0714.jpg"
      alt="/media/uploads/chris/small_img_0714.jpg" title=
      "/media/uploads/chris/small_img_0714.jpg">
    </td>
    <td>
      <img src=
      "https://developer.mbed.org/media/uploads/chris/small_img_0712.jpg"
      alt="/media/uploads/chris/small_img_0712.jpg" title=
      "/media/uploads/chris/small_img_0712.jpg">
    </td>
  </tr>
  <tr>
    <th>
      A good guest list
    </th>
    <th>
      The vines - An essential ingredient
    </th>
  </tr>
</table>
<h2>
  Some other interesting stuff
</h2>
<p>
  Whenever I have discussed ideas with LTEK, the mantra is
  "Everything is possible". Radko took me on a tour of the other
  companies in the same industrial park, who he has close working
  relationships with. Suddenly I understand why everything is
  possible!
</p>
<table>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/media/uploads/chris/small_dscf8250.jpg"
      alt="/media/uploads/chris/small_dscf8250.jpg" title=
      "/media/uploads/chris/small_dscf8250.jpg">
    </td>
  </tr>
</table>
<p>
  Big CNC milling machine
</p>
<table>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/media/uploads/chris/small_dscf8241.jpg"
      alt="/media/uploads/chris/small_dscf8241.jpg" title=
      "/media/uploads/chris/small_dscf8241.jpg">
    </td>
  </tr>
</table>
<p>
  Erosion machine. Like a big band saw, but it uses really fine
  wires and high current to errode/cut through very think
  sheet/block material, like steel and stainless.
</p>
<div class="flex-video">
  <iframe width="420" height="315" src=
  "https://www.youtube.com/embed/qEgcmKxcgPg" frameborder="0"
  allowfullscreen="allowfullscreen"></iframe>
</div>
<p>
  This press was stamping parts out from 5mm thick steel strip
  being fed into it. When it runs the ground shakes and you can
  feel your insides resonating.
</p>
<p>
  Everything is possible!
</p>
<h2>
  Back to mbed
</h2>
<p>
  A little while later, the production batch are tested, packed
  into the familiar kit (complete with the cable, cards, sticker
  and Setup Guide)
</p>
<p>
  The kits are leaving the warehouse now, being shipped to all the
  usual outlets, just in time for the holidays!
</p>
<table>
  <tr>
    <td>
      <img src=
      "https://developer.mbed.org/media/uploads/chris/small_kit.jpg"
      alt="/media/uploads/chris/small_kit.jpg" title=
      "/media/uploads/chris/small_kit.jpg">
    </td>
  </tr>
</table>
<p>
  Looking forward to seeing it out there, and what you invent and
  prototype with it!
</p>

