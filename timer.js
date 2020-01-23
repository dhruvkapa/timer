// On start: Timer Values
var minutes = 25;
var seconds = 59;


var label = document.getElementById("label");

var timer = setInterval((time) => {
    seconds -= 1;
    var label = document.getElementById("label");
    label.innerHTML = minutes + ':' + seconds;
    if (minutes == 0 && seconds == 0){
        clearInterval(timer);
        minutes = 0;
        seconds = 0;
        label.innerHTML = minutes + ':' + seconds;
    } else if (seconds == 0){
        minutes -=1;
        seconds = 59;
        label.innerHTML = minutes + ':' + seconds;
    };
    if(seconds < 10){
        label.innerHTML = minutes + ':0' + seconds 
    }
}, 1000);

var start = document.getElementById("start");
start.addEventListener("click", function(){
    var stop = document.getElementById("stop");
    var timer = setInterval((time) => {
        
    seconds -= 1;
    
    var label = document.getElementById("label");
    label.innerHTML = minutes + ':' + seconds;
    
    if (label.innerHTML == 0){
        clearInterval(timer);
    }
    if (stop.addEventListener("click", function(){
        clearInterval(timer);
    }));

    if (reset.addEventListener("click", function(){
        clearInterval(timer);
    }));

    
    
}, 1000);
});

var stop = document.getElementById("stop")
stop.addEventListener("click", function(){
    clearInterval(timer);
    label.innerHTML = minutes + ':' + seconds;
});


var reset = document.getElementById("reset")
reset.addEventListener("click", function(){
    minutes = 25;
    seconds = 59;
    label.innerHTML = minutes + ':' + seconds;
});


function setInputMinutes(){
    var inputMinutes = document.getElementById("minutes");
    minutes = inputMinutes.value;  
    label.innerHTML = minutes + ':' + seconds;
    if(inputMinutes.value == ""){
        alert("Please enter a number");
        minutes = 25;
    } 
    //if input value is string 
    inputMinutes.value = "";

};

function setInputSeconds(){
    var inputSeconds = document.getElementById("seconds");
    seconds = inputSeconds.value;
    label.innerHTML = minutes + ':' + seconds;
    
    if(inputSeconds.value == ""){
        alert("Please enter a number");
        seconds = 59;
    } else if (inputSeconds.value > 60){
        alert("Not a valid seconds value")
        seconds = 60;
    }
    inputSeconds.value = "";
    // if(inputSeconds.value < 10){
    //     label.innerHTML = minutes + ':0' + seconds;
    // } else if(seconds == 0){
    //     minutes -= 1;
    //     seconds = 59;
    //     label.innerHTML = minutes + ':' + seconds;
    // }
}
