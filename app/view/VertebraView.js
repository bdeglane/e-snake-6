/**
 * Created by ben on 14/01/2016.
 */
'use strict';
import View from './View.js';

class VertebraView extends View {
    /**
     *
     * @param element
     */
    constructor(element) {
        super();
        this.element = element;
    }
    createDomElement() {
        this.domElement = document.createElement('div');
        this.domElement.style.width = 10 + 'px';
        this.domElement.style.height = 10 + 'px';
        this.domElement.style.top = this.element.coor.y +'px';
        this.domElement.style.left = this.element.coor.x + 'px';
        this.domElement.classList.add('snake-body');
        return this.domElement;
    }
}
export default VertebraView;