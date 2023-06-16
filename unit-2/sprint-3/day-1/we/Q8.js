let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];

  let res=users.filter(function(ele){
    return ele.place=== "Banglore"
  }).map(function(ele){
    return ele.firstName+ " " +ele.lastName
  })
  console.log(res)