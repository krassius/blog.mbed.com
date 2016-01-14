---
layout:         post-mbed-org
title:          "Compiler Update: Fixes, more fixes, and a feature"
date:           2010-03-20T16:43:50.000Z
author:         Simon Ford
tags:           compiler, updates
originalUrl:    https://developer.mbed.org/blog/entry/114/
---

<p>
  We've now pushed live an update for the mbed Compiler focused on
  bug fixes and stability; it addresses a whole variety of quirky
  cross-platform problems and general application bugs, and has a
  good deal of internal rework to set us up for the next set of
  features.
</p>
<p>
  The current compiler has actually proven itself to work really
  well, but with this update it is feeling more stable than ever
  across lots of different platforms; in fact, our compiler bug
  list is now empty (but I'm sure you'll help us change that!).
  Thanks to everyone who provided us bug reports and feedback to
  identify these issues.
</p>
<p>
  Here is a summary of the important bugs that should now be
  squished...
</p>
<p>
  <strong>Cross-browser compiler fixes</strong>
</p>
<ul>
  <li>Support added for Mac/AltGr/Foreign keyboards (as reported
  <a href=
  "http://mbed.org/forum/mbed/topic/132/">http://mbed.org/forum/mbed/topic/132/</a>
  and <a href="http://mbed.org/forum/bugs-suggestions/topic/212/">
    http://mbed.org/forum/bugs-suggestions/topic/212/</a>)
  </li>
  <li>Cursor display problems under Mac/FF fixed (as reported in
  <a href=
  "http://mbed.org/forum/mbed/topic/216/">http://mbed.org/forum/mbed/topic/216/</a>)
  </li>
  <li>Right-click working under Mac FF and Safari (as reported in
  <a href=
  "http://mbed.org/forum/mbed/topic/63/">http://mbed.org/forum/mbed/topic/63/</a>)
  </li>
  <li>Copying compiler errors working in Mac/Safari
  </li>
  <li>Mac "delete" and "backspace" behaviour fixed
  </li>
</ul>
<p>
  <strong>General compiler fixes</strong>
</p>
<ul>
  <li>Rename and Save As behaviour fixed (as reported in <a href=
  "http://mbed.org/forum/mbed/topic/213/">http://mbed.org/forum/mbed/topic/213/</a>,
  <a href=
  "http://mbed.org/forum/mbed/topic/151">http://mbed.org/forum/mbed/topic/151</a>
  and&nbsp;<a href=
  "http://mbed.org/forum/bugs-suggestions/topic/212/">http://mbed.org/forum/bugs-suggestions/topic/212/</a>)
  </li>
  <li>Lots of fixes and enhancements to file naming and checking
  (as reported in <a href="http://mbed.org/forum/mbed/topic/177/">
    http://mbed.org/forum/mbed/topic/177/</a>)
  </li>
  <li>Syntax highlighting bugs fixed (as reported in <a href=
  "http://mbed.org/forum/mbed/topic/115">http://mbed.org/forum/mbed/topic/115</a>)
  </li>
  <li>Binary filenames now include the mbed compile target e.g.
  &lt;filename&gt;_LPC1768.bin (as reported in <a href=
  "http://mbed.org/forum/mbed/topic/310/">http://mbed.org/forum/mbed/topic/310/</a>)
  </li>
  <li>Tab space insertion now includes tabstops (as reported
  <a href=
  "http://mbed.org/forum/mbed/topic/360/">http://mbed.org/forum/mbed/topic/360/</a>)
  </li>
</ul>
<p>
  <strong>Publishing and importing</strong>
</p>
<p>
  We also added a minor improvement to the compiler to allow
  importing of published projects as libraries. This basically
  means if you publish something containing reusable code (e.g. a
  peripheral driver class .h/.cpp, and no main() function or
  libraries), someone can pull it in as a library and use it within
  their project just using the URL. It is very primitive at the
  moment, but it squares-the-circle and makes it possible.
</p>
<p>
  If you publish a project, when you go to it's homepage it looks
  something like:
</p>
<p>
  <img alt="" height="327" src=
  "http://mbed.org/media/uploads/simon/import-library01.png" width=
  "577">
</p>
<p>
  Note, when publishing, you also now have the option to add a
  description and tags.
</p>
<p>
  If you click "Import program in to Compiler", it'll do just that
  - Import this as a whole new program. No change there.
</p>
<p>
  However, if you just copy the URL and go to the compiler, you can
  now right-click an existing program and select "Import
  Library...". Then paste in the URL and hit "Import":
</p>
<p>
  <img alt="" height="234" src=
  "http://mbed.org/media/uploads/simon/import-library02.png" width=
  "530">
</p>
<p>
  Your program will now have pulled in the code as a library. You
  can also use the URL under "Import Files..." if you actually want
  to see/edit the files. There is lots of scope for improvement
  here, but hopefully this is a good start!
</p>
<p>
  That's it for now.&nbsp;Thanks again for all the reports; if you
  have any problems after these updates, or spot new ones, please
  make sure you report it in the&nbsp;<a href=
  "http://mbed.org/forum/bugs-suggestions">Bugs and Suggestions
  Forum</a>!
</p>

