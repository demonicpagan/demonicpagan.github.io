---
layout: default
title: Blog Posts
customjs:
 - //code.jquery.com/jquery-1.11.2.min.js
 - /assets/js/github-query.js
---
{% include JB/setup %}
{% assign m = post.date | date: "%B" %}

<div class="row">
	<div class="large-8 columns">
		<ul class="posts-list">
			{% for post in site.posts %}
				<li>
					<span>{% case m %}{% when 'April' or 'May' or 'June' or 'July'}{{ m }}{% when 'September' %}Sept.{% else %}{{ page.date | date: "%b" }}{% endcase %}{{ page.date | date: "%-d, %Y" }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a>
				</li>
			{% endfor %}
		</ul>
	</div>
</div>