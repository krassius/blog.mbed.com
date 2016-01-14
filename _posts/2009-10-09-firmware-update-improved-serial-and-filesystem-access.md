---
layout:         post-mbed-org
title:          "Firmware Update: Improved Serial and FileSystem Access"
date:           2009-10-09T20:12:27.000Z
author:         Simon Ford
tags:           firmware, Serial, updates
originalUrl:    https://developer.mbed.org/blog/entry/101/
---

<p>
  Phil has been working hard on some firmware updates&nbsp;that
  improve two particular areas we had requests: support for usb
  serial on x64 windows platforms and access to the USB filesystem
  from both the mbed and the PC&nbsp;interchangeably. There were a
  few other improvements we wrapped up too, so here are the
  details:
</p>
<p>
  Whilst Linux and Mac support for the USB serial port has been
  pretty clean for a while, Windows has always been a little more
  tricky; it required the mbed to be configured with an .ini file,
  and didn't work on x64 or win 2k machines. We've now given this
  an overhaul, and the results are much better. Firstly, the new
  firmware means there is no longer any configuration needed, so
  the mbed works on Windows, Mac and Linux exactly the same!
</p>
<p>
  As ever, Windows still needs a driver for serial, but now no
  changes are needed. Plug it in without any driver and you get
  just the disk drive, so you can work away fine. Run the serial
  installer and the serial port appears - magic :)
</p>
<p>
  At the same time, we added support for more Windows platforms in
  to the installer. The list is now Windows 2K, Windows XP, Windows
  Vista and Windows 7, including x64 versions. Phew!
</p>
<p>
  The firmware also updates the <a href=
  "/handbook/LocalFileSystem">LocalFileSystem</a> to allow both the
  PC and the mbed to access the USB Disk files (just not at the
  same time). Whereas previously, as soon as the mbed opened a file
  on the local disk, it would "grab" the disk from the PC and not
  give it back until the program exited, it now releases the disk
  whenever there are no open filehandles. This should make it much
  more flexible and usable.
</p>
<p>
  Some final updates for completeness:
</p>
<ul>
  <li>Improved programming and semihosting performance
  </li>
  <li>Fixed a bootcode problem that was causing a virus
  false-positives on some systems
  </li>
  <li>Updated MBED.HTM to a link new format - you can now use it to
  launch the mbed website whenever you start
  </li>
</ul>
<p>
  <span style="font-weight: bold;">Updating your Firmware</span>
</p>
<p>
  To update your firmware, simply go to:
</p>
<ul>
  <li>
    <a href="/handbook/Firmware">/handbook/Firmware</a>
  </li>
</ul>
<p>
  Updating the firmware simply involves saving the new firmware on
  to your mbed, and then power-cycling the board (disconnect and
  reconnect the USB cable).
</p>
<p>
  For the new serial driver, run the installer found at:
</p>
<ul>
  <li>
    <a href=
    "/handbook/WindowsSerialConfiguration">/handbook/WindowsSerialConfiguration</a>
  </li>
</ul>
<p>
  Hope these updates are useful. Any problems, please tell us in
  the forums!
</p>

