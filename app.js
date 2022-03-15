addToP1Button = document.querySelector('#addToP1');
addToP2Button = document.querySelector('#addToP2');
resetButton = document.querySelector('#reset');
score1 = document.querySelector('#score1');
score2 = document.querySelector('#score2');

function reset() {
    score1.innerText = 0;
    score2.innerText = 0;
    score1.classList.remove('has-text-success');
    score1.classList.remove('has-text-danger');
    score2.classList.remove('has-text-success');
    score2.classList.remove('has-text-danger');
    addToP1. disabled = false;
    addToP2.disabled = false;
};
resetButton.addEventListener('click', function(){reset()});

function win(wScore, lScore) {
    wScore.classList.add('has-text-success');
    lScore.classList.add('has-text-danger');
    addToP1. disabled = true;
    addToP2.disabled = true;
};

function changeMax() {
    reset();
    temp = document.querySelector("#maxScore");
    maxScore=temp.options[temp.selectedIndex].value;
};
window.onload = changeMax();

addToP1Button.addEventListener('click', function () {
    value = parseInt(score1.innerText);
    if (value == maxScore-1){
        win(score1,score2)
    }
    score1.innerText = value + 1;
});

addToP2Button.addEventListener('click', function () {
    value = parseInt(score2.innerText);
    if (value == maxScore-1){
        win(score2,score1)
    }
    score2.innerText = value + 1;
    
});