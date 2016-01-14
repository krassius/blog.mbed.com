---
layout:         post-mbed-org
title:          "New mbed features available for testing"
date:           2013-12-13T15:32:43.000Z
author:         Mihail Stoyanov
tags:           build system, editor, ide, MBED website
originalUrl:    https://developer.mbed.org/blog/entry/new-mbed-features-available-for-testing/
---

<p>A new public beta is now available for testing. It aims to deliver new
  features in different areas of the mbed ecosystem.</p>
 <h3>Website</h3>

<p>To complete the set of community features, we&apos;ve added questions
  and forum discussions for teams, platforms and components, which can be
  accessed either through their home pages or through the global forums page
  for faster access. Any activity will be also listed under Activity on mbed
  home page.</p>
<p>The team pages now also have wiki sections, where team related information
  can be structured into wiki pages. This can be disabled through the team
  administration page if needed.</p>
<p>We&apos;re planning to announce the team features in a separate blog post.</p>
<p><a href="/media/uploads/screamer/mbed-teams.png"><img width="400" alt="Click to enlarge" title="Click to enlarge" src="https://developer.mbed.org/media/uploads/screamer/400xNxmbed-teams.png.pagespeed.ic.gTr3FSBtDG.png"></a>
</p>
<p>Repositories can now be redirected to other repository URLs, allowing
  seamless repository migration from user account to team account without
  the need for all end-users to update with the new repository URL. This
  can be controlled through the administration page of a repository.</p>
<p>We&apos;ve also improved the website load time and responsiveness by packing
  the top 70 most used 16x16 icons into image collection.</p>

<h3>Online Compiler</h3>

<p>The Compiler Editor now offers a lightweight markers bar, next to the
  vertical scroll bar, to visualize compile warnings/errors and user markers/bookmarks,
  with the latter being remembered across sessions. To bookmark a line simply
  click the line number or hit F2 for the current line. The displayed markers
  on the bar will show the compile warning/error or the contents of the bookmarked
  line when hovered with the mouse, and will scroll to the corresponding
  line when clicked. These can be removed by clicking the line number/F2
  or by using the line numbers context menu to clear them all.</p>
<p><a href="/media/uploads/screamer/editor-markers.png"><img width="400" alt="Click to enlarge" title="Click to enlarge" src="https://developer.mbed.org/media/uploads/screamer/400xNxeditor-markers.png.pagespeed.ic._b3w4Bp3XA.png"></a>
</p>
<p>We&apos;ve also improved white space handling in the Editor, where new
  lines will be indented based on the indentation of the previous and next
  lines and also based on the presence of curly braces before the new line.</p>
<p>In a <a href="/blog/entry/faster-smarter-mbed-compiler/">previous release</a> we&apos;ve
  added the ability to export programs into ZIP archive that will also include
  all repository files. We&apos;ve now extended this for all supported tool
  chains, so when you export to your favourite tool chain, you will also
  get all repository files needed for one-click offline setup. You can then
  easily pull changes from the designated repositories, commit and even push
  your changes back to them.</p>

<h3>Build system</h3>

<p>The build system now supports the latest ARM compiler - ARMCC 5.03. Programs
  compiled with it will be slightly faster and slightly smaller in size.
  To use the latest ARM compiler, you can either update the mbed SDK build
  in your program to revision 69 or later, or use the mbed SDK source.</p>
<p>We&apos;ve also fully integrated the mbed SDK github repository with the
  mbed build system and the mbed Compiler exporter, so its easier and faster
  to add new platforms to the mbed ecosystem.</p>

<h3>Also</h3>

<p>Note that this post doesn&apos;t cover all changes and improvements introduced
  in this beta, but focuses on the new features instead.</p>
<p>If you&apos;re curious what else is there, then enable beta mode on
  <a
  href="http://mbed.org/betamode/">http://mbed.org/betamode/</a>and explore it yourself! :)</p>
<p>Don&apos;t forget to let us know what you think or what can be improved
  on <a href="http://mbed.org/forum/bugs-suggestions">http://mbed.org/forum/bugs-suggestions</a>.</p>
<p>Happy testing!</p>
