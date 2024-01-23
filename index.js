//pulls out cb functions to simplify; updates like button so only chosen item is displayed; adds item to db.json


// page load

document.addEventListener("DOMContentLoaded", ()=>{
    // functions go here
    // apiData()
    // internalData()
    combinedData()
    // externalRicks = externalChar()
    // console.log(externalRicks)

    const h3Likes = document.getElementsByClassName("right")[0].children[2]
 })

let externalRicks;


// combined external data
function combinedData(){
    fetch("https://rickandmortyapi.com/api/character/?name=rick") 
    .then(resp => resp.json())
    .then(externalData => {
        externalChar(externalData)
        rickOptions(externalData)
        submitListener(externalData)
    })
    

    fetch("http://localhost:3000/results")
    .then(resp => resp.json())
    .then(internalData => {
        internalRicks(internalData)
        // likesBtn(internalData)
        likesListener(internalData)
    })
    // submitListener(externalData,internalData)
}

//pull from API
// function apiData(){
//     fetch("https://rickandmortyapi.com/api/character/?name=rick") 
//     .then(resp => resp.json())
//     .then(data => {
//         externalChar(data)
//         rickOptions(data)
//         submitListener(data)
//     })
// }
//all characters from API
function externalChar(apiCharacters){
    console.log(apiCharacters.results)
    let externalRickCharsResults = apiCharacters.results
    return externalRickCharsResults
    // return apiCharacters.results
}

//adds options
function addOptions(characters){
    characters.forEach((rick)=>{
        const options = createOption(rick)
        
        const rickImgSrc = rick.image
        const rickName = rick.name
        dropdownListener(options, rick)
    })
}


//Adds options to dropdon
function rickOptions(apiCharacters){
    const results = externalChar(apiCharacters)
    const selectEl = document.querySelector("select")

    //populates options in dropdown
    addOptions(results)        
}

//pull from db.json
// function internalData(){
//     fetch("http://localhost:3000/results")
//     .then(resp => resp.json())
//     .then(data => {
//         internalRicks(data)
//     })
// }



// Returns all Ricks from internal db.json
function internalRicks(internalChar){
    return internalChar
}




//like button section
function likesBtn(rick, target){
    // const heroSrc = document.getElementsByClassName("middle")[0].firstElementChild.src
    const targetName = target
    // const heroName = document.getElementsByClassName("left")[0].firstElementChild.innerText
    const h3Likes = document.getElementsByClassName("right")[0].children[2]
    console.log(h3Likes)
    
    //shows likes from internal db.json
   outer: for(let i=0; i<rick.length; i++){
    debugger
        const extLikes = rick[i].likes
        extRickName = rick[i].name
        if(extRickName === targetName){
            console.log(extLikes)
            h3Likes.textContent = `Number of likes: ${extLikes}`
            break outer;
        }
    } 
}


function likesListener(internal){
    const likeButton = document.querySelectorAll("button")[0]
    
    likeButton.addEventListener('click',()=>{

        //pulls internal ricks
        const intRicks = internalRicks(internal)
        console.log(intRicks)

        //update likes h3

    })
}



function submitListener(exData){
    const submitButton = document.querySelectorAll("button")[1]
    
    submitButton.addEventListener("click",(e)=>{
 
        //pulls name from DOM
        const rickName = document.querySelector(".left").children[0].innerText
        
        //pulls external ricks
        const exRicks = externalChar(exData)

        //looks through img in grid
        const imgSection = document.getElementById('half').querySelectorAll("img")
        
        console.log(e)

         //loop through external
        // outer: for (let i=0; i<exRicks.length; i++){

        //     //images from API
        //     const rickEntryName = exRicks[i].name
        //     const rickEntryImg = exRicks[i].image
        //     const rickEntryStatus = exRicks[i].status
        //     const rickEntrySpecies = exRicks[i].species
        //     const rickEntryOrigin = exRicks[i].origin
        //     // console.log(rickEntryName, rickEntryImg, rickEntryStatus, rickEntrySpecies, rickEntryOrigin)
            
        //     for(let i=0; i<imgSection.length; i++){ //colon before the is a js "label"
        //         const gridImage = imgSection[i].src
        //         const middleImg = document.getElementsByClassName("middle")[0].firstElementChild.src
        //         console.log(gridImage, middleImg)
        //         if(gridImage === middleImg){
        //             console.log(gridImage, rickEntryImg)
        //             console.log("Already exists")
        //             break outer;
        //         } else{
        //             console.log(middleImg, rickEntryImg)
        //             addImg(rickEntryImg, rickEntryName)
        //             addToDb(rickEntryName, rickEntryStatus, rickEntrySpecies, rickEntryOrigin, rickEntryImg)
        //             break outer;
        //         }
        //     }
        // }
    
        //         if(gridImage === rickEntryImg){
        //             console.log(gridImage)
        //             debugger
        //             break outer;
        //         //     console.log(rickEntryImg)
        //         //     console.log("Already exists")
        //         //     break outer;
        //         // } else if(rickEntryName === rickName){
        //         //     addImg(rickEntryImg, rickEntryName)
        //         //     addToDb(rickEntryName, rickEntryStatus, rickEntrySpecies, rickEntryOrigin, rickEntryImg)
        //         }
        //     }
        // })
    })
}  

function addImgToGrid (){
    addImg(rickEntryImg, rickEntryName)
    addToDb(rickEntryName, rickEntryStatus, rickEntrySpecies, rickEntryOrigin, rickEntryImg)
}

function addImg(imgSrc, imgAlt){
    const photoArea = document.getElementById("half")
    const imgEl = document.createElement("img")
    
    imgEl.src = `${imgSrc}`
    imgEl.alt = `Image of ${imgAlt}`
    photoArea.appendChild(imgEl)
}
//end of like button section

//adds to db.json
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


//callback functions

function createOption(option){
    //create for dropdown
    const selectEl = document.querySelector("select")
    let createOption = document.createElement("option")
    createOption.value = `${option.id}`
    createOption.innerText = `${option.name}`
    selectEl.add(createOption)
    
    //create for grid
    const half = document.querySelector("#half")
    let createImg = document.createElement("img")
    createImg.src = `${option.image}`
    createImg.alt = `Image of ${option.name}`
    half.append(createImg)
}

function createLikes(option){
    const h3Likes = document.getElementsByClassName("right")[0].children[2]
    let createOption = document.createElement("option")
    createOption.value = `${option.id}`
    createOption.innerText = `${option.name}`
    selectEl.add(createOption)
    return createOption
}


function dropdownListener(allRicks, everyOne){
    const selectEl = document.querySelector("select")
    selectEl.addEventListener('change', (e)=>{
        let targetRick = e.target.value
        changeContent(targetRick, allRicks, everyOne)

    })
}



function changeContent(target, rickArry, one){
    if(target === rickArry.value){
        changeText(one.image, one.name, one.status, one.origin.name, one.species, one.location.name)
    }
}

function changeText(imgSrc, name, status, origin, species, location){
    //selects elements
    let rickImage = document.getElementById("rick-image")
    //left side
    let leftDiv = document.querySelector(".left").children
    let rickName = leftDiv[0]
    let rickStatus = leftDiv[1]
    let rickOrigin = leftDiv[2]
    
    //right side
    let rightDiv = document.querySelector(".right").children
    let rickSpecies = rightDiv[0]
    let rickLocation = rightDiv[1]

    //updates each
    rickImage.src = `${imgSrc}`
    rickName.textContent = `${name}` //can't add text in front of -- will break the dropdown event listener
    rickStatus.textContent = `Status: ${status}`
    rickOrigin.textContent= `Origin: ${origin}`

    rickSpecies.textContent = `Species: ${species}`
    rickLocation.textContent = `Location: ${location}`
}
