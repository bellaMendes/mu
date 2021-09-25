let previous=document.querySelector("#pre");
let play=document.querySelector("#play");
let next=document.querySelector("#next");
let title=document.querySelector("#title");
let recent_volume=document.querySelector("#volume");
let volume_show=document.querySelector("#volume_show");
let slider=document.querySelector("#duration_slider");
let show_duration=document.querySelector("#show_duration");
let track_image=document.querySelector("#track_image");
let auto_play=document.querySelector("#auto");
let present=document.querySelector("#present");
let total=document.querySelector("#total");
let artist=document.querySelector("#artist");
let volicon=document.querySelector("#volume_icon");
let thumb=document.querySelector(".thumb");

let timer;
let autoplay=0;
let index_no=0;
let playing_song=false;
let track=document.createElement('audio');
let All_song=[
    {
        name:"Lover",
        path:"lover.mp3",
        img:"lv4.jpg",
        singer:"Taylor Swift"
    },
    {
        name:"Blank Space",
        path:"blank space.mp3",
        img:"bs3.jpg",
        singer:"Taylor Swift"
    },
    {
        name:"Red",
        path:"red.mp3",
        img:"r3.jpg",
        singer:"Taylor Swift"
    },
    {
        name:"Delicate",
        path:"delicate.mp3",
        img:"delicateTS.png",
        singer:"Taylor Swift"
    },
    {
        name:"Love Story",
        path:"love story.mp3",
        img:"ls2.jpg",
        singer:"Taylor Swift"
    }

];

function load_track(index_no)
{
    clearInterval(timer);
    reset_slider();
    track.src=All_song[index_no].path;
    title.innerHTML=All_song[index_no].name;
    track_image.src=All_song[index_no].img;
    artist.innerHTML=All_song[index_no].singer;
    track.load();

    total.innerHTML=All_song.length;
    present.innerHTML=index_no+1;
    timer=setInterval(range_silder , 1000);
}
load_track(index_no);

function mute_sound(){
    track.volume=0;
    volume.value=0;
    volume_show.innerHTML=0;
}

function reset_slider(){
    slider.value=0;
}
let bg;
function justplay(){
    if(playing_song==false){
        playsong();
        
    }
    else{
        pausesong();
       
    }
    }
 function playsong(){
     track.play();
     playing_song=true;
     play.innerHTML='<i class="fa fa-pause"></i>';
 }
 function pausesong(){
     track.pause();
     playing_song=false;
     play.innerHTML='<i class="fa fa-play"></i>';
 }
 let m=document.querySelector(".main");
 if(index_no==0)
 {
    m.style.backgroundColor="#f876de";
    m.style.backgroundImage="linear-gradient(315deg, #f876de 0%, #b9d1eb 74%)";
    title.style.color="#795f9b";
    artist.style.color="#62246d";
    auto_play.style.color="#795f9b";
    volume_show.style.color="#795f9b";
    logo.style.color="#795f9b";
    present.style.color="#795f9b";
    total.style.color="#795f9b";
    play.style.backgroundColor="#a568a5";
    volicon.style.backgroundColor="#a568a5";
    thumb.style.backgroundColor="#a568a5";
    


 }

 function next_song(){
      if(index_no<All_song.length-1){
          index_no+=1;
          if(index_no==1)
          {
            m.style.backgroundColor="#a55c1b";
            m.style.backgroundImage="linear-gradient(315deg, #a55c1b 0%, #000000 74%)";
            title.style.color="rgb(239,198,123)";
            artist.style.color="rgb(239,198,123)";
            auto_play.style.color="rgb(239,198,123)";
            volume_show.style.color="rgb(239,198,123)";
            logo.style.color="rgb(239,198,123)";
            present.style.color="rgb(239,198,123)";
            total.style.color="rgb(239,198,123)";
            play.style.backgroundColor="rgb(173,111,62)";
            volicon.style.backgroundColor="rgb(173,111,62)";

            
          }
         else if(index_no==2)
          {
            m.style.backgroundColor="#3f0d12";
            m.style.backgroundImage="linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)";
            title.style.color="rgb(242,181,181)";
            artist.style.color="rgb(242,181,181)";
            auto_play.style.color="rgb(242,181,181)";
            volume_show.style.color="rgb(242,181,181)";
            logo.style.color="rgb(242,181,181)";
            present.style.color="rgb(242,181,181)";
            total.style.color="rgb(242,181,181)";
            play.style.backgroundColor="rgb(242,181,181)";
            volicon.style.backgroundColor="rgb(242,181,181)";

          }
         else if(index_no==3)
          {
            m.style.backgroundColor="#05e8ba";
            m.style.backgroundImage="linear-gradient(315deg, #05e8ba 0%, #087ee1 74%)";
            title.style.color="rgb(157,250,255)";
            artist.style.color="rgb(157,250,255)";
            auto_play.style.color="rgb(157,250,255)";
            volume_show.style.color="rgb(157,250,255)";
            logo.style.color="rgb(157,250,255)";
            present.style.color="rgb(157,250,255)";
            total.style.color="rgb(157,250,255)";
            play.style.backgroundColor="rgb(157,250,255)";
            volicon.style.backgroundColor="rgb(157,250,255)";
          }
         else if(index_no==4)
          {
            m.style.backgroundColor="#f5df2e";
            m.style.backgroundImage="linear-gradient(315deg, #f5df2e 0%, #f07654 74%)";
            title.style.color="rgb(200,79,22)";
            artist.style.color="rgb(200,79,22)";
            auto_play.style.color="rgb(200,79,22)";
            volume_show.style.color="rgb(200,79,22)";
            logo.style.color="rgb(200,79,22)";
            present.style.color="rgb(200,79,22)";
            total.style.color="rgb(200,79,22)";
            play.style.backgroundColor="rgb(200,79,22)";
            volicon.style.backgroundColor="rgb(200,79,22)";
          }
          load_track(index_no);
          playsong();
      }
      else{
          index_no=0;
          m.style.backgroundColor="#f876de";
          m.style.backgroundImage="linear-gradient(315deg, #f876de 0%, #b9d1eb 74%)"
          m.style.backgroundColor="#f876de";
          m.style.backgroundImage="linear-gradient(315deg, #f876de 0%, #b9d1eb 74%)";
          title.style.color="#795f9b";
          artist.style.color="#62246d";
          auto_play.style.color="#795f9b";
          volume_show.style.color="#795f9b";
          logo.style.color="#795f9b";
          present.style.color="#795f9b";
          total.style.color="#795f9b";
          play.style.backgroundColor="#a568a5";
          volicon.style.backgroundColor="#a568a5";
          thumb.style.backgroundColor="#a568a5";
          load_track(index_no);
          playsong();
      }
      
 }

 function previous_song(){
    if(index_no>0){
        index_no-=1;
        load_track(index_no);
        playsong();

        if(index_no==1)
          {
            m.style.backgroundColor="#a55c1b";
            m.style.backgroundImage="linear-gradient(315deg, #a55c1b 0%, #000000 74%)";
            title.style.color="rgb(239,198,123)";
            artist.style.color="rgb(239,198,123)";
            auto_play.style.color="rgb(239,198,123)";
            volume_show.style.color="rgb(239,198,123)";
            logo.style.color="rgb(239,198,123)";
            present.style.color="rgb(239,198,123)";
            total.style.color="rgb(239,198,123)";
            play.style.backgroundColor="rgb(173,111,62)";
            volicon.style.backgroundColor="rgb(173,111,62)";
          }
         else if(index_no==2)
          {
            m.style.backgroundColor="#3f0d12";
            m.style.backgroundImage="linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)";
            title.style.color="rgb(242,181,181)";
            artist.style.color="rgb(242,181,181)";
            auto_play.style.color="rgb(242,181,181)";
            volume_show.style.color="rgb(242,181,181)";
            logo.style.color="rgb(242,181,181)";
            present.style.color="rgb(242,181,181)";
            total.style.color="rgb(242,181,181)";
            play.style.backgroundColor="rgb(242,181,181)";
            volicon.style.backgroundColor="rgb(242,181,181)";
          }
         else if(index_no==3)
          {
            m.style.backgroundColor="#05e8ba";
            m.style.backgroundImage="linear-gradient(315deg, #05e8ba 0%, #087ee1 74%)";
            title.style.color="rgb(157,250,255)";
            artist.style.color="rgb(157,250,255)";
            auto_play.style.color="rgb(157,250,255)";
            volume_show.style.color="rgb(157,250,255)";
            logo.style.color="rgb(157,250,255)";
            present.style.color="rgb(157,250,255)";
            total.style.color="rgb(157,250,255)";
            play.style.backgroundColor="rgb(157,250,255)";
            volicon.style.backgroundColor="rgb(157,250,255)";
          }
         else if(index_no==4)
          {
            m.style.backgroundColor="#f5df2e";
            m.style.backgroundImage="linear-gradient(315deg, #f5df2e 0%, #f07654 74%)";
            title.style.color="rgb(200,79,22)";
            artist.style.color="rgb(200,79,22)";
            auto_play.style.color="rgb(200,79,22)";
            volume_show.style.color="rgb(200,79,22)";
            logo.style.color="rgb(200,79,22)";
            present.style.color="rgb(200,79,22)";
            total.style.color="rgb(200,79,22)";
            play.style.backgroundColor="rgb(200,79,22)";
            volicon.style.backgroundColor="rgb(200,79,22)";
          }
         else if(index_no==0)
          {
            m.style.backgroundColor="#f876de";
            m.style.backgroundImage="linear-gradient(315deg, #f876de 0%, #b9d1eb 74%)";
            m.style.backgroundColor="#f876de";
            m.style.backgroundImage="linear-gradient(315deg, #f876de 0%, #b9d1eb 74%)";
            title.style.color="#795f9b";
            artist.style.color="#62246d";
            auto_play.style.color="#795f9b";
            volume_show.style.color="#795f9b";
            logo.style.color="#795f9b";
            present.style.color="#795f9b";
            total.style.color="#795f9b";
            play.style.backgroundColor="#a568a5";
            volicon.style.backgroundColor="#a568a5";
            thumb.style.backgroundColor="#a568a5";
          }


    }
    else{
        index_no=All_song.length;
        load_track(index_no);
        playsong();
    }
    
}

function volume_change(){
    volume_show.innerHTML=recent_volume.value;
    track.volume=recent_volume.value/ 100;
}

function change_duration(){
    slider_position=track.duration*(slider.value / 100);
    track.currentTime=slider_position;

}

function autoplay_switch(){
    if(autoplay==1)
    {
        autoplay=0;
        auto_play.style.background="rgba(255, 255, 255, 0.2)";
    }
    else{
        autoplay=1;
        auto_play.style.background="#FF8A65";
    }
}
function range_silder(){
    let position=0;
    if(!isNaN(track.duration)){
        position=track.currentTime*(100/ track.duration);
        slider.value=position;
    }
    if(track.ended){
        play.innerHTML='<i class="fa fa-play"></i>';
        if(autoplay==1){
            index_no+=1;
            load_track(index_no);
            playsong();
        }
    }
}

