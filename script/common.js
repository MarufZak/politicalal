"use strict";window.onload=function(){function removeActiveClasses(){tabs.forEach(function(item){item.classList.remove("active")}),tabsContents.forEach(function(item){item.classList.add("hide"),item.classList.remove("show")})}function showActiveClass(){var i=0<arguments.length&&arguments[0]!==void 0?arguments[0]:0;tabs[i].classList.add("active"),tabsContents[i].classList.remove("hide"),tabsContents[i].classList.add("show")}function openModal(){modal.classList.remove("hide"),modal.classList.add("flex"),document.body.style.overflow="hidden"}function closeModal(){modal.classList.remove("flex"),modal.classList.add("hide"),document.body.style.overflow="visible"}function showAtTheEnd(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(openModal(),window.removeEventListener("scroll",showAtTheEnd))}document.body.classList.add("loaded_hiding"),window.setTimeout(function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")},500);var headerSlider=new Swiper(".start",{wrapperClass:"start-wrapper",slideClass:"start-slide",slideActiveClass:"start-slide-active",slidesPerView:1,pagination:{el:".start-pagination",type:"bullets",dynamicBullets:!0},autoplay:{delay:5e3}}),burger=document.querySelector(".header__burger"),navList=document.querySelector(".header__list"),nav=document.querySelector(".header");burger.addEventListener("click",function(){navList.classList.toggle("active"),burger.classList.toggle("active")});var prevScrollpos=window.pageYOffset,navHeight=nav.clientHeight;window.addEventListener("scroll",function(){var currentScrollPos=window.pageYOffset;nav.style.top=prevScrollpos>currentScrollPos?0+"px":-navHeight+"px",prevScrollpos=currentScrollPos});var tabs=document.querySelectorAll(".step__list li"),tabsContents=document.querySelectorAll(".step__content");tabs.forEach(function(item,index){item.addEventListener("click",function(){removeActiveClasses(),showActiveClass(index)})});var callButtons=document.querySelectorAll(".call_btn"),modal=document.querySelector(".modal"),modalClose=document.querySelector(".modal__close");callButtons.forEach(function(item){item.addEventListener("click",function(e){e.preventDefault(),openModal()})}),window.addEventListener("click",function(e){(modal.classList.contains("flex")&&e.target.classList.contains("modal")||e.target.classList.contains("modal__close"))&&closeModal()}),window.addEventListener("scroll",showAtTheEnd)};