export const saveOrderData = (displayValues, cardData) => {
  const arrayOrder = [];
  displayValues.forEach((e, index) => {
    if (e > 0) {
      let obj = {
        name: cardData[index].title,
        price: cardData[index].price,
        qnt: e,
      };
      arrayOrder.push(obj);
    }
  });
  return arrayOrder;
};
