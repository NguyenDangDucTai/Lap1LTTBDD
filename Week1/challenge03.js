//date test
const dolphins1 = [96, 108, 89]
const dolphins2 = [97, 112, 101]
const koalas1 = [88, 91, 110]
const koalas2 = [109, 95, 123]
const koalas3 = [109, 95, 106]
//Trung binh
const avg = (scores) => {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i]
    }
    return sum / scores.length
}

//gan mau test
function tinhdiem(dolphinsscore, koalasscore) {
    let avgdolphins = avg(dolphinsscore)
    let avgkoalas = avg(koalasscore)
//
    if (avgdolphins > avgkoalas && avgdolphins >= 100) {
        console.log("Dolphins winner!!")
    } else if (avgdolphins < avgkoalas && avgkoalas >= 100) {
        console.log("Koalas winner!!")
    } else if (avgdolphins >= 100 && avgkoalas >= 100) {
        console.log("Draw!!")
    } else
        console.log("No team win!!")
}

tinhdiem(dolphins1, koalas1)
tinhdiem(dolphins2, koalas2)
tinhdiem(dolphins2, koalas3)