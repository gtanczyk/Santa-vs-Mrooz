define("viewport", [], function() {
	var canvas = document.createElement('canvas');
	canvas.style.width = '100%';
	canvas.style.height = '100%';

	var context = canvas.getContext('2d');

	document.body.appendChild(canvas);

	function Viewport() {
		this.canvas = canvas;
		this.context = context;
	}

	Viewport.prototype.clear = function(color) {
		context.fillStyle = color || 'rgb(0, 0, 0)';
		context.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
	};
		

	return new Viewport();
});