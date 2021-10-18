let contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")



export const sideTicketHolders = () => {
    eventHub.addEventListener(
        "sideTicketPurchased", 
        () => {
            contentTarget.innerHTML += `<div class="gawker person"></div>`
        })
}
