

const popUp = document.querySelector('.card__content')
// console.log (popUp)

const addBtn = document.querySelector('.add__button')
// console.log(addBtn)

const toggleNoti = document.querySelector('.hidden')
// console.log(toggleNoti)

const hideNoti = document.querySelector('.cta__button')



function switchState1 (){
    toggleNoti.classList.replace('hidden','show')
    console.log('switchState1 success!!')
    
}

// switchState2 is using .toggle function, hence it will show or hide the 
//  notification card when 'add' button is pressed everytime
function switchState2 (){
    toggleNoti.classList.toggle('show')
    console.log('switchState2 success!!')
}

function closeState(){
    toggleNoti.classList.replace('show','hidden')
    console.log('closeState success!!')
    
}



addBtn.addEventListener('click', ()=>console.log('Im clicked Yayyy'))
addBtn.addEventListener('click', ()=> switchState2())
hideNoti.addEventListener('click',()=>closeState())
