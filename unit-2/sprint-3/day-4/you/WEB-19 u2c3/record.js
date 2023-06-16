// fill in javascript code here
document.querySelector("form").addEventListener("submit",record)
function record(event){
    event.preventDefault()
    let Name=document.querySelector("#name").value
    let eid=document.querySelector("#employeeID").value
    let dep =document.querySelector("#department").value
    let Experience=document.querySelector("#exp").value
    let mail=document.querySelector("#email").value
    let num=document.querySelector("#mbl").value

    let row=document.createElement("tr")

    let td1=document.createElement("td");
        td1.innerText= Name;
    let td2=document.createElement("td");
        td2.innerText= eid;
    let td3=document.createElement("td");
        td3.innerText=dep;
    let td4=document.createElement("td");
        td4.innerText=Experience;
    let td5=document.createElement("td");
        td5.innerText=mail;
    let td6=document.createElement("td");
        td6.innerText=num;
    let td7=document.createElement("td");
   
        if(Experience>5){
            td7.innerText="senior"
        }else if(Experience>=2&& Experience<=5){
            td7.innerText="junior"
        }else{
            td7.innerText="fresher"
        }
 
    let td8=document.createElement("td");
        td8.innerText="Delete"

        td8.addEventListener("click",deleterecord)

    row.append(td1,td2,td3,td4,td5,td6,td7,td8)
    document.querySelector("tbody").append(row) 
}
  
  function deleterecord(event){
      event.target.parentNode.remove();
    }