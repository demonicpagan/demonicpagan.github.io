---
layout: post
title: "Latest Push to SB7"
description: ""
category: 
tags: [TCL, Stormbot v7]
---
{% include JB/setup %}

So, earlier today I pushed an update to [Stormbot v7 on GitHub](https://github.com/StormbotTCL/Stormbot7). This update fixes some issues with WHO and
output. There a few commands added and some fixes to holdover SB6 code. There was also a fix to a fatal error that was found in the bootstrap.

<!-- more -->

> StormBot V7 ChangeLog: 2015-01-04 09:19:31 -0000<br />
>
> [Coder's message] <br />
> Fixed some issues with WHO and output; added a few commands. Fixed some holdover SB6 code in a few places. Fatal error found in the bootstrap.<br />
>
> [sb7.tcl]<br />
> * 2015-01-04 04:43:16 -0000: #0413: Fixed core (cosmetic: error message when booting up needed a tweak)<br />
> * 2015-01-02 10:18:26 -0000: #0405: Fixed CORE & README (updated copyright date)<br />
>
> [sb7_tail.tcl]<br />
> * 2015-01-04 09:14:06 -0000: #0418: Fixed SB7:SETUP (the security checked used the wrong variable: $A instead of $VAR)<br />
> * 2015-01-04 08:14:54 -0000: #0417: Fixed STR, FIXMATH, LREMOVE, FINDONCHANS, OS, UNROMAN, & UNIQUEMATCH (cosmetic: changed STL* to proper STRING TOLOWER*)<br />
> * 2015-01-04 06:33:52 -0000: #0416: Added URT (re-written from SB6 version)<br />
> * 2015-01-04 04:54:04 -0000: #0414: Fixed DATA (changed permitted list of data streams: removed ! # (already permitted) and *)<br />
> * 2015-01-04 04:38:33 -0000: #0412: Fixed DEBUG (cosmetic: closing bracket was missing in some formats)<br />
> * 2015-01-04 04:34:20 -0000: #0411: Added ANGLE (didn't document it earlier when added on: 2014-12-23 22:26:56 +0000)<br />
> * 2015-01-04 04:21:01 -0000: #0410: Fixed PRINT (when a user is new or otherwise doesn't have her / his output information buffered (DATA/@OUTPUT $NICK), an illegal-channel error would appear)<br />
>
> [who.sb7]<br />
> * 2015-01-02 10:40:22 -0000: #0409: Fixed WHO (cosmetic: swapped =1000 / =1001 colors; =1001 should diametrically oppose the colours of <=0)<br />
> * 2015-01-02 10:38:25 -0000: #0408: Fixed WHO (cosmetic: code to show proper color for -GLOBAL mode permowners (1000/1001) was always defaulting to =1001 colors regardless of their [non-]existence)<br />
> * 2015-01-02 10:35:25 -0000: #0407: Fixed WHO (cosmetic: JOIN issue in output of each of the list of chanmodes)<br />
> * 2015-01-02 10:31:07 -0000: #0406: Fixed WHO (when a unknown-and-unopped user was being processed, the previously-looped user's $OP_SYMBOL was carrying through: $OP wasn't being assigned by REGEXP (variable-assignment mode))<br />
>
> [sb7_readme.txt]<br />
> * 2015-01-02 10:18:26 -0000: #0405: Fixed CORE & README (updated copyright date)<br />
>
> Any questions, see us at [chat.bothouse.net in #BotHouse](irc://chat.bothouse.net/bothouse)<br />
>
> ~ Mai Mizuno, StormBot.TCL coder

Please if you do have any questions, come visit us on IRC. Until next post!

-Dustin Lennon