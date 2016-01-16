'use strict';
import Board from '../class/Board.js';
import Snake from '../class/Snake.js';
import Vertebra from '../class/Vertebra.js';
import View from '../view/View.js';
import Score from '../class/Score.js';

class Controller {

    constructor() {
        this.runGame = null;
        this.data = {};
        this.controls();
    }

    init() {
        this.runGame = null;
        this.data.board = new Board(40, 'game');
        this.data.snake = new Snake(this.data.board.caseSize);
        this.data.score = new Score();
        this.build('game');
        this.generateFood();
        this.frequence = 80;
        this.isPause = true;
    }

    cleanBoard() {
        var board = document.getElementById('game');
        while (board.firstChild) {
            board.removeChild(board.firstChild);
        }
    }

    controls() {
        var self = this;
        document.addEventListener('keydown', function (e) {
            if (e.keyCode >= 32 && e.keyCode <= 40) {
                e.preventDefault();
                switch (e.keyCode) {
                    case 32: // espace
                        if (!self.isPause) {
                            self.pause();
                        } else {
                            self.run(self.frequence);
                        }
                        break;
                    case 37: // Gauche
                        self.data.snake.moveLeft();
                        break;
                    case 38: // Haut
                        self.data.snake.moveUp();
                        break;
                    case 39: // Droite
                        self.data.snake.moveRight();
                        break;
                    case 40: // Bas
                        self.data.snake.moveDown();
                        break;
                }
            }
        }, false);
    }

    edge() {
        if (this.data.board.isInBoard(this.data.snake.coor)) {
            this.gameOver();
        }
    }

    generateFood() {
        this.data.food = new Vertebra({
                x: Math.floor(Math.random() * (this.data.board.width / this.data.board.caseSize - 1 )) * this.data.board.caseSize,
                y: Math.floor(Math.random() * (this.data.board.height / this.data.board.caseSize - 1)) * this.data.board.caseSize
            },
            {
                base: "snake-body",
                type: "food"
            });
        this.data.food.render('board');
    }

    isEat() {
        return !!(this.data.snake.coor.x === this.data.food.coor.x && this.data.snake.coor.y === this.data.food.coor.y);
    }

    isCollide() {
        var snakeHeadCoor = this.data.snake.coor;

        for (var ii = 1; ii < this.data.snake.backbone.store.length; ii++) {
            if (
                this.data.snake.backbone.store[ii].coor.x === snakeHeadCoor.x &&
                this.data.snake.backbone.store[ii].coor.y === snakeHeadCoor.y
            ) {
                this.gameOver();
            }
        }
    }

    checkFood() {
        if (this.isEat()) {
            this.data.snake.backbone.add(this.data.food);
            this.data.score.add();
            this.generateFood();
        }
    }

    frame() {
        this.data.snake.move();
        this.edge();
        this.isCollide();
        this.checkFood();
    }

    gameOver() {
        this.stop();
        console.log('game over');
    }

    run(frequence) {
        var self = this;
        this.frequence = frequence;


        if (this.isNewGame === true && this.isPause) {
            this.cleanBoard();
            this.init();
            delete this.isNewGame;
        }

        if (this.isPause) {
            this.isPause = false;
        }

        this.runGame = setInterval(function () {
            self.frame();
        }, frequence);
    }

    pause() {
        clearInterval(this.runGame);
        this.isPause = true;
    }

    stop() {
        clearInterval(this.runGame);
        this.runGame = null;
        this.isNewGame = true;
    }

    build(target) {
        this.data.board.render(target);
        this.data.snake.backbone.render('board');
        this.data.score.render(target);
    }
}
export default Controller;