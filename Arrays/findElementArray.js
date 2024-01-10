const students = ["João", "Juliana", "Ana", "Caio"];
const averanges = [10, 8, 7.5, 9];

const arrayStudentsAndAverage = [students, averanges];

function findStudentAndNote(student){
    if (arrayStudentsAndAverage[0].includes(student)){
        const [students, averanges] = arrayStudentsAndAverage;

        const index =students.indexOf(student); //.indexOf
        
        const averangeStudent = averanges[index];

        console.log(`the student ${student} have averenge of ${averangeStudent}`)  ;
    } else{
        console.log("Not Find");
    }
}

findStudentAndNote("João");
findStudentAndNote("Ana");