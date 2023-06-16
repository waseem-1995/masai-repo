//Given an array of string generate an array whose first or last character is a
//Sample Input - ["assignment", "problem", "media", "upload"]
//Sample Output - ["assignment", "media"]
let arr=["assignment", "problem", "media", "upload"]

let x= (function(ele){
    return (ele[0]==="a") || (ele[ele.length-1]==="a")
})
let res=arr.filter(x);
console.log(res)
