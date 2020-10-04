function hello(){
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Good morning";
      } else if (time < 17) {
        greeting = "Good day";
      } else {
        greeting = "Good evening";
      }
      document.getElementById("you").innerHTML = greeting;
    
    var day;
    switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case  6:
        day = "Saturday";
    }
    document.getElementById("in").innerHTML = "Today is " + day;
}


function myFunction(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var no=document.getElementById("no").value;
    var messsub=document.getElementById("messsub").value;
    var message=document.getElementById("message").value;


    if (name==""){
      alert ('please enter your name');
    }
    else if (email==""){
      alert ('please enter your e-mail');
    }
    else if (no==""){
      alert ('please enter your mobile no.');
    }
    else if (messsub==""){
      alert ('please enter the name of the thing you want to order');
    }
    else if (message==""){
      alert ('please write the preception of '+messsub+' ');
    }
    else {


  alert ("your name is "+name+" your email id is "+email+" ,your phone number is "+no+" ,your thing that you ordered is "+messsub+" ,your preception about "+messsub+" is "+message+" thanks for your order have a nice day.")};
}
