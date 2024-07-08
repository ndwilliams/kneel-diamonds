import { setStyle } from "./TransientState.js"

export const StyleOptions = async () => {
	const response = await fetch("http://localhost:8088/styles")
	const styles = await response.json()

	document.addEventListener("change", handleStyleChoice)

	let stylesHTML = ""
	const divStringArray = styles.map((styleObj) => {
		return `<div id=${styleObj.id}>
        <input type="radio" name="stylesOptions" value=${styleObj.id}/>
        ${styleObj.style}
        </div>`
	})

	stylesHTML += divStringArray.join("")

	return stylesHTML
}

const handleStyleChoice = (event) => {
	// Make sure you change this condition if you named your inputs differently
	if (event.target.name === "stylesOptions") {
		setStyle(parseInt(event.target.value))
	}
}
