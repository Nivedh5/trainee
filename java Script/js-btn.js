
var btn=document.getElementById("btn-1")
var header1=document.getElementById("header")
var div1=document.getElementById("menu")
var btn_1=document.getElementById("header")
btn.onclick=function(){
    
    if(header1.classList.contains("small")){
        header1.classList.remove("small");
        header1.classList.add("big")
        
    }
    else{
    header1.classList.remove('big');
      header1.classList.add("small")
    }
    
}
btn_1.onclick=function(){
    if(div1.classList.contains("menu-div")){
        div1.classList.remove("menu-div")
        div1.classList.add("menu-div-alt")
        // console.log("dasbnkdjas")
    }
    else{
        div1.classList.remove("menu-div-alt")
        div1.classList.add("menu-div")
    }
}


