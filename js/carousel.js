
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

	function personClicked(e) {
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();

		var s = $(e.target).attr("rel");
		id = s.slice(s.lastIndexOf('-')+1);

		EVT.emit('person-selected', id);

		//Details.loadPerson(id);
		//debugger;
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

	var $content, $items, $left, $right;

	var contentWidth, itemsWidth, position, maxPosition, id;

	EVT.on('init', init);

	return {};
})();
