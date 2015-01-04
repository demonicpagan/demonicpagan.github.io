---
layout: default
title: Blog Posts
customjs:
 - //code.jquery.com/jquery-1.11.2.min.js
 - /assets/js/github-query.js
---
{% include JB/setup %}

<div class="row">
	<div class="large-8 columns">
		<ul class="posts-list">
			{% for post in site.posts %}
				<li><span>{{ post.date | date: '%mmm %d, %Y'}}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</li>
			{% endfor %}
		</ul>
	</div>
</div>