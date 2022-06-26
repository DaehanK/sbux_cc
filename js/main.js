const searchEle = document.querySelector('.search');
const searchInputEle = searchEle.querySelector('input');

searchEle.addEventListener('click', function(){
 //LOGIC  
 searchInputEle.focus();
});

searchInputEle.addEventListener('focus',function(){
  searchEle.classList.add('focused');
  searchInputEle.setAttribute('placeholder','통합검색');
});

searchInputEle.addEventListener('blur',function(){
  searchEle.classList.remove('focused');
  searchInputEle.setAttribute('placeholder','');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// window 객체 = 해당 창 == 화면 자체

// 아래처럼 하게되면 스크롤할때마다 js가 반복되면서 화면이 버벅일수있다!
// window.addEventListener('scroll', function(){
  //console.log('scroll!!!');
// });

//300 - 0.3s  throttle - lodash cdn , + animation - gsap cdn
//_.throttle (함수, 시간)
window.addEventListener('scroll',_.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //숨기기
    // badgeEl.style.display = 'none';
    gsap.to(badgeEl, .6, {
      opacity:0,
      display:'none'
    });
    gsap.to(toTopEl, .2, {
      x:0
    });



    // 요소 , 지속시간. 옵션 -> 투평도 0으로 점점 바꾸갰다. 투명도만 하게되면 안보여도 클릭가능.
  }else{
    //보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity:1,
      display:'block'
    });
    // toTopEl == '#to-top' 으로 대체 가능. 
    gsap.to(toTopEl, .2, {
      x:100
    });
  }
},300));



toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo:0
    // window를 0의 위치로 이동시켜주겠다.
  });
});


//시간차 애니메이션
//tile -> cup1 -> cup2 -> spoon
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl,1, {
    opacity:1,
    delay:(index+1) * .7
  });
});

// class
// new Swiper(선택자 , 옵션)
new Swiper('.notice-line .swiper',{
  direction: 'vertical',
  autoplay: true,
  loop:true
});

new Swiper('.promotion .swiper',{
  slidesPerView:3,//한번에 보여줄 슬라이드 개수
  spaceBetween:10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기.
  loop:true, //이게 있어야 빈 부분 없이 보임.
  autoplay:{
    delay:5000
  },
  pagination:{
    el:'.promotion .swiper-pagination',//페이지 번호 요소 선택자.
    clickable:true
  },
  navigation:{
    prevEl:'.promotion .swiper-button-prev',
    nextEl:'.promotion .swiper-button-next'
  }
});

new Swiper('.awards .swiper',{
  slidesPerView:5,//한번에 보여줄 슬라이드 개수
  spaceBetween:30, //슬라이드 사이 여백
  loop:true, //이게 있어야 빈 부분 없이 보임.
  autoplay:{
    delay:5000
  },
  navigation:{
    prevEl:'.awards .swiper-button-prev',
    nextEl:'.awards .swiper-button-next'
  }
});



const toggleEl = document.querySelector(".inner__right .toggle-promotion");
const proEl = document.querySelector(".notice .promotion");
let isHidePromotion = false;

// 보이거나 안보이거나 하는 수준은 css 클래스를 활용해서 동작시켜주는게 좋다?
toggleEl.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion; //toggle!
    if(isHidePromotion){
        //To Hide 
        proEl.classList.add('hide');
    }else{
        proEl.classList.remove('hide');
    }
})
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// random은 새로고침할때마다 달라지는듯?
function floatingObject(selector, delay, size){
  // gsap.to(요소, 동작시간, 옵션);
  gsap.to(selector, random(1.5,2.5), {
    y:size,
    repeat:-1,//반복이있어야 와리가리가됨 무한반복임.
    yoyo: true, //행했던 애니메이션을 다시 반대로  이게 없으면 y축으로 이동했다가 다시 돌아왔다가 y로 이동하는 모습이고 이게 있으면 돌아올때도 애니메이션이 동작함.
    ease: Power1.easeInOut,
    delay:random(0,delay)
  });
};

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement:spyEl, //보여짐 여부를 감시할 요소를 명시 
      triggerHook: .8 //뷰포트를 기준으로 처음 : 0 , 끝: 1이라서 화면 어디에서부터 동작할지? -> 0.8 위치에서 보여지면 setClassToggle()을 실행한다.
    })
    .setClassToggle(spyEl,'show') // spyEl에 show 클래스를 추가해준다.
    .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();//올해 년도를 가져옴

