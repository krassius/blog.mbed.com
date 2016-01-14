---
layout:         post-mbed-org
title:          "Software automation and the start of mbed’s new Testfarm!"
date:           2014-04-16T20:04:27.000Z
author:         Simon Ford
tags:           quality, software automation, testfarm, testing
originalUrl:    https://developer.mbed.org/blog/entry/software-automation-mbed-testfarm/
---

<p>Not too long ago, <a href="/users/PrzemekWirkus">Przemek</a> (sh-em-ek)
  joined us to lead software automation for mbed. His task is a big one,
  but he has already made some great strides in developing the next version
  of our testing framework. I stopped by his desk to chat about how he was
  getting on, and took a few photos that I thought I might share.</p>
<p>Here is the man himself:</p>
<p>
  <img src="https://developer.mbed.org/media/uploads/simon/testfarm-05.jpg"
  alt="/media/uploads/simon/testfarm-05.jpg" title="/media/uploads/simon/testfarm-05.jpg">
</p>
<p>One of our first goals is to make a really solid automated testing solution
  for platform SDK ports, so we can be confident mbed is running well on
  all supported platforms. As the number of companies and individuals contributing
  ports continues to rise, having a well structured and comprehensive test
  framework will really help us improve the quality over time.</p>
<p>Up until now, we&apos;ve had various scripts and tests that have done
  a reasonable job, coupled with some hardware rigs we have built. Things
  like:</p>
<p>
  <img src="https://developer.mbed.org/media/uploads/simon/testfarm-02.jpg"
  alt="/media/uploads/simon/testfarm-02.jpg" title="/media/uploads/simon/testfarm-02.jpg">
</p>
<p>But running the tests and interpreting the results was somewhat manual,
  and with the growth in hardware platforms, rigs on desks was not going
  to cut it any more. So Przemek has been starting to put together a next
  version of our testing framework, to make this much more automated from
  the software side using things like buildbot:</p>
<p>
  <img src="https://developer.mbed.org/media/uploads/simon/testfarm-03.jpg"
  alt="/media/uploads/simon/testfarm-03.jpg" title="/media/uploads/simon/testfarm-03.jpg">
</p>
<p>And some of the tracking for our internal goals - you can see over 100
  tests already in place, of which 42 are fully automated.</p>
<p>
  <img src="https://developer.mbed.org/media/uploads/simon/testfarm-04.jpg"
  alt="/media/uploads/simon/testfarm-04.jpg" title="/media/uploads/simon/testfarm-04.jpg">
</p>
<p>Lots more to do here, but the software side is just half of the problem.
  Luckily, this all coincides with us moving in to much bigger offices, so
  we&apos;ve now also allocated a whole wall for us to build a really comprehensive
  hardware test-farm for these platforms:</p>
<p>
  <img src="https://developer.mbed.org/media/uploads/simon/testfarm-01.jpg"
  alt="/media/uploads/simon/testfarm-01.jpg" title="/media/uploads/simon/testfarm-01.jpg">
</p>
<p>First up is ordering some racking!</p>
<p>There is a long way to go, but thought you might be interested to see
  the startings of this work. If you are interested in this area and maybe
  helping out somehow, please feel free to comment below or contact <span><span class="authortext"><a href="/users/PrzemekWirkus/"><img alt="" class="icon" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAQABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwT/xAApEAABAwIFAgYDAAAAAAAAAAABAgMEBREABgchMRNRCBQWIjJBUmGC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAbEQACAwADAAAAAAAAAAAAAAABAgADESIxsf/aAAwDAQACEQMRAD8AQfEDmCLCZp+mFCUWocdtD1TUk8IG6Gz+z81fz3xDorqrlbKapmQ6zNZplMpkRuXAmzJCgXQ6tRW0ep+JNxbaxIttgk9QSk1iTmuouuSfMOqdfWB7lLKubduBb6tgt1Qmv1iru1l1a5cEK6bYeSA4yk77EcAqJ2N7HBqGtc50JQ4SqkaeR8n/2Q=="></a> <a href="/users/PrzemekWirkus/"> Przemek Wirkus</a></span></span>directly.</p>
