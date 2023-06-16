let id;
async function searchMovies(){
    try{
        let query=document.getElementById("query").value;
        let res= await fetch(`http://www.omdbapi.com/?apikey=bec1065b&s=${query}`);
        let data=await res.json();
        console.log(data)
        let actual_data=data.Search;
        appendMovies(actual_data)
    }catch(err){
        console.log("error")
    }
}

//constructor function for fet details
function constructor(Title,Poster,Year){
  this.Title=Title;
  this.Poster=Poster;
  this.Year=Year;
}
//to push data of get details in local storage we create arr and push data into it
let arr=JSON.parse(localStorage.getItem("details"))||[]






function appendMovies(data){
    let data_div=document.getElementById("movies")//movies in search.html page to append
    data_div.innerHTML=null;

    data.forEach(function(el){
        let div=document.createElement("div");
        let p_name=document.createElement("p")
        p_name.innerHTML=`Name:${el.Title}`;

        let p_rating=document.createElement("p");
        p_rating.innerHTML=`Year:${el.Year}`;

        let img=document.createElement("img");
        img.id="poster"
        img.src=el.Poster

        let button=document.createElement("button");
        button.innerHTML="get details"
        button.addEventListener("click",function(){
            let obj=new constructor(el.Title,el.Poster,el.Year);
            arr.push(obj)
            localStorage.setItem("details",JSON.stringify(arr))

        })

        div.append(img,p_name,p_rating,button);
        data_div.append(div)
    })
}

///debouncing

async function search(){
    try{
        let query=document.getElementById("query").value;
        let res= await fetch(`http://www.omdbapi.com/?apikey=bec1065b&s=${query}`);
        let data=await res.json();
        console.log(data)
        let actual_data=data.Search;
        appendMovies(actual_data)
    }catch(err){
        console.log("error",err)
    }
}


function debouncing(func,delay){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(function(){
        func();
    },delay);
}
