
const modal=document.querySelector('.modal')
const btnSm=document.querySelectorAll('.show-modal')
const overlay=document.querySelector('.overlay')
const closeModal=document.querySelector('.close-modal')
// console.log(modal)
// console.log(btnSm)

const openModal=function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const endModal=function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
for(let i=0;i<btnSm.length;i++){
btnSm[i].addEventListener('click',openModal)

    closeModal.addEventListener('click',endModal)

    overlay.addEventListener('click',endModal)



    // keypress-global Event
    document.addEventListener('keydown',function(e){
         console.log(e.key)
        if(e.key==='Escape' && (!modal.classList.contains('hidden'))){
            
        
            endModal()


        }
    })
}


