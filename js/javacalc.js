// select the form
var form = document.getElementById("current");

// attach the event listener
form.addEventListener('submit', function(event) {
    // runs when form is submitted
    // stop the default action from happening (page reloading)
    event.preventDefault()

    // do all your code here
    
    const savingheld = document.getElementById("saving-held").value;
    console.log(savingheld)
    const currentrate = document.getElementById("current-rate").value;
    console.log(currentrate)
    const instant = document.getElementById("instant").value;
    console.log (instant)

// Interet rate comparison // 

let currentInterest = savingheld*currentrate; 
console.log(currentInterest)

let proposedInterest = 



});



