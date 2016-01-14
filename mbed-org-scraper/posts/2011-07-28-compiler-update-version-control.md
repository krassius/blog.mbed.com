---
layout:         post-mbed-org
title:          "Compiler Update - Version Control!OverviewThe Basics"
date:           2011-07-28T05:06:30.000Z
author:         Simon Ford
tags:           
originalUrl:    https://developer.mbed.org/blog/entry/Compiler-Update-Version-Control/
---

<p>
  After a very successful beta, the mbed Compiler now officially
  supports built-in workspace Version Control!
</p>
<p>
  You'll now see new "Commit" and "Revisions" buttons in the
  toolbar, and driving it should be pretty self explanatory,
  especially for those familiar with DVCS such as git or mercurial.
</p>
<p>
  Here is the video that shows how you get started:
</p>
<div class="flex-video">
  <iframe width="420" height="315" src=
  "https://www.youtube.com/embed/BWM21JzSDSs" frameborder="0"
  allowfullscreen="allowfullscreen"></iframe>
</div>
<p>
  For anyone who missed the beta introduction, here are the main
  details:
</p>
<h2>
  Overview
</h2>
<p>
  You can use the version control features to let you version,
  branch and merge code, with a nice representation of the state of
  your project history:
</p>
<p>
  <img src=
  "http://mbed.org/media/uploads/simon/_scaled_version-control.png"
  alt=
  "http://mbed.org/media/uploads/simon/_scaled_version-control.png"
  title=
  "http://mbed.org/media/uploads/simon/_scaled_version-control.png">
</p>
<p>
  The approach we're taking should be familiar to those of you with
  experience of distributed version control models (as used by
  mercurial/git); each program has its own local repository, so you
  can commit and perform actions on it within your own workspace
  (such as updating, branching, showing changes).
</p>
<p>
  The main things you can do so far include:
</p>
<ul>
  <li>Commit a version of your project, and view the revision
  history
  </li>
  <li>View changes a version made, and compare changes between
  versions
  </li>
  <li>Update or revert to a different version
  </li>
  <li>Branch and merge
  </li>
</ul>
<p>
  Note that you can't do any collaboration aspects with this yet;
  no pulling, pushing, named branches etc; it is all just local to
  your workspace project for now. But you can guess what we're
  working on next...
</p>
<h2>
  The Basics
</h2>
<p>
  Your program, as before, is the "Working Copy". You can "Commit"
  changes to its local repository to create new "Revisions". You
  can see the changes between your current working copy to the
  previous revision, and changes between revisions.
</p>
<p>
  <img src=
  "https://developer.mbed.org/media/uploads/simon/_scaled_screen_shot_2011-06-14_at_21.08.49.png"
  alt=
  "/media/uploads/simon/_scaled_screen_shot_2011-06-14_at_21.08.49.png"
  title=
  "/media/uploads/simon/_scaled_screen_shot_2011-06-14_at_21.08.49.png">
</p>
<p>
  You can choose to "Update" to a particular revision, which
  updates your working copy to that revision (e.g. a state of your
  program in the past). This is the way you can "Branch"; do some
  commits, update to a previous revision, do some more commits; you
  now have two branches of development derived from a common
  revision.
</p>
<p>
  You can then "Merge" a revision, often the head of one branch, in
  to your working copy. This creates a working copy that is the
  merge of these two branches, and when you commit, your back to
  one (less) branch of development.
</p>
<p>
  There is also the option to "Discard" your working copy, and
  "Revert" your working copy to a particular revision; unlike
  "Update", this creates a working copy with the changes you need
  to get back to that previous state, more like an "undo" than a
  branch.
</p>
<p>
  We hope you find this useful!
</p>

