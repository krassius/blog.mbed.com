---
layout:         post-mbed-org
title:          "Online Compiler adds Touch Support!"
date:           2012-11-12T15:03:22.000Z
author:         Mihail Stoyanov
tags:           android, ipad, online compiler, tablet, touch
originalUrl:    https://developer.mbed.org/blog/entry/compiler-touch-support/
---

<p>
  In the past couple of months we've been focused on making the
  Compiler faster, more reliable, while expanding its
  capabilities.<br>
  The online IDE already makes it easy to log in from any PC and
  carry on where you left off, but we've just pushed that
  portability one step further...
</p>
<p>
  <img src=
  "https://developer.mbed.org/media/uploads/screamer/tablets_collage_v2.4.png"
  alt="/media/uploads/screamer/tablets_collage_v2.4.png" title=
  "/media/uploads/screamer/tablets_collage_v2.4.png">
</p>
<h2>
  Touch support
</h2>
<p>
  The Compiler now supports iOS and Android based tablet browsers.
  It's simple statement, yet there's much more to it:
</p>
<ul>
  <li>
    <strong>Editing</strong> - an efficient point-and-select method
    for state of the art editing - better than the majority of text
    editors on tablet devices.
  </li>
  <li>
    <strong>Interactivity</strong> - very close to a native tablet
    application - buttons, grids, dragging, resizing, panels,
    dialogs and all key UI components.
  </li>
  <li>
    <strong>Workflow</strong> - feels natural and responsive, and
    doesn't slow down the development process.
  </li>
</ul>
<p>
  The wiki <a href=
  "/handbook/Guide-to-mbed-Compiler-on-tablet-device">guide to mbed
  Compiler on tablet device</a> does in-depth review of the touch
  support, plus a demo video, tips and tricks, and other useful
  information.
</p>
<p>
  Alongside the touch support we also extended the Editor, both for
  desktop and touch platforms to introduce...
</p>
<h2>
  Editing enhancements
</h2>
<ul>
  <li>
    <strong>New functions and shortcuts</strong> - popular editing
    functions such as line and block comment toggle, line duplicate
    and erase, case toggle and more - the complete list of
    shortcuts is available in the <a href=
    "/handbook/Compiler-shortcuts-and-controls">Compiler shortcuts
    page</a>.
  </li>
  <li>
    <strong>Copying and pasting</strong> - refactored copy/paste to
    achieve reliable cross-platform functionality and better
    formatting of the pasted code.
  </li>
</ul>
<p>
  More features here and there...
</p>
<h2>
  Other enhancements
</h2>
<ul>
  <li>Middle mouse click on an editor tab closes the corresponding
  file.
  </li>
  <li>Right mouse button dragging for the navigation tree and the
  file list - creating a copy of program/library/file have never
  been easier!
  </li>
  <li>The drag and drop integration between the navigation tree and
  the file list has been greatly improved.
  </li>
  <li>The navigation tree has been improved, both as loading time
  and less data transfer.
  </li>
  <li>Various backend calls have been either omitted or cached to
  minimize the waiting time and save traffic.
  </li>
  <li>The Compiler IDE rendering has been refactored so it "feels"
  lighter and faster.
  </li>
  <li>The input fields would properly receive focus when the
  corresponding dialog is opened.
  </li>
  <li>Input fields can now filter input keys, text pasting and
  indicate their focus state.
  </li>
  <li>Textarea fields can now have length limit (no more silent
  truncates of very long commit messages)
  </li>
  <li>It's now possible to rename a file from the file list as well
  as the navigation tree.
  </li>
  <li>Context menus options can now be navigated using keyboard.
  </li>
</ul>
<p>
  And last but not least...
</p>
<h2>
  Future plans
</h2>
<p>
  The plan for the next Compiler release is to integrate the API
  Documentation of programs, libraries - and more notably the mbed
  library - right inside the Compiler!<br>
  If you are curious about the upcoming features and want to
  participate the closed beta (which starts on 26<sup>th</sup>
  Oct), drop us a message.
</p>

