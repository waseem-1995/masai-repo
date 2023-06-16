// Write code for the Progress page here 
let tbody=document.querySelector("tbody");
let LSData=JSON.parse(localStorage.getItem("priority-list"))||[]


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
        addToLs("done-list",element)
        Delete(LSData,index)
     
    })

      tr.append(name,desc,start,end,priority,Add)
      tbody.append(tr)
    })
  }
  
  DisplayTable(LSData)



function addToLs(key,value){
    let newLSdata=JSON.parse(localStorage.getItem(key))||[]
    newLSdata.push(value);
    localStorage.setItem(key,JSON.stringify(newLSdata));
}

function Delete(data,index){
    LSData=data.filter(function(el,i){
        return i!=index;
    })
    localStorage.setItem("priority-list",JSON.stringify(LSData));
    DisplayTable(LSData)
}
  