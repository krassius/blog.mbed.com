---
layout:         post-mbed-org
title:          "Important: Virus Alert"
date:           2013-07-13T02:28:02.000Z
author:         Simon Ford
tags:           
originalUrl:    https://developer.mbed.org/blog/entry/113/
---

<p>We have recently had reports from some users of a virus being detected
  when first connecting their new mbed Microcontroller to a Windows PC. Further
  investigation has shown this to be a real problem, impacting some units
  of an mbed LCP1768 batch manufactured in December.</p>
<p>We are taking this very seriously and will be doing all we can to audit
  all devices from this batch within the distribution channels, but we have
  to assume more will have made it through to end users. Please read this
  report carefully to understand if you need to take action.</p>
<p><strong>Problem summary</strong>
</p>
<p>On receiving a virus report from a user, with their help we investigated
  the possible source of the problem. These investigations confirmed it was
  a new device, and the source of the problem was not likely to be the user&#x2019;s
  machine. At this point we initiated an audit of our manufacturer.</p>
<p>With support from the manufacturer&apos;s staff and production records,
  we identified a potential vulnerability window in one of the production
  line test machines between the 4th and 12th of December, caused by their
  method of applying a production test software upgrade. During this time,
  units tested with this test machine had the potential to become infected.
  This means some units within the particular batch in production at that
  time are at risk from containing a low risk virus.</p>
<p><strong><span style="font-weight: normal;"> </span></strong>
</p>
<p><strong><strong>What is the threat?</strong></strong>
</p>
<p><strong> </strong>
</p>
<p><strong><span style="font-weight: normal;">The virus impacting some of the vulnerable batch is &quot;Win32.SillyFDC&quot; (but goes by a number of different names), which is an autorun.inf script plus files in a RECYCLER folder placed in the root of removable media, impacting Windows PCs. It has been around since 2004, and is generally considered a low risk, low impact virus. It does not impact Mac or Linux. All reputable antivirus software will find, isolate and remove the virus, with no long term effects. More detailed information about nature of this virus can be found at:</span></strong>
</p>
<p><strong> </strong>
</p>
<ul> <strong> <li><a href="http://www.symantec.com/security_response/writeup.jsp?docid=2006-071111-0646-99" style="text-decoration: none; color: #0073bd !important;">Win32.SillyFDC Summary</a></li> </strong> 
</ul>
<p><strong>Is my board from the batch at risk?</strong>
</p>
<p>We have identified the batch that was in production when the vulnerability
  occurred, and their corresponding packing serial numbers. Whilst only a
  small percentage of these could have been impacted, we will be auditing
  the entire batch.</p>
<p>The packing serial numbers this batch fell within are:</p>
<ul>
  <li> <strong>MBED-1226 to MBED-2356</strong>
  </li>
</ul>
<p>We will aim to narrow it further as we confirm audit information further.
  If your microcontroller falls in to this range, please read on to see if
  you need to take action. If not, you should not be impacted. If anyone
  finds anything to the contrary, please contact us immediately at <a href="mailto:support@mbed.org">support@mbed.org</a>.</p>
<p>To check your packing serial number, find the orange sticker on the base
  of the box for the mbed Microcontroller, as shown below:</p>
<p>
  <img alt="" height="300" src="http://mbed.org/media/uploads/simon/mbed-serial.jpg"
  width="400">
</p>
<p>In this example, the details would be:</p>
<ul>
  <li>Product Number: MBED-005.1</li>
  <li>Serial Number: MBED-2334</li>
</ul>
<p><strong>What should I do if my board is from the batch at risk?</strong>
</p>
<p>If your board is from the batch at risk, then please carefully follow
  these instructions.</p>
<p>If you have not yet used your mbed, you have a number of options to check
  for and avoid the problem:</p>
<ul>
  <li>If you have access to a Mac and Linux machine, you can plug in your mbed
    and check for an autorun.inf file. If one exists, delete *everything* from
    the disk (any files and directories like autorun.inf, RECYCLER, ...). Mac
    and Linux PCs ignore autorun.inf, so are not impacted. Your MBED.HTM will
    get automatically restored after you power cycle the board.</li>
  <li>If you only have access to a Windows PC, ensure your systems antivirus
    software is up to date. If it does exist, your antivirus software should
    detect and quarantine the virus.</li>
  <li>If you would prefer, we can arrange to audit your board for you and fix
    the problem if one is found; please contact us directly at <a href="mailto:support@mbed.org">support@mbed.org</a>
  </li>
</ul>
<p>If you have already plugged your mbed microcontroller in and there was
  an autorun.inf file, your antivirus software should have already detected,
  quarantined and removed any virus. We recommend you run a full system scan
  with your mbed plugged in to verify your machine and the microcontroller
  are clear of the virus.</p>
<p>If you do not have antivirus software and you do find an autorun.inf file
  on the mbed, it would be highly recommended to install some to check and,
  if necessary, clean your machine. Below is a list of a few different packages
  that would be suitable, many including free trials:</p>
<ul>
  <li><a href="http://www.symantec.com/norton/downloads/trialsoftware/index.jsp">http://www.symantec.com/norton/downloads/trialsoftware/index.jsp</a>
  </li>
  <li><a href="http://home.mcafee.com/Store/">http://home.mcafee.com/Store/</a>
  </li>
  <li><a href="http://www.kaspersky.co.uk/trials">http://www.kaspersky.co.uk/trials</a>
  </li>
  <li><a href="http://free.avg.com/gb-en/download-avg-anti-virus-free">http://free.avg.com/gb-en/download-avg-anti-virus-free</a>
  </li>
  <li><a href="http://www.avast.com/free-antivirus-download">http://www.avast.com/free-antivirus-download</a>
  </li>
</ul>
<p>Note: if there is no autorun.inf file on the disk, then the problem doesn&apos;t
  exist.</p>
<p>If you do find your board to be infected, we would be very greatful if
  you could email us the MBED-xxxx Serial Number to&#xA0;<a href="mailto:support@mbed.org"
  style="text-decoration: none; color: #0073bd !important;">support@mbed.org</a> to
  help validate our records.&#xA0;If you have any questions, please do not
  hesitate to contact us.</p>
<p><strong>What else are we doing?</strong>
</p>
<p>We are working with distributors to audit all stock we can find from this
  batch, to limit as much as possible the numbers that get out to users in
  the first place. Whilst the problem only impacted a production test machine
  for a short time and is no longer a problem, we have also taken steps to
  ensure this can&apos;t happen again. We are moving from windows to linux-based
  test machines, and have ensured our manufacturers have the appropriate
  processes in place to upgrade test software.</p>
<p>This is a problem that shouldn&apos;t have occurred in the first place,
  so please accept our apologies that it has. We believe we are doing everything
  appropriate to address it, and will continue to do so to ensure it won&#x2019;t
  happen again.</p>
<p>Finally, a big thank you to all the companies and people who have worked
  so quickly with us to identify the problem and put in place all the logistics
  to resolve it.</p>
