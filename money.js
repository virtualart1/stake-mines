// Start of code for bet Money

let totalMoney = document.getElementById('totalMoney');
let betMoney;
let moneyMultiplier;

function calcTotalMoneyBet(betMoney){
    let amount = totalMoney.value - betMoney;
    amount = Math.round(amount*100)/100 ;
    totalMoney.value = amount ;
}

function calcTotalMoneyCashout(betMoney){
    let amount = parseFloat(totalMoney.value) + moneyMultiplier*parseFloat(betMoney);
    
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
    console.log(mine, diamond);
    mine = Number(mine);

    switch (mine) {
        case 1:
            switch (diamond) {
                case 1:
                    return 1.03 ;
                    break;
                case 2:
                    return 1.08 ;
                    break;
                case 3:
                    return 1.12 ;
                    break;
                case 4:
                    return 1.18 ;
                    break;
                case 5:
                    return 1.24 ;
                    break;
                case 6:
                    return 1.30 ;
                    break;
                case 7:
                    return 1.37 ;
                    break;
                case 8:
                    return 1.46 ;
                    break;
                case 9:
                    return 1.55 ;
                    break;
                case 10:
                    return 1.65 ;
                    break;
                case 11:
                    return 1.77 ;
                    break;
                case 12:
                    return 1.90 ;
                    break;
                case 13:
                    return 2.06 ;
                    break;
                case 14:
                    return 2.25 ;
                    break;
                case 15:
                    return 2.47 ;
                    break;
                case 16:
                    return 1.75 ;
                    break;
                case 17:
                    return 3.09 ;
                    break;
                case 18:
                    return 3.54 ;
                    break;
                case 19:
                    return 4.12 ;
                    break;
                case 20:
                    return 4.95 ;
                    break;
                case 21:
                    return 6.19 ;
                    break;
                case 22:
                    return 8.25 ;
                    break;
                case 23:
                    return 12.38 ;
                    break;
                case 24:
                    return 24.75 ;
                    break;
                default:
                    return 2 ;
                    break;
            }
            break;
        case 2:
            switch (diamond) {
                case 1:
                    return 1.08 ;
                    break;
                case 2:
                    return 1.17 ;
                    break;
                case 3:
                    return 1.29 ;
                    break;
                case 4:
                    return 1.41 ;
                    break;
                case 5:
                    return 1.56 ;
                    break;
                case 6:
                    return 1.74 ;
                    break;
                case 7:
                    return 1.94 ;
                    break;
                case 8:
                    return 2.18 ;
                    break;
                case 9:
                    return 2.47 ;
                    break;
                case 10:
                    return 2.83 ;
                    break;
                case 11:
                    return 3.26 ;
                    break;
                case 12:
                    return 3.81 ;
                    break;
                case 13:
                    return 4.50 ;
                    break;
                case 14:
                    return 5.40 ;
                    break;
                case 15:
                    return 6.60 ;
                    break;
                case 16:
                    return 8.25 ;
                    break;
                case 17:
                    return 10.61 ;
                    break;
                case 18:
                    return 14.14 ;
                    break;
                case 19:
                    return 19.8 ;
                    break;
                case 20:
                    return 29.7 ;
                    break;
                case 21:
                    return 49.5 ;
                    break;
                case 22:
                    return 99 ;
                    break;
                case 23:
                    return 297 ;
                    break;
                default:
                    return 3 ;
                    break;
            }
            break;
        case 3:
            switch (diamond) {
                case 1:
                    return 1.12 ;
                    break;
                case 2:
                    return 1.29 ;
                    break;
                case 3:
                    return 1.48 ;
                    break;
                case 4:
                    return 1.71 ;
                    break;
                case 5:
                    return 2 ;
                    break;
                case 6:
                    return 2.35 ;
                    break;
                case 7:
                    return 2.79 ;
                    break;
                case 8:
                    return 3.35 ;
                    break;
                case 9:
                    return 2.47 ;
                    break;
                case 10:
                    return 2.83 ;
                    break;
                case 11:
                    return 3.26 ;
                    break;
                case 12:
                    return 3.81 ;
                    break;
                case 13:
                    return 4.50 ;
                    break;
                case 14:
                    return 5.40 ;
                    break;
                case 15:
                    return 6.60 ;
                    break;
                case 16:
                    return 8.25 ;
                    break;
                case 17:
                    return 10.61 ;
                    break;
                case 18:
                    return 14.14 ;
                    break;
                case 19:
                    return 19.8 ;
                    break;
                case 20:
                    return 29.7 ;
                    break;
                case 21:
                    return 49.5 ;
                    break;
                case 22:
                    return 99 ;
                    break;
                default:
                    return 3 ;
                    break;
            }
            break;
        case 4:
            switch (diamond) {
                case 1:
                    return 1.18 ;
                    break;
                case 2:
                    return 1.41 ;
                    break;
                case 3:
                    return 1.71 ;
                    break;
                case 4:
                    return 2.09 ;
                    break;
                case 5:
                    return 2.58 ;
                    break;
                case 6:
                    return 3.23 ;
                    break;
                case 7:
                    return 4.09 ;
                    break;
                case 8:
                    return 5.26 ;
                    break;
                case 9:
                    return 2.47 ;
                    break;
                case 10:
                    return 2.83 ;
                    break;
                case 11:
                    return 3.26 ;
                    break;
                case 12:
                    return 3.81 ;
                    break;
                case 13:
                    return 4.50 ;
                    break;
                case 14:
                    return 5.40 ;
                    break;
                case 15:
                    return 6.60 ;
                    break;
                case 16:
                    return 8.25 ;
                    break;
                case 17:
                    return 10.61 ;
                    break;
                case 18:
                    return 14.14 ;
                    break;
                case 19:
                    return 19.8 ;
                    break;
                case 20:
                    return 29.7 ;
                    break;
                case 21:
                    return 49.5 ;
                    break;
                default:
                    return 3 ;
                    break;
            }
            break;
        case 5:
            switch (diamond) {
                case 1:
                    return 1.24 ;
                    break;
                case 2:
                    return 1.56 ;
                    break;
                case 3:
                    return 2 ;
                    break;
                case 4:
                    return 2.58 ;
                    break;
                case 5:
                    return 3.39 ;
                    break;
                case 6:
                    return 4.52 ;
                    break;
                case 7:
                    return 6.14 ;
                    break;
                case 8:
                    return 8.50 ;
                    break;
                case 9:
                    return 12.04 ;
                    break;
                case 10:
                    return 17.52 ;
                    break;
                case 11:
                    return 29 ;
                    break;
                case 12:
                    return 40.87 ;
                    break;
                case 13:
                    return 66.41 ;
                    break;
                case 14:
                    return 113.85 ;
                    break;
                case 15:
                    return 6.60 ;
                    break;
                case 16:
                    return 8.25 ;
                    break;
                case 17:
                    return 10.61 ;
                    break;
                case 18:
                    return 14.14 ;
                    break;
                case 19:
                    return 19.8 ;
                    break;
                case 20:
                    return 29.7 ;
                    break;
                default:
                    return 3 ;
                    break;
            }
            break;
        case 6:
            switch (diamond) {
                case 1:
                    return 1.30 ;
                    break;
                case 2:
                    return 1.74 ;
                    break;
                case 3:
                    return 2.35 ;
                    break;
                case 4:
                    return 3.23 ;
                    break;
                case 5:
                    return 4.52 ;
                    break;
                case 6:
                    return 6.46 ;
                    break;
                case 7:
                    return 9.44 ;
                    break;
                case 8:
                    return 14.17 ;
                    break;
                case 9:
                    return 29.89 ;
                    break;
                case 10:
                    return 35.03 ;
                    break;
                case 11:
                    return 3.26 ;
                    break;
                case 12:
                    return 3.81 ;
                    break;
                case 13:
                    return 4.50 ;
                    break;
                case 14:
                    return 5.40 ;
                    break;
                case 15:
                    return 6.60 ;
                    break;
                case 16:
                    return 8.25 ;
                    break;
                case 17:
                    return 10.61 ;
                    break;
                case 18:
                    return 14.14 ;
                    break;
                case 19:
                    return 19.8 ;
                    break;
                default:
                    return 3 ;
                    break;
            }
            break;
        case 7:
            switch (diamond) {
                case 1:
                    return 1.37 ;
                    break;
                case 2:
                    return 1.94 ;
                    break;
                case 3:
                    return 2.79 ;
                    break;
                case 4:
                    return 4.09 ;
                    break;
                case 5:
                    return 6.14 ;
                    break;
                case 6:
                    return 9.44 ;
                    break;
                case 7:
                    return 14.95 ;
                    break;
                case 8:
                    return 24.47 ;
                    break;
                case 9:
                    return 41.60 ;
                    break;
                case 10:
                    return 73.95 ;
                    break;
                case 11:
                    return 3.26 ;
                    break;
                case 12:
                    return 3.81 ;
                    break;
                case 13:
                    return 4.50 ;
                    break;
                case 14:
                    return 5.40 ;
                    break;
                case 15:
                    return 6.60 ;
                    break;
                case 16:
                    return 8.25 ;
                    break;
                case 17:
                    return 10.61 ;
                    break;
                case 18:
                    return 14.14 ;
                    break;
                default:
                    return 3 ;
                    break;
            }
            break;
        case 8:
            switch (diamond) {
                case 1:
                    return 1.46 ;
                    break;
                case 2:
                    return 2.18 ;
                    break;
                case 3:
                    return 3.35 ;
                    break;
                case 4:
                    return 5.26 ;
                    break;
                case 5:
                    return 8.50 ;
                    break;
                case 6:
                    return 14.17 ;
                    break;
                case 7:
                    return 24.47 ;
                    break;
                case 8:
                    return 44.05 ;
                    break;
                case 9:
                    return 83.20 ;
                    break;
                case 10:
                    return 166.40 ;
                    break;
                case 11:
                    return 3.26 ;
                    break;
                case 12:
                    return 3.81 ;
                    break;
                case 13:
                    return 4.50 ;
                    break;
                case 14:
                    return 5.40 ;
                    break;
                case 15:
                    return 6.60 ;
                    break;
                case 16:
                    return 8.25 ;
                    break;
                case 17:
                    return 10.61 ;
                    break;
                default:
                    return 3 ;
                    break;
            }
            break;
        case 9:
            switch (diamond) {
                case 1:
                    return 1.55 ;
                    break;
                case 2:
                    return 2.47 ;
                    break;
                case 3:
                    return 4.07 ;
                    break;
                case 4:
                    return 6.88 ;
                    break;
                case 5:
                    return 12.04 ;
                    break;
                case 6:
                    return 21.89 ;
                    break;
                case 7:
                    return 41.60 ;
                    break;
                case 8:
                    return 83.20 ;
                    break;
                case 9:
                    return 176.80 ;
                    break;
                case 10:
                    return 404.10 ;
                    break;
                case 11:
                    return 3.26 ;
                    break;
                case 12:
                    return 3.81 ;
                    break;
                case 13:
                    return 4.50 ;
                    break;
                case 14:
                    return 5.40 ;
                    break;
                case 15:
                    return 6.60 ;
                    break;
                case 16:
                    return 8.25 ;
                    break;
                default:
                    return 3 ;
                    break;
            }
            break;
        case 10:
            switch (diamond) {
                case 1:
                    return 1.65 ;
                    break;
                case 2:
                    return 2.83 ;
                    break;
                case 3:
                    return 5 ;
                    break;
                case 4:
                    return 9.17 ;
                    break;
                case 5:
                    return 17.52 ;
                    break;
                case 6:
                    return 35.03 ;
                    break;
                case 7:
                    return 73.95 ;
                    break;
                case 8:
                    return 166.40 ;
                    break;
                case 9:
                    return 404.10 ;
                    break;
                case 10:
                    return 1077.61 ;
                    break;
                case 11:
                    return 3.26 ;
                    break;
                case 12:
                    return 3.81 ;
                    break;
                case 13:
                    return 4.50 ;
                    break;
                case 14:
                    return 5.40 ;
                    break;
                case 15:
                    return 6.60 ;
                    break;
                default:
                    return 3 ;
                    break;
            }
            break;
    
    
        default:
            return 3 ;
            break;
    }
    

    // let betMultiplier = mine + diamond ;
    // return  betMultiplier ;
}

// multiplier code ends here...

const resetBtn = document.getElementById('resetBtn');
const boxCon = document.querySelector('.boxCon');
const betBtn = document.getElementById('betBtn');
let randomArr = new Array();
let x;
let noOfMines = 1;

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
    noOfMines = mines.value;
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
    let noOfDiamonds = 0;
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
            noOfDiamonds += 1 ;
            moneyMultiplier = multiplier(noOfMines,noOfDiamonds);
            document.querySelector('#betMultiplier').innerText = `(${moneyMultiplier}x)` ;
            document.querySelector('#totalProfit').innerText = moneyMultiplier*Number(betMoney.value) ;
            
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
    betMoney.disabled = false ;
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