function myFunction(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var no=document.getElementById("no").value;
    var messsub=document.getElementById("messsub").value;
    var message=document.getElementById("message").value;
    

    alert ('your name is <q>'+name+'</q> ,your email id is '+email+' ,your phone number is '+no+' ,your thing that you ordered is '+messsub+' ,your preception about '+messsub+' is '+message+' thanks for your order have a nice day.');
}