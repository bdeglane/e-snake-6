/**
 * Created by ben on 13/01/2016.
 */
'use strict';
import VertebraView from '../view/VertebraView.js';

class Vertebra {
    /**
     *
     * @param coordinate Object
     * @param state Object
     */
    constructor(coordinate, state) {
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
    setCoor(coordinate) {
        this.coor = {
            x: coordinate.x,
            y: coordinate.y
        };
    }

    /**
     *
     * @returns {{x: *, y: *}|*}
     */
    getCoor() {
        return this.coor;
    }

    /**
     *
     * @param state Object
     */
    setState(state) {
        this.state = state;
    }

    /**
     *
     * @returns {{eat: boolean}|*}
     */
    getState() {
        return this.state;
    }

    /**
     *
     * @returns {*}
     */
    create() {
        var vertebraView = new VertebraView(this);
        return vertebraView.createDomElement();
    }

    /**
     *
     * @param target
     */
    render(target) {
        var htmlDivTarget = document.getElementById(target);
        htmlDivTarget.appendChild(this.domElement)
    }

    updateRender() {
        this.domElement.style.left = this.coor.x + 'px';
        this.domElement.style.top = this.coor.y + 'px';
    }
}
export default Vertebra;