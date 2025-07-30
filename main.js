var minutes = 25;
var seconds = "00";

var click = new Audio("essential_thinking_113.wav");
var bell = new Audio("mbutibow.mp3")


function template(){
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function start(){
    click.play();

    minutes = 24;
    seconds = 59;

    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    var minutes_interval = setInterval(minutesTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);
    //the SetInterval function is predefined in javascript and i am using it to count every 60,000 milliseconds and every 1,000 milliseconds.

    function minutesTimer(){
        minutes = minutes - 1;
        document.getElementById("minutes").innerHTML = minutes;
    }

    function secondsTimer(){
        seconds = seconds - 1;
        document.getElementById("seconds").innerHTML = seconds;

        if(seconds <= 57){
            if(minutes <= 24){
                //a function in a function! if the seconds are 0 and the minutes are 0 too, u gotta do the STUFF
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

                document.getElementById("done").innerHTML = 
                "Session Completed! take a break bestie <3"

                document.getElementById("done").classList.add("show_message");
                bell.play();
            }
            seconds = 60
        }
    }


}

//add input fields - the session time and the break time