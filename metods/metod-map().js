const grades = [10, 6.5, 8, 7.5];


const gradesAtt = grades.map((grade) => { //map() metod
    if (grade + 1 > 10){
        return grade = 10
    } else{
        return grade + 1
    }
});

console.log(gradesAtt);