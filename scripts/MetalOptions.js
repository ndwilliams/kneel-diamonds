import { setMetal } from "./TransientState.js"

export const MetalOptions = async () => {
	// Get the metals from the API
	const response = await fetch("http://localhost:8088/metals")
	const metals = await response.json()

	document.addEventListener("change", handleMetalChoice)

	// Iterate the submissions and render through HTML string
	let metalsHTML = ""

	// Use map() to generate new array of strings
	const divStringArray = metals.map((metalObj) => {
		return `<div>
                <input type='radio' name='metalsOptions' value='${metalObj.id}' /> ${metalObj.metal} </div>`
	})

	// This function needs to return a single string, not an array of strings
	// use join() method
	metalsHTML += divStringArray.join("")

	return metalsHTML
}

const handleMetalChoice = (event) => {
	// Make sure you change this condition if you named your inputs differently
	if (event.target.name === "metalsOptions") {
		setMetal(parseInt(event.target.value))
	}
}
