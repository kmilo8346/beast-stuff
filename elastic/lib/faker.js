const faker = require("faker");
const Unsplash = require("unsplash-js").default;
const fetch = require("node-fetch");
global.fetch = fetch;

faker.locale = "es";
const types = ["product", "service"];
const categories = ["despensa"];
const formats = ["100g"];
const deliveryAreas = [
  {
    type: "Polygon",
    coordinates: [
      [
        [-70.60792922973633, -33.46051809167404],
        [-70.60634136199951, -33.46298845041924],
        [-70.60415267944336, -33.462165005326014],
        [-70.60406684875488, -33.45994524480915],
        [-70.60629844665527, -33.4590501640051],
        [-70.60792922973633, -33.46051809167404],
      ],
    ],
  },
  {
    type: "Polygon",
    coordinates: [
      [
        [-70.63239097595215, -33.44750279318312],
        [-70.63375353813171, -33.44773554607255],
        [-70.6336784362793, -33.449248424629594],
        [-70.63174724578856, -33.449731824049195],
        [-70.63239097595215, -33.44750279318312],
      ],
    ],
  },
];
const unsplash = new Unsplash({
  accessKey: "8ZRsJ4XohW56zrvDAdZm8CpRj6D2_vSLdESN0I2ZhI8",
});
const stores = [];
const productPhotos = [
  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1563903530908-afdd155d057a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1543512214-bb1d7ac7e925?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1556227834-09f1de7a7d14?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1524638067-feba7e8ed70f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1522273500616-6b4757e4c184?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1526429257838-9bf73dd45097?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1542038335240-86aea625b913?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1526887520775-4b14b8aed897?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1532086853747-99450c17fa2e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1522643628976-0a170f6722ab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1511300961358-669ca3ad05af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1525604499593-d92408d2adbc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1556228578-dd539282b964?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1467949576168-6ce8e2df4e13?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1524738258074-f8125c6a7588?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1556228841-a3c527ebefe5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1503328427499-d92d1ac3d174?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
  "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MDg0OH0",
];

// const initRuntime = async () => {
//   const res = await unsplash.search.photos("product", 1, 100, {
//     orientation: "portrait",
//   });
//   const photos = await res.json();
//   productPhotos.push(photos.results.map((photo) => photo.urls.small));
//   console.log(productPhotos);
// };

const createStore = () => {
  const name = faker.company.companyName();
  return {
    id: `${faker.random.uuid()}`,
    images: [faker.image.imageUrl(), faker.image.imageUrl()],
    name: name,
    delivery_time: {
      gte: 20,
      lte: 30,
    },
    delivery_area:
      deliveryAreas[
        faker.random.number({ min: 0, max: deliveryAreas.length - 1 })
      ],
  };
};

const createProduct = () => {
  const store = stores[faker.random.number({ min: 0, max: stores.length - 1 })];
  const productName = faker.commerce.productName();
  const product = {
    id: faker.random.uuid(),
    type: types[faker.random.number({ min: 0, max: types.length - 1 })],
    name: productName,
    description: `${productName} created by god`,
    images:
      productPhotos[
        faker.random.number({ min: 0, max: productPhotos.length - 1 })
      ],
    price: parseInt(faker.commerce.price()),
    tags: [faker.commerce.productAdjective()],
    categories: [
      categories[faker.random.number({ min: 0, max: categories.length - 1 })],
    ],
    store,
  };
  if (product.type == "prodcuct") {
    product.brand = store.name;
    product.format =
      formats[faker.random.number({ min: 0, max: formats.length - 1 })];
  }
  return product;
};

for (let i = 0; i < 10; i++) {
  stores.push(createStore());
}

module.exports = {
  createProduct,
};
