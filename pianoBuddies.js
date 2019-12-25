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
       
        var counter=0;
        for(i=0;i<52;i++){
            var keyDiv=document.createElement('div');
            var audio=document.createElement('AUDIO');
            audio.setAttribute('src','keys/'+(i+1)+'.mp3') 
            audio.setAttribute('id','a'+i);
            keyDiv.append(audio);
            keyDiv.id=i;

            keyDiv.className='whiteKey';

            keyDiv.addEventListener(
                "touchstart",
                function(e) {
                    this.firstChild.play();
                    this.style.boxShadow="inset 0 0 20px 0px #000000";
                },
                false
            );
            keyDiv.addEventListener(
                "touchend",
                function(e) {
                
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
                    e.preventDefault();
                },
                false
            );    
            keyboard.appendChild(keyDiv);    
        }
        var position=63;
        for(i=52;i<88;i++){
            var keyDiv=document.createElement('div');
            var audio=document.createElement('AUDIO');
            audio.setAttribute('src','keys/'+(i+1)+'.mp3') 
            audio.setAttribute('id','a'+i);
            keyDiv.append(audio);
            keyDiv.id=i;
            keyDiv.className='blackKey';
            if(i==52){
                console.log('position');
                keyDiv.style.left=position+'px';
                position=position+212;
            }
            else if(counter<2){
                
                keyDiv.style.left=position+'px';
                position=position+106;
                //position=position+110;
                counter++;
                }
            else{
                    if(counter==2){
                    position=position+106;
                }
                
                keyDiv.style.left=position+'px';
                position=position+106;
                counter++;
            }
            if(counter==5){
                counter=0;
                position=position+106;
            }
            console.log(counter);
            console.log(position);
            keyDiv.addEventListener(
                "touchstart",
                function(e) {
                    this.firstChild.play();
                    this.style.boxShadow="inset 0 0 20px 0px #000000";
                },
                false
            );
            keyDiv.addEventListener(
                "touchend",
                function(e) {
                
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