const removeFromArray = function (array, ...items) {
    let newArr = [];
    for (ele of array) {
        if (items.includes(ele)) {
            continue;
        }
        newArr.push(ele);
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
