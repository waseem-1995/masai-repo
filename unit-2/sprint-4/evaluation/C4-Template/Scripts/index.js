
let LSData=JSON.parse(localStorage.getItem("book-list"))||[]
let form=document.querySelector("form");
form.addEventListener("submit",function(e){
    e.preventDefault();

    let obj={
        name:form.name.value,
        author:form.author.value,
        desc:form.desc.value,
        date:form.added.value,
        category:form.category.value,
        price:form.price.value,
    }
    LSData.push(obj);
    localStorage.setItem("book-list",JSON.stringify(LSData));
})