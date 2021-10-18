let foodTarget = document.querySelector(".food")
const foodHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    foodHub.addEventListener(
        "foodTicketPurchased",
        () => {
            foodTarget.innerHTML += `<div class="eater person"></div>`
        })
}