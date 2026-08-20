let count=0;
let incrementValue=document.getElementById("incrementBtn")
let decrementValue=document.getElementById("decrementBtn")
let resetValue=document.getElementById("resetBtn")
let displayValue=document.getElementById("display")

incrementValue.addEventListener("click",increment);
function increment(){
count++;
display.innerHTML=count;
}

decrementValue.addEventListener("click",decrement);
function decrement(){
count--;
display.innerHTML=count;
}

resetValue.addEventListener("click",reset);
function reset(){
count=0;
display.innerHTML=count;
}
