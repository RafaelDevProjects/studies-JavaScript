const students = ['Ana', 'Marcos', 'Maria', 'Mauro']
const averanges = [7, 4.5 , 8, 7.5];

const failedStudents = students.filter((_, index) => { //underline is used whe we don't want use the first variable in te function
    return averanges[index] >= 7;
})

console.log(failedStudents)