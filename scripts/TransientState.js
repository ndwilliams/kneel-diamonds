// set up transient state data structure and provide initial values
const transientState = {
	metal: 0,
	carets: 0,
	style: 0,
}

// Functions to modify each property of transient state

export const setStyle = (chosenStyle) => {
	transientState.style = chosenStyle
	console.log(transientState)
}

export const setSize = (chosenSize) => {
	transientState.carets = chosenSize
	console.log(transientState)
}

export const setMetal = (chosenMetal) => {
	transientState.metal = chosenMetal
	console.log(transientState)
}

export const placeOrder = async () => {
	/*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
	const postOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(transientState),
	}

	// Send the transient state to your API
	const response = await fetch("http://localhost:8088/orders", postOptions)

	const customEvent = new CustomEvent("newOrderPlaced")

	document.dispatchEvent(customEvent)
}
