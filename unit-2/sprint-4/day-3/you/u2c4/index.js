// fisrt save data in LS having key name "admission" given  in question
let LSData=JSON.parse(localStorage.getItem("admission")) || [] //5 getitem

let form=document.querySelector("form"); //1

form.addEventListener("submit",function(e){//2
    e.preventDefault();

    let obj={
        name:form.name.value,
        email:form.email.value,
        phone:form.phone.value,
        gender:form.gender.value,
        course:form.course.value,
    }
    LSData.push(obj)//3
    localStorage.setItem("admission",JSON.stringify(LSData));//4 setitem

})
