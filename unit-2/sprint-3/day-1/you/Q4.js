//Given an array of strings print the sum of lengths if the characters in the string are odd
//Sample Input - ["A", "Good", "Problem"]
//Sample Output - 8
let arr=["A", "Good", "Problem"]
let odd=function(ele){
    return ele.length%2==1
}
let res=arr.filter(odd).reduce(function(acc,ele){
    return acc+ele.length
},0)

console.log(res)  