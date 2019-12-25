window.onload=function(){
    var piano=new Keyboard();
    piano.init();
};
var Keyboard=function(){
    this.socket=null;
}
Keyboard.prototype={
    init: function(){
        var keyboard=document.getElementById('piano');
        var keyTable={};
        //var key=new Audio('keys/47.mp3');
        //var audio=document.createElement('AUDIO');
        //audio.setAttribute('src','keys/47.mp3') 
        var touchTimer;
        for(i=0;i<52;i++){
            var keyDiv=document.createElement('div');
            var audio=document.createElement('AUDIO');
            audio.setAttribute('src','keys/'+(i+1)+'.mp3') 
            audio.setAttribute('id','a'+i);
            keyDiv.append(audio);
            keyDiv.id=i;
            //keyDiv.innerHTML=i;
            keyDiv.className='whiteKey';

            keyDiv.addEventListener(
                "touchstart",
                function(e) {
                    console.log(this.id);
                    this.firstChild.play();
                    this.style.boxShadow="inset 0 0 20px 0px #000000";
                    
                    //window.setTimeout(10000);
                    
                    //this.style.backgroundColor="rgb(186, 216, 241)";
                },
                false
            );
            keyDiv.addEventListener(
                "touchend",
                function(e) {
                //alert(this.id);
                //this.firstChild.pause();
                setTimeout(this.firstChild.pause(), 2000);
                this.firstChild.currentTime = 0;  
                if(window.innerHeight > window.innerWidth){
                    this.style.boxShadow=null;
                    
                    }
                else{
                    this.style.boxShadow=null;
                    }
                },
                false
            );
            keyDiv.addEventListener(
                "touchmove",
                function(e) {
                    //console.log('hello');
                    console.log(this.offsetLeft);//e.clientX
                    e.preventDefault();
                },
                false
            );

            
        
            keyboard.appendChild(keyDiv);    
        }




    }
};
/*
window.addEventListener("orientationchange", function() {
    // Announce the new orientation number
    //alert(screen.orientation);
    
}, false);
*/