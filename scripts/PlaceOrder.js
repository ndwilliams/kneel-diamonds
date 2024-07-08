import { placeOrder } from "./TransientState.js"

export const PlaceOrder = () => {
	document.addEventListener("click", handlePlaceOrderClick)

	return `<div><button id="placeOrder">Place Order</button></div>`
}

const handlePlaceOrderClick = (clickEvent) => {
	if (clickEvent.target.id === "placeOrder") placeOrder()
}
