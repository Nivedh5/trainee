var a="hari is very very bad guy 213231"
var pattern=/[^a-z]/g
var pattern1=/guy$/g
var text=a.match(pattern)
document.getElementById("demo").innerHTML = text;
var text1=a.match(pattern1)
document.getElementById("demo1").innerHTML=text1
