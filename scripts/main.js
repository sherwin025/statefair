// Import and invoke the ticket booth component function
import { TicketBooth } from "./TicketBooth.js";
import { RideTicketHolders} from "./rides/RideTicketHolders.js"
import { FoodTicketHolders} from "./food/foodTicketHolder.js"
import { GameTicketHolders} from "./games/gameTicketHolder.js"
import {sideTicketHolders} from "./sideshows/sideTicketHolder.js"
import { PackageTicketHolders } from "./package/PackageTicketHolders.js";

TicketBooth()
RideTicketHolders()
FoodTicketHolders()
GameTicketHolders()
sideTicketHolders()
PackageTicketHolders()