document.addEventListener("DOMContentLoaded", ()=>{
    
    
    
    loadAPI()
    // listenForLike()

  
})

function loadAPI(){
  fetch("http://localhost:3000/results") 
    .then(resp => resp.json())
    .then(data => {
        data.forEach(e=> {
            renderData(e)
            
    
        })
        console.log(data)
        // let numLikes = document.getElementsByClassName("right")[0].querySelectorAll("h3")[2]
        // console.log(numLikes)
        
       
        
    });
}

function renderData(rick){
    //searches for elements
    const gridHalf = document.getElementById("half")
    const middleImg = document.getElementById("rick-image")
    let numLikes = document.getElementsByClassName("right")[0].querySelectorAll("h3")[2]
    numLikes.innerText = 1
    const likeButton = document.querySelector("button")
    
    

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

    createImg.addEventListener("click",()=>{
        nameEl.innerText = rick.name
        statusEl.innerText = rick.status
        originEl.innerText = rick.origin
        speciesEl.innerText = rick.species
        locationEl.innerText = rick.location
        middleImg.src = rick.image
        numLikes.innerText = `${rick.likes}`

    
    likeButton.addEventListener("click", ()=> {increaseLikes(rick, numLikes)})
    })


    // updates elements
    createDivs.className = "card"
    createImg.src = `${rick.image}`
    createImg.alt = `Image of ${rick.name}`

    //adds to DOM
    createDivs.append(createImg)
    gridHalf.append(createDivs)

   

    
}


 //DB.JSON SECTION

//  function updateLikes(btn, p, toy){
//     //select the button and add event listener
//     // const btn = document.querySelectorAll("button")[1]
//     // console.log(btn)
    
//     btn.addEventListener('click', () =>{
//       console.log("I've been clicked")
//       //increment likes
//       console.log(p.innerText = ++toy.likes)
  
      
  
//       //get likes element
  
  
  
//       // toy.likes ++
//     })
//  }


function increaseLikes(ricks, likes){
    console.log(ricks, likes)

    console.log(likes.textContent) 
    likes.textContent = ++ricks.likes
    console.log(likes)

    // let numLikes = document.getElementsByClassName("right")[0].querySelectorAll("h3")[2]
    // console.log(numLikes)
    // const likeBtn = document.querySelector("button")
    // console.log(likeBtn) 


    // likeBtn.addEventListener("click", ()=>{

    //     console.log(numLikes)

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
    //     })
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












