---
layout: post
title: "Stormbot v7 Update"
description: ""
category: 
tags: [TCL, Stormbot v7]
---
{% include JB/setup %}

One of the projects that I assist in maintaining is Stormbot. I got started on this project a few years back when I was first
starting to learn how to code in TCL. Here we are now, in it's 7th revision. I got involved when it was on its 5th revision.

On every push I make to the project, I include the latest changelog that Mai Mizuno creates for me to include into my GitHub
pushes.

I think I will copy/paste that into my posts here as well, starting with the push I just made a few moments ago.

> [Coder's message] <br />
> Fixed an array of things from SIG*s (POSIX signal event handlers) to tweaks in the data handlers (DATA [ARRAY] LREMOVE / SEARCH). Renamed BOTNET.SB7 to TREE.SB7. OAUTH wasn't working in DCC. Fixed WHO. Created channel-mode tracking (005).
> 
> [sb7_tail.tcl] <br />
>  * 2014-11-20 02:34:38 +0000: #0384: Fixed GET OPSYMBOL (using newly-created controls for +qaohv users) <br />
>  * 2014-11-20 02:30:34 +0000: #0383: Fixed WHOIS (mode #4 was still giving fits when a user matched a handle's name but not by host. Also, when a completely unknown user was encountered, it resorted to mode #4 as well) <br />
>  * 2014-11-20 01:58:47 +0000: #0382: Added CHANOWNERS, CHANADMINS, CHANOPS, CHANHALFOPS, & CHANVOICES [-ONLY] (lists who has a given mode (or above) on a channel; -ONLY restricts the check to just that mode only) <br />
>  * 2014-11-20 01:57:26 +0000: #0381: Added ISCHANOWNER, ISCHANADMIN, ISCHANOP, ISCHANHALFOP, & ISCHANVOICE [-ONLY] (determines if a user has a given mode ... or any above it that auto-grants it. -ONLY restricts the check to just that mode only) <br />
>  * 2014-11-20 01:23:28 +0000: #0380: Upgraded EFFECTS (added ESCAPE) <br />
>  * 2014-11-20 01:21:17 +0000: #0379: Added IS DCCNICK <br />
>  * 2014-11-20 01:21:02 +0000: #0378: Fixed IS OAUTHED (wasn't allowing .DCC usage because $NICK (the idx) doesn't matched the authed nick) <br />
>  * 2014-11-19 08:07:13 +0000: #0376: Updated SIG* signal event code (ported recent changed to SB6 version of same code) <br />
>  * 2014-11-19 07:27:49 +0000: #0374: Fixed DATA [ARRAY] LREMOVE (variable is a pointer (ByRef), not $VARIABLE (ByVal)) <br />
>  * 2014-11-19 06:57:39 +0000: #0373: Added FLAGS:ORDER [-ALL] (sorts flag order; mainly useful for DATA ARRAY SEARCH where the match-type used in LSEARCH needs to be ordered in priority: -glob -exact -regexp) <br />
>  * 2014-11-19 06:37:38 +0000: #0372: Added DATA ARRAY SEARCH <br />
>  * 2014-11-19 06:31:05 +0000: #0371: Fixed DATA SEARCH (forgot to RETURN the $LIST of found names) <br />
> 
> [login.sb7] <br />
>  * 2014-11-19 07:37:49 +0000: #0375: Fixed @LOGIN:JOIN (hadn't updated it for the reverted change from a few days ago) <br />
> 
> [tree.sb7] <br />
>  * 2014-11-19 08:15:17 +0000: #0377: Renamed BOTNET.SB7 to TREE.SB7 (in keeping with the file splitting from last week, this was the only command in the botnet bead) <br />
> 
> [who.sb7] <br />
>  * 2014-11-20 03:00:54 +0000: #0385: Fixed WHO (list of nicks was unsorted (I was always under the impression that CHANLIST sorted, but, it doesn't)) <br />
> 
> Any questions, see us at chat.bothouse.net in #BotHouse <br />
> 
> ~ Mai Mizuno, StormBot.TCL coder

That's all I have for this post. Until next time.

-Dustin Lennon
