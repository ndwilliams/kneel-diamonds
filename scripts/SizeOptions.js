export const SizeOptions = async () => {
	const response = await fetch("http://localhost:8088/sizes")
	const sizes = await response.json()

	let sizesHTML = "<div>"
	for (const size of sizes) {
		sizesHTML += `<div id=${size.id}>
            <input type="radio" name="sizesOptions" value=${size.id}/>
            ${size.carets}
            </div>`
	}

	sizesHTML += "</div>"

	return sizesHTML
}
