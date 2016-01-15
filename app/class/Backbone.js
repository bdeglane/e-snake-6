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
        },{
            base: "snake-body",
            type: "body"
        }));
        this.add(new Vertebra({
            x: caseSize * 2,
            y: caseSize
        },{
            base: "snake-body",
            type: "body"
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
     * @param newData Object
     */
    iterate(newCoordinate, newData) {
        var nextCoor;
        var nextData;
        //var vertebra;
        for (var ii = this.store.length - 1; ii >= 0; ii--) {
            // if it's the body
            if (ii > 0) {
                // get vertebra state and props
                nextCoor = this.store[ii - 1].coor;
                nextData = this.store[ii - 1].data;
                //console.log(nextData);
                // update vertebra
                // & update data
                this.store[ii].setCoor(nextCoor);
                this.store[ii].setData(nextData);
                // else if it's the head
            } else if (ii == 0) {
                // update vertebra with new coordinate
                this.store[ii].setCoor(newCoordinate);
                this.store[ii].setData(newData);
            }
            // actualize view
            this.store[ii].updateRender();
        }
        //console.log(this.store);
    }
}
export default Backbone;