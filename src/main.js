require('GameIntro', function(GameIntro) {
	var currentState = new GameIntro();
	var startTime = new Date().getTime();
	var currentTime = startTime;
	while(currentState!=null) {
		var dT = new Date().getTime() - currentTime;
		currentState.update(currentTime, dT);
		currentState = currentState.nextState();		
		currentTime += dT;
	};
});