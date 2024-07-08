export const Orders = async () => {
	const fetchResponse = await fetch("http://localhost:8088/orders")
	const orders = await fetchResponse.json()

	let ordersHTML = ""

	const ordersArray = orders.map((order) => {
		return `<section id=${order.id} class=order> Order: ${order.id}
        <div>Metal: ${order.metalId}</div>
        <div>Size: ${order.sizeId}</div>
        <div>Style: ${order.styleId}</div>
        </section>`
	})

	return (ordersHTML += ordersArray.join(""))
}
