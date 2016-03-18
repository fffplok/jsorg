// task 3 refactor header.js to a module that exposes an init function
// note: by using the iife, we've got a singleton, which is all that is needed of Header
var Header = (function() {
	function loadPage(e) {
		e.preventDefault();

		function loaded(response, status, xhr) {
			if (status === "success") $('#modal').show();
		}

		$modal.load($(e.target).attr("href"), loaded);
	}

	function init() {
		$modal = $('[rel="js-modal"]');
		$('div[rel="js-controls"] a').on('click', loadPage);
		console.log('this:', this);
	}

	var $modal;

	var api = {
		init: init
	}

	return api;
})();
