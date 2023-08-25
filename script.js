console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));
console.log(masterPlay);

let songs = [
  {
    songName: "Khaabon Ke Parinday",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Dhokha Dhadi",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Halka Halka",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  { songName: "Excuses", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
  {
    songName: "Jeet - Ritviz",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  { songName: "Kaise Hua", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
  {
    songName: "Ek Jindari",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Jaan 'Nisaar",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Shubhaarambh",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
  
];

songItem.forEach((element, i) => {
  // console.log(element,i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

// makeItStop = () => {
//   Array.from(document.getElementsByClassName("songItemPlay")).forEach(
//     (element) => {
//       element.classList.toggle("fa-circle-play"); // Toggle play and pause classes
//       element.classList.toggle("fa-circle-pause");

//       if (element.classList.contains("fa-circle-pause")) {
//         audioElement.play();
//         masterPlay.classList.remove("fa-circle-play");
//         masterPlay.classList.add("fa-circle-pause");
//       } else {
//         audioElement.pause();
//         masterPlay.classList.remove("fa-circle-pause");
//         masterPlay.classList.add("fa-circle-play");
//       }
//     }
//   );
// };

// Array.from(document.getElementsByClassName("songItemPlay")).forEach(
//   (element) => {
//     element.addEventListener("click", (e) => {
//       makeAllPlays();
//       songIndex = parseInt(e.target.id);
//       console.log(songIndex);
//       e.target.classList.remove("fa-circle-play");
//       e.target.classList.add("fa-circle-pause");
//       audioElement.src = `songs/${songIndex + 1}.mp3`;
//       if (element.classList.contains("fa-circle-pause")) {
//         // Pause the audio
//         audioElement.pause();
//         gif.style.opacity = 0;
//         masterPlay.classList.remove("fa-circle-pause");
//         masterPlay.classList.add("fa-circle-play");
//       } else {
//         // Play the audio
//         audioElement.play();
//         gif.style.opacity = 1;
//         masterPlay.classList.remove("fa-circle-play");
//         masterPlay.classList.add("fa-circle-pause");
//       }

//       // Toggle play and pause classes for the clicked button
//       element.classList.toggle("fa-circle-play");
//       element.classList.toggle("fa-circle-pause");

//       document.getElementById("bottomSongName").innerText =
//         songs[songIndex].songName;
//     });
//   }
// );

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
  element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        console.log(songIndex);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        i = 0
        console.log(document.body.getElementsById(`div${i++}`))

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

        document.getElementById("bottomSongName").innerText = songs[songIndex].songName;
    })
})

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 8) {
    songIndex = 0;
    // audioElement.src = `songs/${songIndex+1}.mp3`;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");

  document.getElementById("bottomSongName").innerText =
    songs[songIndex].songName;
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");

  document.getElementById("bottomSongName").innerText =
    songs[songIndex].songName;
});
