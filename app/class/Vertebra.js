/**
 * Created by ben on 13/01/2016.
 */
'use strict';
import VertebraView from '../view/VertebraView.js';

class Vertebra {
    /**
     *
     * @param coordinate Object
     * @param data Object
     */
    constructor(coordinate, data) {
        this.coor = {
            x: coordinate.x,
            y: coordinate.y
        };
        if (typeof data === 'undefined') {
            this.data = {
                base: "snake-body",
                type: "body"
            };
        } else {
            this.data = data;
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
     * @param data Object
     */
    setData(data) {
        this.data = data;
    }

    /**
     *
     * @returns {{eat: boolean}|*}
     */
    getData() {
        return this.data;
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
     */
    setHtmlData() {
        this.domElement.className = '';
        for (var ii in this.data) {
            console.log(this.data[ii]);
            this.domElement.className += ' ' + this.data[ii];
        }
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
        this.setHtmlData();
        //console.log(this.domElement.classList);
    }
}
export default Vertebra;