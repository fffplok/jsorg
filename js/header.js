// task 4 pubsub
// TODO: I think this could be further streamlined by just having the iife that doesn't return anything. We wouldn't need variables Header, Carousel, Details
var Header = (function() {
	function loadPage(e) {
		e.preventDefault();

		function loaded(response, status, xhr) {
			if (status === "success") toggleModal(); //$('#modal').toggle();
		}

		//$modal.load($(e.target).attr("href"), loaded);
		$content.load($(e.target).attr("href"), loaded);
	}

	function toggleModal() {
		$('#modal').toggle();
	}

	function closeBtnClicked(e) {
		e.preventDefault();
		EVT.emit('close-modal');
	}

	function init() {
		$modal = $('[rel="js-modal"]');
		$content = $modal.children('[rel="js-content"]');
		$closeBtn = $modal.children('.close');
		$('div[rel="js-controls"] a').on('click', loadPage);
		$closeBtn.on('click', closeBtnClicked);
	}

	var $modal, $content;

	EVT.on('init', init);
	EVT.on('close-modal', toggleModal);

	return {};
})();
