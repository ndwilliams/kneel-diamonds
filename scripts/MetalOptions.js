export const MetalOptions = async () => {
	// Get the metals from the API
	const response = await fetch("http://localhost:8088/metals")
	const metals = await response.json()

	// Iterate the submissions and render through HTML string

	let metalsHTML = '<div id="metals-header">'
	for (const metal of metals) {
		metalsHTML += `<div id=${metal.id}>
        <input type="radio" name="metalsOptions" value=${metal.id}/>
        ${metal.metal}
        </div>`
	}

	metalsHTML += "</div>"

	// return the HTML string

	return metalsHTML
}
