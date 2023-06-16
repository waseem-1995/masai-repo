let data = [
    { name: "John", subject: "Javascript" },
    { name: "John", subject: "HTML" },
    { name: "John", subject: "CSS" },
    { name: "Pete", subject: "Java" },
    { name: "Pete", subject: "English" },
    { name: "Pete", subject: "Maths" },
    { name: "Mary", subject: "Rust" },
    { name: "Mary", subject: "Elm" },
  ]
  
  let h;
  let subjectHash = data.reduce((acc, item) => {
    // iteration 1 - acc: {}
    // iteration 1 - item: { name: "John", subject: "Javascript" }
  if(acc[item.name]===undefined)
    acc[item.name]=[item.subject]
    else{
        h=acc[item.name];
        h.push(item.subject)
        acc[item.name]=h
    }
    return acc;
  }, {})
  
  console.log(subjectHash);
  /*
  Expected output:
  {
    John: ["Javascript", "HTML", "CSS"],
    Pete: ["Java", "English", "Maths"],
    Mary: ["Rust", "Elm"]
  }
  */
  
  