// Given an array of numbers print the product of all numbers

//Sample Input - [2,3,4] Sample Output - 24
let arr=[2,3,4]
let combine=function(acc,el){
    return acc * el;
};
let res= arr.reduce(combine,1);
console.log(res)