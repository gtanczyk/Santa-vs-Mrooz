define("maingame", ["gamestate", "gamemenu", "highscores", "viewport"], function(GameState, GameMenu, HighScores, viewport) {
	return Class.create(GameState, {
		initialize : function(time) {
			this.initTime = time;

			viewport.clear();
			viewport.context.fillStyle = 'rgb(255, 255, 255)';

			this.image = new Image();
			this.image.src = "../docs/projekt1.png";
		},

		finalize : function() {

		},

		update : function(time) {
			viewport.context.drawImage(this.image, 0, 0, 300, 150);
		},

		/** @returns GameState */
		nextState : function() {
			if (this.finished)
				return new HighScores();
			else
				return this;
		},

		getStateName : function() {
			return 'MainGame'
		}
	});
});