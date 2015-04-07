---
layout: post
title: Using Sublime Text 2 From Here on Out
tags: [Editors, Markdown, Sublime Text, Packages]
---
{% include JB/setup %}

This post is the first post I've started out by creating the post through Sublime Text 2. Now if you would like to get started on this like I have, I'll try to walk you through my process.

<!-- more -->

When I first started this whole blogging thing through GitHub pages, I started by coming across [Jekyll Bootstrap](http://jekyllbootstrap.com/). I followed the Jekyll QuickStart, my first post made was done by issuing the command:

<pre class="prettyprint prettyprinted">
	$ rake post title="Welcome to My Slice on GitHub"
</pre>

That command right there created an md file in my _posts folder that I opened and edited. After I was done making my edits I ran:

<pre class="prettyprint prettyprinted">
	$ git add .
	$ git commit -m "Whatever I used for a commit message at the time"
	$ git push
</pre>

Creating pages is just as simple,

<pre class="prettyprint prettyprinted">
	$ rake page name="about.md"
</pre>

(Speaking of that previous command, I do need to create an about page for this blog.) You can view the process I went through just by going [here](http://jekyllbootstrap.com/usage/jekyll-quick-start.html).

That was all fine and dandy becuase at the time I was also downloading the files to my local system to make the edits and reuploading them to the server hosting my files and then pushed the changes to GitHub. I then decided enough was enough of that and cloned the repository to my local machine and work locally. I still run git pulls on that server to use it as a backup and work out anything I am unable to on my Windows machine. My editor at the time was [Notepad++](http://notepad-plus-plus.org/).

Now it is the middle of January and I've moved over to using [Sublime Text](http://www.sublimetext.com/). The current stable version is 2.0.2. It is free for a limited time. A license is required for continued use. I found it well worth the cost of the license.

## Sublime Text ##
I added quite a few packages to Sublime Text to make the most of the editor. When you first install the editor, you have to install [Package Control](https://packagecontrol.io/). To install Package Control just use the commands on this [site](https://packagecontrol.io/installation).

Here are some packages that I recommend installing after browsing around Google for what others have recommended. All of thes packages can be found in the Package Control.

* Alignment: This allows for simple key-binding for aligning multi-line and multiple selections in Sublime Text 2.
* All Autocomplete: This extends Sublime autocompletion to find matches in all open files of the current window. By default Sublime only considers words found in the current file.
* ColdFusion: This was added to Package Control by SublimeText. This package is useful if you do coding of web pages in ColdFusion like I do for my day job.
* ColorPicker: This adds a color picker to Sublime. Useful if you are working on web sites.
* Emmet: This is yet another toolkit for web developers. It is used to improve HTML & CSS workflow.
* Enhanced HTML and CFML: This adds rich syntax highlighting of ColdFusion CFML and HTML. It includes various color schemes based off of Dreamweaver, Siddley, and CFBuilder.
* FileDiffs: This package shows the diffs between the current file, or selection(s) in the current file, and clipboard, another file, or unsaved changes.
* Gist: If you use this feature of GitHub frequently to share code, this allows you to create Gists right from Subime Text. You will find the functionality of the plugin in your Tools / Gist menu item after installation.
* Git: This adds git integration into Sublime so you don't have to go back and forth from your editor to the file to deal with changes.
* GitGutter: This plugin will show an icon in the gutter area (area just before the line numbers) indicating whether a line has been inserted, modified or deleted.
* Github Color Theme: This contains similar syntax highlighting to what Github uses.
* Github Flavored Markdown Preview: If you use Github markdown in your files, this is a nice way to see what the output will be like before it is committed.
* Github Tool: A set of tools for Sublime Text to use with Github
* GitLink: This allows you to open your Sublime Text files in Github, Bitbucket, or Codebase HQ
* HTML5: This adds HTML5 syntax and snippets to Sublime Text
* Jekyll: This is to assist in maintaining Jekyll sites (such as this one) and posts easier by providing access to new post/draft shortcuts, key template tags and filters, as well as common completions and a current date/datetime command (for dating posts).
* jQuery: This is to assist with jQuery functions. It has syntax highlighting and almost all of the jQuery methods as snippets.
* JsFormat: This is a javascript formatting plugin. It uses the command-line/python-module javascript formatter from http://jsbeautifier.org to format whole js or json files, or selected portion(s).
* Markdown Preview: This allows you to preview and build your markdown files quickly in your web browser from Sublime Text 2/3.
* Markdown Editing: This provides a decent Markdown color scheme (light and dark) with more robust syntax highlighting and useful editing features. Three flavors are supported: Standard Markdown, Github flavored Markdown, MultiMarkdown.
* SASS Snippets: This just adds some snippets when writing SASS.
* SideBarEnhancements: If you are going to use this for Sublime Text 2, download this file [https://dl.dropboxusercontent.com/u/9303546/SublimeText/SideBarEnhancements.zip](https://dl.dropboxusercontent.com/u/9303546/SublimeText/SideBarEnhancements.zip) as this package is no longer maintained for Sublime Text 2. For those running Sublime Text 3, just install through Package Control. What this does is adds more commands you can use if you right-click on a file in the sidebar.

<img src="https://packagecontrol.io/readmes/img/03c90c0ea60334ac957ab47f01d44900bea2ec03.png">

* Sublime-Github: This is yet another plugin that adds more useful commands for those that use Github such as switching accounts, creating private/public gists from selection, and others.
* Theme - Soda: I liked the dark version of this theme. There is a light version as well.
* TortoiseGit: A heads up if you install this, when you go to edit the settings on this, it will be found under Preferences > Package Settings > TortoiseSVN. The author of this package also maintains the TortoiseSVN package. If you are looking to install both, I'd recommend finding a way to differentiate between the two. I make use of this because I already had TortoiseGit installed on my system and use it to commit my changes.

I'd recommend browsing through the Package Control web site and find any other packages you might find useful to your coding/blogging endevours. This is all I have for now. It is getting late and I do have my day job I have to go to tomorrow. Until my next post!

-Dustin Lennon