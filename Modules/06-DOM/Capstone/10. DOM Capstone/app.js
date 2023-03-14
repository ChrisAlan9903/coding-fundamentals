
const btn = document.querySelector('#part-0 .contact-button')
console.log(btn)

const navBar = document.querySelector('.nav-bars')
console.log(navBar)

const webPage = document.querySelector('body')

navBar.classList.add('slide-in')

// btn.addEventListener('click',(e)=>{

//     if (navBar.classList.contains('slide-in')){
//         navBar.classList.replace('slide-in','slide-out')
//     }else if(navBar.classList.contains('slide-out')){
//         navBar.classList.replace('slide-out','slide-in')
//     }
// })

window.addEventListener('scroll', (e)=>{

        // console.log(window.scrollY)

    if(window.scrollY> 100){
        if(navBar.classList.contains('slide-in')){
            navBar.classList.replace('slide-in','slide-out')
        }else{
            navBar.classList.add('slide-out')
        }
    }else{
        if(navBar.classList.contains('slide-out')){
            navBar.classList.replace('slide-out','slide-in')
        }else {
            navBar.classList.add('slide-in')
        }
    }
})

webPage.addEventListener('mousemove', (e)=>{

    console.log(e.clientY)
    if(e.clientY <= 100 ||window.scrollY <= 100){
        if(navBar.classList.contains('slide-out')){
            navBar.classList.replace('slide-out','slide-in')
        }else {
            navBar.classList.add('slide-in')
        }
        console.log('IM CUMMING')
    }else{
        if(e.clientY > 100){
            if(navBar.classList.contains('slide-in')){
                navBar.classList.replace('slide-in','slide-out')


            }else{
                navBar.classList.add('slide-out') 
        }
        }
    }
})
