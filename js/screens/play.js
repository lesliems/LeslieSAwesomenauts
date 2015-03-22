game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function() {
		// reset the score
		game.data.score = 0;
                //teliing it what to look at as far as maps
                me.levelDirector.loadLevel("level101");
                
                //pulling the player and setiing where he will show up
                var player = me.pool.pull("player", 0, 420, {});
                //adding the player to the world
                me.game.world.addChild(player, 5);
                
                //bind key for movement
                me.input.bindKey(me.input.KEY.RIGHT, "right");
                me.input.bindKey(me.input.KEY.A, "attack");

		// add our HUD to the game world
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
	},


	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
	}
});
