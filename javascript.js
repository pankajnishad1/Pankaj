const arrsong = [
    {image:'assets/images/Apni_To_Jaise_Taise.jpeg',songName:'Apni To Jaise Taise',song:'assets/songs/SpotifyMate.com - Apni To Jaise Taise - With Dialogue - Kishore Kumar.mp3',singerName:'Kishore Kumar'},
    {image:'assets/images/phele_bhi_mein.jpeg',songName:'pehle bhi mein',song:'assets/songs/Pehle Bhi Main.mp3',singerName:'raj shekhar and vishal mishra'},
    {image:'assets/images/jale.jpg',songName:'jale 2',song:'assets/songs/Jale 2.mp3',singerName:'shiva choudhary'},
    {image:'assets/images/animal.jpg',songName:'animal',song:'assets/songs/Arjan Vailly Ne.mp3',singerName:'bhupinder babbal'},
    {image:'assets/images/ram.jpg',songName:'Ram siya ram',song:'assets/songs/Ram Siya Ram.mp3',singerName:'sachet tandon'},
    {image:'assets/images/Aakhir_Tumhein_Aana_Hai.jpeg',songName:'Aakhir Tumhein Aana Hai',song:'assets/songs/Aakhir Tumhein Aana Hai.mp3',singerName:' Udit Narayan '},
    {image:'assets/images/Aaye_Ho_Meri Zindagi_Mein.jpeg',songName:'Aaye Ho Meri Zindagi Mein',song:'assets/songs/Aaye Ho Meri Zindagi Mein - Male Version.mp3',singerName:' Udit Narayan '},
    {image:'assets/images/Mere_Mehboob_Qayamat_Hogi.jpeg',songName:'Mere Mehboob Qayamat Hogi',song:'assets/songs/Mere Mehboob Qayamat Hogi.mp3',singerName:'kishore kumar'},
    {image:'assets/images/Meri_Bheegi_Bheegi_Si.jpeg',songName:'Meri Bheegi Bheegi Si',song:'assets/songs/Meri Bheegi Bheegi Si.mp3',singerName:'kishore kumar'},
    {image:'assets/images/Is_Tarah_Aashiqui_ka.jpeg',songName:'Is Tarah Aashiqui ka',song:'assets/songs/Is Tarah Aashiqui Ka - Kumar Sanu Version.mp3',singerName:'Kumar Sanu '},
    {image:'assets/images/Dekhne_Walon_Ne.jpeg',songName:'Dekhne Walon Ne',song:'assets/songs/Dekhne Walon Ne - From __Chori Chori Chupke Chupke__ - Udit Narayan.mp3',singerName:'Udit Narayan'},
    {image:'assets/images/Bandook_Meri_Laila.jpeg',songName:'Bandook Meri Laila',song:'assets/songs/Bandook Meri Laila (From _A Gentleman_) (feat. Raftaar, Sidharth Malhotra).mp3',singerName:'Raftaar and Sidharth Malhotra'},
    {image:'assets/images/Asal_Mein.jpeg',songName:'Asal Mein',song:'assets/songs/Asal Mein.mp3',singerName:'darshan raval'},
    {image:'assets/images/Apa_Fer_Milaange.jpeg',songName:'Apa Fer Milaange',song:'assets/songs/Apa Fer Milaange.mp3',singerName:'savi kahlon'},
    {image:'assets/images/O_Sathi_Chal.jpeg',songName:'O Sathi Chal',song:'assets/songs/O Sathi Chal - From _Seeta Aur Geeta_.mp3',singerName:'kishore kumar and asha bhosle'},
    {image:'assets/images/Ainvayi_Ainvayi.jpeg',songName:'Ainvayi Ainvayi',song:'assets/songs/Ainvayi Ainvayi.mp3',singerName:'sunidhi and master saleem'}
];
//currmusic
const musicBackgroundImg  = document.querySelector('.music-background');
const currMusicImg = document.querySelector('.curr-music-img');
const currMusicName = document.querySelector('.curr-music-name');
const currSingerName = document.querySelector('.curr-singer');

// songslist
const AllsongsLists = document.querySelector('#songs-lists');
const musicImg = document.querySelector('.music-img');
const musicName = document.querySelector('.music-name');
const SingerName = document.querySelector('.singer');

// buttons
const likeBtn = document.querySelector('.fa-heart');
const shareBtn = document.querySelector('.fa-share');
const backwardBtn = document.querySelector('#backward-btn');
const playBtn = document.querySelector('#play-btn');
const forwardBtn = document.querySelector('#forward-btn');

let audio = new Audio;

let selectedsong = 0;

const playsong =()=>{
    playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    audio.play();
    flag = 1;
}
const stopsong =()=>{
    playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    audio.pause();
    flag = 0;
}
const likefunction = ()=>{
    if(like == 0){
        likeBtn.style.color = "red";
        likeBtn.style.scale = 1.4;
        like = 1;
    }
    else{
        likeBtn.style.color ="white";
        likeBtn.style.scale = 1;
        like = 0;
    
    }
}

const mainfunction = ()=>{
let clutter = "";
const showcards = arrsong.forEach((obj,indx)=>{
    clutter += `<div class="music-card" id="${indx}">
                    <div class="music-card-part" >
                    <img src="${obj.image}" alt="${obj.songName}image" class="music-img">
                    <p class="music-name">${obj.songName}</p>
                    <p class="singer">${obj.singerName}</p>
                    </div>
                </div>`;
    AllsongsLists.innerHTML = clutter;

    audio.src = arrsong[selectedsong].song;
    currMusicImg.src = arrsong[selectedsong].image;
    musicBackgroundImg.style.backgroundImage = `url(${arrsong[selectedsong].image})`; 
    currMusicName.innerText = arrsong[selectedsong].songName;
    currSingerName.innerText = `by ${arrsong[selectedsong].singerName}`;
    
})
}
mainfunction();


AllsongsLists.addEventListener('click',(dets)=>{
    selectedsong = dets.target.id;
    mainfunction();
    playsong();
})
let flag = 0;

const btnplayfunction = ()=>{
     if(flag==0){
        playsong();
    }
    else{
        stopsong();
    }
}
    
playBtn.addEventListener('click',()=>{
   btnplayfunction();
})

forwardBtn.addEventListener('click',()=>{
    if(selectedsong < arrsong.length-1){
        selectedsong++;
        forwardBtn.style.opacity = 1;
        backwardBtn.style.opacity = 1;
        mainfunction();
        playsong()
    }
    else{
        forwardBtn.style.opacity = .4;
        stopsong();
    }
})

backwardBtn.addEventListener('click',()=>{
    if(selectedsong > 0){
        selectedsong--;
        forwardBtn.style.opacity = 1;
        backwardBtn.style.opacity = 1;
        mainfunction();
        playsong()
    }
    else{
        backwardBtn.style.opacity = .4;
        stopsong();
    }
})

let like = 0;

 likeBtn.addEventListener('click',()=>{
    likefunction();
 })