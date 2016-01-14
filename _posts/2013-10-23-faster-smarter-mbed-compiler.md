---
layout:         post-mbed-org
title:          "Faster, smarter - the latest Online Compiler"
date:           2013-10-23T21:50:51.000Z
author:         Mihail Stoyanov
tags:           build system, ide, mbed online compiler
originalUrl:    https://developer.mbed.org/blog/entry/faster-smarter-mbed-compiler/
---

<p>
  We are happy to announce a faster, smarter version of the mbed
  Online Compiler, which is now rolled on the live servers.
</p>
<p>
  There's a huge amount of changes behind the scenes, which will
  give a noticeable performance boost to all areas of the Compiler.
</p>
<h2>
  Faster
</h2>
<p>
  We've enhanced multiple aspects of the Compiler - rendering and
  interactivity, server requests and caching, and notably - the
  build system.
</p>
<h3>
  Render speed improvements
</h3>
<p>
  The mbed Compiler's responsiveness when rendering UI elements -
  Editor, panels, bars, buttons, tabs etc - is crucial for a
  positive experience when using the IDE.
</p>
<p>
  This is highly dependent on your computer CPU performance and
  browser family, thus we took an older computer hardware
  configuration as a base for comparison and then implemented
  browser-specific optimizations for each browser family to
  maximize performance.
</p>
<p>
  The chart below illustrates the improvements per UI elements per
  browser:
</p>
<p>
  <img src=
  "https://developer.mbed.org/media/uploads/screamer/xide_rendering_by_component.png,qv=3.pagespeed.ic.mmFVgH54ly.png"
  alt="/media/uploads/screamer/ide_rendering_by_component.png?v=3"
  title=
  "/media/uploads/screamer/ide_rendering_by_component.png?v=3">
</p>
<div class="flashbox finfo">
  <h4 class="ftitle">
    Information
  </h4>
  <p>
    Values may be different across computer systems, though the
    proportion between the values of the old and new Compiler
    should be the same.
  </p>
</div>
<p>
  "Other" represents rendering routines that have been optimized or
  dropped entirely, so they no longer consume CPU or rendering
  time.
</p>
<p>
  The next chart represents the time taken to fully render the IDE
  when initializing and when resizing the browser window:
</p>
<p>
  <img src=
  "https://developer.mbed.org/media/uploads/screamer/xide_rendering_totals.png,qv=3.pagespeed.ic.FPqG_zxyXn.png"
  alt="/media/uploads/screamer/ide_rendering_totals.png?v=3" title=
  "/media/uploads/screamer/ide_rendering_totals.png?v=3">
</p>
<p>
  These charts show that the fastest browser with the mbed Online
  Compiler is a WebKit-based browser like Chrome or Safari, though
  Firefox is still a solid option if you're looking for an
  alternative.
</p>
<h3>
  Server side improvements
</h3>
<p>
  The server side also plays important role in how one interacts
  with the mbed Compiler.
</p>
<p>
  We have enhanced and enabled the server side caching for the
  whole IDE interface and in the same time we've reduced the number
  of server requests by joining most of the images in 2 distinctive
  image collections. By doing so the mbed Compiler now fully loads
  in under 1 second with 30% less requests:
</p>
<p>
  <img src=
  "https://developer.mbed.org/media/uploads/screamer/xserver-side_caching_and_requests.png,qv=3.pagespeed.ic.W1P4VY6_cc.png"
  alt=
  "/media/uploads/screamer/server-side_caching_and_requests.png?v=3"
  title=
  "/media/uploads/screamer/server-side_caching_and_requests.png?v=3">
</p>
<div class="flashbox finfo">
  <h4 class="ftitle">
    Information
  </h4>
  <p>
    This is also dependent on your internet connection. The values
    above represent the time taken to generate server responses and
    does not take into account your actual connection speed and
    delay.
  </p>
</div>
<p>
  Generating a list of revisions in Revisions History has been
  optimized for speed by reducing the number repository backend
  calls and improving the quality of the processed data:
</p>
<p>
  <img src=
  "https://developer.mbed.org/media/uploads/screamer/xrevisions_list.png,qv=3.pagespeed.ic.r-JrHH29Ed.png"
  alt="/media/uploads/screamer/revisions_list.png?v=3" title=
  "/media/uploads/screamer/revisions_list.png?v=3">
</p>
<h3>
  Build System
</h3>
<p>
  And last but not least, we've improved the build system, which is
  now over twice as fast!
</p>
<p>
  This is due in part to a complete redesign of the build system,
  completed earlier this year. We now distribute build jobs evenly
  among a flexible number of backend build servers, ensuring both
  that performance is maintained even at our busiest times, and we
  can also easily add as many build servers as are required to meet
  demand. We currently handle about 2,100 compiles per hour, and
  the new system ensures we can scale to handle a lot more in the
  future.
</p>
<p>
  That part addresses the scalability and reliability and gave a
  slight speed increase, but what has really boosted the
  compilation speed is the next improvement - we now simultaneously
  compile each of your source files in parallel across as many as 8
  CPU cores. Once all the objects are created, we then link and
  prepare the binary as a final step. This change means that we can
  make the full use of our build servers, and you will hopefully
  see a noticeable increase in compile speed, especially for larger
  programs.
</p>
<p>
  The chart below shows the comparison between the old and new
  Build System for 3 programs:
</p>
<p>
  <img src=
  "https://developer.mbed.org/media/uploads/screamer/xbuild_system_-_clean_compile.png,qv=3.pagespeed.ic.TSa5qat2FZ.png"
  alt=
  "/media/uploads/screamer/build_system_-_clean_compile.png?v=3"
  title=
  "/media/uploads/screamer/build_system_-_clean_compile.png?v=3">
</p>
<p>
  The bigger the program is, the faster it compiles compared to the
  old build system!
</p>
<p>
  We've also improved incremental (non-clean) compiles, for when
  you're doing incremental edits and compiles in between:
</p>
<p>
  <img src=
  "https://developer.mbed.org/media/uploads/screamer/xbuild_system_-_incremental_compile.png,qv=3.pagespeed.ic.wgDHFsCiij.png"
  alt=
  "/media/uploads/screamer/build_system_-_incremental_compile.png?v=3"
  title=
  "/media/uploads/screamer/build_system_-_incremental_compile.png?v=3">
</p>
<p>
  Give it a try for yourself, and you might even find that a
  program compiles faster using the mbed build system than on your
  desktop system - thanks to our investment in the mbed build
  system, which has been designed with horizontal and vertical
  scalability in mind.
</p>
<h2>
  Smarter
</h2>
<h4>
  Definition lookup
</h4>
<p>
  In a <a href=
  "/blog/entry/New-Editor-features-now-in-beta/">previous</a> mbed
  Compiler release we've introduced the Interactive mode feature,
  which allows quick definition lookups using Ctrl+click combo on
  words in code.
</p>
<p>
  This now takes into account your currently selected board and
  attempts to filter out code definitions intended for other
  platforms in multi-platform libraries like the mbed SDK and
  similar libraries. Effectively it reduces duplicate definitions
  for when using such libraries.
</p>
<p>
  The base convertor (when clicking numbers) has been enhanced to
  support clicking on floating point and negative numbers, and also
  reports the float/double precision and unixtime representation of
  a value.
</p>
<p>
  The definition tooltip UI has been redesigned, with a better
  focus on the definition itself, yet we've kept the definition and
  documentation reference links as buttons.
</p>
<p>
  The definition tooltip will also try to adjust to your screen
  size and the amount of data to be displayed in attempt to deliver
  better representation of the definitions:
</p>
<p>
  <a href=
  "/media/uploads/screamer/definition_lookup.png"><img width="600"
  alt="Click to view in original size" title=
  "Click to view in original size" src=
  "https://developer.mbed.org/media/uploads/screamer/definition_lookup.png.pagespeed.ce.jxw9IG9qa4.png"></a>
</p>
<p>
  Additionally it is no longer required to hold Ctrl - just click
  anywhere in code!
</p>
<h4>
  Warnings and errors during compile
</h4>
<p>
  Have you ever wanted all compile errors and warnings to be
  somewhat more visible? May be like highlighted lines in your
  code? Well, that's one of the new features of the mbed Compiler.
</p>
<p>
  When an error or a warning occurs during compile, the Editor will
  highlight the reported lines in the currently open files, and
  will remember compile messages for files that aren't open yet, so
  as soon as you do it will highlight them as well.
</p>
<p>
  The column number of a highlighted line can be clicked, which
  will display and position a tooltip with the compile message just
  under the reported location:
</p>
<p>
  <img src=
  "https://developer.mbed.org/media/uploads/screamer/compile_messages_in_editor.png"
  alt="/media/uploads/screamer/compile_messages_in_editor.png"
  title="/media/uploads/screamer/compile_messages_in_editor.png">
</p>
<p>
  To clear highlighted warning/error lines you can either modify
  them or close and reopen the file to clear them all.
</p>
<h4>
  New program templates
</h4>
<p>
  We've added support for multiple templates when creating a
  program, including the option to create an empty program.
</p>
<p>
  This takes into account your currently selected board and offers
  program templates which we verified to be working with that board
  and that are also interesting and/or easy to start with.
</p>
<p>
  If you'd like a program of your own to be added as a program
  template for a board, then write us at support@mbed.org.
</p>
<h2>
  Other improvements
</h2>
<p>
  The following features have been enhanced to deliver a better or
  new functionality:
</p>
<ul>
  <li>"Format Code" will format/indent only the selected code with
  text selections in the Editor.
  </li>
  <li>"Compile Output" panel now supports selecting (including
  Ctrl+A combo) and copying of multiple compile messages. The
  format of the copied messages has been improved as well.
  </li>
  <li>The column number for compile messages have been restored.
  </li>
  <li>"All changes" in Revision History will now highlight code
  based on the mbed colorizing standard. It will also properly
  indicate line numbers for diffs.
  </li>
  <li>A new dependency progress dialog will appear when attempting
  to commit, update or publish a repository. In the old mbed
  Compiler this was a silent check that especially on big programs
  can leave the impression that the Compiler has hung.
  </li>
  <li>The "Who" field in Revision History will now handle email
  addresses, allowing you to click them.
  </li>
  <li>The platform selection dialog is now slightly bigger and
  supports more than 10 platforms (virtually unlimited). Also the
  pinout images have been resized to fit better.
  </li>
  <li>A new ZIP export option is available, which exports all
  internal repository files (.hg, .hgignore) of a program, allowing
  you to quickly setup an offline development environment. The
  legacy ZIP export option has been renamed to "mbed Online
  Compiler" and the new one replaces it.
  </li>
  <li>The mbed Compiler now shows a "Beta mode" button if you have
  beta mode enabled. Clicking it will take you to the beta mode
  page if you want to turn it off. If you do - remember to refresh
  the mbed Compiler.
  </li>
  <li>You can now convert mbed library builds into normal library
  with a single click by using the "Covert to Library" context menu
  option.
  </li>
  <li>We've prepared a <a href=
  "https://www.youtube.com/watch?v=7N2RxktXwE4" rel="nofollow">new
  introduction video</a> to the mbed Online Compiler.
  </li>
</ul>
<h2>
  Final words
</h2>
<p>
  If you've read this far then you must be really excited about the
  new mbed Online Compiler!
</p>
<p>
  Let us know what you think on <a href=
  "http://mbed.org/forum/bugs-suggestions">http://mbed.org/forum/bugs-suggestions</a>.
</p>
<p>
  Happy coding!
</p>

