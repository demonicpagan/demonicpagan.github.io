;(function ($, window, undefined) {
	'use strict';

	var $doc = $(document),
		Modernizr = window.Modernizr;

	$.fn.foundationAlerts			? $doc.foundationAlerts() : null;
	$.fn.foundationButtons			? $doc.foundationButtons() : null;
	$.fn.foundationAccordion		? $doc.foundationAccordion() : null;
	$.fn.foundationNavigation		? $doc.foundationNavigation() : null;
	$.fn.foundationTopBar			? $doc.foundationTopBar({breakPoint: 900}) : null;
	$.fn.foundationCustomForms		? $doc.foundationCustomForms() : null;
	$.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
	$.fn.foundationTabs				? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
	$.fn.foundationTooltips			? $doc.foundationTooltips() : null;

	$('input, textarea').placeholder();

	// UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
	// $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
	// $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
	// $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
	// $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

	// Hide address bar on mobile devices
	if (Modernizr.touch) {
		$(window).load(function () {
			setTimeout(function () {
				window.scrollTo(0, 1);
			}, 0);
		});
	}

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