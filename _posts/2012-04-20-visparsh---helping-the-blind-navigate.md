---
layout:         post-mbed-org
title:          "viSparsh - Helping the Blind Navigate"
date:           2012-04-20T17:13:43.000Z
author:         Amit Naran
tags:           Haptic, Kinect, viSparsh
originalUrl:    https://developer.mbed.org/blog/entry/viSparsh---Helping-the-Blind-Navigate/
---

<p>
  A team of innovative engineers have been working on a
  haptic-feedback device to assist the visually impaired to
  navigate around obstacles using an MS Kinect and Panda board, for
  machine vision and image processing and an mbed for driving the
  haptic-feedback.
</p>
<div class="flex-video">
  <iframe width="420" height="315" src=
  "https://www.youtube.com/embed/KTmGZ6sElnU" frameborder="0"
  allowfullscreen="allowfullscreen"></iframe>
</div>
<p>
  Jatin Sharma, <span><span class="authortext"><a href=
  "/users/tushar/"><img alt="" class="icon" src=
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAQABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABAUGCP/EACUQAAIABQIGAwAAAAAAAAAAAAECAwQFBhEAEgcTITFBYSJx4f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDUfFEzq2bNtJO6kFTFKHB5efl++s6ScETOGm1AxWdpURUWCGYkBgDuwPHddRl03dWKxGmZd5xlkGiNsgw1CgpnoCR1PjudB27clWoDsafMAQ3O54LruRj9eD7GNB//2Q==">
  </a> <a href="/users/tushar/">Tushar Chugh</a></span></span> and
  Rolly Seth have written a blog about their project and the
  challenges they have faced.
</p>
<div class="flashbox fquote">
  <h4 class="ftitle">
    <span class="authortext"><a href="/users/tushar/"><img alt=""
    class="icon" src=
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAQABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABAUGCP/EACUQAAIABQIGAwAAAAAAAAAAAAECAwQFBhEAEgcTITFBYSJx4f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDUfFEzq2bNtJO6kFTFKHB5efl++s6ScETOGm1AxWdpURUWCGYkBgDuwPHddRl03dWKxGmZd5xlkGiNsgw1CgpnoCR1PjudB27clWoDsafMAQ3O54LruRj9eD7GNB//2Q=="></a>
    <a href="/users/tushar/">Tushar Chugh</a></span> wrote:
  </h4>
  <p>
    <strong>About viSparsh</strong><br>
    "viSparsh" is a fusion of two words, " vision" and
    "sparsh"(touch), which depicts the purpose of the project to
    aid visually impaired people through the sense of touch. A team
    of three Young India Fellows Jatin Sharma, <span><span class=
    "authortext"><a href="/users/tushar/"><img alt="" class="icon"
    src=
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAQABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABAUGCP/EACUQAAIABQIGAwAAAAAAAAAAAAECAwQFBhEAEgcTITFBYSJx4f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDUfFEzq2bNtJO6kFTFKHB5efl++s6ScETOGm1AxWdpURUWCGYkBgDuwPHddRl03dWKxGmZd5xlkGiNsgw1CgpnoCR1PjudB27clWoDsafMAQ3O54LruRj9eD7GNB//2Q==">
    </a> <a href="/users/tushar/">Tushar Chugh</a></span></span>
    and Rolly Seth are developing this haptic belt under the
    tutelage and mentorship of Prof. Rahul Magharam, Director mLAB,
    University of Pennsylvania’s School of Engineering and Applied
    Science.<br>
  </p>
  <table>
    <tr>
      <td>
        <img src=
        "https://developer.mbed.org/media/uploads/anaran/x_scaled_1.png.pagespeed.ic.YTYkdNGVGG.jpg"
        alt="Front" title="Front">
      </td>
      <td>
        <img src=
        "https://developer.mbed.org/media/uploads/anaran/x_scaled_5.png.pagespeed.ic.cezmSqaZn6.jpg"
        alt="Back" title="Back">
      </td>
    </tr>
  </table>
  <p>
    <br>
    <strong>What is the focus of the project?</strong><br>
    The focus of the viSparsh project is to create a haptic
    (touch-based feedback) belt for the blind with a simple goal
    that a blind person can avoid obstacles that are on and above
    ground height. This belt has an infrared optic sensor that
    projects thousands of dots in the 3-12 feet distance to
    determine what obstacles are present. Based on the proximity
    and relative direction of the obstacle to the wearer, a series
    of vibrators on the belt alert the wearer of the presence of
    obstacles around them. This system is lightweight, low-cost (Rs
    5000), easy to use, non-conspicuous and also frees up the ears
    and hands of the blind person. The system provides a 160 degree
    view of the environment and is complementary to the limited
    reach of the walking stick. It also does not require any
    additional infrastructure in the environment.
  </p>
  <p>
    <img src=
    "https://developer.mbed.org/media/uploads/anaran/_scaled_10.png.pagespeed.ce.9pfff2Fbej.png"
    alt="Process Flow" title="Process Flow">
  </p>
  <p>
    <br>
    <strong>What kind of field work was/is done?</strong><br>
    We have evaluated the belt in different work environments. The
    first type of evaluation is in a room with obstacles placed at
    fixed positions. This allowed us to measure the obstacle
    tracking error, the guidance algorithms in the presence of
    multiple obstacles and also obstacles of different sizes and at
    different heights. We have evaluated the usability, battery
    life and overall response with multiple blind persons. The
    second type of tests is in a "real-world" scenario with the
    wearer walking through a busy corridor and a busy room with
    many people. The response from the blind persons has been very
    positive both with respect to the wearability and the natural
    touch-based feedback. We plan to deploy more units with more
    compact on-board electronics in the near future.<br>
  </p>
  <table>
    <tr>
      <td>
        <img src=
        "https://developer.mbed.org/media/uploads/anaran/x_scaled_11.png.pagespeed.ic.GTEDQyHSmH.png"
        alt="Obstacles" title="Obstacles">
      </td>
      <td>
        <img src=
        "https://developer.mbed.org/media/uploads/anaran/_scaled_12.png.pagespeed.ce.G1zO1pjxh8.png"
        alt="Intensity" title="Intensity">
      </td>
      <td>
        <img src=
        "https://developer.mbed.org/media/uploads/anaran/_scaled_13.png.pagespeed.ce.k-xoBC6n9J.png"
        alt="Vibration" title="Vibration">
      </td>
    </tr>
  </table>
  <p>
    <br>
    <strong>Problems Faced:</strong>
  </p>
  <ul>
    <li>Being the founding batch of The Young India Fellowship
    Programme we don’t have access to a proper lab setup which
    initially taxed us. But continuous support from YIF admin made
    possible for us to setup a small lab ‘eCapsule’ in our hostel
    room and kick-start the project.
    </li>
    <li>From screwdriver to multimeter to Kinect everything was to
    be procured and it took much time and effort. Also many things
    were not available in the local market and were to be ordered
    online which made us to wait for the deliveries.
    </li>
    <li>We required Pandaboard for our project which was not
    available for more than a month then. Fortunately, Texas
    Instrument gifted us one within a week.
    </li>
    <li>It took us time to install Kinect libraries and OpenNI on
    Pandaboard. There were many errors we faced and we had to find
    the fixes. [These can be found on our project blog]
    </li>
  </ul>
  <p>
    <br>
  </p>
  <p>
    <strong>What kind of an impact can the haptic belt make for
    people who are visually impaired?</strong><br>
    The everyday life of a blind person is often taken for granted
    and the only navigation help is the walking stick. The stick,
    while effective, has limited reach and often does not detect
    obstacles above ground. Our focus in this project is to make a
    technology-packed device that is affordable to the average
    Indian and easy to use with just 5 minutes of training. While
    our focus is on the technological aspects, we strongly believe
    that technology is a means and must be complemented with
    user-based feedback with extensive evaluation and field tests.
    Our team logs every sentiment the blind person wearing the
    haptic belt gives us and we take their feedback very seriously.
    Our eventual goal is to deploy several hundred of these belts
    to everyday users so we can make a positive impact one person
    at a time.
  </p>
  <p>
    More info please visit our blog: <a href=
    "http://www.visparsh.blogspot.com/" rel=
    "nofollow">http://www.visparsh.blogspot.com/</a>
  </p>
  <p>
    <img height="200" width="200" alt="viSparsh" src=
    "https://developer.mbed.org/media/uploads/anaran/200x200x_scaled_0.png.pagespeed.ic.txF3l_gaan.png"
    title="viSparsh">
  </p>
</div>
<p>
  Well done guys and thank you very much of the guest blog. Great
  to see an mbed used in such a inventive project, we hope it has
  helped you prototype your design concept, and hope that your belt
  eventually helps blind people all over the world!
</p>

