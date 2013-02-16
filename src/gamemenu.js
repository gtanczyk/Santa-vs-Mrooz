define("gamemenu", ["gamestate", "maingame", "viewport", "controls", "keycodes", "require"], function(GameState, MainGame, viewport, controls, KC, require) {
	var GameIntro;
	
	return Class.create(GameState, {
		initialize : function(time) {
			this.initTime = time;

			this.currentOption = 0;

			viewport.clear();
			viewport.context.fillStyle = 'rgb(255, 255, 255)';
			
			require(['gameintro'], function(gameintro) {
				GameIntro = gameintro;
			});
		},

		toggleOption : _.throttle(function(direction) {
			this.currentOption = (this.currentOption + direction + 2) % 2;
			this.clear = true;
		}, 500),

		update : function(time) {
			if (this.clear) {
				viewport.clear();
				viewport.context.fillStyle = 'rgb(255, 255, 255)';
				delete this.clear;
			}
			viewport.context.fillText('Menu', 10, 30);
			viewport.context.fillText((this.currentOption == 0 ? '* ' : '') + 'Play', 10, 40);
			viewport.context.fillText((this.currentOption == 1 ? '* ' : '') + 'Intro', 10, 50);

			if (controls.keyState(KC.UP_ARROW, true) == controls.KS_DOWN)
				this.toggleOption(-1);

			if (controls.keyState(KC.DOWN_ARROW, true) == controls.KS_DOWN)
				this.toggleOption(1);
		},

		/** @returns GameState */
		nextState : function() {
			if (controls.keyState(KC.ENTER, true) == controls.KS_DOWN) {
				if (this.currentOption == 0)
					return new MainGame();
				else if (this.currentOption == 1) {
					return new GameIntro();
				}
			}

			return this;
		},

		getStateName : function() {
			return 'GameMenu'
		}
	});
});