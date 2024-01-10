const grades = [7, 9, 7, 8, 9];

const newGrades = [...grades]; //We do this so the new notes are not interconnected with the other variable note, if we just made an equals sign any change I made in one matrix would happen in the other too

newGrades.push(10);

console.log(grades);
console.log(newGrades);


//Directly assigning one array to another with the = sign makes JavaScript understand that it is as if they were the same array. To avoid this behavior, we must create an entirely new array, with the help of the spread operator ... (or spread operator).