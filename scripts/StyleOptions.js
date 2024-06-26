export const StyleOptions = async () => {
	const response = await fetch("http://localhost:8088/styles")
	const styles = await response.json()

	let stylesHTML = '<div id="styles-header">'
	for (const style of styles) {
		stylesHTML += `<div id=${style.id}>
        <input type="radio" name="stylesOptions" value=${style.id}/>
        ${style.style}
        </div>`
	}

	stylesHTML += "</div>"

	return stylesHTML
}
