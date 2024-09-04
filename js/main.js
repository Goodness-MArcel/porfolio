let nav = document.getElementById("nav");
let handburger = document.querySelector(".handburger");

const toggle =()=>{
    nav.classList.toggle("toggle");
}
handburger.addEventListener("click",toggle);

// ====================counter section===================

document.addEventListener("DOMContentLoaded",()=>{
    let count_start = 1 ;
    let _maxCount = 520;
    let counterElement = document.querySelector(".span-first");
    let interval = setInterval(()=>{
        if(count_start <= _maxCount){
            counterElement.innerHTML = count_start;
            count_start++;
        }else{
            clearInterval(interval);
        }
    },90);


    let count_start2 = 1 ;
    let _maxCount2 = 200;
    let counterElement2 = document.querySelector(".span-second");
    let interval2 = setInterval(()=>{
        if(count_start2 <= _maxCount2){
            counterElement2.innerHTML = count_start2;
            count_start2++;
        }else{
            clearInterval(interval2);
        }
    },200);

});
