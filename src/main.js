require(['gameintro'], function(GameIntro) {
	var lastTime = new Date().getTime();
	var currentTime = 0;

	var currentState = new GameIntro(0);

	function update() {
		var dT = new Date().getTime() - lastTime;
		currentState.update(currentTime, dT);
		var nextState = currentState.nextState();
		if (nextState !== currentState) {
			console.log(currentState.getStateName() + '->' + nextState.getStateName());
			currentState = nextState;
		}
		currentTime += dT;
		lastTime += dT;
		if (currentState != null)
			setTimeout(update, 50);
	};
	
	setTimeout(update, 50);
});