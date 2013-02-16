define("highscores", ["gamestate"], function(GameState) {
	return Class.create(GameState, {
		initialize : function(time) {
			this.initTime = time;
		},

		finalize : function() {

		},

		update : function(time) {
		},

		/** @returns GameState */
		nextState : function() {
			return this;
		},
		
		getStateName: function() {
			return 'Highscores'
		}
	});
});