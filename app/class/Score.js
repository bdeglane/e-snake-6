'use strict';
import ScoreView from '../view/ScoreView.js';

class Score {
    constructor() {
        this.score = 0;
        this.domElement = this.create();
    }

    add() {
        this.score++;
        this.render('board');
    }

    reset() {
        this.score = 0;
    }

    create() {
        var scoreView = new ScoreView(this);
        return scoreView.createDomElement();
    }

    render(target) {
        var htmlDivTarget = document.getElementById(target);
        this.domElement.innerHTML = this.score;
        htmlDivTarget.appendChild(this.domElement)
    }
}
export default Score;