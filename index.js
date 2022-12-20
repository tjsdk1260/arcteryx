//스크롤 내리면 헤더 고정
let fixed = document.querySelector('header');
window.addEventListener('scroll',function(){
    fixed.style.minWidth = '480px';
    fixed.style.maxWidth = '768px';
    fixed.style.position = 'fixed';
});
//메뉴 클릭시
// let checked = document.querySelector('.menubar');
// let gnb = document.querySelector('.gnb');
// let checkBox = document.querySelector('#check');
// checkBox.addEventListener('change',function(){
//     if(this.checked){
//         gnb.style.top = '50%';
//     }else{
//         gnb.style.top = '-300%';
//     }
// });

//men&women 메뉴 클릭
// let menBtn = document.querySelector('.men-btn');
// let womenBtn = document.querySelector('women-btn');

// menBtn.addEventListener('click',()=>{
    
// });
// womenBtn.addEventListener('click',()=>{
    
// });
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
// 스크롤 애니메이션
let video = document.querySelector('.main-video');
let giftImg = document.querySelector('.gift>img');
let giftContent = document.querySelector('.gift-content');
let finderContent = document.querySelector('.finder-content');
console.log(finderContent);
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    console.log('scrollY',value);  
    if(value==1400){
        giftContent.style.animation = 'slide 2s ease-out';
    }
    else if(value>1900){
        giftContent.style.animation = 'disappear 2s ease-out forwards';
    }
    else{
        giftContent.style.animation = 'slide 2s ease-out';
    }
});
//도움말 아코디언
let help = document.querySelector('.help'),
    accordion = document.querySelector('.accordion'),
    plus = document.querySelector('.fa-plus'),
    minus = document.querySelector('.fa-minus');
help.addEventListener('click',function(){
   plus.classList.toggle('active');
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