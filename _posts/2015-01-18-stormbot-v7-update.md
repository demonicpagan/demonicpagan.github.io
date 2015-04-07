---
layout: post
title: "Stormbot v7 Update"
tags: [TCL, Stormbot v7]
---
{% include JB/setup %}

I have been a busy person today. Doing work on getting a bug tracker set up for the developer of SB7. I mean, I'm quite happy to deal with bugs through GitHub, but at the same time I believe she chooses not to because she would have to dig for more information from the user than if it was already laid out in front of them to provide. In the past when we were working through version 6, we used Mantis BT. It worked well and all, but customizing the interface to add any additional fields that weren't already provided is a bit of a headache.

<!-- more -->

It was a few days ago when Mai had asked me (well, maybe close to a week ago) if I had ever looked at [Trac](http://trac.edgewall.org/). I've seen it used before and there may have been a time here and there where when I was submitting a bug report on something it was done using Trac, but it was nothing I had personally looked into setting up. I mean, why would I? I had no reason to. At least not until that question was presented to me. Yesterday, I looked into getting it set up on my Linux machine. The install wasn't too bad. If I ever wanted to use Trac for a differen project, it wouldn't be too hard to do. The Trac system is installed to where any user on the system if need be can make use of the software. It is quite different than my typical web site setups.

On my Debian machine, I started out by installing Trac through apt-get, but that only gave me version 0.12, their LTS version. I was needing their next version though for the plugins that I was looking at using. Version 1.0.2 hasn't been pushed down through the Debian package manager yet, so I had to install it manually. Again, not too hard to do. You make sure you have at least version 2.5 of Python installed on your system, at least version .6 of setuptools, and .6 of Genshi.

You can opt to using SQLite as a database, or use PostgreSQL, or MySQL. I opted to use MySQL even though I could have chosen any of the three. There are some other things you might want to read about such as other Python packages to install, dealing with Version Control Systems, and integrating Trac with a Web Server or use the standalone server included. You can read about that [here](http://trac.edgewall.org/wiki/TracInstall).

== Installing Trac ==
The easiset way to install Trac is by using easy_install. This requires setuptools to be installed on the system.

<pre class="prettyprint prettyprinted">
	user@fenrir:~$ sudo easy_install Trac==1.0.2
</pre>

You can also install Trac using pip, or from source if you so choose. I didn't. I used easy_install.

Now that Trac is installed, you will want to create a project environment. This essentially allows you to "install" where the web server will be running your Trac site.

== Creating a Project Environment ==
To create a project environment, you will be using the trac-admin command.

<pre class="prettyprint prettyprinted">
	user@fenrir:~$ sudo trac-admin /path/to/project initenv
</pre>

You will be promted for infromation about the project you are creating which will go into a trac.ini file which you be doing more editing to quite frequently to get your Trac page setup the way you like.

Again, you wll find the [Trac Install](http://trac.edgewall.org/wiki/TracInstall) page a valuable source of information during your install.

After exiting from the trac-admin command, you will want to make sure the user account under which the web front-end runs will have **write permissions** to the environement directory and all the files inside. As an example for those that use Linux with the web server running as user www-data and group www-data, enter:

<pre class="prettyprint prettyprinted">
	user@fenrir:~$ sudo chown -R www-data.www-data /path/to/project
</pre>

== Deploying Trac ==
Now we're at the point to where you need to decide how you want to run Trac. Do you want to run it from the built in standalone server? Or do you want to use a web server you probably already have set up, say, Apache2.

I installed Trac to use my already existing Apache2 web server using mod_wsgi.

There is another trac-admin command you need to run in order to get the WSGI files you will need.

<pre class="prettyprint prettyprinted">
	user@fenrir:~$ sudo trac-admin /path/to/project deploy /path/to/project
	user@fenrir:~$ sudo chown -R www-data.www-data /path/to/project
</pre>

Now comes the configuration setup through Apache2.

Create a configuration file, or use an already existing one with this as it's contents.

<pre class="prettyprint prettyprinted">
<VirtualHost 123.213.123.213>
	ServerName trac.someaddress.org
	ServerAlias trac.someaddress.org

	WSGIPassAuthorization On
	WSGIScriptAlias / /path/to/project/cgi-bin/trac.wsgi

	<Directory /path/to/project>
		WSGIApplicationGroup %{GLOBAL}
		Require all granted
	</Directory>

	<Location />
		SetEnv TRAC_ENV /path/to/project
		SetEnv PYTHON_EGG_CACHE /path/to/project/.python-eggs
	</Location>

	<Location "/login">
		AuthType Digest
		AuthName "SomeRealm"
		AuthDigestDomain /
		AuthUserFile /path/to/project/trac.htpasswd
		Require valid-user
	</Location>
</VirtualHost>
</pre>

As you can see with this configuration, I am pointing to where the installed WSGI script is located, setting some environmental locations, and setting up how I am dealing with users logging into Trac (Digest method stored in a trac.htpasswd file). Something else I will note is that this is for running an Apache 2.4 web server.

More about dealing with WSGI configuration can be found [here](http://trac.edgewall.org/wiki/TracModWSGI#ConfiguringAuthentication).

One last thing before you go about restarting the Apache2 web server and that is creating that trac.htpasswd file.

<pre class="prettyprint prettyprinted">
	user@fenrir:~$ cd /path/to/project
	user@fenrir:~$ htdigest -c trac.htpasswd SomeRealm adminuser
</pre>

That created the file I was needing with a user of adminuser and uses "SomeRealm" that I have in my site's configuration file for AuthName. A prompt will appear for you to setup the user's password and password verification.

Now grant admin right for Trac:

<pre class="prettyprint prettyprinted">
	user@fenrir:~$ sudo trac-admin /path/to/project permission add adminuser TRAC_ADMIN
</pre>

At this point in time, Trac is installed and running with your Apache2 web server. I will leave it up to you to determine what else you will want to change to make Trac work for your needs. There are quite a few modifications written out there for you to work with.

= Stormbot 7 Information =
NOW that I'm done with going off on that tangent. I need to give you the changes that were pushed a few hours ago to Stormbot v7.

> StormBot V7 ChangeLog: 2015-01-13 12:30:30 -0000<br />
>
> [Coder's message]<br />
> Did some further repair work on BOTMON (more related to the LDESTROY issue). Finished tweaking JUMP. Added BOTSEND TIMEOUT. Started work on identifiying a flaw in IRCds vs Eggdrop: notifying the bot when a VIDENT & VHOST changes the bot's information. Fixed stupid typo in SB7:SETUP.
>
> [sb7_tail.tcl]
> * 2015-01-13 12:28:06 -0000: #0436: Fixed SB7:SETUP (a typo I thought I caught earlier: while searching / replacing, highlighted the "1001" in the userlevel definition area, typed "1f" by accident, ruining the data)<br />
> * 2015-01-13 10:19:10 -0000: #0435: Added several raw binds (001, 371, & others: try to capture when the bot's host is changed; force a WHOIS to the server so the $::BOTNAME variable will update itself[?]. Still need to add a trap for usermodes +tx)<br />
> * 2015-01-12 01:09:12 -0000: #0432: Added SB7:BIND:RAW:001 (trying to compensate for a server-level deficiency: when a bot changes its host (VHOST), the bot is only told under limited circumstances; VIDENT isn't reported at all. Both of these issues leave $::BOTNAME out-of-date)<br />
>
> [botmon.sb7]<br />
> * 2015-01-13 07:15:46 -0000: #0434: Fixed BOTMON (more LDESTROY-related issues in @BOTMON:CHECK, causing $OK and $MISSING to also be swapped. This was causing the "all bots present" message to never trigger because $MISSING always has the list-of-present-bots by mistake)<br />
> * 2015-01-10 09:44:12 -0000: #0429: Fixed BOTMON (after the last patch a few days ago, the empty variables weren't deterring blank line output for "missing" and "legend")<br />
> * 2015-01-08 08:12:11 -0000: #0428: Fixed BOTMON (this should have been in last night's Git commit: due to fixen in LDESTROY a few weeks ago, the returned lists for LDESTROY -BOTH were transposed. This was causing BOTMON to report all bots missing ($MISSING & $PRESENT were swapped))<br />
>
> [botsend.sb7]<br />
> * 2015-01-10 10:25:16 -0000: #0430: Updated BOTSEND (added transfer timeout control (dynamic limit control, detault value); cosmetic: "all files transferred" message made bold to stand-out against text flood)<br />
>
> [jump.sb7]<br />
> * 2015-01-12 02:40:05 -0000: #0433: Fixed JUMP (not properly deleting servers & wildcard matching when trying to jump servers wasn't working; both fixed)<br />
> * 2015-01-11 12:06:48 -0000: #0431: Fixed JUMP (when jumping, clear all logins)<br />
>
> Any questions, see us at [chat.bothouse.net in #BotHouse](irc://chat.bothouse.net/bothouse)<br />
>
> ~ Mai Mizuno, StormBot.TCL coder

Well, I do believe this is one of my longets posts yet. I hope it was informative for you. If you have any questions about anything in this post, please feel free to leave a comment below. Until my next post!

-Dustin Lennon