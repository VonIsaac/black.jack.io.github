//let welcomeEl = document.getElementById("welcome-el")

//let myName = "Von Isaac"
//let greeting = "Welcome back "

//welcomeEl.innerText = greeting + myName

//welcomeEl.innerText = welcomeEl.innerText + "👌"



//let firstName = "Von Isaac "
//let lastName = "Baban"

//function myName(){
   //console.log( firstName + lastName)
//}
 
//myName()


//let myPoints = 3

//function add3Points(){
   
   // myPoints = myPoints + 3
   
//}

//function remove1Points(){
 //myPoints = myPoints - 1
//}

//add3Points()
//add3Points()
//add3Points()

//remove1Points()
//remove1Points()
//console.log(myPoints)
 

//let firstCard = 10
//let secondCard = 12

//let sum = firstCard + secondCard

//if (sum < 21 ){
    //console.log("You want to draw a new card?")
//}

//else if (sum === 21 ){
   // console.log("You Got Black Jack")
//}
//else if (sum > 21 ){
   // console.log("You're Out Bitch!")
//}

//let age = 22

//if (age < 21 ){
   // console.log("Your not Allowed in this club")
//}


//else {
    //console.log("Welcome to the fucking club bitch!")
//}

//let age = 100

//if (age < 100 ){
   //console.log("Not Eligable")
//}

//else if (age === 100){
  // console.log("Oh Eto Card Sampal Mo Sa Muka Mo")
//}

//else if (age > 100 ){
  // console.log("Bawal nga sabe kulet neto oh")
//}


let firstCard = getRandomCard()
let secondCard = getRandomCard()
let hasBlackjack = false
let myCards = [firstCard,secondCard]
let sum = firstCard + secondCard
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let player = {
   name: "Per", 
   chips: 145
}



playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
   let randomNumber = Math.floor( Math.random()* 13 ) + 1

   if( randomNumber > 10 ){
      return 10 
   }

   else if( randomNumber === 1 ){
      return 11 
   }

   else{
      return randomNumber
   }
}


function startGame(){
   renderGame()
}


function renderGame(){

  

   if (sum <= 20 ) {
   message = "You want to draw a new card?"
      
   }

   else if (sum === 21 ){
      message = "You Got Black Jack"
      hasBlackjack = true
   }

   else{
      message = "Tangal Kana tanga"
      isAlive = false
   }

 
   messageEl.textContent = message

   sumEl.textContent = "Sum: " + sum
 
   //cardsEl.textContent =  "Cards:  " 

   for( let i = 0; i < myCards.length; i++){
         cardsEl.textContent = cardsEl.textContent + myCards[i] + " "
   }

}

function newCard(){

   if(isAlive === true || hasBlackjack === false) {

      let card = getRandomCard()

      sum = sum + card

      myCards.push(card)

      console.log(myCards)
      renderGame()

   }
}

