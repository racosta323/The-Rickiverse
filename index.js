//cleaned up init a bit to simplify
//cleaned up fetch request
//removed button and replaced with dropdown menu; added JS to dropdown
//pull to specific API section



// page load

document.addEventListener("DOMContentLoaded", ()=>{
    // functions go here
    apiData()
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


//renders data and adds to DOM function


function rickList(characters){
    const results = characters.results
    const selectEl = document.querySelector("select")

    //populates options in dropdown
    results.forEach((rick) => {
        // creates an option for each rick
        let createOption = document.createElement("option")
        createOption.value = `${rick.id}`
        createOption.innerText = `${rick.name}`
        selectEl.add(createOption)

        //adds an event listener to options where value will udpate main img and left side
        selectEl.addEventListener('change', (e)=>{
            let targetRick = e.target.value
            if(targetRick === createOption.value){
                //cb fun?
                changeContents(rick.image, rick.name, rick.status, rick.location.name)
            }
        })
    })

    function changeContents(imgSrc, name, status, arch){
        //selects elements
        let rickImage = document.getElementById("rick-image")
        let leftDiv = document.querySelector(".left").children
        let rickName = leftDiv[0]
        let rickStatus = leftDiv[1]
        let rickArch = leftDiv[2]
        
        //updates each
        rickImage.src = `${imgSrc}`
        rickName.textContent = `Name: ${name}`
        rickStatus.textContent = `Status: ${status}`
        rickArch.textContent= `Location: ${arch}`
    }
}




