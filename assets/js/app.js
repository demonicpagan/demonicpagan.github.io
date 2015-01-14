;(function ($, window, undefined) {
	'use strict';

	$("#github_user_badge").GitHubBadge({
		login: "demonicpagan",
		sort_on: "date", // "date" or "name"
		sorting: "descending",
		include_github_logo: false
	});

	$("#github_user_badge2").GitHubBadge({
		login: "stormbottcl",
		sort_on: "date", // "date" or "name"
		sorting: "descending",
		include_github_logo: false
	});

	$('#twitter-widget-0').css('width','100%')
})(jQuery, this);