//팝업창 닫기
let closeBtn = document.querySelector('.btn-close');

//검색창
let searchBtn = document.querySelector('.searchBtn');
let search = document.querySelector('.search');
let closeSearch = document.querySelectorAll('.search button');

searchBtn.addEventListener('click',function(){
    search.classList.add('on');
});
closeSearch[1].addEventListener('click',function(){
    search.classList.remove('on');
});
//도움말 아코디언
let help = document.querySelector('.help'),
    accordion = document.querySelector('.accordion');
help.addEventListener('click',function(){
    accordion.classList.toggle('active');
});

//go top & go bottom
let goTop = document.querySelector('.go-top');
let goBottom = document.querySelector('.go-bottom');

goTop.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

goBottom.addEventListener('click',function(){
    window.scrollTo({ 
        top: document.body.scrollHeight, behavior: "smooth" 
    });
});