define("controls", ["keycodes"], function(KC) {
	function Controls() {

	}

	var keyStates = {};

	Controls.prototype.keyState = function(keyCode, clear) {
		var state = keyStates[keyCode];
		if (clear)
			delete keyStates[keyCode];
		return state;
	};

	var KS_UP = Controls.prototype.KS_UP = 1;
	var KS_DOWN = Controls.prototype.KS_DOWN = 2;

	window.addEventListener("keyup", function(event) {
		keyStates[event.keyCode] = KS_UP;
	}, 0);

	window.addEventListener("keydown", function(event) {
		keyStates[event.keyCode] = KS_DOWN;
	}, 0);

	return new Controls();
});