const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

let totalTickets = 0

eventHub.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        switch(itemClicked.id) {
            case "rideTicket":
                const rideEvent = new CustomEvent("rideTicketPurchased")
                eventHub.dispatchEvent(rideEvent)
                totalTickets += 1 
                break
            case "foodTicket":
                const foodEvent = new CustomEvent("foodTicketPurchased")
                eventHub.dispatchEvent(foodEvent)
                totalTickets += 1 
                break
            case "gameTicket":
                const gameEvent = new CustomEvent("gameTicketPurchased")
                eventHub.dispatchEvent(gameEvent)
                totalTickets += 1 
                break
            case "sideshowTicket":
                const sideEvent = new CustomEvent("sideTicketPurchased")
                eventHub.dispatchEvent(sideEvent)
                totalTickets += 1 
                break
            case "packageTicket":
                const packageEvent = new CustomEvent("packageTicketPurchased")
                eventHub.dispatchEvent(packageEvent)
                totalTickets += 1 
                break
        }
        TicketBooth() // have to involk the ticketbooth function in order to updat the ${totalTickets} - html amount
    }
)


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="packageTicket">Full Package Ticket</button>
            <div>Total tickets Purchased: ${totalTickets} </div> 
        </div>
    `
}

