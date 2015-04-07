---
layout: post
title: ::Tap, Tap:: Is Anybody Still There?
tags: [TCL, Stormbot v7, Node.JS, Twitch.tv, Final Fantasy XIV, PHP, Wordpress]
---

{% include JB/setup %}

Damnit... here I go again... almost forgetting I have a blog here to be posting on. I guess that is what happens when you have a full time job. Things like this get pushed aside. I REALLY need to look into resolving this issue. I have a handful of projects I am working on and I'm not making any progress on any. Le sigh. Now on to the purpose of this post.

<!-- more -->

To start things off, I'm going to mention changes I pushed today with SB7 (Stormbot v7). There wasn't much in the changelog that I used for the commit, I am sure the ACTUAL changelog file will say otherwise.

## Stormbot 7 Changelog Message ##
> [Coder's message]<br />
> or fixes to: BOTMON SUSPEND (added LIST; fixed OFF) & SET GMT / TIMEZONE (added SB6's option to set both in one line). Fixed TIMEVAL (multiple indicator processing).<br />

> [sb7_tail.tcl]<br />
> * 2015-03-28 09:25:53 -0000: #0462: Fixed TIMEVAL (code didn't allow for multiple indicators)<br />
> * 2015-03-15 23:11:58 -0000: #0459: Fixed LDESTROY (last night's patch reversed a critical logic gate)<br />
> * 2015-03-15 07:17:47 -0000: #0458: Fixed LDESTROY (-NOCASE flag was forcing the result to lower case. TRAC #23)<br />
> * 2015-03-10 08:42:26 -0000: #0456: Fixed LASSIGN (when a target variable looks like an array, complain: you can't assign arrays in this way without EVAL. Trac #21)<br />
> * 2015-03-04 02:31:36 -0000: #0454: Fixed SB7:SETUP (added "vhost" to $::WHOIS-FIELDS)<br />
> * 2015-03-03 13:43:12 -0000: #0453: Fixed TIMEVAL (the multiplicative factor for decades and centuries were the same, probably copied from decades)<br />
> * 2015-02-28 03:20:01 -0000: #0452: Fixed SB7:DISPATCH (left a debug in there from the $TCHAN repair)<br />

> [botmon.sb7]<br />
> * 2015-03-28 04:44:30 -0000: #0460: Fixed BOTMON SUSPEND (added LIST option)<br />
> * 2015-03-04 02:37:23 -0000: #0455: Fixed BOTMON SUSPEND OFF (bad variable: $REASON instead of $WHY)<br />

> [jump.sb7]<br />
> * 2015-03-10 08:57:06 -0000: #0457: Fixed JUMP LIST (properly display a server's alias if one is in place. TRAC #24)<br />

> [set.sb7]<br />
> * 2015-03-28 04:44:48 -0000: #0461: Fixed SET GMT / SET TIMEZONE (holdover from SB6: setting either allows you to set the other in one line)<br />

> Any questions, see us at chat.bothouse.net in #BotHouse<br />

> ~ Mai Mizuno, StormBot.TCL coder

Also included in this update were the following modules: Backup, Calc, Chaninfo, Info, Join, Logout, OPass, Restart, Save, Snapshot, Whoami, and Whois.

Let me also mention, I do know about the typo above in the message I have as my commit message posted above. That is how I received the file that contains the commit message that the Mai wants to use.

## Node.Js ##
If you notice, one of my other tags is Node.Js. I did do some of that a couple days ago when I proceeded in bringing my bot online for my [Twitch.tv](http://twitch.tv) channel. What I found out was that Twitch made their own Node.Js module to handle connecting to their IRC server thus making the Node.Js IRC module I was using incompatible. On the upside though, included in this module are commands that let me access their API a lot easier. I made the necessary changes to my bot and have posted the code I use up on [Github](http://github.com). The project's name is s2ibot-nodejs.

Now along with this bot is supposed to be a dedicated web site to give information about the commands the bot contains and display quotes added to the bot. The downside is that I have yet to do any more work on it. One of these reasons is due to Laravel 5 just being release and trying to learn how to write a web site using that framework or debating if I just want to leave it on the current Lavavel 4 framework.

## Final Fantasy XIV ##
Since I've started looking back into streaming again, I decided I would load up Final Fantasy XIV again. I have been a bit reluctant to do so because I just had to restore my laptop about a month ago now. It is a real pain in the ass to do when the system won't boot to allow you to back up anything. When I decided to pull the hard drives and attach them to another system, I failed to back anything up because of the time it would take to do so. I know now the next time if I have to do this, I will take the time and back up the information I need to before wiping the drive and reinstalling the operating system.

In that regard, it brings me to the final thing I want to post about...

## Wordpress and PHP ##
Another project I have had in the works for a very long time now is to create a [Wordpress](https://wordpress.org/) plugin to display your character stats in a sidebar or a dedicated page. Part of this work requires using another developer's API that pulls information back from [Square Enix's](http://www.square-enix.com/) [Final Fantasy XIV](http://www.finalfantasyxiv.com/) [Lodestone](http://na.finalfantasyxiv.com/lodestone) (A place to show off your character and receive information as to what's to come for the game). I would have thought I would have been farther along on this than what I presently am, but as usual, work has gotten in the way. The time I did try and do some work on it, I find out that the developer of the API is doing a complete code overhaul that is to be in place when the 1st expansion comes out for the game. Wit that in the works, I have halted my development until I can take a look at the new API and see how the information is returned. Another thing I will have to resolve that makes use of this API as well is how I pull the news feed from the Lodestone to display on page of my blog. I do not know if this code has been written into the API as of yet. Again, I haven't been able to test this new API that is being developed.

## Ending thoughts ##
Well, I think I've written enough for the night. I've been writing to also delay my progress in heading to bed due to a friend of mine seeking web design assistance. Sadly, he's been slow in his communication and will just have to wait until I can get back to him now. I should probably set myself 'away' on Skype for whenever he does decide to accept my request. I hope everyone had a Happy Easter (or at least a fabulous weekend if you don't celebrate). This is all I have for this post. I need to be heading to bed and pray that my phone doesn't ring with any work-related issues.

Until next time.

-Dustin Lennon