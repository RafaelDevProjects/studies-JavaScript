const names = ["Evaldo", "Mari", "Camis"]


names.forEach(function (name){ //callback
    console.log(name)
})

names.forEach((name) => console.log(name)); //Arrow function

function printname(name){
    console.log(name)
}

names.forEach(printname) // callback