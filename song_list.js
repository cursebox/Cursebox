//song list
let All_song = [
   {
     name: "Ayoko Pa - Alex Bruce ft. Cursebox",
     path: "music/1.mp3",
     img: "images/1.jpg",
     singer: "Produced by Cursebox"
   },
   {
     name: "Atin - Ex Battalion",
     path: "music/2.mp3",
     img: "images/2.jpg",
     singer: "Produced by Cursebox"
   },
   {
     name: "Coke Studio | Ngayon Gabi - Nik Makino ft. ALAMAT",
     path: "music/3.mp3",
     img: "images/3.jpg",
     singer: "Produced by Cursebox"
   },
   {
     name: "Penduko OST - ALAMAT",
     path: "music/4.mp3",
     img: "images/4.jpg",
     singer: "Produced by Cursebox"
   },
   {
     name: "Jusko - Karencitta ft. Skusta Clee",
     path: "music/5.mp3",
     img: "images/5.jpg",
     singer: "Produced by Cursebox"
   },
   {
    name: "Do It - Elha Nympha",
    path: "music/6.mp3",
    img: "images/6.jpg",
    singer: "Produced by Cursebox"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/