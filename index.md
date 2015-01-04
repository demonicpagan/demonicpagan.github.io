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
					<span>{% case m %}{% when 'April' or 'May' or 'June' or 'July'}{{ m }}{% when 'September' %}Sept.{% else %}{{ post.date | date: "%b. " }}{% endcase %}{{ post.date | date: "%-d, %Y" }}</span> &raquo; <a href="{{ post.url }}" class="tooltip" title="{{ post.excerpt }}">{{ post.title }}</a>
				</li>
			{% endfor %}
		</ul>
	</div>
	<div class="large-4 columns">
		<div id="github_user_badge"></div>
		<div id="twitter-tweet-dp">
			<a class="twitter-timeline" href="https://twitter.com/Demonicpagan" data-widget-id="436373017250115584">Tweets by @Demonicpagan</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
		</div>
	</div>
</div>