/**
 * Created by ben on 13/01/2016.
 */
'use strict';
import Vertebra from './Vertebra.js';

class Backbone {
    /**
     *
     * @param caseSize
     * @constructor
     */
    constructor(caseSize) {
        this.listSize = 0;
        this.pos = 0;
        this.store = [];
        this.data = {};
        this.caseSize = caseSize;

        /*
         * add default body
         */
        this.add(new Vertebra({
            x: caseSize,
            y: caseSize
        }));
        this.add(new Vertebra({
            x: caseSize * 2,
            y: caseSize
        }));
    }

    /**
     *
     * @param vertebra Vertebra
     */
    add(vertebra) {
        this.listSize++;
        this.store.unshift(vertebra);
    }

    /**
     *
     * @param target
     */
    render(target) {
        for (var ii = 0; ii < this.store.length; ii++) {
            this.store[ii].render(target);
        }
    }

    /**
     *
     * @param newCoordinate Object
     */
    iterate(newCoordinate) {
        var nextCoor;
        var nextSate;
        //var vertebra;
        for (var ii = this.store.length - 1; ii >= 0; ii--) {
            if (ii > 0) {

                // get vertebra state and props
                nextCoor = this.store[ii - 1].coor;
                //nextSate = this.store[ii - 1].state;

                //if (nextSate) {
                    // if it's a new vertebra
                    //this.store[ii].setState(nextSate);
                    //delete this.store[ii - 1].state;
                //}

                // update vertebra
                this.store[ii].setCoor(nextCoor);
            } else if (ii == 0) {
                // update vertebra
                this.store[ii].setCoor(newCoordinate);
            }
            this.store[ii].updateRender();
        }
    }
}
export default Backbone;