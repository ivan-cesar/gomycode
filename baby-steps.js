let array = process.argv;
let som =0;
for (let index = 2; index < array.length; index++) {
    som +=   Number(array[index]);
    
}

console.log(som);
