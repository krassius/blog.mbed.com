---
layout:         post-mbed-org
title:          "mbed, Windows 7 and USB cables"
date:           2012-08-22T08:33:11.000Z
author:         Chris Styles
tags:           Cable, USB, windows
originalUrl:    https://developer.mbed.org/blog/entry/mbed-Windows-7-and-USB-cables/
---

<p>
  After various reports of Windows 7 machines hanging while copying
  files to the mbed Micrcontroller, we did some investigations to
  recreate the problem, and of course find a fix. Some of the
  support cases I'd handled suggested that the problem didn't
  appear on XP, and when it did appear on Window 7, replacing the
  cable fixed the problem. Could it really come down to the cable
  not being suitable for Window 7? Fact is often stranger than
  fiction.
</p>
<p>
  The conclusion is that if you're experiencing this sort of issue,
  try using another cable. If you want to know why, read on...
</p>
<p>
  <img alt="USB Cable" src=
  "data:image/jpeg;base64,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"
  title="USB Cable">
</p>
<p>
  The first thing I needed to do was recreate the issue. We'd seen
  it in the office once or twice before, but not consistently, so
  the search began for a robust test case. I eventually got my
  hands on a a Lenovo T410. A 32 bit machine running Windows 7
  Enterprise edition, and it showed the problem reliably.
</p>
<p>
  So with a reliably failing machine in hand, I took the plunge and
  used a different cable. I couldn't believe it - it worked! But
  the "failing cable" worked on machines with Windows XP, can cable
  be OS dependent?
</p>
<p>
  I then tried an assortment of cables. Some shorter than the 1.8m
  cable we ship. Some fatter, suggesting heavier gauge conductors
  and thicker screening. Some with RF chokes fitted at each end.
  They all worked beautifully.
</p>
<p>
  The interesting point was when I decided to install Windows XP on
  the Lenovo T410 machine which reliably failed with the standard
  cable. In this scenario, the cable still failed with that machine
  when Windows XP was installed.
</p>
<p>
  After this testing I realised that the correlation with the
  version of Windows is really a correlation with the age of the
  machine, and the USB chip set it contains. Most Machines with XP
  were older, and worked fine. Most machines with Windows 7 were
  newer, had USB 3.0 support, so therefore a different chip set
  which is more reliant on the quality of the cable. This
  hypothesis fits with the fact that the newer machine still fails
  when running Windows XP.
</p>
<p>
  The conclusion of all this is that USB chip sets in newer
  machines can be a little more dependent on the quality of the
  cable for correct operation. If you have a newer machine (if it
  was shipped with Windows 7 seems to be a good indicator!) and you
  have problems with the USB Flash drive of mbed, try using a
  different cable. Maybe a shorter or fatter one that came with a
  Digital Camera or MP3 player. In the mean time, we have qualified
  new cables which have started to ship with the mbed
  Microcontrollers.
</p>
<p>
  If you're having any USB related issues, try using a different
  cable.
</p>

