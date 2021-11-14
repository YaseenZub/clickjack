var site=document.querySelector("input");
var iframe=document.querySelector('iframe')
var button=document.querySelector('button');
button.addEventListener("click",function(){
    iframe.src=site.value
})
