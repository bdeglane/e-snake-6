'use strict';
import Backbone from '../class/Backbone.js';

class Snake {
    constructor(caseSize) {
        this.coor = {
            x: caseSize * 2,
            y: caseSize * 2
        };
        this.dir = {
            x: 1,
            y: 0
        };
        this.backbone = new Backbone(caseSize);
        this.caseSize = caseSize;
    }

    moveLeft() {
        this.setDir({
            x: -1,
            y: 0
        });
    }

    moveUp() {
        this.setDir({
            x: 0,
            y: -1
        });
    }

    moveRight() {
        this.setDir({
            x: 1,
            y: 0
        });
    }

    moveDown() {
        this.setDir({
            x: 0,
            y: 1
        });
    }

    move() {
        this.coor.x += this.dir.x * this.caseSize;
        this.coor.y += this.dir.y * this.caseSize;
        this.updateBackbone(this.coor);
    }

    /**
     *
     * @param coordinate
     */
    setDir(coordinate) {
        this.dir = {
            x: coordinate.x,
            y: coordinate.y
        };
    }

    /**
     * update backbone
     */
    updateBackbone() {
        this.backbone.iterate(this.coor,{
            base: "snake-body",
            type: "body"
        });
    }
}
export default Snake;