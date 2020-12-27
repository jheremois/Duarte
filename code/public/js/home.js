//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_Enter animation-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//

const hrs = document.querySelectorAll('.hrs')


const enter = ()=>{
    
    for( i=0; i < hrs.length; i++){
    
        hrs[i].style.width = '154px'

    }

}


setTimeout(() => {
    enter()
}, 200)



//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_Open Menu-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//

const menu = document.getElementById('menu')
const options = document.getElementById('options')
const inside = document.querySelectorAll('.option')

const open_menu = ()=>{

    if(options.style.height === '250px'){

        options.style.height = '0px'

    }
    else if(options.style.height !== '250px'){

        options.style.height = '250px'

    }

}

for (let i = 0; i < inside.length; i++) {

    inside[i].addEventListener('click', ()=> {

        if(options.style.height === '250px')
            options.style.height = '0px'

    })

}

menu.addEventListener('click', ()=> open_menu())



//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_Header position-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//

const header = document.getElementById('perma')
const hr_d = document.getElementById('hr2')


document.addEventListener('scroll', ()=>{

    if(window.outerWidth < 600){

        if (hr_d.getBoundingClientRect().top < 230) {

            header.style.width =  '100%'
            header.style.position = 'fixed'
            header.style.backgroundColor = '#1c2027'
            header.style.padding = '8px 0px 3px 0px'
            header.childNodes[0].style.width = '98%'

        }
        else if (hr_d.getBoundingClientRect().top > 220) {

            header.style.width =  'initial'
            header.style.position = 'initial'
            header.style.backgroundColor = 'transparent'
            header.style.padding = '20px'
            header.childNodes[0].style.width = '100%'

        }

    }

})

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_Pop up-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//

const dad = document.querySelectorAll('.dad')

document.addEventListener('scroll', ()=>{

    for (i = 0; i < dad.length; i++) {

        if (dad[i].getBoundingClientRect().top < 840) {
            dad[i].style.transform = 'scale(1)'
        }
        
    }

})


//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_Map-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//

const map = L.map('map').setView([18.4223445, -68.9697735], 16)


let icon = L.icon({

    iconUrl: '../images/loca.png',

    iconSize: [35, 35] 

})


L.tileLayer('http://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(map)

L.marker([18.4223445, -68.9697735], {icon: icon})
    .addTo(map)