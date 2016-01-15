/**
 * Created by ben on 13/01/2016.
 */
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
        //console.log('width ' + this.width,'height ' + this.height);
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
        //console.log(this);
        var htmlDivTarget = document.getElementById(target);
        htmlDivTarget.appendChild(this.domElement)
    }
}
export default Board;