// console.log(document.querySelector('.message'))
// console.log(document.querySelector('.message').textContent)

// dom - documnet object model
// dom and dom manipulation-interacting with web page 

// document.querySelector('.message').textContent='correct number'
// document.querySelector('.score').textContent=20
// document.querySelector('.guess').value
// console.log(document.querySelector('.guess').value )
      

// const guess=document.querySelector('.guess').value
// console.log(typeof(guess))


// implimenting game logic
const seccretNumber=Math.trunc(Math.random()*20+1)
let score=20
let highScore=0
const displaymessage=function(message){
    document.querySelector('.message').textContent=message

}
// document.querySelector('.number').textContent=seccretNumber
// console.log(seccretNumber)

// handling dom events 
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value)
    console.log(guess,typeof guess)
    if(!guess)
    {
     
        // document.querySelector('.message').textContent='no number'
        displaymessage('no number')
        
    }
    else if(guess===seccretNumber){
        // document.querySelector('.message').textContent='correct Number'
        displaymessage('coorect number')
        document.querySelector('.number').textContent=seccretNumber
        document.querySelector('body').style.background="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6muVKT-Xb7Lsw2nkRuzlNutRdVXIJgotCxnbQzLZGQA&s')"                   
        // backgroundimage="url('')"
        document.querySelector('.number').style.width='30rem'
        if(score>highScore){
            highScore=score
            document.querySelector('.highscore').textContent=highScore
        }
    }
    else if(guess!==seccretNumber){
        if(score>1){
        //    document.querySelector('.message').textContent=guess>seccretNumber?'to high':'to low'
           displaymessage(guess>seccretNumber?'too high':'too low')
           score--
           document.querySelector('.score').textContent=score
            
        }
        else{
            // document.querySelector('.message').textContent='u lost the game'
            displaymessage('u lost the game')
            document.querySelector('.score').textContent=0
        }
    }
    // else if(guess<seccretNumber){
    //     if(score>1){
    //         document.querySelector('.message').textContent='to low'
    //         score--
    //         document.querySelector('.score').textContent=score
    //     }
    //      else {
    //         document.querySelector('.message').textContent=' u lost the game'
    //         document.querySelector('.score').textContent=0
    //      }
    // }
    // else if(guess>seccretNumber){
    //     if(score>1){
    //         document.querySelector('.message').textContent='to high'
    //         score--
    //         document.querySelector('.score').textContent=score
    //     }
    //     else{
    //         document.querySelector('.message').textContent='u lost the game'
    //         document.querySelector('.score').textContent=0
    //     }
    
    // }


})


document.querySelector('.again').addEventListener('click',function()
{
    const seccretNumber=Math.trunc(Math.random()*20+1)
    score=20
     document.querySelector('.message').textContent='start guesing....'
    displaymessage('start guessing........')
    document.querySelector('.guess').value=''
    document.querySelector('.number').textContent='?'
     document.querySelector('body').style.backgroundColor= '#222';
})







