
(function ($) {

var count = 1;

$.gist = function (id, file, placeholder) {
 	placeholder = placeholder || ['gist', id, count++].join('-');
	$('<div />', { 'id': placeholder }).appendTo('body').gist(id, file);
};

$.gist.url = function (id, file) {
	var url = 'http://gist.github.com/' + id + '.json?callback=?';
	if (file) {
		url += '&file=' + file;
	}
	return url;
};

$.fn.gist = function (id, file) {
	
	var self = this,
		url  = $.gist.url.apply(this, arguments);
	
	$.getJSON(url, function (json) {
			$(json.div)
				.replaceAll(self)
				.trigger('gistloaded', json);
		});
	
	return this;
};

})(jQuery);
