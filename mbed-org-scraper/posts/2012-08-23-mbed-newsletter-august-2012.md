---
layout:         post-mbed-org
title:          "mbed Newsletter - August 2012Collaboration, one month inSite update"
date:           2012-08-23T15:17:44.000Z
author:         Dan Ros
tags:           newsletter
originalUrl:    https://developer.mbed.org/blog/entry/mbed-Newsletter-August-2012/
---

<p>
  The summer months are traditionally a little bit quieter as many
  people take the opportunity to take some time off. However, the
  work here at mbed hasn't stopped. In this issue:
</p>
<ul>
  <li>
    <strong>Official libraries</strong>: RTOS updates, network
    stack updates, and adoption of USB Device library
  </li>
</ul>
<ul>
  <li>
    <strong>Online tools</strong>: Collaboration update: one month
    in, and a new /code/ page
  </li>
</ul>
<h1>
  Official libraries
</h1>
<p>
  Since the launch of the new collaboration features, we now have a
  single area for all officially supported software - <a href=
  "http://mbed.org/users/mbed_official/code/">mbed official</a>.
</p>
<p>
  Here's what we've been working on:
</p>
<h3>
  RTOS Memory Model
</h3>
<p>
  The memory model of the <a href=
  "http://mbed.org/handbook/RTOS">RTOS</a> has been refined by
  <span><span class="authortext"><a href=
  "/users/emilmont/"><img alt="" class="icon" src=
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgQH/8QAJRAAAQMDAwMFAAAAAAAAAAAAAQIDBAUREgAGByEiMRMUMkGR/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABoRAAEFAQAAAAAAAAAAAAAAAAABAgMTYWL/2gAMAwEAAhEDEQA/AGfJm8JdCnRqTEmppqHmA49MTF9y4nJRSEIR4BNibnUXGVSdkbgapCJbk0QpyXnZHpKYUs5hCg6g9CoZJAV9jWLPcrya/uaoy3UrjQ0gttJSQZBbyJuSe0kXHaPAHknT3g/kbaI3jGh1qpSG5C8kRHZqO11Rwx6i9l5X+X7fRq992CLHHR0f/9k=">
  </a> <a href="/users/emilmont/">Emilio Monti</a></span></span>:
  <a href=
  "http://mbed.org/handbook/RTOS-Memory-Model">RTOS-Memory-Model</a>
</p>
<h3>
  Networking stack news
</h3>
<p>
  The further improvement of the new <a href=
  "/handbook/Networking">Networking</a> stack continues. Recent
  developments include the <a href=
  "http://mbed.org/handbook/Socket">Socket API</a>.
</p>
<p>
  On top of the new <a href=
  "http://mbed.org/handbook/Socket">Socket API</a>,
  <span><span class="authortext"><a href=
  "/users/donatien/"><img alt="" class="icon" src=
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAQABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgf/xAAmEAACAQIGAQQDAAAAAAAAAAABAwIEBQAGERITISIHFBZBMXHB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAZEQACAwEAAAAAAAAAAAAAAAABAgARIUH/2gAMAwEAAhEDEQA/AGuV84ZRr6ht8q8k5eKa10mVFSi2GbXSjIQjPjIGpOvf9xFrXflUXqYy/wBuqLZSzpbnOoWxi+Nc47p6rkSe4mEhHaPvoYmvzy92bMFdJbFrp6g8S0uHJBS4mMobR9HxgcHrlfrlzqYl+2b2e75tfM9nQEfgaEH99YDISBvZRXVbyf/Z">
  </a> <a href="/users/donatien/">Donatien
  Garnier</a></span></span> has added some crucial higher level
  socket protocol libraries, such as <a href=
  "http://mbed.org/users/donatien/code/HTTPClient/">HTTP
  client</a>, <a href=
  "http://mbed.org/users/donatien/code/NTPClient/">NTP client</a>,
  and <span><span class="authortext"><a href=
  "/users/samux/"><img alt="" class="icon" src=
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQID/8QAJRAAAQMCBQQDAAAAAAAAAAAAAgEDBAYxAAURFCEHCFFhEhgy/8QAFAEBAAAAAAAAAAAAAAAAAAAABf/EAB8RAAEDAwUAAAAAAAAAAAAAABEAAxIBAjEUIUGhwf/aAAwDAQACEQMRAD8A3rulY9XdyNVx873sTKoxNfGRGFOSVpv9cLol019YnpNSa0r3L06xG3ZZW7uFjHKFBMi2zilwlktfynnDOdTJH2rqmIyTZC+3HaFknFRTUW2zJNLWXj2i4Splo43dRkzGZutOvbFxI7bZkW3JGj4VfY638Wtgg30fiOfcpgt6eR3A6wv/2Q==">
  </a> <a href="/users/samux/">Samuel Mokrani</a></span></span> has
  contributed the <a href=
  "http://mbed.org/users/samux/code/WebSocketClient/">WebSocket
  client</a>.
</p>
<h3>
  USB Device now officially maintained
</h3>
<p>
  The <a href=
  "http://mbed.org/users/mbed_official/code/USBDevice/">USB
  Device</a> library has now been taken under the wing of
  <span><span class="authortext"><a href="/users/samux/"><img alt=
  "" class="icon" src=
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQID/8QAJRAAAQMCBQQDAAAAAAAAAAAAAgEDBAYxAAURFCEHCFFhEhgy/8QAFAEBAAAAAAAAAAAAAAAAAAAABf/EAB8RAAEDAwUAAAAAAAAAAAAAABEAAxIBAjEUIUGhwf/aAAwDAQACEQMRAD8A3rulY9XdyNVx873sTKoxNfGRGFOSVpv9cLol019YnpNSa0r3L06xG3ZZW7uFjHKFBMi2zilwlktfynnDOdTJH2rqmIyTZC+3HaFknFRTUW2zJNLWXj2i4Splo43dRkzGZutOvbFxI7bZkW3JGj4VfY638Wtgg30fiOfcpgt6eR3A6wv/2Q==">
  </a> <a href="/users/samux/">Samuel Mokrani</a></span></span> and
  as such is now an officially supported library.
</p>
<h1>
  Online tools
</h1>
<h2>
  Collaboration, one month in
</h2>
<p>
  After the many months of work and planning, It's great to see
  people starting to make use of the collaboration features,
  released a month ago.
</p>
<p>
  We are also pleased to note that the transition to the new code
  sharing features progressed smoothly. This is despite the
  complexities of not only delivering a new way of working and
  sharing code, but also ensuring that everyone can seamlessly
  transition to the new system. In fact we spent about an equal
  amount of time working on the new features as we did on the
  transition/migration!
</p>
<h2>
  Site update
</h2>
<p>
  Since then, we've released an update, covering several minor
  bugfixes and improvements. One thing you will notice however is a
  shiny new <a href="http://mbed.org/code/">/code/</a> page. We
  have put in a number of features designed to try and help you
  discover more interesting programs and libraries.
</p>
<h3>
  Popular
</h3>
<p>
  We now show you how many views (and soon imports) a wikipage or
  repository has. This is for two reasons: One, to show you what
  other people think is interesting, and two, to show you how
  interested people are in your project!
</p>
<h3>
  Most active
</h3>
<p>
  Rather than only showing you repositories in order of last
  modification time, we now show you repositories in order of "most
  active, most recently". This means that for example, a repository
  with 10 commits in the past week will be ranked higher than a
  repository with 2 commits today.
</p>
<h3>
  Featured
</h3>
<p>
  We also now have the ability to feature projects which are
  particularly interesting or good examples to follow. If you know
  of a program or library which more people should know about, let
  us know in the forum!
</p>

