---
layout:         post-mbed-org
title:          "New Editor features - Now live"
date:           2013-08-05T11:17:49.000Z
author:         Mihail Stoyanov
tags:           definition, editor, interactive, lookup, online compiler
originalUrl:    https://developer.mbed.org/blog/entry/New-Editor-features-now-in-beta/
---

<p>
  After the release of the <a href=
  "http://mbed.org/handbook/Collaboration/Pull-requests">Pull
  requests</a> feature, the focus with the mbed Compiler has
  shifted towards improving the code editing experience. We are
  happy to announce a new set of features aimed at enhancing the
  Editor capabilities in the mbed Compiler. These features are now
  live.
</p>
<p>
  Here is a sneak peek of the main feature:
</p>
<p>
  <img src=
  "https://developer.mbed.org/media/uploads/screamer/interactive-editor-2.png"
  alt="/media/uploads/screamer/interactive-editor-2.png" title=
  "/media/uploads/screamer/interactive-editor-2.png">
</p>
<h3>
  Interactive mode
</h3>
<p>
  The Interactive mode is a new way to interact with the mbed
  Editor for easy and quick information lookup about a code
  element. The mode is triggered by tapping and holding the Ctrl
  key (Command key on Mac) and moving the mouse cursor over text
  elements like words, numbers, hexadecimals or even URLs. Valid
  elements will be underlined when hovered and can be clicked.
  Depending the element type the Editor will respond differently:
</p>
<ul>
  <li>If you click a word, the Editor will perform a case-sensitive
  definition lookup for that word and display up to ten results in
  a tooltip (like shown on the image above). On top of every result
  is the definition name and type. Under that is the definition
  parent, which can also be clicked to perform definition lookup
  based on the parent name. If an API documentation is present for
  the the defined element or its parent, then the tooltip will
  contain a link that opens the API documentation inside the mbed
  Compiler. Last is the link to the declaration at file:line with a
  snippet of the declaration code that lets you quickly check the
  parameters and return type (if any).
  </li>
</ul>
<ul>
  <li>If you click a number or hex it will display a base convertor
  for decimal, hexadecimal and binary representation in 1, 2 and 4
  byte storage (8, 16 and 32 bits).
  </li>
</ul>
<ul>
  <li>If you click a URL it will open it in a new browser tab.
  </li>
</ul>
<p>
  The feature shows results based on the existing code saved in
  your workspace, meaning that the definition results may not
  reflect the contents of any unsaved files.
</p>
<p>
  To exit the Interactive mode simply release the Ctrl key (Command
  key on Mac).
</p>
<h3>
  Other Editor features
</h3>
<ul>
  <li>Functions defined in stdlib, stdio, math, string and strings
  libraries will now be colored in dark blue. They will also have
  description and definition when clicked in Interactive Editor
  mode.
  </li>
  <li>The Editor tabs are now grouped and subtly coloured based on
  the program each file belongs to, allowing you to navigate easily
  between files across multiple programs. The Editor will also open
  new files as last tab in the program group if exists.
  </li>
  <li>The Editor tabs now have context menus that let you invoke
  common operations on them without the need to focus the tab/file.
  </li>
  <li>Improved Editor rendering speed when typing and scrolling by
  15% to 200%, and by over 260% when doing text selections! It's
  now possible to edit huge 100k lines files on modern browsers.
  </li>
</ul>
<h3>
  Other features in beta
</h3>
<ul>
  <li>The board selection in the mbed Online Compiler has been
  completely redesigned to a fully featured dialog that gives a
  detailed information about the platform you are compiling for,
  including a photo, description and even pinout!
  </li>
  <li>The compile progress has been redesigned to reflect the board
  selection enhancement.
  </li>
  <li>The compilation times and the binary sizes have been reduced
  for large programs.
  </li>
  <li>It is now possible to create and edit files with .txt
  extensions in your workspace. Note that once created these files
  will become part of your repository.
  </li>
  <li>Improved importing speed from 20% to over 300% for programs
  with more than one library. Especially noticeable when importing
  library-intensive programs like the <a href=
  "https://mbed.org/users/xively/code/xively-jumpstart-demo/">Xively's
  jump start demo</a>
  </li>
  <li>URLs in source code on mbed website will now be recognized
  and turned to clickable links.
  </li>
  <li>API Documentation source code will now be highlighted using
  the mbed code highlighting style. URL links to other API
  documentation resources will be highlighted as well.
  </li>
  <li>Functions defined in stdlib, stdio, math, string and strings
  libraries will now be coloured in dark blue for all code
  resources on the mbed website - wiki pages, forums, api
  documentation, repositories, etc.
  </li>
</ul>
<h3>
  Update: Now released!
</h3>
<p>
  These changes have now been rolled out to all users.
</p>

