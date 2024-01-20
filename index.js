// page load
function init(){
    // apiData()
    document.addEventListener("DOMContentLoaded", ()=>{
        // functions go here
        const button = document.getElementById("dropbtn")
        console.log("checking page load")
        btnlistener(button)
       
    })  
}

//declare variables



//select from HTML


//BUTTON STUFF

//button listener
function btnlistener(button){
    button.addEventListener("click", ()=>{
        buttonMenu()
        //what will we have this button do?
    })
}

function buttonMenu(){
    document.getElementById("myDropdown").classList.toggle("show")
}

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }


//pull from API
function apiData(){
    const response = fetch("https://rickandmortyapi.com/api/character")
    .then(resp => resp.json())
    .then(data => console.log(data))
}




//renders data and adds to DOM function


//add a new 








init()