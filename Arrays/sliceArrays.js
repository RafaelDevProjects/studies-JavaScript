const students = [
    'João',
    'Ana',
    'leo',
    'Carlos',
    'Jake',
    'Rafael',
    'Phineas',
    'Ferb',
    'Mario',
    'Luigi'
]

console.log(students)

classRoom1 = students.slice(0, students.length / 2) //slice Array
classRoom2 = students.slice(students.length/2)

console.log(classRoom1)
console.log(classRoom2)