!function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="E:\\dev\\Client\\e-snake-6\\e-snake-6\\public",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var a=n(1),r=o(a),i=new r["default"];i.init(),i.run(60)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),s=o(i),u=n(5),c=o(u),l=n(7),f=o(l),d=n(4),h=o(d),y=function(){function e(){a(this,e),this.runGame=null,this.view=null,this.data={}}return r(e,[{key:"init",value:function(){this.data.board=new s["default"](10,"game"),this.data.snake=new c["default"](this.data.board.caseSize),this.view=new h["default"],this.controls(),this.build("game"),this.generateFood()}},{key:"controls",value:function(){var e=this;document.addEventListener("keydown",function(t){if(t.keyCode>=32&&t.keyCode<=40)switch(t.preventDefault(),t.keyCode){case 37:e.data.snake.moveLeft();break;case 38:e.data.snake.moveUp();break;case 39:e.data.snake.moveRight();break;case 40:e.data.snake.moveDown()}},!1)}},{key:"edge",value:function(){this.data.board.isInBoard(this.data.snake.coor)&&this.gameOver()}},{key:"generateFood",value:function(){this.data.food=new f["default"]({x:Math.floor(Math.random()*(this.data.board.width/this.data.board.caseSize-1))*this.data.board.caseSize,y:Math.floor(Math.random()*(this.data.board.height/this.data.board.caseSize-1))*this.data.board.caseSize},{base:"snake-body",type:"food"}),this.data.food.render("board")}},{key:"isEat",value:function(){return!(this.data.snake.coor.x!==this.data.food.coor.x||this.data.snake.coor.y!==this.data.food.coor.y)}},{key:"isCollide",value:function(){for(var e=this.data.snake.coor,t=1;t<this.data.snake.backbone.store.length;t++)this.data.snake.backbone.store[t].coor.x===e.x&&this.data.snake.backbone.store[t].coor.y===e.y&&this.gameOver()}},{key:"checkFood",value:function(){this.isEat()&&(this.data.snake.backbone.add(this.data.food),this.generateFood())}},{key:"frame",value:function(){this.data.snake.move(),this.edge(),this.isCollide(),this.checkFood()}},{key:"gameOver",value:function(){this.stop(),console.log("game over")}},{key:"run",value:function(e){var t=this;this.runGame=setInterval(function(){t.frame()},e)}},{key:"stop",value:function(){clearInterval(this.runGame)}},{key:"build",value:function(e){this.data.board.render(e),this.data.snake.backbone.render("board")}}]),e}();t["default"]=y},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),s=o(i),u=function(){function e(t,n){a(this,e);var o=document.getElementById(n);this.width=o.offsetWidth,this.height=o.offsetHeight,this.caseSize=t,this.domElement=this.create()}return r(e,[{key:"isInBoard",value:function(e){return!!(e.x<0||e.x>this.width||e.y<0||e.y>this.height)}},{key:"create",value:function(){var e=new s["default"](this);return e.createDomElement()}},{key:"render",value:function(e){var t=document.getElementById(e);t.appendChild(this.domElement)}}]),e}();t["default"]=u},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0});var u=n(4),c=o(u),l=function(e){function t(e){a(this,t);var n=r(this,Object.getPrototypeOf(t).call(this));return n.element=e,n}return i(t,e),s(t,[{key:"createDomElement",value:function(){return this.domElement=document.createElement("div"),this.domElement.style.width=this.element.width+"px",this.domElement.style.height=this.element.height+"px",this.domElement.id="board",this.domElement.classList.add("board"),this.domElement}}]),t}(c["default"]);t["default"]=l},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function a(){n(this,a)};t["default"]=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),s=o(i),u=function(){function e(t){a(this,e),this.coor={x:2*t,y:2*t},this.dir={x:1,y:0},this.backbone=new s["default"](t),this.caseSize=t}return r(e,[{key:"moveLeft",value:function(){this.setDir({x:-1,y:0})}},{key:"moveUp",value:function(){this.setDir({x:0,y:-1})}},{key:"moveRight",value:function(){this.setDir({x:1,y:0})}},{key:"moveDown",value:function(){this.setDir({x:0,y:1})}},{key:"move",value:function(){this.coor.x+=this.dir.x*this.caseSize,this.coor.y+=this.dir.y*this.caseSize,this.updateBackbone(this.coor)}},{key:"setDir",value:function(e){this.dir={x:e.x,y:e.y}}},{key:"updateBackbone",value:function(){this.backbone.iterate(this.coor,{base:"snake-body",type:"body"})}}]),e}();t["default"]=u},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),s=o(i),u=function(){function e(t){a(this,e),this.listSize=0,this.pos=0,this.store=[],this.data={},this.caseSize=t,this.add(new s["default"]({x:t,y:t},{base:"snake-body",type:"body"})),this.add(new s["default"]({x:2*t,y:t},{base:"snake-body",type:"body"}))}return r(e,[{key:"add",value:function(e){this.listSize++,this.store.unshift(e)}},{key:"render",value:function(e){for(var t=0;t<this.store.length;t++)this.store[t].render(e)}},{key:"iterate",value:function(e,t){for(var n,o,a=this.store.length-1;a>=0;a--)a>0?(n=this.store[a-1].coor,o=this.store[a-1].data,this.store[a].setCoor(n),this.store[a].setData(o)):0==a&&(this.store[a].setCoor(e),this.store[a].setData(t)),this.store[a].updateRender()}}]),e}();t["default"]=u},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),s=o(i),u=function(){function e(t,n){a(this,e),this.coor={x:t.x,y:t.y},"undefined"==typeof n?this.data={base:"snake-body",type:"body"}:this.data=n,this.domElement=this.create()}return r(e,[{key:"setCoor",value:function(e){this.coor={x:e.x,y:e.y}}},{key:"getCoor",value:function(){return this.coor}},{key:"setData",value:function(e){this.data=e}},{key:"getData",value:function(){return this.data}},{key:"create",value:function(){var e=new s["default"](this);return e.createDomElement()}},{key:"setHtmlData",value:function(){this.domElement.className="";for(var e in this.data)this.domElement.className+=" "+this.data[e]}},{key:"render",value:function(e){this.setHtmlData();var t=document.getElementById(e);t.appendChild(this.domElement)}},{key:"updateRender",value:function(){this.domElement.style.left=this.coor.x+"px",this.domElement.style.top=this.coor.y+"px",this.setHtmlData()}}]),e}();t["default"]=u},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0});var u=n(4),c=o(u),l=function(e){function t(e){a(this,t);var n=r(this,Object.getPrototypeOf(t).call(this));return n.element=e,n}return i(t,e),s(t,[{key:"createDomElement",value:function(){return this.domElement=document.createElement("div"),this.domElement.style.width="10px",this.domElement.style.height="10px",this.domElement.style.top=this.element.coor.y+"px",this.domElement.style.left=this.element.coor.x+"px",this.domElement.classList.add("snake-body"),this.domElement}}]),t}(c["default"]);t["default"]=l}]);
//# sourceMappingURL=main.js.map