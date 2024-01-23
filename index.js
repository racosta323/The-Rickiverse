//pulls out cb functions to simplify; updates like button so only chosen item is displayed; adds item to db.json


// page load

document.addEventListener("DOMContentLoaded", ()=>{
    // functions go here
    // apiData()
    // internalData()
    combinedData()
    
    // externalRicks = externalChar()
    // console.log(externalRicks)

    // let middleImg = document.getElementById("rick-image")

    // let middleImgSrc = middleImg.src
    // let middleImgAlt = middleImg.alt
    // console.log(middleImgAlt)

    // // console.log(middleImg, middleImgSrc)
    // console.log(middleImgSrc)
    // middleImgSrc = "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    
 })


// combined external data
function combinedData(){
    
    fetch("https://rickandmortyapi.com/api/character/?name=rick") 
    .then(resp => resp.json())
    .then(externalData => {
        // externalChar(externalData)
        debugger
        rickOptions(externalData)
        // submitListener(externalData)
        debugger
    });
    
    fetch("http://localhost:3000/results")
    .then(resp => resp.json())
    .then(internalData => {
        internalRicks(internalData)
        // likesBtn(internalData)
        likesListener(internalData)
    })
    // submitListener(externalData,internalData)
}

// pull from API
function apiData(){
    fetch("https://rickandmortyapi.com/api/character/?name=rick") 
    .then(resp => resp.json())
    .then(data => {
        data.forEach(e=>console.log(e))
        // externalChar(data)
        // rickOptions(data)
        // submitListener(data)
    })
}

//all characters from API
function externalChar(apiCharacters){
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
        // console.log(rick)

        // rick.addEventListener("click", ()=>{
        //     console.log("test")
        // })
        // dropdownListener(options, rick)
        
    })
    
}

// Adds options to dropdon
function rickOptions(apiCharacters){
    const results = externalChar(apiCharacters)
    const selectEl = document.querySelector("select")



    //TABLE FOR NOW
    //populates options in dropdown
    addOptions(results) 
    // console.log(results) 
    // console.log(document.getElementsByClassName("grid").children)
    
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




//like button section - NEEDS WORK
function likesBtn(rick, target){
    // const heroSrc = document.getElementsByClassName("middle")[0].firstElementChild.src
    const targetName = target
    // const heroName = document.getElementsByClassName("left")[0].firstElementChild.innerText
    const h3Likes = document.getElementsByClassName("right")[0].children[2]
    console.log(h3Likes)
    
    //shows likes from internal db.json
   outer: for(let i=0; i<rick.length; i++){
        const extLikes = rick[i].likes
        extRickName = rick[i].name
        if(extRickName === targetName){
            console.log(extLikes)
            h3Likes.textContent = `Number of likes: ${extLikes}`
            break outer;
        }
    } 
}


//LISTENERS

function likesListener(internal){ //NEEDS WORK
    const likeButton = document.querySelectorAll("button")[0]
    
    likeButton.addEventListener('click',()=>{

        //pulls internal ricks
        const intRicks = internalRicks(internal)
        console.log(intRicks)

        //update likes h3

    })
}


//image listener
// function imgListener(){
//     const half = document.querySelector("#half").querySelectorAll("img")
//     let middleImg = document.getElementById("rick-image")
    
//     // let middleImg = document.getElementsByClassName("middle")[0].firstElementChild
//     let middleImgSrc = middleImg.src
//     let middleImgAlt = middleImg.alt
//     // console.log(middleImgAlt)

//     // console.log(middleImg, middleImgSrc)
//     // console.log(middleImgSrc)

//     half.forEach(img => {
//         img.addEventListener('click', (e)=>{
//         console.log(e.target)    
//         let gridImgSrc = e.target.src
//         let gridImgName = e.target.name
//         console.log(gridImgName)

//             // changeText(gridImgSrc, name, status, origin, species, location)
//             // console.log(middleImg)
//             // gridImgSrc = e.target.src
//             // console.log(gridImgSrc)
//             // console.log(middleImgSrc)
//             // middleImgSrc = `${gridImgSrc}`
//             // middleImgAlt = `${gridAlt}`
//             // console.log(middleImgSrc)
//             // console.log(middleImg)
//         })
//     })
// }






    //iterate through
    // for(let i=0; i<half.length; i++){
    //     let gridImage = half[i]
    //     const middleImg = document.getElementsByClassName("middle")[0].firstElementChild.src
    //     console.log(gridImage, "middle image:", middleImg)

    //listener
    // half.addEventListener('click',()=>{console.log("something")})

    // }


function submitListener(exData){ //NEEDS WORK
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
    // addToDb(rickEntryName, rickEntryStatus, rickEntrySpecies, rickEntryOrigin, rickEntryImg)
}

// function addImg(imgSrc, imgAlt){
//     const photoArea = document.getElementById("half")
//     const imgEl = document.createElement("img")
    
//     imgEl.src = `${imgSrc}`
//     imgEl.alt = `Image of ${imgAlt}`
//     photoArea.appendChild(imgEl)
// }
//end of like button section

//adds to db.json - NEEDS WORK
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

//Populates ricks into dropdown AND images into grid
function createOption(option){

    //TABLE FOR NOW
    //create for dropdown
    // const selectEl = document.querySelector("select")
    // let createOption = document.createElement("option")
    // createOption.value = `${option.id}`
    // createOption.innerText = `${option.name}`
    // selectEl.add(createOption)
    
    //create for grid
    const half = document.querySelector("#half")
    let createDivImg = document.createElement("div")
    createDivImg.className = "grid"
    
    let createImg = document.createElement("img")
    createImg.src = `${option.image}`
    createImg.alt = `Image of ${option.name}`
    half.append(createDivImg.appendChild(createImg))
    
}

function photoListener(){
    let findGridDiv = document.getElementsByClassName("grid")
    console.log(findGridDiv)
    console.log(findGridDiv[0])
    console.log(findGridDiv[1])

    for(i=0; i<findGridDiv.length; i++){
        debugger
        console.log(findGridDiv[i])
        debugger
    }

}

// function createLikes(option){
//     const h3Likes = document.getElementsByClassName("right")[0].children[2]
//     let createOption = document.createElement("option")
//     createOption.value = `${option.id}`
//     createOption.innerText = `${option.name}`
//     selectEl.add(createOption)
//     return createOption
// }

//TABLE FOR NOW
// function dropdownListener(allRicks, everyOne){
//     const selectEl = document.querySelector("select")
//     selectEl.addEventListener('change', (e)=>{
//         let targetRick = e.target.value
//         // changeContent(targetRick, allRicks, everyOne)
//         console.log(targetRick)
//     })
// }


//PROBABLY WON'T KEEP NOW THAT IMAGES ARE ON GRID
// function changeContent(target, rickArry, one){
//     if(target === rickArry.value){
//         changeText(one.image, one.name, one.status, one.origin.name, one.species, one.location.name)
//     }
// }

function changeText(imgSrc, name, status, origin, species, location){ //NEEDS WORK
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
