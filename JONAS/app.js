const orders = [
  { orderId: 1, dueDate: "2025-02-01", deliveryDate: "2025-02-01" },
  { orderId: 2, dueDate: "2025-02-05", deliveryDate: "2025-02-06" },
  { orderId: 3, dueDate: "2025-02-10", deliveryDate: "2025-02-09" },
  { orderId: 4, dueDate: "2025-02-15", deliveryDate: "2025-02-15" },
];
// Any order is let

const lateOrder = (order) => {
  let check = order.some((ele, i, arr) => {
    return new Date(ele.deliveryDate) > new Date(ele.dueDate);
  });
//   console.log(check);

  if (check) {
    let orderDetails =  orders.filter((ele, i, arr) => {
      return new Date(ele.deliveryDate) > new Date(ele.dueDate);
    })
    console.log('orderDetails : ',orderDetails);
    
  }
};
lateOrder(orders);
