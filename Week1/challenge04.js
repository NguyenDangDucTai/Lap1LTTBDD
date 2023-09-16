//data
let bill1 = 275
let bill2 = 40
let bill3 = 430

//fuction
function totalbill(price) {
    if (price >= 50 && price <= 300) {
        return price + price * 0.15
    } else
        return price + price * 0.2
}

//run
console.log("Tong hoa don la: " + totalbill(bill1))
console.log("Tong hoa don la: " + totalbill(bill2))
console.log("Tong hoa don la: " + totalbill(bill3))