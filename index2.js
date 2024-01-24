document.addEventListener("DOMContentLoaded", ()=>{
    // getResponse()
//    renderData() 
    loadAPI()
    
})

function loadAPI(){
  fetch("http://localhost:3000/results") 
    .then(resp => resp.json())
    .then(data => {
        data.forEach(e=> {
           renderData(e)
           
        })
        console.log(data)
        
    });
}

function renderData(rick){
    //searches for elements
    const gridHalf = document.getElementById("half")
    const middleImg = document.getElementById("rick-image")
    const numLikes = document.getElementsByClassName("right")[0].querySelectorAll("h3")[2]
    numLikes.innerText = "Number of Likes: 0"
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
        numLikes.innerText = `Number of Likes: ${rick.likes}`
    })


    // updates elements
    createDivs.className = "grid"
   
    createImg.src = `${rick.image}`

    createImg.alt = `Image of ${rick.name}`


    //adds to DOM
    createDivs.append(createImg)
    gridHalf.append(createDivs)

    // listenForLike(likeButton, numLikes, rick)
    
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
 function listenForLike(likeBtn, numLikes, rick){

    likeBtn.addEventListener("click", ()=>{
        console.log(rick.likes)
        console.log(numLikes)
        
        numLikes.innerText = `Number of Likes: ${++rick.likes}`
        
    })    

    // likeBtn.addEventListener("click", ()=>{
    //     console.log(numLikes)

    // //     fetch(`http://localhost:3000/results/${rick.id}`,{
    // //     method: "PATCH",
    // //     headers: {
    // //         'Content-Type': 'application/json',
    // //     },
    // //     body: JSON.stringify({
    // //         likes: rick.likes
    // //     })
    // //     })
    // //     .then(resp =>resp.json())
    // //     .then(data => likesElement.textContent = `${data}`) 
    // // }) 
    // })
 }    

// How I added from API
// function addToDb(name, status, species, origin, url,location){
//     //what we'll send to JSON
//     const newRickObj = {
//         name: `${name}`,
//         status: `${status}`,
//         species: `${species}`,
//         origin: `${origin}`,
//         image: `${url}`,
//         location: `${location.name}`,
//         likes: 1
//     };
// }    












