'use strict';
import BoardView from '../view/BoardView.js';

class Board {
    /**
     *
     * @param caseSize
     * @param target
     * @constructor
     */
    constructor(caseSize,target) {
        var game = document.getElementById(target);
        this.width = game.offsetWidth;
        this.height = game.offsetHeight;
        this.caseSize = caseSize;
        this.domElement = this.create();
    }

    isInBoard(coor){
        return !!(
            coor.x < 0 ||
            coor.x > this.width ||
            coor.y < 0 ||
            coor.y > this.height
        );
    }

    create() {
        var boardView = new BoardView(this);
        return boardView.createDomElement();
    }

    render(target) {
        var htmlDivTarget = document.getElementById(target);
        htmlDivTarget.appendChild(this.domElement)
    }
}
export default Board;