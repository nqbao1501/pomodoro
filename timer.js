//var for btn
const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

//var for time
let counter = 1;
let startingSecond = 0;
let pomoMinutes = 1;
let breakMinutes = 5;
let seconds = startingSecond;
let minutes = pomoMinutes;

//var for leading 0
let leadingSecond = 0;
let leadingMinute = 0;
let leadingStartingSecond = 0;
let leadingPomoMinutes = 0;
let leadingBreakMinutes = 0;

//var for switching between pomoMode and breakMode
let pomoFlag = true;
let timerStatus = "stopped";

function playAlarm()
{
    let alarm = new Audio("https://github.com/nqbao1501/pomodoro/blob/main/radar.mp3")
    alarm.play();
}
//timer function
function timer()
{
    
    if (seconds === 0)
    {
        seconds = 60;
        minutes -- ;
    }
    seconds --;

    if (seconds < 10)
    {
        leadingSecond = '0' + seconds.toString();
    }
    else
    {
        leadingSecond = seconds;
    }
    if (minutes < 10)
    {
        leadingMinute = '0' + minutes.toString();
    }
    else
    {
        leadingMinute = minutes;
    }
    let displayTimer = document.querySelector('#timer').innerText = 
    leadingMinute + ":" + leadingSecond;
}
//displaying time things
function displayTimeAtStartForPomo() 
{
    if (startingSecond < 10)
    {
        leadingStartingSecond = '0' + startingSecond.toString();
    }
    else
    {
        leadingStartingSecond = startingSecond;
    }
    if (pomoMinutes < 10)
    {
        leadingPomoMinutes = '0' + pomoMinutes.toString();
    }
    else
    {
        leadingPomoMinutes = pomoMinutes;
    }
    document.querySelector('#timer').innerText = 
    leadingPomoMinutes + ":" + leadingStartingSecond;
}
function displayTimeAtStartForBreak()
{
    if (startingSecond < 10)
    {
        leadingStartingSecond = '0' + startingSecond.toString();
    }
    else
    {
        leadingStartingSecond = startingSecond;
    }
    if (breakMinutes < 10)
    {
        leadingBreakMinutes = '0' + breakMinutes.toString();
    }
    else
    {
        leadingBreakMinutes = breakMinutes;
    }
    document.querySelector('#timer').innerText = 
    leadingBreakMinutes + ":" + leadingStartingSecond;
}
//switching between Pomomode and Break mode
function pomoBreak()
{
    if (seconds == 0 && minutes == 0)
    {
        if (pomoFlag == true)
        {
            playAlarm();
            document.getElementById("activity").innerHTML = "break";
            seconds = startingSecond;
            minutes = breakMinutes;
            pomoFlag = false;
            window.clearInterval(timerInterval);
            document.getElementById("startStopBtn").innerHTML = "start";
            timerStatus = "stopped";

            displayTimeAtStartForBreak();
        }
        else
        {
            playAlarm();
            document.getElementById("activity").innerHTML = "pomodoro";
            document.getElementById("counter").innerHTML = counter + 1;
            seconds = startingSecond;
            minutes = pomoMinutes;
            pomoFlag = true;
            window.clearInterval(timerInterval);
            document.getElementById("startStopBtn").innerHTML = "start";
            timerStatus = "stopped";   

            displayTimeAtStartForPomo();
        }
    }
}
window.setInterval(pomoBreak,1000);

startStopBtn.addEventListener("click",function()
{
    if (timerStatus === "stopped")
    {
        timerInterval = window.setInterval(timer,1000);
        document.getElementById("startStopBtn").innerHTML = "pause";
        timerStatus = "running";
    }
    else
    {
        window.clearInterval(timerInterval);
        document.getElementById("startStopBtn").innerHTML = "start";
        timerStatus = "stopped";

    }
})

resetBtn.addEventListener("click",function()
{
    if (pomoFlag === true)
    {
        seconds = startingSecond;
        minutes = pomoMinutes;
        displayTimeAtStartForPomo();
        window.clearInterval(timerInterval);
        document.getElementById("startStopBtn").innerHTML = "start";
        timerStatus = "stopped";
    }
    else
    {
        seconds = startingSecond;
        minutes = breakMinutes;
        displayTimeAtStartForBreak();
        window.clearInterval(timerInterval);
        document.getElementById("startStopBtn").innerHTML = "start";
        timerStatus = "stopped";

    }
})
