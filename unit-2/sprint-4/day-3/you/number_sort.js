let numbers = [0, 1 , 2, 30, 10, 25, 40, 30 ];
let asc=numbers.sort(function(a,b){
      return a-b
})
console.log(asc)

let desc=numbers.sort(function(a,b){
    return b-a
})
console.log(desc)