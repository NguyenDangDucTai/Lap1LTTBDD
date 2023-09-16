//data test
const arrayBill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
//fuction calcTip
const calcTip = (price) => {
    if (price >= 50 && price <= 300)
        return price * 0.15
    return price * 0.2
}

//Total bill
function totalBill(bill) {
    let sum = 0
    for (let i = 0; i < bill.length; i++) {
        sum += bill[i] + calcTip(bill[i])
    }
    return sum
}

//test data
console.log("Total bill + tip: " + totalBill(arrayBill))