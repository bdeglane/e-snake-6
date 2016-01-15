/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "E:\\dev\\Client\\e-snake-6\\e-snake-6\\public";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Controller = __webpack_require__(1);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var game = new _Controller2.default();
	console.log(game);
	game.init();
	game.run(40);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 12/01/2016.
	 */
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Board = __webpack_require__(2);
	
	var _Board2 = _interopRequireDefault(_Board);
	
	var _Snake = __webpack_require__(5);
	
	var _Snake2 = _interopRequireDefault(_Snake);
	
	var _Vertebra = __webpack_require__(7);
	
	var _Vertebra2 = _interopRequireDefault(_Vertebra);
	
	var _View = __webpack_require__(4);
	
	var _View2 = _interopRequireDefault(_View);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controller = function () {
	    function Controller() {
	        _classCallCheck(this, Controller);
	
	        this.runGame = null;
	        this.view = null;
	        this.data = {};
	    }
	
	    _createClass(Controller, [{
	        key: 'init',
	        value: function init() {
	            this.data.board = new _Board2.default(10, 'game');
	            this.data.snake = new _Snake2.default(this.data.board.caseSize);
	            this.view = new _View2.default();
	            this.controls();
	            this.build('game');
	            this.generateFood();
	        }
	    }, {
	        key: 'controls',
	        value: function controls() {
	            var self = this;
	            document.addEventListener('keydown', function (e) {
	                if (e.keyCode >= 32 && e.keyCode <= 40) {
	                    e.preventDefault();
	                    switch (e.keyCode) {
	                        //case 32:
	                        //    start();
	                        //    break;
	                        case 37:
	                            // Gauche
	                            self.data.snake.moveLeft();
	                            break;
	                        case 38:
	                            // Haut
	                            self.data.snake.moveUp();
	                            break;
	                        case 39:
	                            // Droite
	                            self.data.snake.moveRight();
	                            break;
	                        case 40:
	                            // Bas
	                            self.data.snake.moveDown();
	                            break;
	                    }
	                }
	            }, false);
	        }
	
	        /**
	         * check if Snake head stay inside the board
	         */
	
	    }, {
	        key: 'edge',
	        value: function edge() {
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
	
	    }, {
	        key: 'generateFood',
	        value: function generateFood() {
	            this.data.food = new _Vertebra2.default({
	                x: Math.floor(Math.random() * (this.data.board.width / this.data.board.caseSize - 1)) * this.data.board.caseSize,
	                y: Math.floor(Math.random() * (this.data.board.height / this.data.board.caseSize - 1)) * this.data.board.caseSize
	            }, {
	                eat: true
	            });
	            this.data.food.render('board');
	        }
	
	        /**
	         *
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'isEat',
	        value: function isEat() {
	            return !!(this.data.snake.coor.x === this.data.food.coor.x && this.data.snake.coor.y === this.data.food.coor.y);
	        }
	
	        /**
	         *
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'isCollide',
	        value: function isCollide() {
	            var snakeHeadCoor = this.data.snake.coor;
	            for (var ii = 1; ii < this.data.snake.backbone.store.length; ii++) {
	                if (this.data.snake.backbone.store[ii].coor.x === snakeHeadCoor.x && this.data.snake.backbone.store[ii].coor.y === snakeHeadCoor.y) {
	                    this.gameOver();
	                }
	            }
	        }
	
	        /**
	         *
	         */
	
	    }, {
	        key: 'checkFood',
	        value: function checkFood() {
	            if (this.isEat()) {
	                this.data.snake.backbone.add(this.data.food);
	                this.generateFood();
	            }
	        }
	
	        /**
	         * render a frame
	         */
	
	    }, {
	        key: 'frame',
	        value: function frame() {
	            this.data.snake.move();
	            this.edge();
	            this.isCollide();
	            this.checkFood();
	        }
	
	        /**
	         * finish
	         * you lose
	         */
	
	    }, {
	        key: 'gameOver',
	        value: function gameOver() {
	            this.stop();
	            console.log('game over');
	        }
	
	        /**
	         * run game on specified frequence
	         * @param frequence number
	         */
	
	    }, {
	        key: 'run',
	        value: function run(frequence) {
	            var self = this;
	            this.runGame = setInterval(function () {
	                self.frame();
	            }, frequence);
	        }
	
	        /**
	         *
	         */
	
	    }, {
	        key: 'stop',
	        value: function stop() {
	            clearInterval(this.runGame);
	        }
	
	        /**
	         *
	         * @param target
	         */
	
	    }, {
	        key: 'build',
	        value: function build(target) {
	            this.data.board.render(target);
	            this.data.snake.backbone.render('board');
	        }
	    }]);
	
	    return Controller;
	}();
	
	exports.default = Controller;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 13/01/2016.
	 */
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _BoardView = __webpack_require__(3);
	
	var _BoardView2 = _interopRequireDefault(_BoardView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Board = function () {
	    /**
	     *
	     * @param caseSize
	     * @param target
	     * @constructor
	     */
	
	    function Board(caseSize, target) {
	        _classCallCheck(this, Board);
	
	        var game = document.getElementById(target);
	        this.width = game.offsetWidth;
	        this.height = game.offsetHeight;
	        console.log('width ' + this.width, 'height ' + this.height);
	        this.caseSize = caseSize;
	        this.domElement = this.create();
	    }
	
	    _createClass(Board, [{
	        key: 'isInBoard',
	        value: function isInBoard(coor) {
	            return !!(coor.x < 0 || coor.x > this.width || coor.y < 0 || coor.y > this.height);
	        }
	    }, {
	        key: 'create',
	        value: function create() {
	            var boardView = new _BoardView2.default(this);
	            return boardView.createDomElement();
	        }
	    }, {
	        key: 'render',
	        value: function render(target) {
	            var htmlDivTarget = document.getElementById(target);
	            htmlDivTarget.appendChild(this.domElement);
	        }
	    }]);
	
	    return Board;
	}();
	
	exports.default = Board;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 14/01/2016.
	 */
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _View2 = __webpack_require__(4);
	
	var _View3 = _interopRequireDefault(_View2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BoardView = function (_View) {
	    _inherits(BoardView, _View);
	
	    /**
	     *
	     * @param element
	     */
	
	    function BoardView(element) {
	        _classCallCheck(this, BoardView);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BoardView).call(this));
	
	        _this.element = element;
	        return _this;
	    }
	
	    _createClass(BoardView, [{
	        key: 'createDomElement',
	        value: function createDomElement() {
	            this.domElement = document.createElement('div');
	            this.domElement.style.width = this.element.width + 'px';
	            this.domElement.style.height = this.element.height + 'px';
	            this.domElement.id = 'board';
	            this.domElement.classList.add('board');
	            return this.domElement;
	        }
	    }]);
	
	    return BoardView;
	}(_View3.default);
	
	exports.default = BoardView;

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Created by ben on 12/01/2016.
	 */
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var View = function View() {
	  _classCallCheck(this, View);
	};
	
	exports.default = View;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 12/01/2016.
	 */
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Backbone = __webpack_require__(6);
	
	var _Backbone2 = _interopRequireDefault(_Backbone);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Snake = function () {
	    /**
	     *
	     * @param caseSize
	     * @constructor
	     */
	
	    function Snake(caseSize) {
	        _classCallCheck(this, Snake);
	
	        this.coor = {
	            x: caseSize * 2,
	            y: caseSize * 2
	        };
	        this.dir = {
	            x: 1,
	            y: 0
	        };
	        this.backbone = new _Backbone2.default(caseSize);
	        this.caseSize = caseSize;
	    }
	
	    _createClass(Snake, [{
	        key: 'moveLeft',
	        value: function moveLeft() {
	            this.setDir({
	                x: -1,
	                y: 0
	            });
	        }
	    }, {
	        key: 'moveUp',
	        value: function moveUp() {
	            this.setDir({
	                x: 0,
	                y: -1
	            });
	        }
	    }, {
	        key: 'moveRight',
	        value: function moveRight() {
	            this.setDir({
	                x: 1,
	                y: 0
	            });
	        }
	    }, {
	        key: 'moveDown',
	        value: function moveDown() {
	            this.setDir({
	                x: 0,
	                y: 1
	            });
	        }
	    }, {
	        key: 'move',
	        value: function move() {
	            this.coor.x += this.dir.x * this.caseSize;
	            this.coor.y += this.dir.y * this.caseSize;
	            this.updateBackbone(this.coor);
	        }
	
	        /**
	         *
	         * @param coordinate
	         */
	
	    }, {
	        key: 'setDir',
	        value: function setDir(coordinate) {
	            this.dir = {
	                x: coordinate.x,
	                y: coordinate.y
	            };
	        }
	
	        /**
	         * update backbone
	         */
	
	    }, {
	        key: 'updateBackbone',
	        value: function updateBackbone() {
	            this.backbone.iterate(this.coor);
	        }
	    }]);
	
	    return Snake;
	}();
	
	exports.default = Snake;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 13/01/2016.
	 */
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Vertebra = __webpack_require__(7);
	
	var _Vertebra2 = _interopRequireDefault(_Vertebra);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Backbone = function () {
	    /**
	     *
	     * @param caseSize
	     * @constructor
	     */
	
	    function Backbone(caseSize) {
	        _classCallCheck(this, Backbone);
	
	        this.listSize = 0;
	        this.pos = 0;
	        this.store = [];
	        this.data = {};
	        this.caseSize = caseSize;
	
	        /*
	         * add default body
	         */
	        this.add(new _Vertebra2.default({
	            x: caseSize,
	            y: caseSize
	        }));
	        this.add(new _Vertebra2.default({
	            x: caseSize * 2,
	            y: caseSize
	        }));
	    }
	
	    /**
	     *
	     * @param vertebra Vertebra
	     */
	
	    _createClass(Backbone, [{
	        key: 'add',
	        value: function add(vertebra) {
	            this.listSize++;
	            this.store.unshift(vertebra);
	        }
	
	        /**
	         *
	         * @param target
	         */
	
	    }, {
	        key: 'render',
	        value: function render(target) {
	            for (var ii = 0; ii < this.store.length; ii++) {
	                this.store[ii].render(target);
	            }
	        }
	
	        /**
	         *
	         * @param newCoordinate Object
	         */
	
	    }, {
	        key: 'iterate',
	        value: function iterate(newCoordinate) {
	            var nextCoor;
	            var nextSate;
	            //var vertebra;
	            for (var ii = this.store.length - 1; ii >= 0; ii--) {
	                if (ii > 0) {
	
	                    // get vertebra state and props
	                    nextCoor = this.store[ii - 1].coor;
	                    //nextSate = this.store[ii - 1].state;
	
	                    //if (nextSate) {
	                    // if it's a new vertebra
	                    //this.store[ii].setState(nextSate);
	                    //delete this.store[ii - 1].state;
	                    //}
	
	                    // update vertebra
	                    this.store[ii].setCoor(nextCoor);
	                } else if (ii == 0) {
	                    // update vertebra
	                    this.store[ii].setCoor(newCoordinate);
	                }
	                this.store[ii].updateRender();
	            }
	        }
	    }]);
	
	    return Backbone;
	}();
	
	exports.default = Backbone;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 13/01/2016.
	 */
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _VertebraView = __webpack_require__(8);
	
	var _VertebraView2 = _interopRequireDefault(_VertebraView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Vertebra = function () {
	    /**
	     *
	     * @param coordinate Object
	     * @param state Object
	     */
	
	    function Vertebra(coordinate, state) {
	        _classCallCheck(this, Vertebra);
	
	        this.coor = {
	            x: coordinate.x,
	            y: coordinate.y
	        };
	        if (state == 'undefined') {
	            this.state = {
	                eat: false
	            };
	        } else {
	            this.state = state;
	        }
	        this.domElement = this.create();
	    }
	
	    /**
	     *
	     * @param coordinate
	     */
	
	    _createClass(Vertebra, [{
	        key: 'setCoor',
	        value: function setCoor(coordinate) {
	            this.coor = {
	                x: coordinate.x,
	                y: coordinate.y
	            };
	        }
	
	        /**
	         *
	         * @returns {{x: *, y: *}|*}
	         */
	
	    }, {
	        key: 'getCoor',
	        value: function getCoor() {
	            return this.coor;
	        }
	
	        /**
	         *
	         * @param state Object
	         */
	
	    }, {
	        key: 'setState',
	        value: function setState(state) {
	            this.state = state;
	        }
	
	        /**
	         *
	         * @returns {{eat: boolean}|*}
	         */
	
	    }, {
	        key: 'getState',
	        value: function getState() {
	            return this.state;
	        }
	
	        /**
	         *
	         * @returns {*}
	         */
	
	    }, {
	        key: 'create',
	        value: function create() {
	            var vertebraView = new _VertebraView2.default(this);
	            return vertebraView.createDomElement();
	        }
	
	        /**
	         *
	         * @param target
	         */
	
	    }, {
	        key: 'render',
	        value: function render(target) {
	            var htmlDivTarget = document.getElementById(target);
	            htmlDivTarget.appendChild(this.domElement);
	        }
	    }, {
	        key: 'updateRender',
	        value: function updateRender() {
	            this.domElement.style.left = this.coor.x + 'px';
	            this.domElement.style.top = this.coor.y + 'px';
	        }
	    }]);
	
	    return Vertebra;
	}();
	
	exports.default = Vertebra;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 14/01/2016.
	 */
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _View2 = __webpack_require__(4);
	
	var _View3 = _interopRequireDefault(_View2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var VertebraView = function (_View) {
	    _inherits(VertebraView, _View);
	
	    /**
	     *
	     * @param element
	     */
	
	    function VertebraView(element) {
	        _classCallCheck(this, VertebraView);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VertebraView).call(this));
	
	        _this.element = element;
	        return _this;
	    }
	
	    _createClass(VertebraView, [{
	        key: 'createDomElement',
	        value: function createDomElement() {
	            this.domElement = document.createElement('div');
	            this.domElement.style.width = 10 + 'px';
	            this.domElement.style.height = 10 + 'px';
	            this.domElement.style.top = this.element.coor.y + 'px';
	            this.domElement.style.left = this.element.coor.x + 'px';
	            this.domElement.classList.add('snake-body');
	            return this.domElement;
	        }
	    }]);
	
	    return VertebraView;
	}(_View3.default);
	
	exports.default = VertebraView;

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map