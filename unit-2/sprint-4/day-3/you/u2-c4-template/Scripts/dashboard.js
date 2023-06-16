// Write code related to dashboard page here
let LSData=JSON.parse(localStorage.getItem("task-list")) ||[]
let tbody=document.querySelector("tbody")

let filter=document.getElementById("filter")

document.querySelector("#task-count").innerText = LSData.length;

function DisplayTable(data){
  tbody.innerHTML=null;
  data.forEach(function(element,index){
    let tr=document.createElement("tr")

    let name=document.createElement("td")
    name.innerText=element.name;

    let desc=document.createElement("td")
    desc.innerText=element.desc;

    let start =document.createElement("td")
    start.innerText=element. start;

    let end =document.createElement("td")
    end.innerText=element.end;
 
    let priority=document.createElement("td")
    priority.innerText=element.priority;

    let Add=document.createElement("td");
    Add.innerText="Add"
    Add.addEventListener("click",function(){
        addToLs("priority-list",element)
        Delete(LSData,index)
     
    })

    tr.append(name,desc,start,end,priority,Add)
    tbody.append(tr)
  })
}

DisplayTable(LSData)

filter.addEventListener("change",function(){
    if (filter.value==="all"){
        DisplayTable(LSData)
    }else{
        let filterdata=LSData.filter(function(el){
            return el.priority===filter.value
        })
        DisplayTable(filterdata)
    }
})

function addToLs(key,value){
    let newLSdata=JSON.parse(localStorage.getItem(key))||[]
    newLSdata.push(value);
    localStorage.setItem(key,JSON.stringify(newLSdata));
}

function Delete(data,index){
    LSData=data.filter(function(el,i){
        return i!=index;
    })
    localStorage.setItem("task-list",JSON.stringify(LSData));
    DisplayTable(LSData)
}