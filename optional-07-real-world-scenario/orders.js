// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  orders.push({
    id : generateUniqueId(),
    customerName : customerName,
    items : items,
    totalPrice : items.reduce((acc, item) => acc = acc + item.price, 0),
    status : 'Menunggu'
  })
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  orders =  orders.map(order => {
    if (order.id === orderId) {
      return { ...order, status: status }; 
    }
    return order;
  });
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders.reduce((acc, order) => acc = acc + order.totalPrice, 0)
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  let filtered = []
  orders.forEach(order => {
    if(order.id !== id){
      filtered.push(order)
    }
    
  })
  orders = filtered
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
