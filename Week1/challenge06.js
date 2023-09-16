//data test
const arrayBill = [125, 555, 44]
//fuction calcTip
const calcTip = (price) => {
    if (price >= 50 && price <= 300)
        return price * 0.15
    return price * 0.2
}
//test data = 100
console.log("test: " + calcTip(100))

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