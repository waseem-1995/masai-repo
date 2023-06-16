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

        div.append(img,p_name,p_rating);
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
