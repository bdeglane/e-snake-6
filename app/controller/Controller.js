'use strict';
import Board from '../class/Board.js';
import Snake from '../class/Snake.js';
import Vertebra from '../class/Vertebra.js';
import View from '../view/View.js';
import Score from '../class/Score.js';

class Controller {

    constructor() {
        this.runGame = null;
        this.isGameRunning = false;
        this.data = {};
    }

    init() {
        this.data.board = new Board(10, 'game');
        this.data.snake = new Snake(this.data.board.caseSize);
        this.data.score = new Score();
        this.controls();
        this.build('game');
        this.generateFood();
    }

    //reset() {
    //    this.data.snake = new Snake(this.data.board.caseSize);
    //    this.data.score = new Score();
    //    this.generateFood();
    //}

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
                        if (self.isGameRunning) {
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

    /**
     * check if Snake head stay inside the board
     */
    edge() {
        if (this.data.board.isInBoard(this.data.snake.coor)) {
            this.gameOver();
        }
    }

    /**
     * generate random food on board
     */
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

    /**
     *
     * @returns {boolean}
     */
    isEat() {
        return !!(this.data.snake.coor.x === this.data.food.coor.x && this.data.snake.coor.y === this.data.food.coor.y);
    }

    /**
     *
     * @returns {boolean}
     */
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

    /**
     *
     */
    checkFood() {
        if (this.isEat()) {
            this.data.snake.backbone.add(this.data.food);
            this.data.score.add();
            this.generateFood();
        }
    }

    /**
     * render a frame
     */
    frame() {
        this.data.snake.move();
        this.edge();
        this.isCollide();
        this.checkFood();
    }

    /**
     * finish
     * you lose
     */
    gameOver() {
        this.stop();
        console.log('game over');
    }

    /**
     * run game on specified frequence
     * @param frequence number
     */
    run(frequence) {
        var self = this;
        this.frequence = frequence;
        if (this.isPause) {
            this.isPause = false;
        } else {
            this.cleanBoard();
            this.init();
        }
        this.isGameRunning = true;
        this.runGame = setInterval(function () {
            self.frame();
        }, frequence);
    }

    pause() {
        clearInterval(this.runGame);
        this.isPause = true;
        this.isGameRunning = false;
    }

    stop() {
        clearInterval(this.runGame);
        this.isGameRunning = false;
        this.runGame = null;
    }

    build(target) {
        this.data.board.render(target);
        this.data.snake.backbone.render('board');
        this.data.score.render(target);
    }
}
export default Controller;