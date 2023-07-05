var body=document.body
body.addEventListener('keyup',function(a){
    var key=a.keyCode
    if(key==13){
        console.log("up enter")
    }
})
body.addEventListener('keypress',function(a){
    var key=a.keyCode
    if(key==13){
        console.log("pressed enter")
    }
})
body.addEventListener('keydown',function(a){
    var key=a.keyCode
    if(key==13){
        console.log("down enter")
    }
})