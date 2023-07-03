const b = {
  Name: "nivedh",
  age: 22,
  phone: 822221122,
  studied: {
    sslc: "80%",
    hg: "90%",
  },
  passed_out: 2022,
};
b.sample = "90";
// console.log(b.age)
// console.log(b.studied.sslc)
// console.log(b.passed_out)
b.sample = "100";
console.log(b);

var cars = ["agera", "bugatti", "lambo", "gtr", "supra"];
console.log(cars);
cars.push("skyline");
console.log(cars);
console.log(cars.pop());
console.log(cars);
cars.shift();
console.log(cars);
cars.unshift("bmw");
console.log(cars);

console.log(true + false);
console.log(1 > null);
console.log(1 > null);
console.log("foo" + +"bar");
let a = "1";
let bb = 1;
console.log("1", a == bb);
console.log(false == "false");
console.log(null == undefined);
console.log(!!"false" == !!"true");


// var array=["asdf","something","right","sd","position"]
// var high=array[0];
// // var index;
// for(var i=1;i<array.length;i++){
//     if(high.length<array[i].length){
//         high=array[i];
//         // index=i;
//     }
// }
// console.log(high)



// var arr1=[1,2,3]
// var arr2=[4,5,6]
// var c=false;
// for(var i=0;i<arr1;i++){
//     for(var j=0;j<arr2;j++){
//        if(arr1[i]==arr2[j]){
//         c=true
        
//        }
//     }
    
// }
// console.log(c)



// var arr1=[1,2,3]
// var arr2=[100,2,1,10]
// var arr3=[]

// for(var i=0;i<arr1.length;i++){
//     arr3[i]=arr1[i]
// }
// for(var j=0;j<arr2.length;j++){
//     arr3[j]=arr2[j]
// }

// var arr1=[1,2,3]
// var arr2=[100,2,1,10]
// var arr3=[]
// for(var i=0;i<arr1.length;i++){
//     for(var j=0;j<arr2.length;j++){
//         if(arr1[i]!=arr2[j]){

//         }
//     }
// }






customers_data={ 
    'Ben10': [22, 30, 11, 17, 15, 52, 27, 12], 
    'Sameer': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45], 
    'Zeeshan': [22, 30, 11, 5, 17, 30, 6, 57]  
   }
var count=0
   for(let i in customers_data){
        var pro=customers_data[i]
        // console.log(pro)
        for(var j=0;j<pro.length;j++){
            
          if(pro[j]>20){
            count++
            // console.log(count)
            if(count>=5){
                console.log("membership acquired")
                console.log(i)
                break;
            }
          }
         
        }
        count=0
   }


// var list=[];
// var student={
//     name:"david",
//     class:"vi",
//     rollo_no:15
// }
// for(i in student){
//   list.push(i)
// }
// console.log(list)


student =  {  
    name : "David Rayy",  
    sclass : "VI",  
    rollno : 12   
} 
delete student.rollno
console.log(student)


student =  {  
    name : "David Rayy",  
    sclass : "VI",  
    rollno : 12   
} 


var count=0
for(i in student){
    count++
}
console.log(count)
