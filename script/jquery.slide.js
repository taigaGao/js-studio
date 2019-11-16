/* =============================================================================
	Slideshow ver0.91
	Copyright(c) 2013, ShanaBrian
	Dual licensed under the MIT and GPL licenses.
============================================================================= */
(function($) {
	$.fn.slide = function(settings) {
		settings = $.extend({
			firstload       : 0,
			showmode        : 'normal', // [ random | normal ]
			action          : 'auto',   // [ auto | click ]
			interval_mode   : 'randum', // [ random | normal ]
			interval_normal : 2000,
			interval_min    : 2000,
			interval_max    : 5000,
			animation       : true,     // [ true | false ]
			fadespeed       : 1000
		}, settings);

		var self    = this,
			max     = $(this).find('li').length,
			current = settings.firstload;

		$(this).find('li').not(':eq(' + current + ')').hide();

		var animation = function() {
			var prev = $(self).find('li').eq(current),
				n    = current;

			if (settings.showmode === 'normal') {
				if (current === (max - 1)) {
					current = 0;
				} else {
					current++;
				}
			} else {
				current = Math.floor(Math.random() * max);
			}

			var next = $(self).find('li').eq(current);

			if (n === current) {
				animation();
			} else {
				if (settings.animation === true) {
					prev.fadeOut(settings.fadespeed);
					next.fadeIn(settings.fadespeed);
				} else {
					prev.hide();
					next.show();
				}
				intervalmodeCheck();
			}
		};

		var intervalmodeCheck = function() {
			if (settings.interval_mode === 'normal') {
				setTimeout(animation, settings.interval_normal);
			} else {
				var time = settings.interval_min + Math.floor(Math.random() * (settings.interval_max + 1));
				setTimeout(animation, time);
			}
		};

		if (settings.action === 'auto') {
			intervalmodeCheck();
		} else if (settings.action === 'click') {
			$(this).on('click', animation);
		}

		return this;
	};
})(jQuery);
