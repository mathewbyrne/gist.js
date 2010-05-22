
(function ($) {

var count = 1;

$.gist = function (id, file) {
 	var div = 'gist-' + id + '-' + count++
	document.write('<div id="' + div + '"></div>');
	$('#' + div).gist(id, file);
};

$.fn.gist = function (id, file) {
	
	var url   = 'http://gist.github.com/' + id + '.json',
		$this = $(this);
	
	if (file) {
		url += '?file=' + file;
	}
	
	$.getJSON(url, function (json) {
			$(json.div)
				.replaceAll($this)
				.trigger('gistloaded', json);
		});
	
	return this;
};

})(jQuery);
