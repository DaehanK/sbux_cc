// 공통으로 사용하는 부분들을 common.js로 이동
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


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();//올해 년도를 가져옴
