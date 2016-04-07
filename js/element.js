'use strict';

Element = function(options){
	var defaultOptions = { x:0, y:0, isVisible:true };
	// if (typeof options === "undefined") {
	// 	options = defaultOptions;
	// }

	// if (typeof options !== "undefined" && typeof options === "object") {
	if (typeof options === "object") {
		for (var opt in defaultOptions) {
			if(options[opt] !== undefined) {
			// 	continue;
			// }
			defaultOptions[opt] = options[opt];
			}
		}
	}

	this.x = defaultOptions['x'];
	this.y = defaultOptions['y'];
	this.isVisible = defaultOptions['isVisible'];

}

	
