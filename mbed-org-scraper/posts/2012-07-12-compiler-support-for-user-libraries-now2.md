---
layout:         post-mbed-org
title:          "Compiler support for user libraries now on beta!Library PublishingOther Updates"
date:           2012-07-12T17:58:50.000Z
author:         Simon Ford
tags:           compiler, updates, website
originalUrl:    https://developer.mbed.org/blog/entry/Compiler-support-for-user-libraries-now2/
---

<p>
  We've now made a major compiler and website update available for
  beta trials. The highlight of this update is support for
  developing and publishing your own libraries. Here are the
  details, along with the other features and updates we've added...
</p>
<h2>
  Library Publishing
</h2>
<p>
  Up until now, you could publish programs straight from the
  compiler to the mbed website. While this could be abused to share
  code usable as libraries, we've now taken this idea and built in
  a proper workflow to support native development and publishing of
  libraries.&nbsp;This should provide a great way to create and
  share reusable library components to drive peripherals etc, and
  help us all stop repeating ourselves and ultimately build our
  prototypes even faster!
</p>
<p>
  When you've put together some ninja code, we want to make it easy
  for you to share your effort in a way that makes it easy for
  others to reuse. Plus, fold in fixes, improvements and
  documentation. To do this, you can now create a new library that
  is editable within the compiler. In the example below, a
  "Flasher" library has been created and is in active development:
</p>
<p>
  <img alt="" height="177" src=
  "http://mbed.org/media/uploads/simon/library-tutorial-02.png"
  width="393">
</p>
<p>
  Once you are happy, you can right click the library and publish
  it with descriptions and tags; it'll get posted to a new
  "libraries" section of your user account on the mbed website, and
  be converted to a proper published library within your program:
</p>
<p>
  <img alt="" height="177" src=
  "http://mbed.org/media/uploads/simon/library-tutorial-04.png"
  width="393">
</p>
<p>
  As this is now published, anyone can go to it on the website, and
  import it in to their programs by clicking on the link:
</p>
<p>
  <img alt="" height="165" src=
  "http://mbed.org/media/uploads/simon/_scaled_servo-lib01.png"
  width="400">
</p>
<p>
  It is possible to edit the library and republish it, enabling a
  simple way to provide updates to libraries and allow them to
  improve and bugfix over time, taking advantage of the integrated
  one-click updates that have been supported by the mbed libraries,
  for any library.
</p>
<p>
  And if you document your library with doxygen markup, you'll also
  get your documentation generated for you to make it even easier
  for users to make use of your hard work:
</p>
<p>
  <img alt="" height="400" src=
  "http://mbed.org/media/uploads/simon/_scaled_servo-lib02.png"
  width="362">
</p>
<p>
  Have a play on beta and please tell us how you get on. For more
  details on libraries, see the full writeup in the cookbook:
</p>
<ul>
  <li>
    <a href="http://mbed.org/cookbook/Writing-a-Library">Writing a
    Library</a>
  </li>
</ul>
<h2>
  Other Updates
</h2>
<p>
  A collection of other things have made it in:
</p>
<p>
  The IDE now lets you manage your workspace, allowing you to
  easily search and select which projects are active in your
  workspace:
</p>
<p>
  <img alt="" height="272" src=
  "http://mbed.org/media/uploads/simon/_scaled_workspace.png"
  width="400">
</p>
<p>
  We've updated the underlying compiler engine:
</p>
<ul>
  <li>Moved to the new RVDS 4.1 compiler engine
  </li>
  <li>Added proper support for C as well as C++; you can now
  officially create and compile .c files!
  </li>
</ul>
<p>
  The compiler IDE has had a load of minor improvements and fixes,
  including fixing the Mac copy/paste bugs that had been hanging
  around.
</p>
<p>
  Finally, you can now add your geographic location and
  twitter/linkedin details to your profile:
</p>
<p>
  <img alt="" height="233" src=
  "http://mbed.org/media/uploads/simon/_scaled_profile.png" width=
  "400">
</p>
<p>
  I'm incredibly proud at how helpful, polite and supportive
  everyone who has gotten involved in our little community has been
  so far, and I'd really like to keep it that way. I'd really
  encourage you to&nbsp;upload a photo, set your location, and add
  a few words of who you are on your profile, as i'm convinced that
  will help as a reminder that we're all real people, and encourage
  the same respect as if you met in person; please help us keep
  mbed personal and supportive!
</p>
<p>
  To test the beta mode, just use the floating betamode box on the
  front page, and tell us of any problems in the forum. Hope you
  enjoy the updates!
</p>

