// const videoCardContainer = document.querySelector('.video-container');

// let api_key = "your api key";
// let video_http = "https://www.googleapis.com/youtube/v3/videos?";
// let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

// fetch(video_http + new URLSearchParams({
//     key: api_key,
//     part: 'snippet',
//     chart: 'mostPopular',
//     maxResults: 50,
//     regionCode: 'IN'
// }))
// .then(res => res.json())
// .then(data => {
//     data.items.forEach(item => {
//         getChannelIcon(item);
//     })
// })
// .catch(err => console.log(err));

// const getChannelIcon = (video_data) => {
//     fetch(channel_http + new URLSearchParams({
//         key: api_key,
//         part: 'snippet',
//         id: video_data.snippet.channelId
//     }))
//     .then(res => res.json())
//     .then(data => {
//         video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
//         makeVideoCard(video_data);
//     })
// }

// const makeVideoCard = (data) => {
//     videoCardContainer.innerHTML += `
//     <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
//         <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
//         <div class="content">
//             <img src="${data.channelThumbnail}" class="channel-icon" alt="">
//             <div class="info">
//                 <h4 class="title">${data.snippet.title}</h4>
//                 <p class="channel-name">${data.snippet.channelTitle}</p>
//             </div>
//         </div>
//     </div>
//     `;
// }

// // search bar

// const searchInput = document.querySelector('.search-bar');
// const searchBtn = document.querySelector('.search-btn');
// let searchLink = "https://www.youtube.com/results?search_query=";

// searchBtn.addEventListener('click', () => {
//     if(searchInput.value.length){
//         location.href = searchLink + searchInput.value;
//     }
// })


const API_KEY=`AIzaSyD8VAzGuy1iOxIhFtzLu1Ehk9uMjsTVcYg`

const searchVideos=async () =>{
    try{
        const query=document.getElementById("query").value;
       const res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=%20snippet&maxResults=35&q=${query}&key=${API_KEY}`)
        const data=await res.json();
        const actual_data=data.items
        appendVideos(actual_data)
        console.log(data)
    }catch(error){
        console.log(error,"error")
    }
 

};

const appendVideos=(data) =>{
    const container_div=document.getElementById("container")
    container_div.innerHTML=null;
  data.forEach(({snippet,id})=>{
   
    const title=snippet.title
    //console.log(title)
    const videoId=id.videoId;
    
    const thumbnail=snippet.thumbnails.high.url
    const channel_name=snippet.channelTitle

    const div=document.createElement("div")
    const image=document.createElement("img")
    image.src=thumbnail;

   const title_html=document.createElement("h4")
   title_html.innerText=title

   const channel_html=document.createElement("h4")
   channel_html.innerText=channel_name

   // console.log("el:",el)

   div.append(image,title_html,channel_html)
   container_div.append(div)
  });
}