define("GameIntro", ["GameState", "GameMenu"], function(GameState, GameMenu) {
	return Class.extend(GameState, {
		initialize : function(time) {
			this.initTime = time;
		},

		update : function(time) {
			if (time - this.initTime > 5000)
				this.finished = true;
		},

		/** @returns GameState */
		nextState : function() {
			if (this.finished)
				return new GameMenu();
			else
				return this;
		}
	});
});