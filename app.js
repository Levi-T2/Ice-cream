const iceCream = [{
    name: 'Chocolate',
    price: 3,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 3,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 3,
    quantity: 0
},
{
    name: 'Mint Chocolate Chip',
    price: 4,
    quantity: 0
},
{
    name: 'Birthday Cake',
    price: 4,
    quantity: 0
},
{
    name: 'Oreo',
    price: 4,
    quantity: 0
}
]


const toppings = [{
    name: 'Sprinkles',
    price: .5,
    quantity: 0,
},
{
    name: 'Chocolate Chips',
    price: .5,
    quantity: 0
},
{
    name: 'Gummy Worms',
    price: .5,
    quantity: 0
}]

const vessels = [{
    name: 'Waffle Cone',
    price: 1,
    quantity: 0,
},
{
    name: 'Waffle Bowl',
    price: 1,
    quantity: 0
},
{
    name: 'Dipped Bowl',
    price: 1,
    quantity: 0
}]


function orderFlavor(flavorName) {

    const foundFlavor = iceCream.find(iceCream => iceCream.name == flavorName)
    foundFlavor.quantity++

    console.log('You added a', foundFlavor)

    drawCart()
}

function orderTopping(toppingName) {

    const foundTopping = toppings.find(topping => topping.name == toppingName)
    foundTopping.quantity++

    console.log('You added a', foundTopping)

    drawCartForTopping()
}

function chooseVessel(vesselName) {

    const foundVessel = vessels.find(vessel => vessel.name == vesselName)
    foundVessel.quantity++

    console.log('You added a', foundVessel)

    drawCartForVessel()
}


function drawCart() {
    let content = ''
    iceCream.forEach(iceCream => {
        if (iceCream.quantity > 0) {
            const totalCost = (iceCream.price * iceCream.quantity)
            content += `<p> ${iceCream.name} ${iceCream.quantity} $${totalCost} <p>`
        }
    })


    const cartElement = document.getElementById('cart')
    cartElement.innerHTML = content

    calculateTotal()
}

function drawCartForTopping() {
    let content = ''
    toppings.forEach(toppings => {
        if (toppings.quantity > 0) {
            const totalCost = (toppings.price * toppings.quantity)
            content += `<p> ${toppings.name} ${toppings.quantity} $${totalCost}`
        }
    })

    const cartElement = document.getElementById('toppings')
    cartElement.innerHTML = content

    calculateTotal()
}

function drawCartForVessel() {
    let content = ''
    vessels.forEach(vessels => {
        if (vessels.quantity > 0) {
            const totalCost = (vessels.price * vessels.quantity)
            content += `<p> ${vessels.name} ${vessels.quantity} ${totalCost}`
        }
    })

    const cartElement = document.getElementById('vessels')
    cartElement.innerHTML = content

    calculateTotal()
}

function calculateTotal() {

    let finalTotal = 0

    iceCream.forEach(iceCream => {
        const totalPriceOfIceCream = iceCream.quantity * iceCream.price
        finalTotal += totalPriceOfIceCream
    })

    toppings.forEach(toppings => {
        const totalPriceOfToppings = toppings.quantity * toppings.price
        finalTotal += totalPriceOfToppings
    })

    vessels.forEach(vessels => {
        const totalPriceOfVessels = vessels.quantity * vessels.price
        finalTotal += totalPriceOfVessels
    })

    console.log(finalTotal)


    const cartElementTotal = document.getElementById('finalCost')
    cartElementTotal.innerHTML = finalTotal
}

function checkout() {
    const wantsToCheckout = window.confirm('Are You Sure?')
    if (!wantsToCheckout) {
        return
    }

    iceCream.forEach(iceCream => iceCream.quantity = 0)
    toppings.forEach(toppings => toppings.quantity = 0)
    vessels.forEach(vessels => vessels.quantity = 0)



    drawCart()
    drawCartForTopping()
    drawCartForVessel()
}