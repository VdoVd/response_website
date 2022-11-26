'use strict';

const addEventOnElements = function(elements,evnetType,callback){
    for(let i=0,len=elements.length;i<len;i++){
        elements[i].addEventListener(evnetType,callback);
    }
}

const preloader = document.querySelector("[data-preloader")

window.addEventListener("load",function(){
    preloader.classList.add("loaded")
    this.document.body.classList.add("loaded")
})