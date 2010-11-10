(function($) {

	$.fn.textsearch = function(options) {
		
		var string;
		
		if (typeof options === 'string') {
			string = options;
			options = {};
		} else {
			string = options.searchVal;
			delete options['string'];
		}
		
		
		var o = $.extend({
			
			allWords		: true,
			caseSensitive   : false,
			callback		: $.noop
			
		}, options);

		if (!o.caseSensitive) {
			string = string.toLowerCase();
		}
		
		string = string.split(' ');
		
		// TODO: have the plugin traverse all children of object
		// TODO: time benchmarking within this loop to eliminate shitty code
		// TODO: consider initially porting all text to an interal json object
		// Last resort: dynamicaly create & append HTML on update --- in plugin?
		return this.each(function(i) {
		
			var that = $(this);
			var text = that.text();
			if (!o.caseSensitive) {
				text = text.toLowerCase();
			}
			
			var matches = 0;
			
			for (var b = 0; b < string.length; b++) {
			    var word = string[b];
			    if (text.indexOf(word) !== -1) {
			    	matches = matches + 1;
			    }
			}
			
			if ($.isFunction(o.callback)) {
				if (!o.allWords) {
					var match = (matches <= string.length && matches > 0);
				} else {
					var match = matches === string.length;
				}
				o.callback(that, match);
			}
						
		});
		
	}
	
})(jQuery);