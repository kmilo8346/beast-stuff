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
  await await client.indices.create({
    index: "products",
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
};

const indexDummyData = async () => {
  for (let i = 0; i < 100; i++) {
    const { id, ...product } = faker.createProduct();
    await client.index({
      id,
      index: "products",
      refresh: true,
      body: product,
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
