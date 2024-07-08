export const MetalOptions = async () => {
	// Get the metals from the API
	const response = await fetch("http://localhost:8088/metals")
	const metals = await response.json()

	// Iterate the submissions and render through HTML string

	let metalsHTML = ""

	// Use map() to generate new array of strings
	const divStringArray = metals.map((metalObj) => {
		return `<div>
                <input type='radio' name='metal' value='${metalObj.id}' /> ${metalObj.metal} </div>`
	})

	// This function needs to return a single string, not an array of strings
	// use join() method
	metalsHTML += divStringArray.join("")

	return metalsHTML
}
