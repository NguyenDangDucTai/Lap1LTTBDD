//1
const test1 = {massMark: 78, heightMark: 1.69, massJohn: 92, heightJohn: 1.95}
const test2 = {massMark: 95, heightMark: 1.88, massJohn: 85, heightJohn: 1.76}
let markHigherBMI = false;

//2
function bmi1(test) {
    const bmiMark = test.massMark / Math.pow(test.heightMark, 2);
    const bmiJohn = test.massJohn / Math.pow(test.heightJohn, 2);
    console.log('Chỉ số bmi của Mark là: ' + bmiMark + "\n" +
        'Chỉ số bmi của John là: ' + bmiJohn);
    if (bmiMark > bmiJohn) {
        markHigherBMI = true;
    } else (
        markHigherBMI = false
    )
    if (markHigherBMI) {
        console.log('BMI của Mark(' + bmiMark + ') cao hơn John(' + bmiJohn + ')');
    } else {
        console.log('BMI của John(' + bmiJohn + ') cao hơn Mark(' + bmiMark + ')')
    }
}

function bmi2(test) {
    const bmiMark = test.massMark / (test.heightMark * test.heightMark)
    const bmiJohn = test.massJohn / (test.heightJohn * test.heightJohn);
    console.log('Chỉ số bmi của Mark là: ' + bmiMark + "\n" +
        'Chỉ số bmi của John là: ' + bmiJohn);
    if (bmiMark > bmiJohn) {
        markHigherBMI = true;
    } else (
        markHigherBMI = false
    )
    if (markHigherBMI) {
        console.log('BMI của Mark(' + bmiMark + ') cao hơn John(' + bmiJohn + ')');
    } else {
        console.log('BMI của John(' + bmiJohn + ') cao hơn Mark(' + bmiMark + ')')
    }
}

//3

//test data
console.log('Cách 1');
bmi1(test1)
bmi1(test2)
console.log('Cách 2');
bmi2(test1)
bmi2(test2)