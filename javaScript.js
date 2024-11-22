// game logic

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let usr,comp,random; 
let scoreOfUsr=1,scoreOfAi=1; 
let action = document.querySelectorAll(".action");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scisor = document.querySelector("#scissor");
let ans = document.querySelector("#ans");
let you = document.querySelector("#you");
let ai = document.querySelector("#ai");

function check(){
    if(usr==comp)
    {
        if(mode=="light")
        {
            ans.style.backgroundColor="#16162b";
            ans.style.color="white";
            ans.innerText="Draw..!";
        }
        else if(mode=="dark")
        {
            ans.style.backgroundColor="whitesmoke";
            ans.style.color="black";
            ans.innerText="Draw..!";
        }
    }

    else if((usr=="rock" && comp=="scissor") || (usr=="scissor" && comp=="paper") || (usr=="paper" && comp == "rock"))
    {
        if(mode=="light")
        {
            ans.style.backgroundColor="green";
            ans.style.color="black";
            you.innerText=scoreOfUsr++;
            ans.innerText="You Win..!, You beated the AI";
        }
        else if(mode=="dark")
        {
            ans.style.backgroundColor="green";
            ans.style.color="white";
            you.innerText=scoreOfUsr++;
            ans.innerText="You Win..!, You beated the AI";
        }
    }
    else if((comp=="rock" && usr=="scissor") || (comp=="scissor" && usr=="paper") || (comp=="paper" && usr == "rock"))
    {
        if(mode=="light")
        {
            ans.style.backgroundColor="red";
            ai.innerText=scoreOfAi++;
            ans.innerText="You lose..!, AI beated you";
            ans.style.color="black";
        }
        else if(mode=="dark")
        {
            ans.style.backgroundColor="red";
            ai.innerText=scoreOfAi++;
            ans.innerText="You lose..!, AI beated you";
            ans.style.color="white";
        }
    }
}
rock.addEventListener("click",()=>{
    usr="rock";
    random=getRandomNumber(0,2);
    comp = action[random].getAttribute("id");
    check();
});
paper.addEventListener("click",()=>{
    usr="paper";
    random=getRandomNumber(0,2);
    comp = action[random].getAttribute("id");
    console.log(usr,comp);
    check();
});
scisor.addEventListener("click",()=>{
    usr="scissor";
    random=getRandomNumber(0,2);
    comp = action[random].getAttribute("id");
    console.log(usr,comp);
    check();
});

// theam changer

let mode="light";
let body = document.querySelector("body");
let title = document.querySelector("#title");
let moon = document.querySelector("#moon");
let h2i = document.querySelector("#h2i");
let h2ii = document.querySelector("#h2ii");

let callback = ()=>{
    if(mode=="light"){
        body.style.backgroundColor="#1d1d24";
        title.style.backgroundColor="#121114";
        ai.style.color="white";
        you.style.color="white";
        h2i.style.color="white";
        h2ii.style.color="white";
        moon.innerHTML="<i class='fa-regular fa-sun fa-rotate-90' style='color: #f5f5f5;'></i>";
        mode="dark";
        
    }
    else if(mode=="dark"){
        body.style.backgroundColor="white";
        title.style.backgroundColor="rgb(22, 22, 43)";
        ai.style.color="black";
        you.style.color="black";
        h2i.style.color="black";
        h2ii.style.color="black";
        moon.innerHTML="<i class='fa-solid fa-moon'></i>";
        mode="light";
    }
}
moon.addEventListener("click",callback);