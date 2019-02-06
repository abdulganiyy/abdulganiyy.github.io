// First Web JavaScript

function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    


    var totalCid = cid.reduce(function(accumulator, next) {
    /* accumulator is equal to the string and next[1] is equal to the value. 0.0 is the starting value. */
    return accumulator + next[1];
}, 0.0);

return totalCid;

}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

console.log(checkCashRegister(19.50, 20.00, [
    [
        "PENNY", 1.01
    ],
    [
        "NICKEL", 2.05
    ],
    [
        "DIME", 3.10
    ],
    [
        "QUARTER", 4.25
    ],
    [
        "ONE", 90.00
    ],
    [
        "FIVE", 55.00
    ],
    [
        "TEN", 20.00
    ],
    [
        "TWENTY", 60.00
    ],
    ["ONE HUNDRED", 100.00]
]));

