export const StyleOptions = async () => {
	const response = await fetch("http://localhost:8088/styles")
	const styles = await response.json()

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
