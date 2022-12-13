//go top & go bottom
let goTop = document.querySelector('.go-top');
let goBottom = document.querySelector('.go-bottom');

goTop.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});