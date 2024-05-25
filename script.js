const score0El=document.querySelector('#score--0')
const score1El=document.getElementById('score--1')
const diceEl=document.querySelector('.dice')
const btnRoll=document.querySelector('.btn--roll')
const current0El=document.querySelector('#current--0')
const current1El=document.querySelector('#current--1')
const player0El=document.querySelector('.player--0')
const player1El=document.querySelector('.player--1')
const btnHold=document.querySelector('.btn--hold')
const btnNew=document.querySelector('.btn--new')

let scores,activePlayer,currentScore,playing

const init=function(){
    scores = [0,0]
    currentScore=0
    activePlayer=0
    playing=true
    score0El.textContent=0
    score1El.textContent=0
    current0El.textContent=0
    current1El.textContent=0
    diceEl.classList.add('hidden')
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
    




}
const switchPlayer=function(){
    currentScore=0
       document.getElementById(`current--${activePlayer}`).textContent=0
       activePlayer=activePlayer===0?1:0 
       player0El.classList.toggle('player--active')
       player1El.classList.toggle('player--active')
}



// grtelementbyclassname did not work 



// starting condition
init() 
// score0El.textContent=0
// score1El.textContent=0
// diceEl.classList.add('hidden')
// let currentScore=0
// let activePlayer=0
// let scores=[0,0]
// let playing=true

// rolling dicce functionality
btnRoll.addEventListener('click',function(){

   if(playing){
     // 1.genareting random dice roll 
     const dice=Math.trunc(Math.random()*6)+1
     console.log(dice)
 
     // 2.dispaly dice 
     diceEl.classList.remove('hidden')
     diceEl.src=`dice-${dice}.png`
 
     // 3.check for rolled dice1
     if(dice!==1){
         currentScore+=dice
 
         document.getElementById(`current--${activePlayer}`).textContent=currentScore
 
     }
     else{
     //    currentScore=0
     //    document.getElementById(`current--${activePlayer}`).textContent=0
     //    activePlayer=activePlayer===0?1:0 
     //    player0El.classList.toggle('player--active')
     //    player1El.classList.toggle('player--active')
     switchPlayer()
     }
   }
})


btnHold.addEventListener('click',function(){
   if(playing){
    scores[activePlayer]+=currentScore
    document.querySelector(`#score--${activePlayer}`).textContent=scores[activePlayer]
    
    if(scores[activePlayer]>=20){
        playing=false
        diceEl.classList.add('hidden')
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    }
    else{

     switchPlayer()
    }
   }
      

})
btnNew.addEventListener('click',init)






