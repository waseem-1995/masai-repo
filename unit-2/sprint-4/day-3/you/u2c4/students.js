
let LSData=JSON.parse(localStorage.getItem("admission")) || []//6
let tbody=document.querySelector("tbody")//1

// filter is id given in select tag
let filter=document.getElementById("filter")//7

//passing LSData in displayTable as   "data"
function DisplayTable(data){ //2
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

        let accept=document.createElement("td");//4
        accept.innerText="Accept";
        accept.addEventListener("click",function(){ //11
         //calling addTols which is declared earlier 
           // "admission-accepted" is key given in question
            addToLS("admission-accepted",element);
            Delete(LSData,index) //13
        })

        let reject=document.createElement("td");//5
        reject.innerText="Reject";
        reject.addEventListener("click",function(){ //10
            addToLS("admission-rejected",element);
            Delete(LSData,index) //14
        })

        tr.append(name,email,course,gender,phone,accept,reject);
        tbody.append(tr);
    })

}
// calling function ----6
DisplayTable(LSData)//6

//code for filter
filter.addEventListener("change",function(){ //8
    if(filter.value==="all"){
        DisplayTable(LSData)
    }else{
        let filterdData=LSData.filter(function(el){
            return el.course===filter.value;
        })
        DisplayTable(filterdData)
    }
});

//key of the LS
//value to be addede for accept and reject
function addToLS(key,value){ //9
    let newLsData=JSON.parse(localStorage.getItem(key)) ||[]
    newLsData.push(value);
    localStorage.setItem(key,JSON.stringify(newLsData));

}

function Delete(data,index){ //12
    LSData=data.filter(function(el,i){
        return i!=index;
     })
     localStorage.setItem("admission",JSON.stringify(LSData));
     DisplayTable(LSData);
}