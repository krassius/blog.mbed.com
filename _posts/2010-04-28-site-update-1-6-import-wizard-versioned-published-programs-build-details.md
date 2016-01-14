---
layout:         post-mbed-org
title:          "Site update 1.6: Import wizard, versioned published programs, build details"
date:           2010-04-28T17:45:07.000Z
author:         Dan Ros
tags:           compiler, updates, website
originalUrl:    https://developer.mbed.org/blog/entry/134/
---

<p>
  Today we have put live the latest version of mbed.org.
</p>
<p>
  Changelog summary:
</p>
<ul>
  <li>New compiler import wizard
  </li>
  <li>Listing of published programs within the compiler
  </li>
  <li>Published program versioning
  </li>
  <li>Program memory usage display
  </li>
  <li>Many bugfixes to compiler, especially regarding support on
  Mac platforms
  </li>
</ul>
<p>
  Here are the details:
</p>
<p>
  <strong>Importing a program</strong>
</p>
<p>
  The new import wizard allows you to import programs from an mbed
  URL as before, but it is much neater now with the added benefit
  that you can browse the public published programs on mbed.org.
  You can import a program with two clicks.
</p>
<p>
  <strong><img alt="" src=
  "http://mbed.org/media/uploads/dan/import.png" style=
  "border: 1px solid black;"></strong>
</p>
<p>
  Clicking on a program in the listing enters the URL of the
  program in the source field, ready to import.
</p>
<p>
  Simply click the Import button, and it will be copied to your
  program Workspace, where you can then compile or edit the
  program. This is a great way to pull in programs to get you
  started.
</p>
<p>
  <strong>Finding a program or library</strong>
</p>
<p>
  To find a program or library you are looking for, you can search
  in the&nbsp;<strong>Filter</strong> field at the bottom of the
  Import screen. Enter part of a program name, tag, user, or
  description, and it will quickly filter the list to show only the
  matching results.
</p>
<p>
  If you find a program useful often, you can bookmark it. Clicking
  the&nbsp;<strong>Bookmarked</strong> tab shows only your
  bookmarked programs.
</p>
<p>
  <strong>Importing a library<br></strong>
</p>
<p>
  A new function of the compiler is the ability to import a
  published program as a library.
</p>
<p>
  Find a program as before, but select the <strong>Library</strong>
  option below the Source URL field. Choose a program to add the
  library to from the list of programs in your workspace, and hit
  Import.
</p>
<p>
  This is useful for pulling in programs that have been packaged as
  a reusable library component (e.g. a class for a peripheral, but
  no main() function), so you can quickly pull in the building
  blocks for a project. We'll be expanding the library support
  further in future, and the following feature make it easier to
  publish libraries.
</p>
<p>
  <strong>Program versioning</strong>
</p>
<p>
  <img alt="" src="http://mbed.org/media/uploads/dan/version.png"
  style="border: 1px solid black;">
</p>
<p>
  Now, when you publish a program with the same name as one you
  previously published, it will create a new version of that
  published program. The URL you get will be a reference to the
  <strong>most recent</strong> version of that program.
</p>
<p>
  This is great as it meand if you link to one of your programs in
  the forum or elsewhere, it will remain an up to date link. This
  should be a great feature for publishing library components or
  reference examples, that can be expanded and updated over time.
</p>
<p>
  And publishing a program is a good way to snapshot your
  development.
</p>
<p>
  <strong>Program memory usage</strong>
</p>
<p>
  <img alt="" src="http://mbed.org/media/uploads/dan/details.png"
  style="border: 1px solid black;">
</p>
<p>
  Another thing you asked for was memory usage of a programs. This
  is now shown on the screen when you select the program folder.
</p>
<p>
  You'll have to compile the program to see the memory usage, and
  the memory usage display reflects the state of the program at the
  most recent compile.
</p>
<p>
  As a summary of how to interpret this, the program code and any
  constant (const) variables will end up in FLASH, and data
  variables end up in main RAM; note that this doesn't include the
  runtime allocated variables (i.e. the heap and stack), which live
  in any remaining RAM.
</p>
<p>
  Hope you like these updates. As always, fire any bugs and
  feedback at the forum.
</p>

