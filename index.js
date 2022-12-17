//스크롤 내리면 헤더 고정
let fixed = document.querySelector('header');
window.addEventListener('scroll',function(){
    fixed.style.position = 'fixed';
})
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
//gift 스크롤 애니메이션

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