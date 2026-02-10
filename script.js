var a = "Enter name "
//console.log(a.charAt(a.length -1 ));
//console.log(a.charAt(a.length -1 ));

//console.log(a.charCodeAt(3));
//console.log(a.charCodeAt(7));

//console.log(a.codePointAt(0));
//console.log(a.codePointAt(9));

/*console.log(a.at(-2));
console.log(a.at(2));*/

/*console.log(a[-1]);
console.log(a[-2]);*/

/*console.log(a.slice(-1));
console.log(a.substring(2));*/

/*console.log(a.isWellFormed());
console.log(a.notWellFormed(-7));*/

//console.log(a.padStart(10, "*"));

/*console.log(a.repeat(100));
console.log(a.repeat(20));*/

/*/console.log(a.replace(/word/g, "gadoy"));
console.log(a.replace(/word/, "gadoy"));*/












var ism = prompt("Enter your name").trim()

console.log("salom" + " " + ${ism} + " " + "yaxshimisiz");
if(ism==""){
    alert("enter your name")
    var ism = prompt("You didnt enter your name");
}else if(ism.length <=3){
    alert("Name is very short")
     var ism = prompt("Enter your name").trim()
}
 var Why = prompt("why do you want to enter the institute")
 if(Why.length <=10) {
    alert("You entered too little information, please enter more than 10 characters.")
    console.log("You didn't write why you wanted to enter the institute.");
    
 }else{
    alert("Thanks")
 }
 console.log(Why.replaceAll("universitet", "Alicode"));
 