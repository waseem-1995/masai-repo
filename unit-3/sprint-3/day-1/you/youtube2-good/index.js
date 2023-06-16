//search programe
//https://youtube.googleapis.com/youtube/v3/search?part=%20snippet&q=rrr&key=[AIzaSyD8VAzGuy1iOxIhFtzLu1Ehk9uMjsTVcYg] HTTP/1.1

const API_KEY=`AIzaSyD8VAzGuy1iOxIhFtzLu1Ehk9uMjsTVcYg`

const searchVideos=async () =>{
    try{
        let inp=document.getElementById("search").value;
       let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${inp}&key=${API_KEY}&type=video&maxResults=30&part=%20snippet&order=viewCount&videoEmbeddable=true`)
        let data=await res.json();
        let array_of_videos=data.items
        appendVideos(array_of_videos)
        console.log(data)
    }catch(error){
        console.log(error,"error")
    }
 

};
const appendVideos=(arr) =>{
    let search_results_div=document.getElementById("container")
    search_results_div.innerHTML=null;
    
    arr.forEach(({snippet,id:{videoId}})=>{
   
     let url=snippet.thumbnails.medium.url
     let title=snippet.title;
     let channel_title=snippet.channelTitle
     //console.log(title)
   
    
    

     let div=document.createElement("div")
     let img=document.createElement("img")
     img.src=url;

     let name=document.createElement("h4")
     name.innerText=title;

     let c_name=document.createElement("h5")
     c_name.innerText=channel_title

     let data={snippet,videoId};



        // console.log("el:",el)

        div.onclick=()=>{
        
         //console.log(title)
         //move video from index.js to video.js
         storeClickedvideo(data)
       }

       div.append(img,name,c_name)
       search_results_div.append(div)
    });
}



function storeClickedvideo(data){
    localStorage.setItem("clicked_item",JSON.stringify(data))
    window.location.href="video.html";
}