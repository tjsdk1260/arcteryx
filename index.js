//스크롤 내리면 헤더 고정
let fixed = document.querySelector('header');
window.addEventListener('scroll',function(){
    fixed.style.minWidth = '320px';
    fixed.style.maxWidth = '768px';
    fixed.style.position = 'fixed';
});
//메뉴 클릭시
let checked = document.querySelector('.menubar');
let gnb = document.querySelector('.gnb');
let checkBox = document.querySelector('#check');
checkBox.addEventListener('change',function(){
    if(this.checked){
        gnb.style.top = '50%';
    }else{
        gnb.style.top = '-300%';
    }
});

//men&women 메뉴 클릭
let menu1 = document.querySelector('.menu1'),
    menu2 = document.querySelector('.menu2'),
    menu2Men = document.querySelector('.menu2>.men'),
    menu2Women = document.querySelector('.menu2>.women'),
    allMen = document.querySelector('.men>span'),
    allWomen = document.querySelector('.women>span');
let menBtn = document.querySelector('.men-btn');
let womenBtn = document.querySelector('.women-btn');

menBtn.addEventListener('click',()=>{
    menu2Men.style.display = 'block';
    menu1.style.display = 'none';
});
womenBtn.addEventListener('click',()=>{
    menu2Women.style.display = 'block';
    menu1.style.display = 'none';
});

allMen.addEventListener('click',()=>{
    menu1.style.display = 'block';
    menu2Men.style.display = 'none';
});
allWomen.addEventListener('click',()=>{
    menu1.style.display = 'block';
    menu2Women.style.display = 'none';
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
// 스크롤 애니메이션
let giftContent = document.querySelector('.gift-content');
let finderContent = document.querySelector('.finder-content');

window.addEventListener('scroll',function(){
    let giftHeight = document.querySelector('#gift-content').offsetTop;
    let giftHeight2 = document.querySelector('.giftBtn').offsetTop;
    let windowHeight =this.window.innerHeight;
    let value = window.scrollY;
    console.log('scrollY',value);  
    console.log(giftHeight-windowHeight, value,giftHeight2-100)
    if(giftHeight-windowHeight<=value && value<=giftHeight2-100){
        giftContent.style.animation = 'slide 2s ease-out';
    }
    else {
        giftContent.style.animation = 'disappear 2s ease-out forwards';
    }

    let finderHeight = this.document.querySelector('.finder-content').offsetTop,
        finderHeight2 = this.document.querySelector('.finderBtn').offsetTop;
    if(finderHeight-windowHeight<=value && value<=finderHeight2-100){
        finderContent.style.animation = 'slide 2s ease-out';
    }
    else{
        finderContent.style.animation = 'disappear 2s ease-out forwards';
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