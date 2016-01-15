import Controller from './controller/Controller.js'

var game = new Controller();
//console.log(game);
game.init();
game.run(60);