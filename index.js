//updates row section to dynamically update when item chosen from dropdown
//adds call to db.json
//displays likes
//creates event listener on like button; updates image section


// page load

document.addEventListener("DOMContentLoaded", ()=>{
    // functions go here
    apiData()
    internalData()
    addImg()

})


//pull from API
function apiData(){
    fetch("https://rickandmortyapi.com/api/character/?name=rick") 
    .then(resp => resp.json())
    .then(data => {
        // console.log(data)
        rickList(data)
    }) //replace console log with render function; pass data 
}


//Loops through API data
function rickList(apiCharacters){
    const results = apiCharacters.results
    const selectEl = document.querySelector("select")

    //populates options in dropdown
    results.forEach((rick) => {
        // creates an option for each rick
        const options = createOption(rick)

        //listener on dropdown list
        dropdownListener(options, rick)
    })
}


//pull from db.json
function internalData(){
    fetch("http://localhost:3000/results")
    .then(resp => resp.json())
    .then(data => {
        // console.log(data)
        internalRicks(data)
    })
}


//loops through internal db.json

function internalRicks(internalChar){
    const internalRicks = internalChar

    internalRicks.forEach(rick=>{
        likesBtn(rick)
        
        //put your internal rick functions here
    })

    
}

//like button section
function likesBtn(rick){
    const heroSrc = document.getElementsByClassName("middle")[0].firstElementChild.src
    const heroName = document.getElementsByClassName("left")[0].firstElementChild.innerText
    const pLikes = document.getElementsByClassName("right")[0].querySelector("p")
    

    if(rick.name === heroName){
        pLikes.textContent += `${rick.likes}`
    }       
    likeListener()
}

function likeListener(){
    const button = document.querySelector("button")
    // console.log(pLikes)
    button.addEventListener("click",(e)=>{
        let nameSrc = e.target
        let rickName = document.querySelector(".left").children[0]
    })
}

function addImg(){
    const photoArea = document.getElementById("half")
    const imgEl = document.createElement("img")
    
    imgEl.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Gwj8FswCEddpx-dprUrrsOAjhFnd9UKIBA&usqp=CAU"
    photoArea.appendChild(imgEl)

}
//end of like button section




//callback functions

function createOption(option){
    const selectEl = document.querySelector("select")
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
    // console.log(target, rickArry.value)
    if(target === rickArry.value){
        changeText(one.image, one.name, one.status, one.location.name)
    }
}

function changeText(imgSrc, name, status, arch){
    //selects elements
    let rickImage = document.getElementById("rick-image")
    let leftDiv = document.querySelector(".left").children
    let rickName = leftDiv[0]
    let rickStatus = leftDiv[1]
    let rickArch = leftDiv[2]
    
    //updates each
    rickImage.src = `${imgSrc}`
    rickName.textContent = `${name}`
    rickStatus.textContent = `Status: ${status}`
    rickArch.textContent= `Location: ${arch}`
}
