// var obj=["pari","jd","dk","pk"]
// var obj1=obj.splice(0,1,"nivedh")
// console.log(obj1)
// console.log(obj)

// arr = [1,'a',2,'b',3,'c',6,'d',7,'e',8,'f']
//  console.log(arr.reverse())

// arr1 = [4, 11, 12, 23, 46, 65, 70, 73, 98];
// arr2 = [7, 13, 25, 46, 58, 70, 84];
// arr3=arr1.concat(arr2)
// // console.log(arr3)
// for(var i=0;i<arr3.length;i++){
//     for(var j=i+1;j<arr3.length;j++){
//     if(arr3[i]==arr3[j]){
//         console.log("yes element found "+arr3[i])

//     }
// // else{
//     // //     console.log("no")
//     // }
// }
// }

// var obj=[4,5,6,7,8]
// var obj1=[3,4,6,6,7,8,9]
// var obj3=[34,23,45,55,67,77]

// for(var i=0;i<obj.length;i++){

//         if((obj[i]+1)!=obj[i+1]){
//             break
//         }

// }
// if(i<obj.length-1)
// {
//     console.log("no")
// }
// else{
//     console.log("yes")
// }

// arr=[25, 10, 10, 1]
// var i=0
// var money=46
// var times
// while()

// function amountTocoins() {
//     var originalNum = 46;
//     var num = 46;
//     var arr=[25, 10, 5, 2, 1];
//     var str = '';

//     for (var i=0; i<arr.length; i++) {
//       if (num>=arr[i]) {
//         num = num - arr[i];
//         str = str + arr[i] + ',';
//         i--;
//       }
//     }
// }

// var arr = [22, 8, 301, 404, 35, 99];
// for (var i = 0; i < arr.length; i++) {
//   var last = arr[i] % 10;
//   if (last == 1) {
//     arr[i] = arr[i] + "st";
//   } else if (last == 2) {
//     arr[i] = arr[i] + "nd";
//   } else if (last == 3) {
//     arr[i] = arr[i] + "rd";
//   } else {
//     arr[i] = arr[i] + "th";
//   }
// }
// console.log(arr);

// var arr ="javascript is cool"
// var arr1=" "
// var arr2=arr.split("")
// for()

// var word="Good, better, best. Never let it rest. Til your good is better and your better is best."

// var a="The Quick Brown Fox"
// var b=""
// for(var i=0;i<a.length;i++){
//     if(a.charAt(i)==a.charAt(i).toUpperCase()){
//      b=b+a.charAt(i).toLowerCase()
//     }
//     else{
//         b=b+a.charAt(i).toUpperCase()
//     }
// }
// console.log(b)

var b =
  "There is exactly one space between each word and no punctuation is used";
var c = b.split(" ");
var d = " ";
for (var i = 0; i < c.length; i++) {
  if (c[i].length % 2 == 0) {
    d = d + c[i] + " ";
  } else {
    for (var j = c[i].length - 1; j >= 0; j--) {
      d = d + c[i].charAt(j);
    }
    d = d + " ";
  }
}
console.log(d);
