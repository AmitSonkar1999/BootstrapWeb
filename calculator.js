function calc() {
    
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('num2').value);
    var opr = document.getElementById('opr').value;
    // if(opr == "+"){
    //     document.getElementById('result').value=n1+n2;
    // }
    // else if(opr == "-"){
    //     document.getElementById('result').value=n1-n2;
    // }
    // else if(opr == "*"){
    //     document.getElementById('result').value=n1*n2;
    // }
    // else if(opr == "/"){
    //     document.getElementById('result').value=n1/n2;
    // }
    // else{
    //     alert("not valid operand");
    // }
    switch (opr) {
        case '+':
            document.getElementById('result').value = n1+n2;
            break;
        case '-':
            document.getElementById('result').value = n1-n2;
            break;
        case '*':
            document.getElementById('result').value = n1*n2;
            break;
        case '/':
            document.getElementById('result').value = n1/n2;
            break;
    }
}


// var namee = ["amit","SONKAR","tarun","ankush"];
// var length= namee.length;

// for(var i=0;i<length;i++){
//     console.log(namee[i]+" ");
// }
// console.log("================================================");

// var num = [2,3,4];
// var sum = 0;
// var length = num.length;
// for(var i=0;i<length;i++){
//   sum=sum + num[i];
// }
// console.log("Total num of sum: ="+sum);
// console.log("======================================================");

// var arr = ["amit","aamit","ankush","kushwaah"];
// var i,j,c=0;
// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr[i].length;j++){
//         if(arr[i].charAt(j)=='a'){
//             c++;
//         }
//         if(c>=2){
//             console.log(arr[i]+" ");
//         }
//     }
//     c=0;
// }

// console.log("======================================");


// var arr=["amit","aamit","sakshi","sohana"];


// var arr = ["nkaajdf","hsaahfdh","gdhd","fwf","hufsf","hksfhs","shaadfsdjf"];
// var count=0;
// for(var i=0;i<arr.length;i++){
//     for(var j=0;j<arr[i].length;j++){
//         if(arr[i].charAt(j)=='a'){
//             count++;
//         }
//         if(count==2){
//             console.log(arr[i]);
//         }
//     }
//     count=0;
// }
// var fruits = ["mango","banana","apple"];
// var demo=fruits;
// function pop(){
//     demo.pop();
//     document.getElementById('demo').innerHTML=demo;
// }
// var veg = ["potato","ladyfinger","tomato"];
// var demo=veg;
// function push(){
//     demo.push("guwava");
//     document.getElementById('demo').innerHTML=demo;
// }
// function reverse(){
//     demo.reverse();
//     document.getElementById('demo').innerHTML=demo;
// }

// const index = ["hskdh","dhk","shd","dhsh","whf","gs"];
// var len = index.length;
// var text ="<ul>";
// for(var i=0;i<len;i++){
//     text += "<li>" +index[i]+ "</li>";
// }
// text += "</ul>";
// console.log(text);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let tex = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   tex += "<li>" + fruits[i] + "</li>";
// }
// tex += "</ul>";
// document.getElementById("dem").innerHTML=tex;


// var str="jdfsdjj";
// var str1=str.slice(2);
// document.write(str1.padStart(7,"*")+"\n");

// var v=str.substring(2);
// document.write(v);

// var str="this is my web";
// var str2="web";
// document.write(`${str2,"not bad"}`)


// var text="";
// var str2=arr.forEach(myfun);
// function myfun(value,index){
//     if(index%2==0)
//     text=text+value+" "; 
// }
// document.write(text);

// arr.forEach(function(value){
//     var count=0;
//     var ar2=value.split('');
//     ar2.forEach(function(value1){
//         if(value1=='a'){
//             count++;
//         }
//         if(count>=2){
//             document.write(value+"<br>");
//         }
//     })
    
// })
// var arr=["aalj", "jfdbbaa"," dccads"," ddaadc"];

// arr.forEach(function(value){
//     var count=0;
//     var ar2=value.split('');
//     ar2.forEach(function(value1){
//         if(value1=='aa'){
//             count++;
//         }
//         if(count>=2){
//             document.write(value+"<br>")
//         }
//     })
// })




// var ne2=ne.map(function(value){
//     return value+2;
// })
// console.log(ne2.concat("AA"));
    
// ne.forEach(function(value){
//     console.log(value.concat("AA"))
// })



{/* <script>
var arr=["amit","ankush","pankaj"];
var arr2=arr.map(myFunction);
document.write(arr2);
function myFunction(value){
    return "AA"+value;
}
document.write("===================================");

arr.forEach(function(value){
    value="aa"+value;
    document.write(value+"<br>");
})
document.write("===================================");
// var newarr=["hfaak","dsaam","hakshh"]
// newarr.forEach(function(value){ */}
//     if(value[i].length=="a")
//     document.write(value+"<br>")
// })
// document.write(value+"<br>")

// arr.forEach(function(value,index){
//     if(index%2==0)
//     window.alert(value+"<br>");
// })


// var ar=["reaa","wte","qyt","dsaa"];
//  ar.forEach(function(value){
//     ar2=value.split('');
//     var count=0;
//     ar2.forEach(function(value1){
//           if(value1=='a'){
//             count++;
//           }
//           if(count>=2){
//             document.write(value+"<br>");
//           }
//     })
    
//  })

// var ar=["reaa","wte","qyt","dsaa"];
// var ar2=ar.map(function(value){
//     return "AA"+value;
// })
// document.write(ar2);
// document.write("========================================"+"<br>")




// function calc(a,b){
//     return b-a;

// }
// var x=calc(2,3);
// document.write(x);





// </script>


   




