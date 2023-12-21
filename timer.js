//var for btn
const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

//var for time
let counter = 1;
let startingSecond = 0;
let pomoMinutes = 25;
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

//play alarm fuction
let alarmAudio = "radar.mp3"
let alarm = new Audio(alarmAudio);

function playAlarm()
{
    
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

//-----------------Modal section-------------------
    //tao bien
    let openBtn = document.getElementById('settingBtn');
    let closeBtn = document.getElementById('close-btn');
    let modalContainer = document.getElementById('modal-container');
    //event listener
    openBtn.addEventListener('click',function(){
        modalContainer.style.display = 'block';

    });
    closeBtn.addEventListener('click',function(){
        modalContainer.style.display = 'none';
            })

//----------------Background select---------------//

let backgroundSelect = document.querySelector("#background-select");
backgroundSelect.addEventListener("change",function()
{
    backgroundValue = backgroundSelect.options[backgroundSelect.selectedIndex].value;
    switch(backgroundValue)
    {
        case 'cherry-blossom':
            document.documentElement.style.setProperty('--background-var', 'url("https://cdn.discordapp.com/attachments/583999246198374421/1185258329489035344/backiee-70124-landscape.jpg?ex=658ef4d6&is=657c7fd6&hm=b8213de0a1d266ac41fa37f8077f775a844d60d7d014f3b46415fce64490e444&")');
            break;
        case 'city-at-night':
            document.documentElement.style.setProperty('--background-var', 'url("https://cdn.discordapp.com/attachments/583999246198374421/1187300046757171200/214234.png?ex=65966256&is=6583ed56&hm=7f7fad1a5f527cc384caef61d382023afd3e1efbbab17de3d190c602b90a47d6&")'); 
            break;
        case 'autumn-leaves':
            document.documentElement.style.setProperty('--background-var', 'url("https://media.discordapp.net/attachments/583999246198374421/1187300458205823056/negative-space-assorted-fall-leaves.jpg?ex=659662b8&is=6583edb8&hm=918ee36f8701ddad506694abaa2bb458e71e28f5ea890ae5faa18e00cee66b8d&=&format=webp&width=717&height=478")');
            break;
        default:
            document.documentElement.style.setProperty('--background-var', 'url("https://cdn.discordapp.com/attachments/583999246198374421/1185258329489035344/backiee-70124-landscape.jpg?ex=658ef4d6&is=657c7fd6&hm=b8213de0a1d266ac41fa37f8077f775a844d60d7d014f3b46415fce64490e444&")');
            break;
    }
})
//---------------Alarm select------------------------//

let alarmSelect = document.querySelector("#alarm-select");
alarmSelect.addEventListener("change",function()
{
    alarmValue = alarmSelect.options[alarmSelect.selectedIndex].value;
    switch(alarmValue)
    {
        case 'radar':
            alarmAudio = "radar.mp3";
            alarm = new Audio(alarmAudio);
            playAlarm();
            break;
        case 'beep-beep':
            alarmAudio = "beep-beep-6151.mp3";
            alarm = new Audio(alarmAudio);
            playAlarm();
            break;
        case 'alarm-clock':
            alarmAudio = "clock-alarm-8761.mp3";
            alarm = new Audio(alarmAudio);
            playAlarm();
            break;
        case 'electronic-alarm-clock':
            alarmAudio = "electronic-alarm-clock-151927.mp3";
            alarm = new Audio(alarmAudio);
            playAlarm();
            break;
        case 'notification': 
            alarmAudio = "simple-notification-152054.mp3";
            alarm = new Audio(alarmAudio);
            playAlarm();
            break;
    }
}
)
//-----------Volume---------------------------//
let volumeSelect = document.querySelector('#volume');
volumeSelect.addEventListener('change',function(){
    volumeValue = volumeSelect.value;
    alarm.volume = volumeValue;
    playAlarm();
})
//Change timer

let pomoSelect = document.querySelector("#pomodoro-timer");
let breakSelect = document.querySelector("#break-timer")
const timerElement = document.getElementById('timer');


pomoSelect.addEventListener('change',function(){
    pomoMinutes = pomoSelect.value;
    if (pomoMinutes < 10)
    {
        timerElement.innerHTML = "0" + pomoMinutes + ":00";
    }
    else
    {
        timerElement.innerHTML = pomoMinutes + ":00";
    }
    var event = new CustomEvent('click');
    resetBtn.dispatchEvent(event);
})
breakSelect.addEventListener('change',function(){
    breakMinutes = breakSelect.value;
    if (breakMinutes < 10)
    {
        timerElement.innerHTML = "0" + breakMinutes + ":00";
    }
    else
    {
        timerElement.innerHTML = breakMinutes + ":00";
    }
    var event = new CustomEvent('click');
    resetBtn.dispatchEvent(event);
})

