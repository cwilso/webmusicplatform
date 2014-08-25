var LoadAudioFile=function() {
    this.xhr;
};

LoadAudioFile.prototype={
    loadBuffer: function(url, pfunc) {
        this.xhr=new XMLHttpRequest();
        console.log(this.xhr);
        this.xhr.open("GET", url, true);
        this.xhr.responseType="arraybuffer";
        
        var self=this;
        this.xhr.onload=function() {
            self.audioContext.decodeAudioData(
                self.xhr.response,
                function(buffer) {
                    self.source.buffer=buffer;
                    self.source.loop=false;
                    self.source.start(0);
                },
                function(msg) {
                    console.log("ERROR: ", msg);
                }
            );
        };
        var self=this;
        console.log(pfunc);
        this.xhr.onprogress=function(event){
            var prog=Math.round(100*event.loaded/event.total);
            pfunc(prog);
        };
        this.xhr.onerror=function() {
            console.log("ERROR: XHR");
        };
        this.xhr.send();
    },
    loadSoundCloud: function(audio) {
        this.source=this.audioContext.createMediaElementSource(audio);
        this.source.connect(this.audioContext.destination);
        this.source.mediaElement.play();
    },
    onProgress: function(event){
        console.info("[loadAudioFile.js] ", event.loaded, event.total);
    }

};

