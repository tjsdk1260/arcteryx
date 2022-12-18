//팝업창 닫기
let closePopup = document.querySelector('.btn-close');
let popupWrap = document.querySelector('.pop-up-wrap');
closePopup.addEventListener('click',function(){
    popupWrap.style.display = 'none';
});
//스크롤 내리면 헤더 고정
let fixed = document.querySelector('header');
window.addEventListener('scroll',function(){
    fixed.style.position = 'fixed';
});
//메뉴 클릭시
let makeMenu2 = ['의류','배낭','클라이밍 장비', '악세사리','활동별 분류'];
//메뉴 닫기
let gnb = document.querySelector('nav');
let closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click',function(){
    gnb.style.display = 'none';
});
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
let giftContent = document.querySelector('.gift-content');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    console.log('scrollY',value);  
    
    if(value==1260){
        giftContent.style.animation = 'slide 2s ease-out';
    }
    else if(value>1960){
        giftContent.style.animation = 'disappear 2s ease-out forwards';
    }
    else{
        giftContent.style.animation = 'slide 2s ease-out';
    }
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
        top: document.body.scrollHeight,
        behavior: "smooth" 
    });
});