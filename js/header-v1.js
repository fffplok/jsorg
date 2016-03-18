//solution to task 1 below:
// put event handlers for header links here

//jquery ready
$(function(){
	var $modal = $('[rel="js-modal"]');

	function loadPage(e) {
		e.preventDefault();

		function loaded(response, status, xhr) {
			//console.log('load complete, response, status, xhr:', response, status, xhr);
			if (status === "success") $('#modal').show(); //css("display","block");
		}

		//Kyle says to use $(e.target) rather than $(this) because with propagation, this is unreliable
		$modal.load($(e.target).attr("href"), loaded);
	}

	// note: loadPage could be part of an api
	// choose to add rel attribute to div containing the links. that way, javascript does not need to be codependent on css. Helps avoid css changes affecting js. He also doesn't like referencing dom elements, so he'd completely rely on rel for his selectors.
	$('div[rel="js-controls"] a').on('click', loadPage);
});
