//Given an array of numbers extract the numbers which are odd

//Sample Input - [1,2,3] Sample Output - [1,3]

let arr= [1,2,3]
get_odd= function(ele){
    return ele % 2==1;
}
let res=arr.filter(get_odd);
console.log(res)