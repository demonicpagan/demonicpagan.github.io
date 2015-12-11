---
layout: post
title: "Another SB7 Commit"
tags: [TCL, Stormbot v7]
---
{% include JB/setup %}

So, here we are, a little over three months since my last post. This post is mainly for my recent commit to [Github](http://github.com) for Stormbot 7. After I have layed out the changelog, I'll give you an update to how things have been going since I launched my Nightscout website.

<!-- more -->

> [Coder's message]<br />
> Multiple updates (not uploaded due to one-month hospitalization): HELP, BOTSEND, DEBUG, CLEARQUEUE, & TAIL. Somehow, an upgrade to MACRO (which might be incomplete) may be breaking some macros. To be continued ....<br />
>
> [sb7_tail.tcl]<br />
> * 2015-12-01 03:57:19 -0000: #0549: Added DATE:SHORT (short version formatting of date)<br />
> * 2015-11-30 08:57:04 -0000: #0548: Added LSORT:RANGE<br />
> * 2015-11-27 06:14:46 -0000: #0547: Fixed EXPR:FIX (multi-arg math was being processed as a protected LIST (with braces), causing no math to be done)<br />
> * 2015-10-10 09:44:28 -0000: #0546: Added END (visual marker for end-of-PROC. It's only cosmetic but it'll help me with writing / debugging new code. It's set up so, if I forget to remove / replace with it a proper RETURN, it'll still do the equivalent)<br />
> * 2015-10-10 08:43:14 -0000: #0544: Added EXPR:FIX (this replaces SB6:FIXMATH. To not massively break everything in one place, FIXMATH is being kept as an alias to EXPR:FIX. EXPR:FIX exists to address 3 things: (1) allow "PI" as an param, (2) allow binary / octal / hexadecimal input, & (3) avoid integer math [EXPR default])<br />
> * 2015-10-10 08:34:26 -0000: #0543: Fixed PERCENT (forgot the "$" for a variable; a literal was being processed)<br />
> * 2015-10-06 12:36:40 -0000: #0539: Fixed SB7, DATA LOAD, SB7:SETUP_VERSION, IS, & SB7:LOADBEADS (all references to the bot's home dir or script dir relied on the normalized file path to $::CONFIG or the "./scripts/sb7" which is still technically relative [think about it]. Now, using INFO NAMEOFEXECUTABLE which creates an absolute path to work with. Inspired by Demonicpagan)<br />
>
> [botsend.sb7]<br />
> * 2015-10-06 15:09:52 -0000: #0541: Upgraded BOTSEND (added PRE and POST options for automatic command execution before and after transfers begin/end. Inspired by Demonicpagan. QUICK doesn't trigger it yet; pending repair)<br />
>
> [clearqueue.sb7]<br />
> * 2015-10-10 09:23:34 -0000: #0545: Fixed CLEARQUEUE (displayed command use to home channel, since it was done in SB6, and bot owners should be aware if their output gets swallowed because of the command's use (instead of just sitting there wondering))<br />
>
> [debug.sb7]<br />
 * 2015-10-08 13:23:09 -0000: #0542: Fixed DEBUG (added some clarifications on the TCL path variables)<br />
>
> [help.sb7]<br />
 * 2015-10-06 13:42:12 -0000: #0540: Fixed HELP (cosmetic: "somewhere else" -> "some other channel")
>
> Any questions, see us at chat.bothouse.net in #BotHouse<br />
>
> ~ Mai Mizuno, StormBot.TCL coder

Now that the changelog is out of the way for what was pushed to Github, let's talk about my Nightscout site.

My Nightscout site has been live for a little over 3 months now. I have done a couple version updates on it without much issue. The whole update process is painless for when I remember how to do it. The Nightscout page sends data to my Android phone and my Pebble watch so I have quick access to where my glucose level stands. The site runs off a Mongo database that is hosted at [Mongolab](https://mongolab.com). It runs really smooth using NodeJS and hosted via my Apache2 web server.

I have enjoyed using the site to post my carbohydrate and insulin intake. On a side note... my latest Hemoglobin A1c came in at 7.4%! It is on its way down!