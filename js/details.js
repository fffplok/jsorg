// task 3 create Details module. expose a loadPerson method that takes an id (0-5)
var Details = (function() {

	function loaded(response, status, xhr) {
		//console.log('load complete, response, status, xhr:', response, status, xhr);
		if (status !== "success") $content.html("Unable to load details. response: " + response);
	}

	function loadPerson(id) {
		$content.load('details/'+id+'.html', loaded);
	}

	//not really needed here...
	function init() {
		$content = $("[rel=js-details]");
	}

	var $content;

	var api = {
		init: init,
		loadPerson: loadPerson
	}

	return api;
})();
