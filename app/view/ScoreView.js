'use strict';
import View from './View.js';

class ScoreView extends View {
    constructor(element) {
        super();
        this.element = element;
    }

    createDomElement() {
        this.domElement = document.createElement('div');
        this.domElement.classList.add('score');
        return this.domElement;
    }
}
export default ScoreView;