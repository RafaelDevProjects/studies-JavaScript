const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8 , 9, 5, 6,];
const classPython = [7, 3.5, 8, 9.5];

function calcAverenge(classGrades){
    const sumGrades = classGrades.reduce((acc, grade) => {
        return acc + grade // acc = acumulator
    }, 0)

    const average = sumGrades / classGrades.length;
    
    return average
}

console.log(calcAverenge(salaJS));