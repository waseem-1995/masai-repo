let LSData=JSON.parse(localStorage.getItem("book-list"))||[];
let tbody=document.querySelector("tbody");

let filter=document.getElementById("filter")
document.querySelector("#book-count").innerText = LSData.length;

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

        let Buy=document.createElement("td");
        Buy.innerText="Buy";
        Buy.style.background="red"
        Buy.addEventListener("click",function(){
            addToLS("buy-list",element)
            Delete(LSData,index)
        })

        let Add=document.createElement("td");
        Add.innerText="Add";
        Add.style.background="green"
        Add.addEventListener("click",function(){
            addToLS("bookmark-list",element)
            Delete(LSData,index)
        })

        let price=document.createElement("td");
        price.innerText=element.price

        tr.append(name,author,desc,date,category,Buy,Add,price);
        tbody.append(tr)
        
    })
}
DisplayTable(LSData)

filter.addEventListener("change",function(){
    if (filter.value==="all"){
        DisplayTable(LSData)
    }else{
        let filterdata=LSData.filter(function(el){
            return el.category===filter.value
        })
        DisplayTable(filterdata)
    }
})

function addToLS(key,value){
    let newLSdata=JSON.parse(localStorage.getItem(key))||[]
    newLSdata.push(value);
    localStorage.setItem(key,JSON.stringify(newLSdata));
}

function Delete(data,index){
    LSData=data.filter(function(el,i){
        return i!=index
    })
    localStorage.setItem("book-list",JSON.stringify(LSData));
    DisplayTable(LSData)
}