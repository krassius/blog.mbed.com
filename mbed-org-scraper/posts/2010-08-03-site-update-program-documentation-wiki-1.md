---
layout:         post-mbed-org
title:          "Site update: Program documentation, wiki macros See the code of published projectsPublished projects come with Doxygen powered documentationThe documentation of published projects is integrated within the wikisNew handbook and future plans"
date:           2010-08-03T12:08:26.000Z
author:         Dan Ros
tags:           site, updates
originalUrl:    https://developer.mbed.org/blog/entry/Site-update-Program-documentation-wiki-1/
---

<p>
  A few days ago we released an upgrade to mbed.org. First, the
  highlights:
</p>
<ol>
  <li>You can now see the code of published projects
  </li>
  <li>Published projects come with Doxygen powered documentation
  </li>
  <li>The documentation of published projects is integrated within
  the mbed wikis
  </li>
</ol>
<p>
  Here's the details of how you can make use of these new features:
</p>
<h2>
  <strong>See the code of published projects</strong>
</h2>
<p>
  A feature which has been requested a few times and one which we
  have wanted to add for a while is quite simple: you can now
  browse the code of a published project. This lets you get a quick
  feel for whether a program is worth importing into your Compiler
  before you do so.
</p>
<p>
  &nbsp;
</p>
<p>
  <img alt="Example of viewing source code" height="424" src=
  "http://mbed.org/media/uploads/dan/codesample.png" style=
  "border: 1px solid black;" width="719">
</p>
<p>
  <em>-&nbsp;<a href=
  "http://mbed.org/users/aberk/programs/PID_HelloWorld/5yogr/docs/main_8cpp_source.html">Example
  of viewing source code</a></em>
</p>
<h2>
  <strong>Published projects come with Doxygen powered
  documentation</strong>
</h2>
<p>
  Another powerful feature is that now when you publish programs,
  any <a href="http://www.stack.nl/~dimitri/doxygen/">Doxygen</a>
  compatible markup you insert into your code will be rendered as
  Doxygen markup within your published program's page. There's too
  many <a href=
  "http://www.stack.nl/~dimitri/doxygen/features.html">features</a>
  of doxygen to go into here, but the main points are:
</p>
<ul>
  <li>Documents functions and classes including parameters and
  return types
  </li>
  <li>Links from documentation about a function or class to the
  definition in code
  </li>
  <li>Links back from source code to documentation for each
  documented function or variable
  </li>
</ul>
<div>
  For information on how doxygen markup should look, refer to
  <a href="http://mbed.org/cookbook/Writing-a-Library">this
  cookbook page</a>, or <a href=
  "http://www.stack.nl/~dimitri/doxygen/docblocks.html">one</a> of
  the <a href=
  "http://en.wikipedia.org/wiki/Doxygen">many</a><a href=
  "http://drupal.org/node/1354">external</a> <a href=
  "http://www-numi.fnal.gov/offline_software/srt_public_context/WebDocs/doxygen-howto.html">
  guides</a>.
</div>
<div>
  <img alt="Example of documentation" height="617" src=
  "http://mbed.org/media/uploads/dan/apisample.png" style=
  "border: 1px solid black;" width="771">
</div>
<p>
  <em><a href=
  "http://mbed.org/users/aberk/programs/QEI_lib/5ytsc/docs/classQEI.html">
  - Example of documentation</a></em>
</p>
<h2>
  The documentation of published projects is integrated within the
  wikis
</h2>
<p>
  Here's where it gets interesting (to me!). Last month we released
  the <a href="http://mbed.org/blog/entry/new-cookbook/">new
  cookbook</a>. This most recent update builds on that by
  integrating the new program documentation into the wiki engine.
  Here's what that gets you:
</p>
<ul>
  <li>Embed link to a program in any wiki page
  </li>
  <li>Embed summary of program API in any wiki page
  </li>
  <li>Embedded documentation (or code) updates automatically when
  you update the program
  </li>
</ul>
<p>
  This may sound tricky, but in practice, it's fairly
  straightforward. All you have to do is <em>put the URL of the
  documentation into the wikitext.</em>
</p>
<pre>
&lt;&lt;program http://mbed.org/users/aberk/programs/QEI_lib/5ytsc/docs/classQEI.html&gt;&gt;
</pre>
<p>
  Results in something like:
</p>
<p>
  <img alt="Embedded documentation in wiki" height="270" src=
  "http://mbed.org/media/uploads/dan/wikiembed.png" style=
  "border: 1px solid black;" width="710">
</p>
<p>
  <em><a href="http://mbed.org/cookbook/QEI">-&nbsp;Example of
  embedded documentation in wiki page</a></em>
</p>
<p>
  &nbsp;
</p>
<h2 style=
"font-family: 'Trebuchet MS', sans-serif; font-weight: bold;">
  <strong>New handbook and future plans</strong>
</h2>
<div>
  Regular users may also have noticed that at the same time as the
  above update, the Handbook has updated to the new format. This
  has the side effect of allowing you to comment on Handbook pages,
  where your suggestions for improvement of the official
  documentation is very welcome.
</div>
<div>
  Finally, for those of you still reading, a word on the future
  plans for the above features.
</div>
<div>
  We will move the Notebooks and the Forum to support the wiki-text
  method of creating content. This means:
</div>
<div>
  <ul>
    <li>You will be able to use the above features in the notebook
    and forum
    </li>
    <li>The rich text editor in the forum and notebook will be
    replaced with a plain text box
    </li>
    <li>You will be able to contribute to the forum from mobile
    platforms
    </li>
    <li>Getting layout right will hopefully be a lot easier and
    predictable, without the (sometimes eccentric) rich text editor
    </li>
  </ul>
  <div>
    No release date on those future plans yet, but they are
    scheduled in for one of the upcoming releases.
  </div>
</div>

