define("GameMenu", ["GameState", "MainGame", "HighScores"], function(GameState, MainGame, HighScores) {
	return Class.extend(GameState, {
		initialize : function(time) {
			this.initTime = time;
		}

		update : function(time) {			
		},

		/** @returns GameState */
		nextState : function() {
			if (this.finished)
				return new HighScores();
			else
				return this;
		}
	});
});