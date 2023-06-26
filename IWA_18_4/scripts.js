document.querySelector('[data-add]').focus();
document.querySelector('[data-help]').addEventListener('click', () => {
document.querySelector('[data-help-overlay]').showModal();
});
document.querySelector('[data-help-cancel]').addEventListener('click', () => {
 document.querySelector('[data-help-overlay]').close();
});

document.querySelector('[data-help-cancel]').addEventListener('click', () => {
    document.querySelector('[data-help-overlay]').close();
    document.querySelector('[data-add]').focus();
});

document.querySelector('[data-add]').addEventListener('click', () => {
    document.querySelector('[data-add-overlay]').showModal();
});

document.querySelector('[data-add-cancel]').addEventListener('click', () => {
    document.querySelector('[data-add-overlay]').close();
});

document.querySelector('[data-add-form]').addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.querySelector('[data-add-title]').value;
    const table = document.querySelector('[data-add-table]').value;
    const order = createOrderData({ title, table, column: 'ordered' });
    state.orders[order.id] = order;
    const orderHtml = createOrderHtml(order);
    document.querySelector('[data-column="ordered"]').appendChild(orderHtml);
    document.querySelector('[data-add-overlay]').close();
});

document.querySelector('[data-add-cancel]').addEventListener('click', () => {
    document.querySelector('[data-add-overlay]').close();
    document.querySelector('[data-add-title]').value = '';
    document.querySelector('[data-add-table]').value = '';
});

document.querySelector('[data-add-cancel]').addEventListener('click', () => {
    document.querySelector('[data-add-overlay]').close();
    document.querySelector('[data-add-title]').value = '';
    document.querySelector('[data-add-table]').value = '';
});

document.querySelector('[data-add-form]').addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.querySelector('[data-add-title]').value;
    const table = document.querySelector('[data-add-table]').value;
    const order = createOrderData({ title, table, column: 'ordered' });
    state.orders[order.id] = order;
    const orderHtml = createOrderHtml(order);
    document.querySelector('[data-column="ordered"]').appendChild(orderHtml);
    document.querySelector('[data-add-overlay]').close();
    document.querySelector('[data-add-title]').value = '';
    document.querySelector('[data-add-table]').value = '';
});

document.querySelector('[data-grid]').addEventListener('click', (event) => {
    const orderElement = event.target.closest('.order');
    if (!orderElement) return;
    const orderId = orderElement.dataset.id;
    const order = state.orders[orderId];
    document.querySelector('[data-edit-title]').value = order.title;
    document.querySelector('[data-edit-table]').value = order.table;
    document.querySelector('[data-edit-column]').value = order.column;
    document.querySelector('[data-edit-id]').value = orderId;
    document.querySelector('[data-edit-overlay]').showModal();
});

document.querySelector('[data-edit-delete]').addEventListener('click', () => {
    const orderId = document.querySelector('[data-edit-id]').value;
    delete state.orders[orderId];
    const orderElement = document.querySelector(`[data-id="${orderId}"]`);
    orderElement.remove();
    document.querySelector('[data-edit-overlay]').close();
});

document.querySelector('[data-edit-cancel]').addEventListener('click', () => {
    document.querySelector('[data-edit-overlay]').close();
});

document.querySelector('[data-edit-form]').addEventListener('submit', (event) => {
    event.preventDefault();
    const orderId = document.querySelector('[data-edit-id]').value;
    const order = state.orders[orderId];
    order.title = document.querySelector('[data-edit-title]').value;
    order.table = document.querySelector('[data-edit-table]').value;
    const newColumn = document.querySelector('[data-edit-column]').value;
    if (newColumn !== order.column) {
        const oldColumnElement = document.querySelector(`[data-column="${order.column}"]`);
        const newColumnElement = document.querySelector(`[data-column="${newColumn}"]`);
        const orderElement = oldColumnElement.querySelector(`[data-id="${orderId}"]`);
        newColumnElement.appendChild(orderElement);
        order.column = newColumn;
    }
    const orderElement = document.querySelector(`[data-id="${orderId}"]`);
    orderElement.querySelector('[data-order-title]').textContent = order.title;
    orderElement.querySelector('[data-order-table]').textContent = order.table;
    document.querySelector('[data-edit-overlay]').close();
});

const newColumn = document.querySelector('[data-edit-column]').value;
if (newColumn !== order.column) {
    const oldColumnElement = document.querySelector(`[data-column="${order.column}"]`);
    const newColumnElement = document.querySelector(`[data-column="${newColumn}"]`);
    const orderElement = oldColumnElement.querySelector(`[data-id="${orderId}"]`);
    newColumnElement.appendChild(orderElement);
    order.column = newColumn;
}


/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}




const handleDragStart = (event) => {}
const handleDragEnd = (event) => {}
const handleHelpToggle = (event) => {}
const handleAddToggle = (event) => {}
const handleAddSubmit = (event) => {}
const handleEditToggle = (event) => {}
const handleEditSubmit = (event) => {}
const handleDelete = (event) => {}

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}