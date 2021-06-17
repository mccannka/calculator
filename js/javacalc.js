// select the form
var form = document.getElementById("current");

// attach the event listener
form.addEventListener('submit', function (event) {
    // runs when form is submitted
    // stop the default action from happening (page reloading)
    event.preventDefault()

    const savingheld = document.getElementById("saving-held").value;
    const currentrate = document.getElementById("current-rate").value;
    const instant = document.getElementById("instant").value;

    console.log(currentrate, savingheld, instant)


    // Interet rate comparison // 

    let currentInterest = savingheld * currentrate;
    console.log(currentInterest)


    var proposedInterest = 0;

    /* UNCOMMENT HERE 

    // new data structure
    const providers = {
        "AIB": {
            "Instant": 0.01,
            "Regular": 1.50,
            "Fixed": 0.40,
        },
        "UB": {
            "Instant": 0.01,
            "Regular": 0.01,
            "Fixed": 0.50,
        },
        "DB": {
            "Instant": 0.01,
            "Regular": 0.01,
            "Fixed": 0.25,
        }
    }

    // the instant variable from the form
    const instant = "Fixed";


    // our data to return
    let biggestProvider = '';
    let biggestRate = 0;

    // iterate over providers
    for (let provider in providers) {
        // compare current rate against biggest rate
        if (providers[provider][instant] > biggestRate) {
            // assign new biggest rate
            biggestProvider = provider;
            // assign new biggest provider
            biggestRate = providers[provider][instant]
        }
    }

    // return the data
    console.log(
        biggestProvider,
        biggestRate
    )

    UNCOMMENT HERE  */
});