
let tbody=document.querySelector("tbody");
let LSData=JSON.parse(localStorage.getItem("admission-rejected")) || []

function DisplayTable(data){ 
    tbody.innerHTML=null;

    data.forEach(function(element,index){ //3
        let tr=document.createElement("tr");

        let name=document.createElement("td");
        name.innerText=element.name;

        let email=document.createElement("td");
        email.innerText=element.email;

        let course=document.createElement("td");
        course.innerText=element.course;

        let gender=document.createElement("td");
        gender.innerText=element.gender;

        let phone=document.createElement("td");
        phone.innerText=element.phone;

        tr.append(name,email,course,gender,phone);
        tbody.append(tr);
    })

}

DisplayTable(LSData)