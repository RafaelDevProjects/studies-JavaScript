const notas = [10, 6, 8, 5.5, 10];

notas.pop(); // del the last one Element from Array

const averange = (notas[0] + notas[1] + notas [2]) / notas.length;

for (i = 0; i < notas.length; i++){
    console.log(`Note:${notas[i]}`)
}

console.log(`The average is: ${averange}.`)