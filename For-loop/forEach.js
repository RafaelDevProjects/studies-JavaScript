const grades = [10, 6.5, 8, 7.5];
let sumGrades = 0

grades.forEach(function (grade){ //forEach number in array, this metod runs the anonymous function
    console.log(grade);
    sumGrades += grade;
});

const average = sumGrades / grades.length;

console.log(`the average grade is ${average}.`)