export const SizeOptions = async () => {
	const response = await fetch("http://localhost:8088/sizes")
	const sizes = await response.json()

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
