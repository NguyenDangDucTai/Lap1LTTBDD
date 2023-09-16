//data
const data1 = [17, 21, 23]
const data2 = [12, 5, -5, 0, 4]

//fuction
function printForecast(data) {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i] + "oC in " + (i + 1))
    }
}

printForecast(data1)
console.log("-----------------")
printForecast(data2)



