let contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")



export const GameTicketHolders = () => {
    eventHub.addEventListener(
        "gameTicketPurchased", 
        () => {
            contentTarget.innerHTML += `<div class="player person"></div>`
        })
}

