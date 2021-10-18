const eventHub = document.querySelector("#state-fair")
let rideTarget = document.querySelector(".rides")
let gameTarget = document.querySelector(".games")
let sideTarget = document.querySelector(".sideshow")
let foodTarget = document.querySelector(".food")

export const PackageTicketHolders = () => {
    eventHub.addEventListener(
        "packageTicketPurchased",
        () => {
            rideTarget.innerHTML += `<div class="bigSpender person"></div>`
            gameTarget.innerHTML +=`<div class="bigSpender person"></div>`
            sideTarget.innerHTML += `<div class="bigSpender person"></div>`
            foodTarget.innerHTML += `<div class="bigSpender person"></div>`
        }
    )
}

