var z = 1 // vi använder inte längre var för att let och konst är bättre

let y = 5 // let är en muterbar variabel
const x = 10 // const är en omuterbar variabel

const stringValue = 'jag är en string'
const numberValue = 23283
const boolValue = true // false

const undefinedValue = undefined
const nullValue = null
const notANumber = NaN // är fortfarande ett nummer


const arrayValue = []

arrayValue.push('äpple')
arrayValue.push(100)
arrayValue.push(true)

const mapValue = new Map()

mapValue.set(undefined, NaN)
mapValue.set(undefined, 100)

const setValue = new Set()

setValue.add(1)

const objectvalue = {
    name: 'Jesper',
    springa: function () {
        console.log('Jag springer så himla fort!')
    },
    favouriteFruits: ['äpple', 'granny smith', 'red velvet cake']
}


for(let key in objectvalue) {
    console.log(objectvalue[key])

    
}

for(let i = 0 ; i < 100 ; i++) {

}

while(false) {

}

do{

}while(false)


let win = false

win = true 

function horseFood() {
    console.log("hästmat")
}

if(win === true) {
    // Lägg till text i element för att visa att vi vann
    // document.querySelector('.announce').innerHTML = 'du vann'
    // document.querySelector('.announce').innerHTML = 'du vann 1'
    // document.querySelector('.announce').innerHTML = 'du vann 2'

    let announce = document.querySelector('.announce')
    let koala = document.querySelector('.btn')
    const extraText = document.querySelector('.extratext')

    announce.innerHTML = 'hejhej. nu vann du!'
    announce.innerHTML = 'hejhej. du vann igen!'

    announce.style = 'background-Color: dodgerblue;'

    const summaEtt = 200
    const summaTvå = 450

    koala.addEventListener('click', () => 
    {
        // if(extraText.style.visibility === 'visible') {
        //     extraText.style.visibility = 'hidden'
        // }
        // else {
        //     extraText.style.visibility = 'visible'
        // }

        // extraText.classList.toggle('is-hidden')

        const popup = document.createElement('div')
        popup.style.width = '500px'
        popup.style.height = '500px'
        popup.style.backgroundColor = 'salmon'
        popup.innerHTML = 'jag är en popup!'
        popup.style.position = 'absolute'
        popup.style.left = '250px'
        popup.style.top = '250px'

        document.body.appendChild(popup)
    })
    
}
else if(win === false) {
    // Lägg till text i element för att visa att vi förlorade
    document.querySelector('.announce').innerHTML = 'du förlorade'
}


// const ourBox = document.querySelector('.box')
// const myInput = document.createElement('textarea')
// myInput.value = 'här har jag text jag vill stoppa in i min textarea'

// ourBox.appendChild(myInput)