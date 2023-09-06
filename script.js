var randomValue ;
var timer = 60;
var score = 0;
/* set a bubble value in randomly */
function makeItBubble(){
    var clutter = "";
for (let i = 1; i <= 130; i++) {

    var randomeNumber = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${randomeNumber }</div>`
    
}
document.querySelector('#pannelbottom').innerHTML = clutter;
}
makeItBubble();

/* set timer */


function runTimer(){
    var timerSave =  setInterval(function(){
        if(timer > 0){

            timer--;
            document.querySelector("#SetTimerValue").textContent = timer;
        }
        else{
            clearInterval(timerSave);
            document.querySelector("#pannelbottom").innerHTML = `<h1>Game Over</h1>`
        }
    }, 1000);
}
runTimer();

/* set a Hit value in Randomly */

function setHitValue(){
    randomValue = Math.floor(Math.random()*10);
    document.querySelector('#hitValueSet').textContent = randomValue;
}
setHitValue();

/* set a score value*/


function incraseScore(){
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}

/* set a score and hit a value change in the score  and refresh a all value but not refresh scrore*/
document.querySelector('#pannelbottom').addEventListener("click" , function(detals){
    var clickNumber = Number(detals.target.textContent);
    if(clickNumber === randomValue){
        incraseScore();
        setHitValue();
        makeItBubble();
    }
})