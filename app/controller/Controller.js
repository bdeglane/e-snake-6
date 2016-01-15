/**
 * Created by ben on 12/01/2016.
 */
'use strict';
import Board from '../class/Board.js';
import Snake from '../class/Snake.js';
import Vertebra from '../class/Vertebra.js';
import View from '../view/View.js';

class Controller {

    constructor() {
        this.runGame = null;
        this.view = null;
        this.data = {};
    }

    init() {
        this.data.board = new Board(10,'game');
        this.data.snake = new Snake(this.data.board.caseSize);
        this.view = new View();
        this.controls();
        this.build('game');
        this.generateFood();
    }

    controls() {
        var self = this;
        document.addEventListener('keydown', function (e) {
            if (e.keyCode >= 32 && e.keyCode <= 40) {
                e.preventDefault();
                switch (e.keyCode) {
                    //case 32:
                    //    start();
                    //    break;
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


        //if (
        //    this.data.snake.coor.x < 0 ||
        //    this.data.snake.coor.x > this.data.board.width ||
        //    this.data.snake.coor.y < 0 ||
        //    this.data.snake.coor.y > this.data.board.height
        //) {
        //    this.gameOver();
        //}
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
        //console.log(this);
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
        this.runGame = setInterval(function () {
            self.frame();
        }, frequence);
    }

    /**
     *
     */
    stop() {
        clearInterval(this.runGame);
    }

    /**
     *
     * @param target
     */
    build(target){
        this.data.board.render(target);
        this.data.snake.backbone.render('board');
    }
}
export default Controller;