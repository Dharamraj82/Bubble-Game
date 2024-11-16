const bubblelog=()=>{
    let button = " ";
    var number = 0;
    for(var i = 0; i<=274; i++){
        number = Math.floor(Math.random()*10);
        button +=`<div class="bubble">${number}</div>`
    }
    document.querySelector("#bottom").innerHTML = button;
}

var timer = 60;
const runTimer=()=>{
   const time = setInterval(()=>{
        if(timer > 0){
            timer--;
            document.querySelector("#timer").innerHTML = timer;   
        }
        else{
            clearInterval(time);
            document.querySelector("#bottom").innerHTML = `<h1>Game Over Bro!</h1> 
             <h2 style="color: yellow;">Your Score: ${score}</h2>`;
        }
    }, 1000)
} 


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

bubblelog();
runTimer();
hitTime();