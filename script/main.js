
const btnAboutUS =document.querySelector('.text a.sobre')
const modalWrapper = document.querySelector('.modal-wrapper')
const btnClose = document.querySelector('.buttons .button.close')

btnAboutUS.addEventListener('click',(e)=>{
   modalWrapper.classList.add("active")
})
btnClose.addEventListener('click',(e)=>{
    modalWrapper.classList.remove("active")
})

 

