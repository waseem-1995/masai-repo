//Given an array of numbers generate an array containing the double value of the numbers

//Sample Input [1, 2] Sample Output [2, 4]
let arr=[1,2]
let sq=function(ele){
    return ele*2
}
let output=arr.map(sq)
  

console.log(output)