function Clock(){
    this.current_date = new Date();
    this.hours = this.current_date.getHours();
    this.minutes = this.current_date.getMinutes();
    this.seconds = this.current_date.getSeconds();

}
Clock.prototype.run = function(){
    setInterval(this.update.bind(this), 1000);
};

Clock.prototype.update = function(){
    this.updateTime(1);
    console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};

Clock.prototype.updateTime = function(secs){
    this.seconds+=secs;
    if(this.seconds>=60){
        this.minutes++;
        this.seconds=0;
    }
    if(this.minutes>=60)
    {
        this.hours++;
        this.minutes;
    }
    if(this.hours>=24){
        this.hours = 0;
    }
    
};
var clock = new Clock();
    clock.run();
