---
layout: post
title: "Another Big Stormbot 7 Push"
tags: [TCL, Stormbot v7]
---
{% include JB/setup %}

It has now been 21 hours since my last push to GitHub with changes made to Stormbot v7. In this update, two new modules were added BLOCK and BOT. 

The BLOCK command will allow you to block a bot from joining a channel when the JOIN command is used. If the bot is made to JOIN a BLOCKed channel in some other way, the command will take notice and remove the channel from its records and the bot will leave the channel.

The BOT command will return requested information about bot-specific data or botnet information. Subcommands that this command will return information on are ISLINKED (is the bot linked), link (link the bot to the botnet via a specific bot), unlink (unlink the bot from the botnet via a specific bot), USERLIST, BOTNET, HUB, LINKS, ADDR, and ATTR.

<!-- more -->
Here is the full message posted to GitHub on commit.

> [Coder's message]<br />
> Added some new stuff: BOT (slew of botnet-related commands, some ported from SB6 and upgraded), GMT / TIMEZONE cooperative updating. Also, fixed a few glitches in TAIL (TIMEVAL, PROCDEF, PLURAL, SB7 SETVARIABLES). Also, had to update BLOCK, BOTSENd, & SNAPSHOT due to patch for PLURAL.<br />
> 
> [sb7_tail.tcl]<br />
> * 2015-04-11 03:38:49 -0000: #0465: Fixed SB7 SETVARIABLES (several loop & sanity check variables were left to bleed into the target PROC: _LOOP _LOOP2 _ERROR _ERROR2 _NAMETEMP)<br />
> * 2015-04-11 00:53:59 -0000: #0464: Fixed PLURAL (reverted CHANGELOG #352: moving the flags to *after* the word-to-pluralize. I don't remember the logic behind the change but it (1) is confusing against SB6 syntax, and, (2) just makes no sense [breaks rhythm of arguments/parameters]. Affected commands: BLOCK, BOTSEND, & SNAPSHOT)<br />
> * 2015-04-11 00:37:46 -0000: #0463: Fixed PROCDEF (now properly identifies interpreter aliases)<br />
> * 2015-03-28 09:25:53 -0000: #0462: Fixed TIMEVAL (code didn't allow for multiple indicators)<br />
>
> [block.sb7]<br /.
> * 2015-04-11 00:53:59 -0000: #0464: Fixed PLURAL (reverted CHANGELOG #352: moving the flags to *after* the word-to-pluralize. I don't remember the logic behind the change but it (1) is confusing against SB6 syntax, and, (2) just makes no sense [breaks rhythm of arguments/parameters]. Affected commands: BLOCK, BOTSEND, & SNAPSHOT)<br />
>
> [bot.sb7]<br />
> * 2015-04-11 04:36:01 -0000: #0467: Added BOT (a combination and complete re-write of the following commands: ISLINKED (new), LINK, UNLINK, USERLIST (new), BOTNET (new), HUB (new), LINKS (SB6:BOTNET LINKS), ADDR (SB6:BOTADDR with new syntax), ATTR (SB6:BOTATTR with new syntax))<br />
> * 2015-04-11 04:34:35 -0000: #0466: Added BOT bead to CORE & ZENKAI distributions<br />
>
> [botmon.sb7]<br />
> * 2015-03-28 04:44:30 -0000: #0460: Fixed BOTMON SUSPEND (added LIST option)<br />
>
> [botsend.sb7]<br />
> * 2015-04-11 00:53:59 -0000: #0464: Fixed PLURAL (reverted CHANGELOG #352: moving the flags to *after* the word-to-pluralize. I don't remember the logic behind the change but it (1) is confusing against SB6 syntax, and, (2) just makes no sense [breaks rhythm of arguments/parameters]. Affected commands: BLOCK, BOTSEND, & SNAPSHOT)<br />
>
> [set.sb7]<br />
> * 2015-03-28 04:44:48 -0000: #0461: Fixed SET GMT / SET TIMEZONE (holdover from SB6: setting either allows you to set the other in one line)<br />
>
> [snapshot.sb7]<br />
> * 2015-04-11 00:53:59 -0000: #0464: Fixed PLURAL (reverted CHANGELOG #352: moving the flags to *after* the word-to-pluralize. I don't remember the logic behind the change but it (1) is confusing against SB6 syntax, and, (2) just makes no sense [breaks rhythm of arguments/parameters]. Affected commands: BLOCK, BOTSEND, & SNAPSHOT)<br />
>
> Any questions, see us at chat.bothouse.net in #BotHouse<br />
>
> ~ Mai Mizuno, StormBot.TCL coder

That is all I have on this update. Now back to my regularly scheduled program about learning more about the MEAN stack architecture. Until my next update!

-Dustin Lennon