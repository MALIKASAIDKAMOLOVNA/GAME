const container = document.getElementById('container')
const cardLength = 16
const cards = []



let previouseShownCard = undefined


let icons = [

    "fa-book",
    "fa-trash",
    "fa-pen",
    "fa-phone",
    "fa-home",
    "fa-moon",
    "fa-sun",
    "fa-earth",

]

icons.push(...icons);



for(let i =0; i < 100; i++){
    const index1 = Math.floor(Math.random() * icons.length)
    const index2 = Math.floor(Math.random() * icons.length)


    const temp = icons[index1]
    icons[index1] = icons[index2]
    icons[index2] = temp
}




for(let i = 0; i < cardLength; i++){
    let cardElement = document.createElement("div")
    cardElement.classList.add("card")


    cardElement.innerHTML = `
    
    <div class="front">
    <i class="fa-solid ${icons[i]}"></i>
    </div>

    <div class="back">
        <small>Click me...</small>
    </div>
    
    `

    container.append(cardElement)


    cardElement.addEventListener("click", () =>{
        if(!cardElement.classList.contains("show")){
            cardElement.classList.add("show")
        }


        if(previouseShownCard == undefined){
            previouseShownCard = cardElement
        }else{
            let firstClick = previouseShownCard.querySelector("i").classList[1]
            let secondClick = cardElement.querySelector("i").classList[1]


            if(firstClick !== secondClick){
                let temp = previouseShownCard
                setTimeout(() =>{
                    temp.classList.remove("show")
                    cardElement.classList.remove("show")
                }, 1000)
            }


            previouseShownCard = undefined
        }
    })

}