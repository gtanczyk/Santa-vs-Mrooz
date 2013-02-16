define("gameintro", ["gamestate", "gamemenu", "viewport", "controls", "keycodes"], function(GameState, GameMenu, viewport, controls, KC) {
	return Class.create(GameState, {
		initialize : function(time) {
			this.initTime = time;

			viewport.clear();
			viewport.context.fillStyle = 'rgb(255, 255, 255)';
		},

		update : function(time) {
			viewport.context.fillText('Santa vs Mrooz', 50, 50);
			
			if (time - this.initTime > 10000 || controls.keyState(KC.ESCAPE, true) == controls.KS_DOWN || controls.keyState(KC.ENTER, true) == controls.KS_DOWN)
				this.finished = true;
		},

		/** @returns GameState */
		nextState : function() {
			if (this.finished)
				return new GameMenu();
			else
				return this;
		},

		getStateName : function() {
			return 'GameIntro'
		}
	});
});