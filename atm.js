


function myFunction() {
    var text;
    var Choose = prompt("Please select");
    choose=number.parseInt(choose);
    var n=choose;
    switch(n) {
      case 1:
        text = " Please enter your money.";
        break;
      case 2:
        text ="how much money you want to withdraw." ;
        break;
      case 3:
        text = "Your money deposit.";
        break;
      case 4:
        text ="Leave Now..";
    }
    document.getElementById("demo").innerHTML = text;
}

// var num = 7895715557;
// var text = num.toString();
// var para = text.slice(6);
// console.log(para.padEnd(14,"x"));
