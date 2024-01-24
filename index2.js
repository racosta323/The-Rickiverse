document.addEventListener("DOMContentLoaded", ()=>{
    loadAPI()
})

function loadAPI(){
  fetch("http://localhost:3000/results") 
    .then(resp => resp.json())
    .then(data => {
        data.forEach(e=> {
            renderData(e)
        })
    });
}

function renderData(rick){
    //searches for elements
    const gridHalf = document.getElementById("half")
    const middleImg = document.getElementById("rick-image")
    let numLikes = document.getElementsByClassName("right")[0].querySelectorAll("h3")[2]
    const likeButton = document.querySelector("button")
    const dropdown = document.querySelector("select")
    const form = document.querySelector("form")
    
    //left side
    let nameEl = document.getElementsByClassName("left")[0].querySelector("h3")
    let statusEl = document.getElementsByClassName("left")[0].getElementsByTagName("h3")[1]
    let originEl = document.getElementsByClassName("left")[0].getElementsByTagName("h3")[2]

    //right side
    let speciesEl = document.getElementsByClassName("right")[0].querySelector("h3")
    let locationEl = document.getElementsByClassName("right")[0].getElementsByTagName("h3")[1]

    //creates elements
    const createDivs = document.createElement("div")
    const createImg = document.createElement("img")
    const createOption = document.createElement("option")

    createImg.addEventListener("click",(e)=>{
        nameEl.innerText = rick.name
        statusEl.innerText = rick.status
        originEl.innerText = rick.origin
        speciesEl.innerText = rick.species
        locationEl.innerText = rick.location
        middleImg.src = rick.image
        numLikes.innerText = `${rick.likes}`
        dropdown.selectedIndex = 0
        createOption.value = rick.name 
    })

    likeButton.addEventListener("click", ()=> {increaseLikes(rick, numLikes)})

    // updates elements
    createDivs.className = "card"
    createImg.src = `${rick.image}`
    createImg.alt = `Image of ${rick.name}`
    createOption.innerText = rick.name

    //adds to DOM
    createDivs.append(createImg)
    gridHalf.append(createDivs)
    dropdown.append(createOption)

    
    dropdown.addEventListener("change",(event)=>{

        if(event.target.value === rick.name){
            nameEl.innerText = event.target.value
            statusEl.innerText = rick.status
            originEl.innerText = rick.origin
            speciesEl.innerText = rick.species
            locationEl.innerText = rick.location
            middleImg.src = rick.image
            numLikes.innerText = `${rick.likes}`
        }
    })
}


 //DB.JSON SECTION

function increaseLikes(ricks, likes){
    console.log(ricks, likes)
    const rickH3 = document.getElementsByClassName("left")[0].querySelector("h3").innerText

    if(rickH3 === ricks.name){
        console.log(rickH3, ricks.name)

        console.log(likes.textContent) 
        likes.textContent = ++ricks.likes
        console.log(likes)

        fetch(`http://localhost:3000/results/${ricks.id}`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                likes: ricks.likes
                })
            })
            .then(resp =>resp.json())
            .then(data => {
               
                console.log(data.likes)
            })  
    }
}

// How I added from API
// function addToDb(name, status, species, origin, url,location){
//     //what we'll send to JSON
//     const newRicksObj = {
//         name: `${name}`,
//         status: `${status}`,
//         species: `${species}`,
//         origin: `${origin}`,
//         image: `${url}`,
//         location: `${location.name}`,
//         likes: 1
//     };
// }    












