
// task 4 pubsub
var Carousel = (function() {

	function scrollLeft(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();

		if (position > 0) {
			position = Math.max(0,position - 250);
		}

		$items.css({ left: (-position) + "px" });
	}

	function scrollRight(evt){
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();

		if (position < maxPosition) {
			position = Math.min(maxPosition,position + 250);
		}

		$items.css({ left: (-position) + "px" });
	}

	function scrollTo(id) {
		console.log('scrollTo, arguments, id:', arguments, id);
	}

	function hilightPerson(b) {
		var s = b ? '*' : '';
 		$personSelected.attr('data-attr', s);
	}

	// for this exercise, both carousel and details can emit a person-selected event
	// take out the code specific to showing person selected from personClicked and
	// put here
	function personSelected(id) {
		if ($personSelected) hilightPerson(false); //not til first click will there be a $personSelected
		$personSelected = $("[rel=js-item-"+id+"]");
		hilightPerson(true);
		position = Math.min(maxPosition,$personSelected.position().left);
		$items.css({ left: (-position) + "px" });
	}

	function personClicked(e) {
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();

		var s = $(e.target).attr("rel");
		id = s.slice(s.lastIndexOf('-')+1);

		EVT.emit('person-selected', id);
	}

	function init() {
		$content = $("[rel=js-carousel] > [rel=js-content]");
		$items = $content.children("[rel=js-items]");
		$left = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-left]");
		$right = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-right]");

		contentWidth = $content.width();
		itemsWidth = $items.width();
		position = 0;
		maxPosition = (itemsWidth - contentWidth);

		$left.on('click', scrollLeft);
		$right.on('click', scrollRight);
		$("[rel=js-content]").on("click","> [rel^=js-item]", personClicked);
	}

	var $content, $items, $left, $right, $personSelected;

	var contentWidth, itemsWidth, position, maxPosition, id;

	EVT.on('init', init);
	EVT.on('person-selected', personSelected);

	return {};
})();
