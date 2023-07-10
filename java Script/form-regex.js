var username=document.getElementById("username")
var para_username=document.getElementById("para-username")
var password=document.getElementById("password")
var para_password=document.getElementById("para-password")
var btn=document.getElementById("btn-sub")
var flag=false
var flag1=false


username.addEventListener('input',function(e){
    var pattern=/^[\w]{8,10}$/g
    var value=e.target.value
    var valid=pattern.test(value)
    
    if(valid){
        para_username.style.display='none'
        flag=true
    }
    else{
        para_username.style.display='block'
        flag=false
    }
})
password.addEventListener('input',function(p){
    var pattern=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g
    var value1=p.target.value
    var valid1=pattern.test(value1)

    if(valid1){
        para_password.style.display='none'
        flag1=true
    }
    else{
        para_password.style.display='block'
        flag1=false
    }
})
btn.addEventListener('click',function(a){

    if(flag && flag1){
        // btn.disabled=true
        console.log("valid")
        
    }
    else{
        // btn.disabled=false
        a.preventDefault()
        console.log("invalid")

    }
})



