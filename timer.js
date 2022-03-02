const timer = document.querySelector('#timer'),
playbtn = document.querySelector('.play-btn'),
resetbtn = document.querySelector('.reset-btn');
let icon  = document.querySelector('.timer-controls i');
let seccircle = document.querySelector('.sec-circle');
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;
playbtn.addEventListener('click', playpauseTimer);
resetbtn.addEventListener('click',resetTimer);
function playpauseTimer(){
    if(stoptime == true) {
        stoptime = false;
        timercycle();
        icon.setAttribute("class","fa fa-pause-circle-o");
    }
    else{
        stoptime = true;
        icon.setAttribute("class", "fa fa-play-circle");
    }
}
function resetTimer() {
    timer.innerHTML = "00:00:00";
    stoptime = true;
    hr = 0;
    min = 0;
    sec = 0;
}
setInterval(function() {
    seccircle.getElementsByClassName.transform = `rotate(${6*sec} deg)`
}, 1000);
function timercycle() {
    if(stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        sec = sec + 1;
        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
        if(min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        if(sec < 10 || sec == 0){
            sec = '0' + sec;
        }
        if(min < 10 || min == 0){
            min = '0' + min;
        }
        if(hr < 10 || hr == 0){
            hr = '0' + hr;
        }
        timer.innerHTML = hr + ':' + min + ':' + sec;
        setTimeout("timercycle()" , 1000);
    }
}