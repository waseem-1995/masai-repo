//Given an array of numbers find the sum of odd elements Sample Input - [1, 2, 3, 4] Sample Output - 4
arr=[1, 2, 3, 4]
get_odd= function(ele){
    return ele % 2==1;
}
let res=arr.filter(get_odd).reduce(function(acc,ele){
  return acc+ele
})
console.log(res)
 