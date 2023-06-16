let employees = [
    {
        firstName: 'john',
        lastName: 'doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'ana',
        lastName: 'rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'zion',
        lastName: 'albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];

let asc=employees.sort(function(a,b){
    if(a.firstName>b.firstName) return 1
    if(a.firstName<b.firstName) return -1
    return 0

})
console.log(asc)

let dsc=employees.sort(function(a,b){
    if(a.firstName>b.firstName) return -1
    if(a.firstName<b.firstName) return 1
    return 0

})
console.log(dsc)

let age_asc=employees.sort(function(a,b){
    return a.age-b.age
})
console.log(age_asc)

let age_dsc=employees.sort(function(a,b){
    return b.age-a.age
})
console.log(age_dsc)