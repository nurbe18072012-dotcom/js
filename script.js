var entername = prompt("Enter your name").trim()

console.log("salom" + " " + `${entername}` + " " + "yaxshimisiz");
if(entername==""){
    alert("enter your name")
    var entername = prompt("You didnt enter your name");
}else if(ism.length <=3){
    alert("Name is very short")
     var entername = prompt("Enter your name").trim()
}
 var Why = prompt("why do you want to enter the institute")
 if(Why.length <=10) {
    alert("You entered too little information, please enter more than 10 characters.")
    console.log("You didn't write why you wanted to enter the institute.");
    
 }else{
    alert("Thanks")
 }
 console.log(Why.replaceAll("universitet", "Alicode"));
 