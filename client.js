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
        var that = this;
        var counter=0;
        this.socket = io.connect();
        this.socket.on('connect', function() {
            
        });
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
                    that.socket.emit('playNote', this.id);
                },
                false
            );
            keyDiv.addEventListener(
                "touchend",
                function(e) {
                that.socket.emit('stopPlaying', this.id);
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
            
                keyDiv.style.left=position+'px';
                position=position+212;
            }
            else if(counter<2){
                
                keyDiv.style.left=position+'px';
                position=position+106;

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
            keyDiv.addEventListener(
                "touchstart",
                function(e) {
                    this.firstChild.play();
                    this.style.boxShadow="inset 0 0 20px 0px #000000";
                    that.socket.emit('playNote', this.id);
                },
                false
            );
            keyDiv.addEventListener(
                "touchend",
                function(e) {
                that.socket.emit('stopPlaying', this.id);
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
        this.socket.on('buddiesNote', function(note) {

            document.getElementById(note).firstChild.play();
        });
        this.socket.on('buddiesStop', function(note) {
    
            document.getElementById(note).firstChild.pause();
            document.getElementById(note).firstChild.currentTime = 0; 
        });
    }
    
};
/*
window.addEventListener("orientationchange", function() {
    // Announce the new orientation number
    //alert(screen.orientation);
    
}, false);
*/