'use strict';
import VertebraView from '../view/VertebraView.js';

class Vertebra {
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

    setCoor(coordinate) {
        this.coor = {
            x: coordinate.x,
            y: coordinate.y
        };
    }

    getCoor() {
        return this.coor;
    }

    setData(data) {
        this.data = data;
    }

    getData() {
        return this.data;
    }

    create() {
        var vertebraView = new VertebraView(this);
        return vertebraView.createDomElement();
    }

    setHtmlData() {
        this.domElement.className = '';
        for (var ii in this.data) {
            this.domElement.className += ' ' + this.data[ii];
        }
    }

    render(target) {
        this.setHtmlData();
        var htmlDivTarget = document.getElementById(target);
        htmlDivTarget.appendChild(this.domElement)
    }

    updateRender() {
        this.domElement.style.left = this.coor.x + 'px';
        this.domElement.style.top = this.coor.y + 'px';
        this.setHtmlData();
    }
}
export default Vertebra;