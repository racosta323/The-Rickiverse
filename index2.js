document.addEventListener("DOMContentLoaded", ()=>{
    // getResponse()
//    renderData() 
    loadAPI()
    
})

function loadAPI(){
  fetch("https://rickandmortyapi.com/api/character/?name=rick") 
    .then(resp => resp.json())
    .then(data => {
        data.results.forEach(e=> {
           renderData(e)
           
        })
        console.log(data)
        listenForLike()
    });
}

function renderData(rick){
    //searches for elements
    const gridHalf = document.getElementById("half")
    const middleImg = document.getElementById("rick-image")

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

    createImg.addEventListener("click",(event)=>{
        nameEl.innerText = rick.name
        statusEl.innerText = rick.status
        originEl.innerText = rick.origin.name
        speciesEl.innerText = rick.species
        locationEl.innerText = rick.location.name
        middleImg.src = rick.image

        //from db.json
        const numLikes = document.getElementsByClassName("right")[0].querySelectorAll("h3")[2]
        console.log(numLikes)
        
        fetch("http://localhost:3000/results") 
            .then(resp => resp.json())
            .then(data => {
                data.forEach(e=> {
                console.log(e)
                
                })
        
    });
})

    // updates elements
    createDivs.className = "grid"
    createImg.src = `${rick.image}`
    createImg.alt = `Image of ${rick.name}`


    //adds to DOM
    createDivs.append(createImg)
    gridHalf.append(createDivs)

    //adds to db.json
    // addToDb(rick.name, rick.status, rick.species, rick.origin.name, rick.image) -- how do I stop from adding after refresh?
}


 //DB.JSON SECTION

 function listenForLike(){
    const likeButton = document.querySelectorAll("button")[0]
    likeButton.addEventListener("click", ()=>{
        const numLikes = document.getElementsByClassName("right")[0].querySelector("p")
        numLikes.innerText = "Number of Likes:"
        console.log(numLikes)
    }) 
 }


function addToDb(name, status, species, origin, url){
    //what we'll send to JSON
    const newRickObj = {
        name: `${name}`,
        status: `${status}`,
        species: `${species}`,
        origin: `${origin}`,
        image: `${url}`,
        likes: 1
    };

fetch('http://localhost:3000/results',{
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(newRickObj)
})
.then(resp =>resp.json())
.then(data => console.log(data))
} 










