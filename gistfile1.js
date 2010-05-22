
(function ($) {

var count = 1;

$.gist = function (id, element) {
	
	var url = 'http://gist.github.com/' + id + '.json';
	
	if (!element) {
		id  = 'gist-' + id + '-' + count++
		document.write('<div id="' + id + '"></div>');
		element = $('#' + id);
	} else {
		element = $(element);
	}
	
	$.getJSON(url, function (json) {
		element.replaceWith(json.div);
	});
	
};

$.fn.gist = function (id) {
	return $.gist(id, this);
};

})(jQuery);
