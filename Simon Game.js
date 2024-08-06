let gameseq =[];
let userseq =[];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game Is Started");
        started = true;

        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },1000);
}

function levelup(){
    userseq =[];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIndex =Math.floor(Math.random()*3);
    let randomcolor = btns[randomIndex];
    let  randbtn = document.querySelector(`.${randomcolor}`);
    
    gameseq.push(randomcolor);
    console.log(gameseq);
    

    gameFlash(randbtn);
}

function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game over ! your score was <b>${level}</b><br>Press any key To Start.`;
        reset();
    }
}

function btnPress(){
    let  btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}