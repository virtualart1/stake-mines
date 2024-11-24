// Start of code for bet Money

let totalMoney = document.getElementById('totalMoney');
let betMoney;

function calcTotalMoneyBet(betMoney){
    let amount = totalMoney.value - betMoney;
    amount = Math.round(amount*100)/100 ;
    totalMoney.value = amount ;
}

function calcTotalMoneyCashout(betMoney){
    let amount = parseFloat(totalMoney.value) + multiplier(1,1)*parseFloat(betMoney);
    
    amount = Math.round(amount*100)/100 ;
    totalMoney.value = amount ;
}

function betAmountMax(){
    betMoney = document.getElementById('betMoney');
    betMoney.setAttribute('max',parseFloat(totalMoney.value));
}

setInterval(() => {
    let totalMoney = document.getElementById('totalMoney');
    let betMoney = document.getElementById('betMoney');
    if(parseFloat(betMoney.value) > parseFloat(totalMoney.value)){
        betMoney.value = totalMoney.value ;
    }
    else if(parseFloat(betMoney.value) < 0){
        betMoney.value = 0.00 ;
    }
    else{}
},100);


// End of code for bet Money

// Function for returning multiplier starts here...

let multiplier = (mine,diamond) => {
    return mine + diamond ;
}

// multiplier code ends here...

const resetBtn = document.getElementById('resetBtn');
const boxCon = document.querySelector('.boxCon');
const betBtn = document.getElementById('betBtn');
let randomArr = new Array();
let x;

let bombSound = new Audio('bombSound.wav');
let diamondSound = new Audio('diamondSound.wav');
let clickSound = new Audio('clickSound.wav');

resetBtn.style.display = 'none';

// Select Dropdown starts here...
        const select = document.getElementById('mines');
            for(let i=1;i<=24;i++){
                const option = document.createElement('option');
                option.value = i;
                option.text = i;
                select.appendChild(option);
            }
// select dropdown ends here...



function resetBoxStyles() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.backgroundImage = 'none';
        box.style.backgroundColor = '#324457';
        box.style.boxShadow = 'inset 0px -8px #213344';
        box.classList.add("boxHover");
        box.disabled = false;
        box.classList.remove('boxAnimation', 'bgAnimation', 'boxRevealed');
    });
}
function resetBoxStylesCashout() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.backgroundImage = 'none';
        box.style.backgroundColor = '#324457';
        box.style.boxShadow = 'inset 0px -8px #213344';
        box.classList.remove("boxHover");
        box.disabled = true;
        box.classList.remove('boxAnimation', 'bgAnimation', 'boxRevealed');
    });
}


for(let i=1; i<=25; i++){
    var box = document.createElement('button');
    box.classList.add("box","boxHover");
    box.setAttribute("id", 'b'+i);
    boxCon.appendChild(box);
}



betBtn.addEventListener('click', (e) =>{
    e.preventDefault;
    let mines = document.getElementById('mines');
    let noOfMines = mines.value;
    x = noOfMines;
    initializeGame(x);
    clickSound.play();
    betBtn.style.display = 'none';
    resetBtn.style.display = 'block';
    select.disabled = true;
    resetBtn.disabled = true;

    betMoney = document.getElementById('betMoney');
    calcTotalMoneyBet(betMoney.value);
    betMoney.disabled = true;
});


function initializeGame(x){

    resetBoxStyles();
let boxes = document.querySelectorAll('.box');

randomArr = [];
let j = 1;
while(j<=x){
    let n = Math.round(Math.random()*24 +1);
    let isInArray = randomArr.includes('b'+n);
    if(isInArray){
     continue;
    }
    else{
        randomArr.push('b'+n);
        j++ ;
    }
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        let clickId = box.id ;
        let idInArray = randomArr.includes(clickId);
        box.classList.add('boxAnimation');
        setTimeout(()=>{
            box.classList.add('bgAnimation');
            if(idInArray){
            box.style.backgroundImage = "url('bomb.png')";
            box.style.backgroundColor = "#0b1727";
            box.style.boxShadow = 'none';
            box.classList.remove("boxHover");
            bombSound.play();
            box.disabled = true;
            revealBoxes();
            }
            else{
            box.style.backgroundImage = "url('diamond.png')";
            box.style.backgroundColor = "#0b1727";
            box.style.boxShadow = 'none';
            box.classList.remove("boxHover");
            diamondSound.play();
            box.disabled = true;
            resetBtn.disabled = false;
            resetBtn.innerText = 'Cashout';
            }
        },700);
        
    });
});

function turn(z){
    let box = document.getElementById('b'+z);
    let boxId = box.id;
    let idInArray = randomArr.includes(boxId);
if(box.disabled){

}
else{
    box.classList.add('boxRevealed');
    if(idInArray){
        box.style.backgroundImage = "url('bomb.png')";
        box.style.backgroundColor = "#0b1727";
        box.style.boxShadow = 'none';
        box.classList.remove("boxHover");
        box.disabled = true;
    }
    else{
        box.style.backgroundImage = "url('diamond.png')";
        box.style.backgroundColor = "#0b1727";
        box.style.boxShadow = 'none';
        box.classList.remove("boxHover");
        box.disabled = true;
    }
}
}

function revealBoxes(){
    for(let z=1; z<=25;z++){
        setTimeout(turn(z),2000);
    }
    resetBtn.style.display = 'none';
    betBtn.style.display = 'block';
    select.disabled = false;
    // resetBtn.innerText = 'Reset';
}


}

// initializeGame();

resetBtn.addEventListener('click',(e) => {
    e.preventDefault;
    resetBoxStylesCashout();
    clickSound.play();
    resetBtn.style.display = 'none';
    betBtn.style.display = 'block';
    select.disabled = false;

    betMoney = document.getElementById('betMoney');
    calcTotalMoneyCashout(betMoney.value);
    betMoney.disabled = false ;
});