 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.

 function onYouTubeIframeAPIReady() {
  //  html에 있는 id가 player인 놈을 찾음. 
   new YT.Player('player', {
     videoId: 'An6LvWQuj_8',//최초 재생할 유투브 영상 ID
     playerVars: {
       autoplay:true,
       loop:true,
       playlist:'An6LvWQuj_8' //반복 재생할 유투브 영상 ID 목록
        // 강사님 github 가면 playerVars에 대한 link가 있음 
     },
     events:{ //ready가 되면 자동으로 실행되는듯?
       onReady: function(event){
        event.target.mute(); //음소거 
       }
     }
   });
 }

 // 4. The API will call this function when the video player is ready.
 function onPlayerReady(event) {
   event.target.playVideo();
 }

 // 5. The API calls this function when the player's state changes.
 //    The function indicates that when playing a video (state=1),
 //    the player should play for six seconds and then stop.
 var done = false;
 function onPlayerStateChange(event) {
   if (event.data == YT.PlayerState.PLAYING && !done) {
     setTimeout(stopVideo, 6000);
     done = true;
   }
 }
 function stopVideo() {
   player.stopVideo();
 }