---
layout: post
title: "New Node.JS Website"
tags: [Node.JS, Life, Diabetes]
---
{% include JB/setup %}

It has been five months since my last post and I do apologize about that. Work has had me consumed with stuff to do and not much time to work on any of my own projects such as the site I am to be building for my Twitch Node.JS bot.

<!-- more -->

Since I haven't been able to do that, I went about to bring up another Node.JS site that others have coded. This one to work with my Dexcom G4 receiver continuous glucose monitor. This past Monday, I started wearing an Animus Vibe insulin pump. Since my medical insurance covered it, I got the additional Dexcom receiver to use to upload my glucose readings to a MongoLab Mongo database and display these results on a web site.

My Samsung Galaxy S5 is what uploads the data to the MongoDB. It makes use of the xDrip program along side the NightScout Android uploader.

I am quite happy with the web site. It makes it easy for me to share the site with those whom I want. The only thing I wish it had was limited access to certain features uch as the CarePortal. Right now, anyone whom I give the URL address to can add fictitious results. If that ever were to happen, I'd have to manually go into the database and remove the entry(ies).

I'll stick with the site, see how it progresses forward, maybe dig into the code myself and learn what is goin on behind the scenes and if need be, improve upon it.

For any of you other Dexcom G4 users out there and would like to know more about the #WeAreNotWaiting movement, head on over to the [Nightscout Wiki](http://www.nightscout.info). The have information about CGM in the cloud.

What I use for my CGM in the cloud
  * [Nightscout](https://github.com/nightscout/cgm-remote-monitor)
  * [Android Uploader](https://github.com/nightscout/android-uploader)
  * [xDrip](https://github.com/StephenBlackWasAlreadyTaken/xDrip)