let tbody=document.querySelector("tbody");
let LSData=JSON.parse(localStorage.getItem("buy-list"))||[];

function DisplayTable(data){
    tbody.innerHTML=null

    data.forEach(function(element,index){
        let tr=document.createElement("tr");

        let name=document.createElement("td");
        name.innerText=element.name;

        let author=document.createElement("td");
        author.innerText=element.author

        let desc=document.createElement("td");
        desc.innerText=element.desc;

        let date=document.createElement("td");
        date.innerText=element.date

        let category=document.createElement("td");
        category.innerText=element.category;

        
        let price=document.createElement("td");
        price.innerText=element.price

        tr.append(name,author,desc,date,category,price);
        tbody.append(tr)
        
    })
}
DisplayTable(LSData)