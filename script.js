const bubblelog=()=>{
    let button = " ";
    var number = 0;
    for(var i = 0; i<=170; i++){
        number = Math.floor(Math.random()*10);
        button +=`<div class="bubble">${number}</div>`
    }
    document.querySelector("#bottom").innerHTML = button;
}

var timer = 15;
const runTimer = () => {
    const time = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").innerHTML = timer;
        } else {
            clearInterval(time);
            document.querySelector("#bottom").innerHTML = `
                <h1>Game Over Bro!</h1> <br>
                <h2 style="color: yellow;">Your Score: ${score}</h2>
                 <div style="display: flex; gap: 10px;"><h2 style="font-size: 30px; color: #000;">Timer- </h2><input type="range" id="timerRange" step="5" min="0" max="120" value="25">
                 <span id="timersec" style="font-size: 25px; color: blue;"></span></div>
                <button id="resetb" style="font-size: 20px; padding: 5px 13px; font-weight: 700; border-radius: 3px; border: none; background-color: rgb(255, 255, 255); color: rgb(255, 0, 0);">Try Again</button>`;
                 const updateTimerSec = () => {
                    const timerRange = document.getElementById("timerRange");
                    const timerSec = document.getElementById("timersec");
                    timerSec.innerHTML = `${timerRange.value} Sec`;
                    };
                document.getElementById("timerRange").addEventListener("input", updateTimerSec);
                updateTimerSec();
            document.querySelector("#resetb").addEventListener("click", reset);
        }
    }, 1000);
};


var hitNum = 0;
const hitTime = () =>{
    const hit = "";
    hitNum = Math.floor(Math.random()*10);
    document.querySelector("#hit").innerHTML = hitNum;   
}


let score = 0;
const increaseScore=()=>{
    score +=5;
    document.querySelector("#score").innerHTML =score;
}
    document.querySelector("#bottom").addEventListener("click", function(data){   
        var clickNumber = Number(data.target.textContent); 
        
        if(clickNumber === hitNum){
            increaseScore();
            hitTime();
            bubblelog();
        }
    })

const reset=()=>{
    score = 0;
    timer = parseInt(document.getElementById("timerRange").value, 10);
    hitNum = 0;
    bubblelog();
    runTimer();
    hitTime();
}

bubblelog();
runTimer();
hitTime();
