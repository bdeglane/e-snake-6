/**
 * Created by ben on 14/01/2016.
 */
'use strict';
import View from './View.js';

class BoardView extends View {
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
        this.domElement.style.width = this.element.width + 'px';
        this.domElement.style.height = this.element.height + 'px';
        this.domElement.id = 'board';
        this.domElement.classList.add('board');
        return this.domElement;
    }
}
export default BoardView;