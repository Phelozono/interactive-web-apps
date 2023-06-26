import { TABLES,COLUMNS,state } from './data.js'
import { createOrderHtml,html } from './view.js'

console.log(TABLES)
console.log(COLUMNS)
console.log(state)

const order = {
    id: 1,
    title: 'Order 1',
    table: '1',
    created: new Date()
}

const orderHtml = createOrderHtml(order)
console.log(orderHtml)

console.log(html)
