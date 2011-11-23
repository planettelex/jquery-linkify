/*
 * Copyright (c) 2010 Planet Telex Inc. all rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function($) {
	/**
	 * Attaches a character counter to each textarea element in the jQuery object.
	 * usage: $("#myTextArea").textmeter(max, settings);
	 */
	
	$.fn.textmeter = function (max, settings) {
		max = max || 140;
		settings = $.extend({
			container: "<span></span>",
			classname: "textmeter",
			format: "<br/>{n} (URLs automatically shortend)",
			pulse: true,
			delay: 0,
			ignoreRegex: null,
			ignoreRepacementSize: 0
		}, settings);
		var p, timeout;
		
		function count(element, container) {
			element = $(element);
			
			var val_length = element.val().length;
			if (settings.ignoreRegex != null && settings.ignoreRegex.test(element.val())) {
				val_length = element.val().replace(settings.ignoreRegex, "").length + settings.ignoreRepacementSize;
			}
			
			if ( val_length > max) {
			    if (settings.pulse && !p) {
			    	pulse(container, true);
			    }
			}
			
			if (settings.delay > 0) {
				if (timeout) {
					window.clearTimeout(timeout);
				}
				timeout = window.setTimeout(function () {
					container.html(settings.format.replace("{n}", (max - val_length)));
				}, settings.delay);
			}
			else {
				container.html(settings.format.replace("{n}", (max - val_length)));
			}
		};
		
		function pulse(element, again) {
			if (p) {
				window.clearTimeout(p);
				p = null;
			}
			
			element.animate({ opacity: 0.1 }, 100, function () {
				$(this).animate({ opacity: 1.0 }, 100);
			});
			
			if (again) {
				p = window.setTimeout(function () { pulse(element); }, 200);
			}
		};
		
		return this.each(function () {
			var container = (!settings.container.match(/^<.+>$/)) 
				? $(settings.container) 
				: $(settings.container)
					.insertAfter(this)
					.addClass(settings.classname);
				
			$(this)
				.bind("keydown", function () { count(this, container); })
				.bind("keypress", function () { count(this, container); })
				.bind("keyup", function () { count(this, container); })
				.bind("focus", function () { count(this, container); })
				.bind("mouseover", function () { count(this, container); })
				.bind("mouseout", function () { count(this, container); })
				.bind("paste", function () { 
					var me = this;
					setTimeout(function () { count(me, container); }, 10);
				});
			
			if (this.addEventListener) {
				this.addEventListener('input', function () { count(this, container); }, false);
			}
			
			count(this, container);
		});
	};

})(jQuery);