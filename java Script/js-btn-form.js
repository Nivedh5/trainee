var username=document.getElementById("username")
var password=document.getElementById("Password")
username.addEventListener('change',function(){
    console.log("username changed")
})
username.addEventListener('input',function(a){
   var change=a.target.value
   change=change.toUpperCase()
   console.log(change)
})

username.addEventListener('focus',function(){
    console.log("username focused")
})
password.addEventListener('blur',function(){
    console.log("password blured")
})