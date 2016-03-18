// task 4 use eventEmitter2.js to create pubsub event hub. here listen to event rather than have method called directly
var Details = (function() {

	function loaded(response, status, xhr) {
		//console.log('load complete, response, status, xhr:', response, status, xhr);
		if (status !== "success") $content.html("Unable to load details. response: " + response);
	}

	function loadPerson(id) {
		$content.load('details/'+id+'.html', loaded);
	}

	function selectPerson(e) {
		e.preventDefault();
		EVT.emit('person-selected', $(e.target).data('person'));
		//loadPerson($(e.target).data('person'));
		//loadPerson(parseInt($(e.target).data('person')));
	}

	function init() {
		$content = $("[rel=js-details]");

		$content.on('click', '[rel=js-select-person]', selectPerson);

		//event listener
		EVT.on('person-selected', loadPerson);
	}

	var $content;

	EVT.on('init', init);

	return {};
})();
