---
layout:         post-mbed-org
title:          "Rover Robot wins 3rd place in 2012 Sparkfun AVC"
date:           2012-06-20T11:30:38.000Z
author:         Amit Naran
tags:           avc, Rover Robot, sparkfun
originalUrl:    https://developer.mbed.org/blog/entry/Rover-Robot-wins-3rd-place-in-2012-Spark/
---

<p>Electronics distributor SparkFun held their annual <a href="http://www.sparkfun.com/products/11069"
  rel="nofollow">Autonomous Vehicle Competition (AVC)</a> last weekend in
  Boulder, Colorado - and we would like to congratulate <span><span class="authortext"><a href="/users/shimniok/"><img alt="" class="icon" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgMF/8QAJRAAAgICAQQBBQEAAAAAAAAAAQIDBAUGEQAHEhMxFSEjQUJi/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQT/xAAdEQACAQQDAAAAAAAAAAAAAAABAgMABBFxQWGh/9oADAMBAAIRAxEAPwBV3EoX9rzdHE0ttuahVw+L+rWrJjMkqyyfiVW8GCjxAkBYH+hx89R1rIbH23c4mTcae04e1jWv1rl72V2reuVY3UfZg6kyLweflSOsbdu4eUfZ2p65jjbvZ6rUgKRziJo5fYoAjdgfEkBlJ/0p/XR/Kb9Mwl1zccDYiyOLlkrDi7HMQwlZmErcASOo8FB4IPiT8nqS9kWSZiT15qm1VY4AqAaxzX//2Q=="></a> <a href="/users/shimniok/"> Michael Shimniok</a></span></span>for
  his mbed-powered Rover Robot coming in third place!</p>
<div class="flex-video">
  <iframe width="420" height="315" src="https://www.youtube.com/embed/6dWdBN8g12w"
  frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>
<p>Simply put, the objective of the competition is to build an autonomous
  vehicle that can circumnavigate SparkFun headquarters without any human
  interference. Whoever does it the fastest, wins! What should also be mentioned
  is that the course is complicated by traversing through a narrow parking
  lot of a large building, giant red barrels, a pond, ramps and potholes
  to name a few.</p>
<p>The 1st placed Team 0x27 managed to navigate the 270m course in just 22.08
  sec (officially 2.08sec after a bonus time deduction), with Rover Robot
  from Team Databus coming in at 37.16sec with an estimated top speed of
  20mph.</p>
<p>Michael describes how the autonomous vehicle navigation information is
  calculated using only three key sensors.</p>
<div class="flashbox fquote">
  <h4 class="ftitle"><span class="authortext"><a href="/users/shimniok/"><img alt="" class="icon" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgMF/8QAJRAAAgICAQQBBQEAAAAAAAAAAQIDBAUGEQAHEhMxFSEjQUJi/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQT/xAAdEQACAQQDAAAAAAAAAAAAAAABAgMABBFxQWGh/9oADAMBAAIRAxEAPwBV3EoX9rzdHE0ttuahVw+L+rWrJjMkqyyfiVW8GCjxAkBYH+hx89R1rIbH23c4mTcae04e1jWv1rl72V2reuVY3UfZg6kyLweflSOsbdu4eUfZ2p65jjbvZ6rUgKRziJo5fYoAjdgfEkBlJ/0p/XR/Kb9Mwl1zccDYiyOLlkrDi7HMQwlZmErcASOo8FB4IPiT8nqS9kWSZiT15qm1VY4AqAaxzX//2Q=="></a> <a href="/users/shimniok/"> Michael Shimniok</a></span> wrote: </h4>
  <p></p>
  <p>The Robot Rover control system, consisted of three main sensors -</p>
  <p><u>GPS</u>
  </p>
  <p>The GPS is a 20Hz Venus638FLPX on Sparkfun breakout board mounted inside
    with a roof-mounted patch antenna and a ground plane cut from a square
    of tin that&apos;s good for 5-10db signal gain. Serial communication runs
    at 38400 bps on one of the mbed UARTs. GPS supplies heading information.
    The robot ignores GPS position information.</p>
  <p>
    <img alt="GPS" title="GPS" src="data:image/jpeg;base64,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">
  </p>
  <p><u>Gyro</u>
  </p>
  <p>Additional heading information comes from an STM L3G4200D gyro on a Pololu
    minIMU-9, mounted on an aluminum bracket up front. Communication is via
    I2C at 400kHz. The gyro is sampled at 100Hz.</p>
  <p>
    <img alt="Gyro" title="Gyro" src="data:image/jpeg;base64,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">
  </p>
  <p><u>Encoders</u> 
  </p>
  <p>Wheel encoders on both rear wheels provides accurate distance measurement.
    Sparkfun QRE1113 sensor boards mounted to the bearing carriers sense the
    stripes and send signals to a tiny surface mount interface board designed
    using comparators in a Schmitt-trigger configuration.</p>
  <p>
    <img alt="Encoder" title="Encoder" src="data:image/jpeg;base64,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">
  </p>
  <p>Heading is incredibly important in the Sparkfun AVC. An error of only
    a couple of degrees is the difference between crashing and finishing. The
    solution on Data Bus feeds lag-compensated gyro and GPS heading data into
    a Kalman Filter, using the results to update current heading and position
    with that historical estimate.</p>
  <p>Gyro data is the foundation of the heading estimate. It&apos;s corrected
    for bias using heading data from the GPS. Unfortunately the GPS does its
    own massive amount of filtering and the result is a reduced dynamic range
    and lag. By saving a second&apos;s worth of gyro data and feeding that
    into a Kalman Filter, a very good estimate is generated. From this, the
    gyro-based heading is updated. The end result is a heading estimate with
    high dynamic range and negligible bias.</p>
  <p>Meanwhile distance travelled is given by the average distance of the wheel
    encoders. I calibrated the wheel encoders to Google Earth, my waypoint
    editor, and found the error falls below 1%. So the robot knows how far
    it&apos;s gone and in what direction, giving a position estimate. The position
    is estimated in cartesian coordinates which I did for one very good reason:
    updating the position based on the historical heading estimate.</p>
  <p>If we know what direction we were pointing a second ago, we can not only
    update gyro heading calculations up to present, but, using a rotation matrix,
    we can update the last second&apos;s worth of position estimates up to
    present very quickly.</p>
  <p></p>
</div>
<table>
  <tr>
    <td>
      <img src="https://developer.mbed.org/media/uploads/anaran/x_scaled_rover.jpg.pagespeed.ic.gKm84tEUPL.jpg"
      alt="Team Databus" title="Team Databus">
    </td>
    <td>
      <img width="130" alt="Inside Rover" title="Inside Rover" src="https://developer.mbed.org/media/uploads/anaran/130xNx_scaled_rover2.jpg.pagespeed.ic.E4Zker0_vy.jpg">
    </td>
    <td>
      <img width="280" alt="Escape" title="Escape" src="https://developer.mbed.org/media/uploads/anaran/280xNx_scaled_rover4.jpg.pagespeed.ic.vVMfJkEVWR.jpg">
    </td>
  </tr>
</table>
<p>
  <br> <span><span class="authortext"><a href="/users/shimniok/"><img alt="" class="icon" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgMF/8QAJRAAAgICAQQBBQEAAAAAAAAAAQIDBAUGEQAHEhMxFSEjQUJi/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQT/xAAdEQACAQQDAAAAAAAAAAAAAAABAgMABBFxQWGh/9oADAMBAAIRAxEAPwBV3EoX9rzdHE0ttuahVw+L+rWrJjMkqyyfiVW8GCjxAkBYH+hx89R1rIbH23c4mTcae04e1jWv1rl72V2reuVY3UfZg6kyLweflSOsbdu4eUfZ2p65jjbvZ6rUgKRziJo5fYoAjdgfEkBlJ/0p/XR/Kb9Mwl1zccDYiyOLlkrDi7HMQwlZmErcASOo8FB4IPiT8nqS9kWSZiT15qm1VY4AqAaxzX//2Q=="></a> <a href="/users/shimniok/"> Michael Shimniok</a></span></span>success
  comes after a less fortunate attempt in last years <a href="http://www.bot-thoughts.com/2011/04/sparkfun-avc-2011-is-over.html"
  rel="nofollow">competition</a>. However lessons learnt about the previous
  year&apos;s issues, months of simulations, testing, and analysis ensured
  a much better result in 2012 for Team Databus. Well done!</p>
<p>You can read all about the Robot Rover and the race on the <a href="http://www.bot-thoughts.com/2011/05/data-bus-nickle-tour.html"
  rel="nofollow">Team Databus blog</a>. I recommend reading about the comical
  final heat on the <a href="http://www.bot-thoughts.com/2012/06/2012-autonomous-vehicle-competition-avc.html"
  rel="nofollow">race day</a> :-)</p>
