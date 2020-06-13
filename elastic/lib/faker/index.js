const faker = require("faker");

const data = require("./data.json");

faker.locale = "es";

const getData = () => {
  const products = [];
  data.products = data.products.map((product) => ({
    ...product,
    images: Array.isArray(product.images) ? product.images : [product.images],
    id: faker.random.uuid(),
  }));
  for (let i = 0; i < data.stores.length; i++) {
    const store = data.stores[i];
    const hash = {};
    let cont = 0;
    while (cont < 15) {
      const index = faker.random.number({
        min: 0,
        max: data.products.length - 1,
      });
      if (!(index in hash)) {
        hash[index] = true;
        cont++;
        const product = data.products[index];
        products.push({
          ...product,
          store: {
            id: store.id,
            name: store.name,
            delivery_time: store.delivery_time,
            delivery_area: store.delivery_area,
          },
        });
      }
    }
  }
  return {
    stores: data.stores,
    products,
  };
};

module.exports = {
  getData,
};
