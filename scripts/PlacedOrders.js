export const Orders = async () => {
	const fetchResponse = await fetch("http://localhost:8088/orders")
	const orders = await fetchResponse.json()

	let ordersHTML = ""

	const ordersArray = orders.map((order) => {
		return `<section id=${order.id} class=order> Order: ${order.id}
        <div>Metal: ${order.metal}</div>
        <div>Size: ${order.carets}</div>
        <div>Style: ${order.style}</div>
        </section>`
	})

	return (ordersHTML += ordersArray.join(""))
}
