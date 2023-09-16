//data test
const dolphins1 = [44, 23, 71]
const dolphins2 = [85, 54, 41]
const koalas1 = [65, 54, 49]
const koalas2 = [23, 34, 27]
//avg
const calcAverage = (scores) => {
    let sum = 0
    for (let i = 0; i < scores.length; i++)
        sum += scores[i]
    return sum / scores.length
}

//check winner
function checkWinner(dolphinscore, koalascore) {
    let avgdolphin = calcAverage(dolphinscore)
    let avgkoala = calcAverage(koalascore)
    if (avgdolphin >= avgkoala * 2)
        console.log("Dolphin win (" + avgdolphin + " vs " + avgkoala + ")")
    else if (avgkoala >= avgdolphin * 2)
        console.log("Koala win (" + avgkoala + " vs " + avgdolphin + ")")
    else
        console.log("No winner")
}

//start data
checkWinner(dolphins1, koalas1)
checkWinner(dolphins2, koalas2)

