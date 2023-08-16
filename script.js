// Good Luck 💪🏾
function getTotalPrice(groceries) {
    let totalPrice = 0;
      for (let i = 0; i < groceries.length; i++) {
      const { quantity, price } = groceries[i];
      totalPrice += quantity * price;
    }
      return totalPrice;
  }
  
  let groceries = [
    { product: "Milk", quantity: 9, price: 34 },
    { product: "Cereals", quantity: 1, price: 2.50 }
  ];
  
  let totalPrice = getTotalPrice(groceries);
  console.log(totalPrice); 
  