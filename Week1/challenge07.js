//data
const marksData1 = {masse: 78, height: 1.69}
const marksData2 = {masse: 95, height: 1.88}
const johnData1 = {masse: 92, height: 1.95}
const johnData2 = {masse: 85, height: 1.76}
//Tinh BMI
const bmi = (data) => {
    return data.masse / Math.pow(data.height, 2)
}
//
let markHigherBMI = (bmiMark, bmiJohn) => {
    if (bmiMark > bmiJohn)
        return true;
}
console.log(markHigherBMI(bmi(marksData1), bmi(johnData1)))
