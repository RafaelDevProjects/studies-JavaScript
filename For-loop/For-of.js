const grades = [10, 6.5, 8, 7.5];

let sumGrades = 0;

for (let grade of grades){ //For-of 
    console.log(grade);
    sumGrades += grade;
}

const average = sumGrades / grades.length;

console.log(`the average grade is ${average}.`)