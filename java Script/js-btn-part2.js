var heading=document.getElementById("div-font")
var btn_in=document.getElementById("increase")
var btn_dec=document.getElementById("decrease")

var initial_font=window.getComputedStyle(heading).fontSize
initial_font=initial_font.substring(0,initial_font.length-2)

btn_in.onclick=function(){
    initial_font=parseInt(initial_font) + 10
    heading.style.fontSize=initial_font + "px"
    console.log(heading.style.fontSize)
}
btn_dec.onclick=function(){
    initial_font= parseInt(initial_font) - 10
    heading.style.fontSize=initial_font +"px"
    console.log(heading.style.fontSize)
}
