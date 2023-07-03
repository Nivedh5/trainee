var count = document.getElementById("para");
var back_img = document.getElementsByTagName("body")[0];
var count_inner=Number(count.innerHTML);
// console.log(count_inner)


setInterval(function () {
  count_inner=count_inner+1
  if(count_inner % 2==0){
    back_img.style.backgroundImage = 'url("https://img.freepik.com/free-photo/neon-tropical-monstera-leaf-banner_53876-138943.jpg?w=2000")';
  }
  else if(count_inner % 3==0){
    back_img.style.backgroundImage = 'url("https://img.freepik.com/free-photo/abstract-nature-painted-with-watercolor-autumn-leaves-backdrop-generated-by-ai_188544-9806.jpg?w=2000")';
  }
  else{
    back_img.style.backgroundImage = 'url("https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000")';
}
  count.innerHTML=count_inner
 if(count_inner==10){
    count_inner=0
 }
}, 1000);


