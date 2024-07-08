// set up transient state data structure and provide initial values
const transientState = {
	style: 0,
	carets: 0,
	metal: 0,
}

// Functions to modify each property of transient state

export const setStyle = (chosenStyle) => {
	transientState.style = chosenStyle
	console.log(transientState)
}

export const setSize = (chosenSize) => {
	transientState.size = chosenSize
	console.log(transientState)
}

export const setMetal = (chosenMetal) => {
	transientState.metal = chosenMetal
	console.log(transientState)
}
