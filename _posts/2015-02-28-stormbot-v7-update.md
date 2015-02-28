---
layout: post
title: "Stormbot v7 Update"
categories: []
tags: [TCL, Stormbot v7]
---
{% include JB/setup %}

So, two days ago I pushed another update to Stormbot v7. It was a small update, only 2 files updated. Below is what was posted in the CHANGELOG.

<!-- more -->

> [Coder's message]<br />
> Fixed SHELL 'find me' related commands. Upgraded DEBUG INFO output (adding -SHAREUTILS) and default output about people filing bug reports to include DEBUG INFO -ALL in the appropriate place.<br />
> 
> [sb7_tail.tcl]<br />
> * 2015-02-24 03:26:21 -0000: #0449: Fixed SHELL:FINDCMD (for those of us on Cygwin, running both WHEREIS & WHERE causes =two= pop-up Dos boxen; only run both when necessary)<br />
>
> [debug.sb7]<br />
> * 2015-02-24 04:59:40 -0000: #0451: Added DEBUG to core distribution<br />
> * 2015-02-24 03:43:20 -0000: #0450: Upgraded DEBUG INFO & DEBUG HELP (added -SHAREUTILS check, which was handled by BOTSEND in SB6. Also, updated DEBUG HELP to specifically instruct users to paste "DEBUG INFO -ALL" result into bug tracker system (added "-ALL"))<br />
> 
> Any questions, see us at [chat.bothouse.net in #Bothouse](irc://chat.bothouse.net/bothouse)<br />
> 
> ~ Mai Mizuno, StormBot.TCL coder

There are still more updates in the work and they will probably hit within the next few days, or whenever Mai tells me to push the next update. If you run into any issues with any modules with Stormbot v7 or the core itself, please fill out a bug report at [Stormbot.TCL Trac Bug Tracker](http://trac.stormbot.org). You do have to register for an account to submit a bug report.

Feel free to also come see us in our IRC room. You can mention your issue there, but be aware, we may ask you to still submit a bug report.

This is all I have for tonight. Until my next post.

-Dustin Lennon
