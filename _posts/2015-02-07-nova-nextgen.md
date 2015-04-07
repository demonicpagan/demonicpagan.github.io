---
layout: post
title: "Nova NextGen"
tags: [PHP, Nova NextGen, Development]
---
{% include JB/setup %}

So, it has been a few weeks since I have posted anything new. That is so like me. I'll get started on something that I feel I will be able to stick to regularly and end up breaking off from it for a while and then after a while, never return. I am trying very hard to have that be the case here. Now, on to business.

<!-- more -->

The whole purpose of this post is to relay as to what has been going on with my testing of Nova #NextGen. I have been working closely with the developer testing anything and everything he has been pushing down via GitHub. In this process, I have assisted him in finding what directory permissions need to be like to install the project on a server, how to go about making the install more streamlined for this developmental testing, and work with the page views.

Presently, the install process is pretty straight-forward. Since this project is very much in its alpha stage of development, I expect to run into a lot of issues when going from pull to another.

So, what do you need to have/do in order to get up and running with Nova #NextGen? Well, let me lay it out for you.

1. A web server (of course) with PHP. I run my own using Apache2 on my Linux Debian machine.
2. A database server. Nova #NextGen will make use of MySQL, PostgreSQL, and SQLite. ONLY use SQLite for developmental purposes only. I run my installation off of a MySQL database server.
3. Email/SMTP service. The recommended email settings for Nova #NextGen to send out emails with is by using a SMTP service such as Google Apps/Gmail account, [Mailgun](http://www.mailgun.com), [Mandrill](http://mandrill.com), [Postmark](https://postmarkapp.com), or [SendGrid](https://sendgrid.com). You also have the option of using Sendmail, or the PHP mail function. For developmental purposes, there is also the option of log files. With this option, I went with the recommended SMTP service because my domain uses Google Apps.
4. You will need to have Composer installed on to your system. To find out how to install it, I recommend going [here](http://getcomposer.org)

Once you have all that taken care of it is time to start the install processes. The first command you are going to run is a git clone.

<pre class="prettyprint prettyprinted">
	$ git clone https://github.com/anodyne/nova3.git
</pre>

Next step is the composer install to grab the needed dependencies for Nova #NextGen.
<pre class="prettyprint prettyprinted">
	$ composer install
</pre>

This step shouldn't take all that long. For me, my next steps were to set up the needed permissions for my web server (and include a .logs folder for my Apache web server logs). I set my owner/group permissions as follows to the nova3 folder that was created when I ran the git clone.

<pre class="prettyprint prettyprinted">
	$ sudo chown -R demonicpagan:www-data /home/demonicpagan/nova3
	$ chmod -R 2755 /home/demonicpagan/nova3
	$ chmod -R 2775 /home/demonicpagan/nova3/config
	$ chmod -R 2775 /home/demonicpagan/nova3/storage
</pre>

To continue the installation process, browse to your site and the setup process should take over. Once installed you should see your site up and running. Now for any further updates pushed to GitHub, this is what I do. Now what I do doesn't always work. In those cases the only thing I can do is restart from scratch.

The first thing you will want to do is uninstall Nova #NextGen. After you have uninstalled Nova #NextGen, run the following commands:

<pre class="prettyprint prettyprinted">
	$ git pull
	$ composer install
</pre>

After forgetting to do what I just mentioned a few times and the developer of Nova #NextGen doing the same thing, he's added something to the repository to assist with updating. After running the composer install command you will run the following command:

<pre class="prettyprint prettyprinted">
	$ php artisan nova:refresh
</pre>

There is a file you must have in place first to be able to use that command. Create a file in the root of your Nova 3 directory called _setup.php. The contents of the file will be:

{% highlight php %}
<?php

return [
	'user' => [
		'name' => "name",
		'email' => "me@example.com",
		'password' => "password",
	],

	'character' => [
		'first_name' => "FirstName",
		'last_name' => "LastName",
	],

	'settings' => [
		'sim_name' => "Uss Nova NCC-41510-C"
	],
];
{% endhighlight %}

If you are wanting to mess around with Laravel Debugbar must have a .env file in your directory's root. The contents of my .env file is

<pre class="prettyprint prettyprinted">
	APP_ENV=local
	#APP_ENV=production
	APP_DEBUG=true
	APP_KEY=SomeRandomString
</pre>

The Laravel Debugbar requires that the environment be set to local for it to work.

Well, this is all I have for this post. If you have any questions about Nova #NextGen feel free to hit me up on Twitter or @anodyneprod, the developer of Nova #NextGen. 

-Dustin Lennon