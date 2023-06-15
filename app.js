// All questions are Yes or No. or Y/N. Use .toUpperCase
console.log("guessing game")
''
let userName = prompt("What is your name?");
let userNameReply = alert("Hi " + userName);
let userFeelings = prompt("How are you feeling today?");
let userFeelingsReply = alert("Yeah, I feel " + userFeelings + " sometimes too");
let userAge = prompt("How old are you?");
let userAgeReply= alert ("Okay, that's cool!");
let userChoice = prompt("Would you like to know a bit about me?");
let userChoiceReply= alert("Awesome, lets get started ,read on to find out more!");

//Yes-no questions.
function guessingGame(
    ){
function myHeight(
){
        let myHeight= prompt("Am I 5'4?").toLowerCase(); 
        while (myHeight!="yes" && myHeight!="no"){
            alert ("Please answer yes or no");
            myHeight= prompt("Am I 5'4?") .toLowerCase();
        }
        if (myHeight==="yes") {
            alert ("Well done " + userName);
        } else if (myHeight==="no"){
        alert ("That's right, I am 5'4")
    }else {
        alert ("please answer yes or no");
    }}
myHeight();
function kidsNames(
){
    let mySonName= prompt ("Is my son called Malvin?");
if (mySonName==="No") {
alert ("Correct! His name is Ez!");    
}else alert("That's right, his name is Ez")
let myDaughterName= prompt("Is my Daughter called Malvina?");
if (myDaughterName==="No"){
    alert("Correct! her name is Ky!");   
} else alert("That's not right, her name is Ky");
}
kidsNames();
function myHobbies(
){
let myHobby=prompt("Do I rollerskate?");
if (myHobby==="yes"){
    alert("That's right, it's alot of fun!");
}   else alert("Not quite right, try again");
};
myHobbies();

let correctNumber = 9;
let attempt = 4


while (attempt > 0) {
let guess = +prompt("guess number between 1-10. You have 4 attempts");
if (guess === correctNumber) {
alert("Yay! That's the correct number");
break;
} else if (guess > correctNumber){
alert("Too high, try again");
} else{
alert ("Too low! Try again");
}
attempt--;
    }
    if(attempt===0) {
        alert("Out of tires, the correct number is 9");
    }


}
//missing - add alerts to give response to user.
//add alert "response to user input" check chat.