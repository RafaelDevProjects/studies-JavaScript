const names = [
    'João',
    'Ana', // del that name and add alan in the place
    'leo', // del that name and add alan in the place
    'Carlos',
    'Jake',
    'Rafael',
    'Phineas',
    'Ferb',
    'Mario',
    'Luigi'
]

names.splice(1, 2, 'Alan') // splice will del ana and leo, and push alan in the place

console.log(names)