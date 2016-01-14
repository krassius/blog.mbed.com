---
layout:         post-mbed-org
title:          "USBHost library now in Beta!"
date:           2013-03-14T14:51:27.000Z
author:         Samuel Mokrani
tags:           Host, hub, keyboard, Mouse, MSD, rtos, Serial, USB
originalUrl:    https://developer.mbed.org/blog/entry/USBHost-library-now-in-Beta/
---

<p>We are pleased to release a new library: <strong>USBHost</strong>!</p>
<p>
  <img src="https://developer.mbed.org/media/uploads/samux/_scaled_usb_host_app_board.jpg"
  alt="/media/uploads/samux/_scaled_usb_host_app_board.jpg" title="/media/uploads/samux/_scaled_usb_host_app_board.jpg">
</p>
 <h1>About the USBHost library</h1>

<p>A USBHost library has been developed in order to communicate with USB
  devices. Currently, the library supports:</p>
<ul>
  <li><strong>USB mice</strong>

  </li>
  <li><strong>USB keyboards</strong>

  </li>
  <li><strong>Mass storage devices</strong>

  </li>
  <li><strong>Virtual serial port devices</strong>

  </li>
</ul>
<p>In addition to the drivers already implemented, the USBHost stack provides
  some cool features of USB such as:</p>
<ul>
  <li><strong>Hub auto-detection</strong>

    <ul>
      <li>You can use exactly the same code if you are using a hub to connect a
        usb device to an mbed</li>
    </ul>
  </li>
  <li><strong>Plug n Play support</strong>

    <ul>
      <li>You can detect when a device is attached and detached to and from the
        usb bus</li>
    </ul>
  </li>
</ul>

<h1>Where to get started?</h1>

<p>Hardware details and helloWorld examples are provided in order to get
  started quickly with the USBHost library:</p>
<ul>
  <li><strong><a href="/handbook/USBHost">/handbook/USBHost</a></strong>

    <ul>
      <li><strong><a href="/handbook/USBHostMouse">/handbook/USBHostMouse</a></strong>

      </li>
      <li><strong><a href="/handbook/USBHostKeyboard">/handbook/USBHostKeyboard</a></strong>

      </li>
      <li><strong><a href="/handbook/USBHostMSD">/handbook/USBHostMSD</a></strong>

      </li>
      <li><strong><a href="/handbook/USBHostSerial">/handbook/USBHostSerial</a></strong>

      </li>
      <li><strong><a href="/handbook/USBHostHub">/handbook/USBHostHub</a></strong>

      </li>
    </ul>
  </li>
</ul>

<h1>Community contribution</h1>

<p>It would be great if the USBHost stack development involves several developers.
  There is plenty of work to be done such as:</p>
<ul>
  <li>core modification by adding support of isochronous transfer</li>
  <li>develop drivers on top of the USBHost stack:
    <ul>
      <li>Bluetooth class</li>
      <li>Webcam class</li>
      <li>...</li>
    </ul>
  </li>
</ul>
<p>Any contribution from the mbed community would be greatly appreciated!</p>
<p>Have fun with USBHost!</p>
