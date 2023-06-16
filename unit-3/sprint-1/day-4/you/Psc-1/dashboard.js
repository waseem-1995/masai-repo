 function append(){
    let data=JSON.parse(localStorage.getItem("students"))||[];
    let container=document.getElementById("container");
    container.innerHTML=null;

    data.forEach(function(el,index){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let p=document.createElement("p");
        p.innerText=el.name;
        let course=document.createElement("p");
        course.innerText=el.course;
        let batch=document.createElement("p")
        batch.innerText=el.batch;

        let btn=document.createElement("button");
        btn.innerText="REMOVE"
        btn.addEventListener("click",function(){
            remove(index)
        });
        div.append(img,p,course,batch,btn)
        container.append(div)

    })
 }
 append();  //calling function

 function remove(index){
    let data=JSON.parse(localStorage.getItem("students"))||[];
    let newData=data.filter(function(el,i){
        if(i==index){
            let trash=JSON.parse(localStorage.getItem("trash"))||[]
            trash.push(el);

            localStorage.setItem("trash",JSON.stringify(trash));
        }else{
            return i !== index;
        }
    })
    localStorage.setItem("students",JSON.stringify(newData));
    append();
 }
