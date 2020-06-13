const { Client } = require("@elastic/elasticsearch");
const faker = require("./lib/faker");

const config = {
  createIndex: true,
  indexDummyData: true,
};
const client = new Client({
  node: "http://localhost:9200",
  auth: {
    username: "elastic",
    password: "changeme",
  },
});

const createIndex = async () => {
  const data = faker.getData();
  for (let i = 0; i < data.stores.length; i++) {
    const store = data.stores[i];
    await await client.indices.create({
      index: `products-${store.id}`,
      body: {
        mappings: {
          properties: {
            type: { type: "keyword" },
            description: { type: "text" },
            format: { type: "text" },
            store: {
              properties: {
                id: { type: "keyword" },
                delivery_time: { type: "integer_range" },
                delivery_area: { type: "geo_shape" },
              },
            },
          },
        },
      },
    });
  }

  await await client.indices.create({
    index: "stores",
    body: {
      mappings: {
        properties: {
          id: { type: "keyword" },
          delivery_time: { type: "integer_range" },
          delivery_area: { type: "geo_shape" },
        },
      },
    },
  });
};

const indexDummyData = async () => {
  const data = faker.getData();
  for (let i = 0; i < data.stores.length; i++) {
    const store = data.stores[i];
    const { id, ...storeData } = store;
    await client.index({
      id,
      index: "stores",
      refresh: true,
      body: storeData,
    });
  }

  for (let i = 0; i < data.products.length; i++) {
    const product = data.products[i];
    const { id, ...productData } = product;
    await client.index({
      id,
      index: `products-${product.store.id}`,
      refresh: true,
      body: productData,
    });
  }
};

const run = async () => {
  try {
    if (config.createIndex) {
      await createIndex();
    }
    if (config.indexDummyData) {
      await indexDummyData();
    }
  } catch (error) {
    console.error(error);
  }
};

run();
