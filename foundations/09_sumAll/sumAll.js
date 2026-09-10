//this is not an elegant solution as I couldn't remember isInteger method at time. 
const sumAll = function (start, end) {
    //check if start and end are number
    if (typeof (start) === 'number' && typeof (end) === 'number') {
        //check if start and end are integers and greater than 0
        if ((start >= 0 && Math.floor(start) === start)
            && (end >= 0 && Math.floor(end) === end)) {
            //check which one is bigger
            if (start > end) {
                [start, end] = [end, start];
            }

            let sum = 0;
            while (start <= end) {
                sum += start;
                start++;
            }
            return sum;
        }
    }
    return "ERROR";

};

// Do not edit below this line
module.exports = sumAll;
