let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];
let asc=animals.sort();

console.log(asc);

let dsc=animals.sort(function(a,b){
    if (a > b)
        return -1;
    if (a < b)
        return 1;
    return 0;
})
console.log(dsc)