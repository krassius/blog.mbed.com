---
layout:         post-mbed-org
title:          "Japanese mbed developer and his team won the highest prize at TBS TV Hack DayWhat is this?Demo movieSystem overview"
date:           2014-03-18T04:36:02.000Z
author:         Toyomasa Watarai
tags:           hackathon, Japan
originalUrl:    https://developer.mbed.org/blog/entry/Japanese-mbed-developer-and-his-team-won/
---

<p>Junichi Katsu (aka JKSoft in mbed community) and his team designed a unique
  gadget at TBS TV HACK DAY in Japan. And it got the highest prize with cash
  1,000,000 JPY.</p>
 <h2>What is this?</h2>

<p>TBS is one of the big TV stations in Japan, and &quot;TBS TV Hack Day&quot;
  is a hackathon hosted by TBS TV, focusing on TV related project. API is
  provided by sponsors i.e. NTT docomo, Philips, etc. The event was held
  early March. Mr. Junichi Katsu (aka JKSoft in mbed community), one of the
  Japanese mbed super developers, and his team designed a unique gadget named
  &#x201C;Interactive TV - Tere-Boo&#x201D; controlled by mbed. And it got
  the highest prize with cash 1,000,000 JPY!!
  <br>
  <br>
  <img src="https://developer.mbed.org/media/uploads/MACRUM/tbs_team.jpg"
  alt="/media/uploads/MACRUM/tbs_team.jpg" title="/media/uploads/MACRUM/tbs_team.jpg">
  <br>
</p>
<ul>
  <li>Event website: <a href="http://www.tbs.co.jp/tv_hack_day/" rel="nofollow">http://www.tbs.co.jp/tv_hack_day/</a> (written
    in Japanese)</li>
  <li>Media article: <a href="http://itpro.nikkeibp.co.jp/article/NEWS/20140310/542315/?ST=system&amp;P=1"
    rel="nofollow">http://itpro.nikkeibp.co.jp/article/NEWS/20140310/542315/?ST=system&amp;P=1</a>

  </li>
</ul>

<h2>Demo movie</h2>

<div class="flex-video">
  <iframe width="420" height="315" src="https://www.youtube.com/embed/qIlmuC0n9eo"
  frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>

<h2>System overview</h2>

<p>The Tere-Boo is a name of small soft toy and it is interactive TV control
  system. User can chosee TV channel by talk to Tere-Boo which has microphone,
  speaker, microcontroller (mbed LPC1768) and IR remote controller. Speaking
  audio data (digital voice) will be went out to cloud server using communication
  API and channel information API provided by Docomo (one of API sponsor).
  Then, Tere-Boo calls back appropriate TV channel and change to the channel
  at a time. It can be placed at the frame of TV screen and performs simple
  moving such as bowing by servo motors inside of it.</p>
<p>
  <img src="https://developer.mbed.org/media/uploads/MACRUM/tbs_teleboo3a.jpg"
  alt="/media/uploads/MACRUM/tbs_teleboo3a.jpg" title="/media/uploads/MACRUM/tbs_teleboo3a.jpg">
  <img src="https://developer.mbed.org/media/uploads/MACRUM/tbs_teleboo2a.jpg"
  alt="/media/uploads/MACRUM/tbs_teleboo2a.jpg" title="/media/uploads/MACRUM/tbs_teleboo2a.jpg">
  <img src="https://developer.mbed.org/media/uploads/MACRUM/tbs_teleboo1a.jpg"
  alt="/media/uploads/MACRUM/tbs_teleboo1a.jpg" title="/media/uploads/MACRUM/tbs_teleboo1a.jpg">
</p>
<p>
  <br>
  <img src="https://developer.mbed.org/media/uploads/MACRUM/tbs_all.jpg"
  alt="/media/uploads/MACRUM/tbs_all.jpg" title="/media/uploads/MACRUM/tbs_all.jpg">
  <br>Congratulations!</p>
