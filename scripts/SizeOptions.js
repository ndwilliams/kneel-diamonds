import { setSize } from "./TransientState.js"

export const SizeOptions = async () => {
	const response = await fetch("http://localhost:8088/sizes")
	const sizes = await response.json()

	document.addEventListener("change", handleSizeChoice)

	let sizesHTML = ""
	const divStringArray = sizes.map((sizeObj) => {
		return `<div id=${sizeObj.id}>
            <input type="radio" name="sizesOptions" value=${sizeObj.id}/>
            ${sizeObj.carets}
            </div>`
	})

	sizesHTML += divStringArray.join("")

	return sizesHTML
}

const handleSizeChoice = (event) => {
	// Make sure you change this condition if you named your inputs differently
	if (event.target.name === "sizesOptions") {
		setSize(parseInt(event.target.value))
	}
}
