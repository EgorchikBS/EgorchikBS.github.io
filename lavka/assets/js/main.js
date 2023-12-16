
let btnLeft = document.querySelector("#mainbanner .btn-left");
let btnRight = document.querySelector("#mainbanner .btn-right");

console.log(btnLeft);
console.log(btnRight);

btnLeft.addEventListener("click", function(){
    if(btnLeft.classList.contains("anime")){
        btnLeft.classList.remove("anime");
    }
    else{
        btnLeft.classList.add("anime");
    }
});
btnRight.addEventListener("click", function(){
    if(btnRight.classList.contains("anime")){
        btnRight.classList.remove("anime");
    }
    else{
        btnRight.classList.add("anime");
    }
});

