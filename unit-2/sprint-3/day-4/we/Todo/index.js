document.querySelector("form").addEventListener("submit",todo)
let count=0
function todo(event){
 event.preventDefault();
 let task_item=document.querySelector("#task").value
 let prior=document.querySelector("#priority").value
 let row=document.createElement("tr")
 let td1=document.createElement("td")
   td1.innerText=task_item;
   let td2=document.createElement("td");
   td2.innerText=prior;
   if (prior=="High"){
      td2.style.background="red"
   }else{
    td2.style.background="green"
   }
   let td3=document.createElement("td")
     td3.innerText="Delete"
     td3.style.cursor="pointer"
     td3.addEventListener("click",deletetodo)
     row.append(td1,td2,td3)
     document.querySelector("tbody").append(row)
     count++
     document.querySelector("#total").innerText=count
}

   function deletetodo(event){
    event.target.parentNode.remove();
    count--
    document.querySelector("#total").innerText=count
   }