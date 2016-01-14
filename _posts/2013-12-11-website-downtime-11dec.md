---
layout:         post-mbed-org
title:          "Service problems, 11 Dec"
date:           2013-12-11T16:11:50.000Z
author:         Dan Ros
tags:           
originalUrl:    https://developer.mbed.org/blog/entry/website-downtime-11dec/
---

<p>
  You may have noticed that we have had a downtime of about 45
  minutes. All systems should now be back up and functioning
  normally.
</p>
<p>
  The cause was scheduled maintenance which did not go as planned,
  and is related to the earlier outage this previous weekend.
</p>
<p>
  In summary:
</p>
<p>
  On Sunday:
</p>
<ul>
  <li>Scheduled network maintenance caused an unexpected panic and
  reboot of one of our two redundant storage nodes.
  </li>
  <li>Storage automatically failed over to the other storage node,
  but a misconfiguration meant that that our servers were not able
  to access the storage on the other storage node
  </li>
  <li>Due to another misconfiguration, our monitoring/alerting
  systems did not detect the problem, and so remained undetected
  for several hours
  </li>
  <li>After investigation, we were advised to replace the
  motherboard of the failed storage node by our vendor
  </li>
</ul>
<p>
  Today:
</p>
<ul>
  <li>The replacement of the motherboard took place, which should
  not have caused any downtime due to the redundant node
  </li>
  <li>For an undetermined reason, the failover yet again failed to
  work (in a different way to before) and mbed had to stay down
  while the motherboard was replaced.
  </li>
</ul>
<p>
  We will be investigating the root causes of these problems with
  our in house storage specialists and the vendor to avoid a
  recurrence of the problem.
</p>
<p>
  Apologies for the inconvenience, and I will update this post with
  more as I know it.
</p>

