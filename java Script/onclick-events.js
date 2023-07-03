var count = document.getElementById("para");
var count_inner = Number(count.innerHTML);
console.log(count_inner);
var div = document.getElementById("div1");
var btn_click=document.getElementById("btn")
btn_click.onclick=function(){
setInterval(function () {
  count.innerHTML = count_inner = count_inner - 1;
  if (count_inner <= 0) {
    count.innerHTML = count_inner = 0;
    count.style.fontSize = count_inner * 100  + "px";
    div.style.width = count_inner *10 + "%";
    div.style.height= count_inner *10 + "vh"
    // btn_click.style.display=none;
    
  } else {
    count.style.fontSize = count_inner * 100  + "px";
    div.style.width = count_inner *10 + "%";
    div.style.height= count_inner *10 + "vh"
  }
}, 1000);
}