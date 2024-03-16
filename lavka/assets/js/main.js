
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

const tooggleContentByTab =() => {
    let tabs = document.querySelectorAll('.products-block__tab');
    let contents = document.querySelectorAll('.products-block__wrapper');
    //console.log (tabs) ;
    console.log (contents); 
    tabs.forEach((tab,index) => {
        console.log(tab);
        tab.addEventListener('click' , () =>{
            console.log('test click');
            tabs.forEach(tab_2=> {
                tab_2.classList.remove('active');
             tab.classList.add('active');
            })
            contents.forEach((content) =>{
                content.classList.remove('active');
            }
        )
        tab.classList.add('active');
        contents[index].classList.add('active');
 })
    })
}
tooggleContentByTab();