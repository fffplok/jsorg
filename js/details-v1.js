// task 2 load person details
$(document).ready(function(){

	var $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
	var $content = $("[rel=js-details]");

	// on click of a carousel item, do an Ajax request for
	// the "details/2.html" (or whatever) file for the person
	// clicked, and load those contents into the `$content` div.

	// hint: you will probably want to use "event propagation"
	// (aka "event delegation"), by attaching a single event
	// handler the `$content` element rather than individual
	// event handlers to each item in the carousel.

	function loaded(response, status, xhr) {
		//console.log('load complete, response, status, xhr:', response, status, xhr);
		if (status !== "success") $content.html("Unable to load details. response: " + response);
	}

	function loadPerson(e) {
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();

		var id = $(e.target).attr("rel");
		id = 'details/' + id.slice(id.lastIndexOf('-')+1) + '.html';

		//Kyle's fancy regex unfortunately will only obtain the last digit... can't have a number like 12
		//var id = $(e.target).attr("rel").replace(/^.*(\d+)$/, '$1');
		//id = 'details/' + id + '.html';

		//debugger; //trigger console debugger and then inspect variable

		$content.load(id, loaded);
	}

	$("[rel=js-content]").on("click","> [rel^=js-item]", loadPerson);
});
