export default [
  {
    store: {
      id: 'cf8e05f8-e2fb-43cc-88e7-1e5e86456cd5',
      name: 'Dulces Finos Vicuña',
      images: [
        'https://gilipatisserie.files.wordpress.com/2015/02/sam_2401-1.jpg',
        'https://i.pinimg.com/originals/42/d7/ac/42d7ac4db6d051b0ae210db2182ebddb.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSco3ErQaRcZ-iFu_le7_RWNyPLGp-0IvBBr7yIx0EiB7RxnNlS&s',
      ],
      delivery_time: {
        gte: 20,
        lte: 30,
      },
      delivery_area: {
        type: 'Polygon',
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
    },
    products: [
      {
        type: 'product',
        name: 'Tequeños de queso',
        description: 'Ricos tequeños venezolanos con queso llanero',
        images:
          'https://www.comedera.com/wp-content/uploads/2020/03/tequen%CC%83os-venezolanos.jpg',
        price: 200,
        tags: ['Generic', 'venezolano', 'meriendas', 'asados', 'picoteos'],
        categories: ['despensa', 'picoteos'],
      },
      {
        type: 'product',
        name: 'Tequeyoyo',
        description:
          'Ricos tequelloyos rellenos con platano maduro frito y queso llanero',
        images:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVaNQfR6DPW8qEQKGakW-V0SbT4xgFS_1sLosN0vXmWAszvT3g&s',
        price: 300,
        tags: ['fritos', 'venezolano', 'rellenos', 'picoteos'],
        categories: ['despensa', 'picoteos'],
      },
      {
        type: 'product',
        name: 'Humitas',
        description:
          'Humitas de choclo, elaboradas con choclo fresco por la Abuela Concha',
        images:
          'https://lh5.googleusercontent.com/proxy/LJrL02apUnH91_BjUw7KNhjH4SNwjIrZ4rMVgugCoip3Fpkvr4ZJSRJaAd9_m7obkNBsKOyb4LxGGxy7FcWugjecSK1T03LiFRFZLdhU6TrtudHIHqylEbZqJUI',
        price: 900,
        tags: ['humitas', 'once', 'almuerzo', 'choclo'],
        categories: ['despensa', 'once'],
      },
      {
        type: 'product',
        name: 'Coca Cola Zero 1,5 Lts',
        description: 'Bebida Coca Cola Zero de 1,5 litros',
        images:
          'https://www.elcielo.cl/tienda/258-large_default/coca-cola-zero-15-lt-desechable.jpg',
        price: 1190,
        tags: ['bebida', 'zero', 'asados', 'picoteos'],
        categories: ['despensa', 'bebidas'],
      },
      {
        type: 'product',
        name: 'Empanada Queso 500gr',
        description:
          'Empanada de queso de 500 gr, elaborada con todo el amor y rellena de delicioso queso',
        images:
          'https://www.laylita.com/recetas/wp-content/uploads/2008/04/empanadas%20de%20viento%204.JPG',
        price: 1500,
        tags: ['once', 'almuerzo', 'empanada', 'amasados'],
        categories: ['despensa'],
      },
      {
        type: 'product',
        name: 'Empanada Medio Kilo de Pino',
        description:
          'Gigante empanada de Pino, para un almuerzo u once, medio quilo de la mejor empanada chilena rellena de huevo, carne y aceitunas negras',
        images: 'https://live.minervafoods.com/files/empanadas_de_pino.jpg',
        price: 2000,
        tags: ['empanada', 'chile', 'comida chilena', 'almuersos'],
        categories: ['amasados', 'horneados'],
      },
      {
        type: 'product',
        name: 'Marraqueta Integral',
        description:
          'Deliciosa marraqueta integral, cada marraquet tiene 120 Kcal de fibra lo que la convierte en el complemento perfecto para esa merienda baja en calorías y nutritiva que tanto te gusta',
        images:
          'https://media.biobiochile.cl/wp-content/uploads/2015/10/a_uno_443258.jpg',
        price: 340,
        tags: ['marraqueta', 'horneados', 'amasados', 'pan', 'integral'],
        categories: ['pan'],
      },
      {
        type: 'product',
        name: 'Galletas de Avena y Frutos Secos',
        description:
          'Galletas de Avena y Frutos Secos, horneadas en casa por la abuela, hechas 100% de productos orgánicos y con huevos de Gallina Feliz',
        images:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8q9GyFt3CDDdCpeRx_MMhhgnbfseOCg83_2IdGWUphH9kShbOQ&s',
        price: 100,
        tags: ['galletas', 'merienda', 'fitness', 'natural', 'postres'],
        categories: ['despensa', 'postres', 'once'],
      },
      {
        type: 'product',
        name: 'Mascarillas / Carbón Activado',
        description:
          'Mascarillas con filtro de carbón activado, excellentes para protegerte no solo del COVID-19, si no tambien de la contaminación ambiental, su principio de carbón activado recoge el 99.99% de las impuresas y virus a los que estamos expuestos todos los días',
        images:
          'https://decarbonactivado.com/wp-content/uploads/2020/01/mascara-de-carb%C3%B3n-activo.jpg',
        price: 19990,
        tags: [
          'covid-19',
          'higiene',
          'mascarilla',
          'filtro',
          'salud',
          'limpieza',
          'protección',
        ],
        categories: ['covid-19', 'higiene', 'salud'],
      },
      {
        type: 'product',
        name: 'Sandwich Palta-Mayo',
        description:
          'Rico sandwich de marraqueta recién horneada, relleno de palta y mayonesa',
        images: 'https://gingers.cl/img/p/6/1/9/619-home_default.jpg',
        price: 1000,
        tags: ['sandwich', 'pan', 'palta', 'once', 'merienda', 'amasados'],
        categories: ['pan', 'amasados'],
      },
      {
        type: 'product',
        name: 'Kuchen de Manzana',
        description:
          'Tradicional Kuchen, hecho con harina molida a mano por artesanos que preservaron la forma de fabricación origina, una oportunidad única para probar esta tradicional Kuchen',
        images:
          'https://t2.rg.ltmcdn.com/es/images/2/9/2/img_kuchen_de_manzana_facil_y_rapido_45292_orig.jpg',
        price: 14990,
        tags: [
          'kuchen',
          'postres',
          'torta',
          'tarta',
          'pie',
          'manzana',
          'horneado',
        ],
        categories: ['tartas y dulces', 'postres'],
      },
      {
        type: 'product',
        name: 'Tarta de Zanahoria',
        description:
          'Deliciosa tarta de zanahoria, recién horneada, con ingredientes frescos y preparada por la abuela Clotilde con una receta que ha pasado de madres a hijos desde hace más de 5 generaciones',
        images:
          'https://elgourmet.s3.amazonaws.com/recetas/share/c2ab099918f23e61b990b15bbb9409cf_3_3_photo.png',
        price: 17990,
        tags: [
          'tarta',
          'horneado',
          'merienda',
          'dulces',
          'postres',
          'zanahoria',
        ],
        categories: ['postres y dulces', 'tartas'],
      },
      {
        type: 'product',
        name: 'Queso Llanero 500gr',
        description:
          'El delicioso queso llanero llega a tu puerta, una de las delicias venezolanas que esta a tu alcance con solo pedirlo, especial para preparar empanadas, cachapas, tequeños y tequelloyos',
        images:
          'https://matera.cl/wp-content/uploads/2019/10/QUESO-LLANERO-MADURADO-FOTO-3.jpg',
        price: 4390,
        tags: ['queso', 'venezolano', 'comida venezolana', 'picoteos'],
        categories: ['despensa', 'quesos'],
      },
      {
        type: 'product',
        name: 'Huevos orgánicos(10u)',
        description:
          'Huevos orgánicos XL, de granja donde las gallinas viven libres y hacen sus nidos donde más comodas se sienten, libres de estrés y alimentadas con alimentos orgánicos',
        images: 'https://www.clubplaneta.com.mx/cocina/gif/huevorg1.jpg',
        price: 451,
        tags: ['huevos', 'sano', 'organico', 'granja', 'gallina', 'feliz'],
        categories: ['despensa', 'huevos'],
      },
      {
        type: 'product',
        name: 'Guantes desechables de látex(100u)',
        description: 'Guantes de látex desechables',
        images:
          'https://dys70dal14h42.cloudfront.net/wp-content/uploads/2020/03/latex-con-456x456.jpg',
        price: 20000,
        tags: ['guantes', 'latex', 'covid-19', 'higiene', 'salud'],
        categories: ['covid-10', 'higiene y salud'],
      },
    ],
  },
  {
    store: {
      id: 'cf8e05f8-e2fb-43cc-88e7-1e5e86456cd2',
      images: [
        'https://chefandhotel.cl/images/ediciones/2019_02/la_folia_pasteleria/Pasteleria-La-Folia-chefandhotel-17.jpg',
        'https://www.pastelesdefantasia.com/wp-content/uploads/2013/11/pasteleria.jpg',
      ],
      name: 'Doña Vicenta',
      delivery_time: {
        gte: 20,
        lte: 30,
      },
      delivery_area: {
        type: 'Polygon',
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
    },
    products: [
      {
        type: 'product',
        name: 'Tequeños de queso',
        description: 'Ricos tequeños venezolanos con queso llanero',
        images:
          'https://www.comedera.com/wp-content/uploads/2020/03/tequen%CC%83os-venezolanos.jpg',
        price: 200,
        tags: ['Generic', 'venezolano', 'meriendas', 'asados', 'picoteos'],
        categories: ['despensa', 'picoteos'],
      },
      {
        type: 'product',
        name: 'Tequeyoyo',
        description:
          'Ricos tequelloyos rellenos con platano maduro frito y queso llanero',
        images:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVaNQfR6DPW8qEQKGakW-V0SbT4xgFS_1sLosN0vXmWAszvT3g&s',
        price: 300,
        tags: ['fritos', 'venezolano', 'rellenos', 'picoteos'],
        categories: ['despensa', 'picoteos'],
      },
      {
        type: 'product',
        name: 'Humitas',
        description:
          'Humitas de choclo, elaboradas con choclo fresco por la Abuela Concha',
        images:
          'https://lh5.googleusercontent.com/proxy/LJrL02apUnH91_BjUw7KNhjH4SNwjIrZ4rMVgugCoip3Fpkvr4ZJSRJaAd9_m7obkNBsKOyb4LxGGxy7FcWugjecSK1T03LiFRFZLdhU6TrtudHIHqylEbZqJUI',
        price: 900,
        tags: ['humitas', 'once', 'almuerzo', 'choclo'],
        categories: ['despensa', 'once'],
      },
      {
        type: 'product',
        name: 'Coca Cola Zero 1,5 Lts',
        description: 'Bebida Coca Cola Zero de 1,5 litros',
        images:
          'https://www.elcielo.cl/tienda/258-large_default/coca-cola-zero-15-lt-desechable.jpg',
        price: 1190,
        tags: ['bebida', 'zero', 'asados', 'picoteos'],
        categories: ['despensa', 'bebidas'],
      },
      {
        type: 'product',
        name: 'Empanada Queso 500gr',
        description:
          'Empanada de queso de 500 gr, elaborada con todo el amor y rellena de delicioso queso',
        images:
          'https://www.laylita.com/recetas/wp-content/uploads/2008/04/empanadas%20de%20viento%204.JPG',
        price: 1500,
        tags: ['once', 'almuerzo', 'empanada', 'amasados'],
        categories: ['despensa'],
      },
      {
        type: 'product',
        name: 'Empanada Medio Kilo de Pino',
        description:
          'Gigante empanada de Pino, para un almuerzo u once, medio quilo de la mejor empanada chilena rellena de huevo, carne y aceitunas negras',
        images: 'https://live.minervafoods.com/files/empanadas_de_pino.jpg',
        price: 2000,
        tags: ['empanada', 'chile', 'comida chilena', 'almuersos'],
        categories: ['amasados', 'horneados'],
      },
      {
        type: 'product',
        name: 'Marraqueta Integral',
        description:
          'Deliciosa marraqueta integral, cada marraquet tiene 120 Kcal de fibra lo que la convierte en el complemento perfecto para esa merienda baja en calorías y nutritiva que tanto te gusta',
        images:
          'https://media.biobiochile.cl/wp-content/uploads/2015/10/a_uno_443258.jpg',
        price: 340,
        tags: ['marraqueta', 'horneados', 'amasados', 'pan', 'integral'],
        categories: ['pan'],
      },
      {
        type: 'product',
        name: 'Galletas de Avena y Frutos Secos',
        description:
          'Galletas de Avena y Frutos Secos, horneadas en casa por la abuela, hechas 100% de productos orgánicos y con huevos de Gallina Feliz',
        images:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8q9GyFt3CDDdCpeRx_MMhhgnbfseOCg83_2IdGWUphH9kShbOQ&s',
        price: 100,
        tags: ['galletas', 'merienda', 'fitness', 'natural', 'postres'],
        categories: ['despensa', 'postres', 'once'],
      },
      {
        type: 'product',
        name: 'Mascarillas / Carbón Activado',
        description:
          'Mascarillas con filtro de carbón activado, excellentes para protegerte no solo del COVID-19, si no tambien de la contaminación ambiental, su principio de carbón activado recoge el 99.99% de las impuresas y virus a los que estamos expuestos todos los días',
        images:
          'https://decarbonactivado.com/wp-content/uploads/2020/01/mascara-de-carb%C3%B3n-activo.jpg',
        price: 19990,
        tags: [
          'covid-19',
          'higiene',
          'mascarilla',
          'filtro',
          'salud',
          'limpieza',
          'protección',
        ],
        categories: ['covid-19', 'higiene', 'salud'],
      },
      {
        type: 'product',
        name: 'Sandwich Palta-Mayo',
        description:
          'Rico sandwich de marraqueta recién horneada, relleno de palta y mayonesa',
        images: 'https://gingers.cl/img/p/6/1/9/619-home_default.jpg',
        price: 1000,
        tags: ['sandwich', 'pan', 'palta', 'once', 'merienda', 'amasados'],
        categories: ['pan', 'amasados'],
      },
      {
        type: 'product',
        name: 'Kuchen de Manzana',
        description:
          'Tradicional Kuchen, hecho con harina molida a mano por artesanos que preservaron la forma de fabricación origina, una oportunidad única para probar esta tradicional Kuchen',
        images:
          'https://t2.rg.ltmcdn.com/es/images/2/9/2/img_kuchen_de_manzana_facil_y_rapido_45292_orig.jpg',
        price: 14990,
        tags: [
          'kuchen',
          'postres',
          'torta',
          'tarta',
          'pie',
          'manzana',
          'horneado',
        ],
        categories: ['tartas y dulces', 'postres'],
      },
      {
        type: 'product',
        name: 'Tarta de Zanahoria',
        description:
          'Deliciosa tarta de zanahoria, recién horneada, con ingredientes frescos y preparada por la abuela Clotilde con una receta que ha pasado de madres a hijos desde hace más de 5 generaciones',
        images:
          'https://elgourmet.s3.amazonaws.com/recetas/share/c2ab099918f23e61b990b15bbb9409cf_3_3_photo.png',
        price: 17990,
        tags: [
          'tarta',
          'horneado',
          'merienda',
          'dulces',
          'postres',
          'zanahoria',
        ],
        categories: ['postres y dulces', 'tartas'],
      },
      {
        type: 'product',
        name: 'Queso Llanero 500gr',
        description:
          'El delicioso queso llanero llega a tu puerta, una de las delicias venezolanas que esta a tu alcance con solo pedirlo, especial para preparar empanadas, cachapas, tequeños y tequelloyos',
        images:
          'https://matera.cl/wp-content/uploads/2019/10/QUESO-LLANERO-MADURADO-FOTO-3.jpg',
        price: 4390,
        tags: ['queso', 'venezolano', 'comida venezolana', 'picoteos'],
        categories: ['despensa', 'quesos'],
      },
      {
        type: 'product',
        name: 'Huevos orgánicos(10u)',
        description:
          'Huevos orgánicos XL, de granja donde las gallinas viven libres y hacen sus nidos donde más comodas se sienten, libres de estrés y alimentadas con alimentos orgánicos',
        images: 'https://www.clubplaneta.com.mx/cocina/gif/huevorg1.jpg',
        price: 451,
        tags: ['huevos', 'sano', 'organico', 'granja', 'gallina', 'feliz'],
        categories: ['despensa', 'huevos'],
      },
      {
        type: 'product',
        name: 'Guantes desechables de látex(100u)',
        description: 'Guantes de látex desechables',
        images:
          'https://dys70dal14h42.cloudfront.net/wp-content/uploads/2020/03/latex-con-456x456.jpg',
        price: 20000,
        tags: ['guantes', 'latex', 'covid-19', 'higiene', 'salud'],
        categories: ['covid-10', 'higiene y salud'],
      },
    ],
  },
  {
    store: {
      id: 'cf8e05f8-e2fb-43cc-88e7-1e5e86456cd3',
      images: [
        'https://mtraiguen.cl/vitrina/wp-content/uploads/2020/04/MINIMARKET.jpg',
        'https://apollo-virginia.akamaized.net/v1/files/s8elutw7hnox-CO/image;s=850x0',
      ],
      name: 'Minimarket PAULA',
      delivery_time: {
        gte: 20,
        lte: 30,
      },
      delivery_area: {
        type: 'Polygon',
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
    },
    products: [
      {
        type: 'product',
        name: 'Tequeños de queso',
        description: 'Ricos tequeños venezolanos con queso llanero',
        images:
          'https://www.comedera.com/wp-content/uploads/2020/03/tequen%CC%83os-venezolanos.jpg',
        price: 200,
        tags: ['Generic', 'venezolano', 'meriendas', 'asados', 'picoteos'],
        categories: ['despensa', 'picoteos'],
      },
      {
        type: 'product',
        name: 'Tequeyoyo',
        description:
          'Ricos tequelloyos rellenos con platano maduro frito y queso llanero',
        images:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVaNQfR6DPW8qEQKGakW-V0SbT4xgFS_1sLosN0vXmWAszvT3g&s',
        price: 300,
        tags: ['fritos', 'venezolano', 'rellenos', 'picoteos'],
        categories: ['despensa', 'picoteos'],
      },
      {
        type: 'product',
        name: 'Humitas',
        description:
          'Humitas de choclo, elaboradas con choclo fresco por la Abuela Concha',
        images:
          'https://lh5.googleusercontent.com/proxy/LJrL02apUnH91_BjUw7KNhjH4SNwjIrZ4rMVgugCoip3Fpkvr4ZJSRJaAd9_m7obkNBsKOyb4LxGGxy7FcWugjecSK1T03LiFRFZLdhU6TrtudHIHqylEbZqJUI',
        price: 900,
        tags: ['humitas', 'once', 'almuerzo', 'choclo'],
        categories: ['despensa', 'once'],
      },
      {
        type: 'product',
        name: 'Coca Cola Zero 1,5 Lts',
        description: 'Bebida Coca Cola Zero de 1,5 litros',
        images:
          'https://www.elcielo.cl/tienda/258-large_default/coca-cola-zero-15-lt-desechable.jpg',
        price: 1190,
        tags: ['bebida', 'zero', 'asados', 'picoteos'],
        categories: ['despensa', 'bebidas'],
      },
      {
        type: 'product',
        name: 'Empanada Queso 500gr',
        description:
          'Empanada de queso de 500 gr, elaborada con todo el amor y rellena de delicioso queso',
        images:
          'https://www.laylita.com/recetas/wp-content/uploads/2008/04/empanadas%20de%20viento%204.JPG',
        price: 1500,
        tags: ['once', 'almuerzo', 'empanada', 'amasados'],
        categories: ['despensa'],
      },
      {
        type: 'product',
        name: 'Empanada Medio Kilo de Pino',
        description:
          'Gigante empanada de Pino, para un almuerzo u once, medio quilo de la mejor empanada chilena rellena de huevo, carne y aceitunas negras',
        images: 'https://live.minervafoods.com/files/empanadas_de_pino.jpg',
        price: 2000,
        tags: ['empanada', 'chile', 'comida chilena', 'almuersos'],
        categories: ['amasados', 'horneados'],
      },
      {
        type: 'product',
        name: 'Marraqueta Integral',
        description:
          'Deliciosa marraqueta integral, cada marraquet tiene 120 Kcal de fibra lo que la convierte en el complemento perfecto para esa merienda baja en calorías y nutritiva que tanto te gusta',
        images:
          'https://media.biobiochile.cl/wp-content/uploads/2015/10/a_uno_443258.jpg',
        price: 340,
        tags: ['marraqueta', 'horneados', 'amasados', 'pan', 'integral'],
        categories: ['pan'],
      },
      {
        type: 'product',
        name: 'Galletas de Avena y Frutos Secos',
        description:
          'Galletas de Avena y Frutos Secos, horneadas en casa por la abuela, hechas 100% de productos orgánicos y con huevos de Gallina Feliz',
        images:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8q9GyFt3CDDdCpeRx_MMhhgnbfseOCg83_2IdGWUphH9kShbOQ&s',
        price: 100,
        tags: ['galletas', 'merienda', 'fitness', 'natural', 'postres'],
        categories: ['despensa', 'postres', 'once'],
      },
      {
        type: 'product',
        name: 'Mascarillas / Carbón Activado',
        description:
          'Mascarillas con filtro de carbón activado, excellentes para protegerte no solo del COVID-19, si no tambien de la contaminación ambiental, su principio de carbón activado recoge el 99.99% de las impuresas y virus a los que estamos expuestos todos los días',
        images:
          'https://decarbonactivado.com/wp-content/uploads/2020/01/mascara-de-carb%C3%B3n-activo.jpg',
        price: 19990,
        tags: [
          'covid-19',
          'higiene',
          'mascarilla',
          'filtro',
          'salud',
          'limpieza',
          'protección',
        ],
        categories: ['covid-19', 'higiene', 'salud'],
      },
      {
        type: 'product',
        name: 'Sandwich Palta-Mayo',
        description:
          'Rico sandwich de marraqueta recién horneada, relleno de palta y mayonesa',
        images: 'https://gingers.cl/img/p/6/1/9/619-home_default.jpg',
        price: 1000,
        tags: ['sandwich', 'pan', 'palta', 'once', 'merienda', 'amasados'],
        categories: ['pan', 'amasados'],
      },
      {
        type: 'product',
        name: 'Kuchen de Manzana',
        description:
          'Tradicional Kuchen, hecho con harina molida a mano por artesanos que preservaron la forma de fabricación origina, una oportunidad única para probar esta tradicional Kuchen',
        images:
          'https://t2.rg.ltmcdn.com/es/images/2/9/2/img_kuchen_de_manzana_facil_y_rapido_45292_orig.jpg',
        price: 14990,
        tags: [
          'kuchen',
          'postres',
          'torta',
          'tarta',
          'pie',
          'manzana',
          'horneado',
        ],
        categories: ['tartas y dulces', 'postres'],
      },
      {
        type: 'product',
        name: 'Tarta de Zanahoria',
        description:
          'Deliciosa tarta de zanahoria, recién horneada, con ingredientes frescos y preparada por la abuela Clotilde con una receta que ha pasado de madres a hijos desde hace más de 5 generaciones',
        images:
          'https://elgourmet.s3.amazonaws.com/recetas/share/c2ab099918f23e61b990b15bbb9409cf_3_3_photo.png',
        price: 17990,
        tags: [
          'tarta',
          'horneado',
          'merienda',
          'dulces',
          'postres',
          'zanahoria',
        ],
        categories: ['postres y dulces', 'tartas'],
      },
      {
        type: 'product',
        name: 'Queso Llanero 500gr',
        description:
          'El delicioso queso llanero llega a tu puerta, una de las delicias venezolanas que esta a tu alcance con solo pedirlo, especial para preparar empanadas, cachapas, tequeños y tequelloyos',
        images:
          'https://matera.cl/wp-content/uploads/2019/10/QUESO-LLANERO-MADURADO-FOTO-3.jpg',
        price: 4390,
        tags: ['queso', 'venezolano', 'comida venezolana', 'picoteos'],
        categories: ['despensa', 'quesos'],
      },
      {
        type: 'product',
        name: 'Huevos orgánicos(10u)',
        description:
          'Huevos orgánicos XL, de granja donde las gallinas viven libres y hacen sus nidos donde más comodas se sienten, libres de estrés y alimentadas con alimentos orgánicos',
        images: 'https://www.clubplaneta.com.mx/cocina/gif/huevorg1.jpg',
        price: 451,
        tags: ['huevos', 'sano', 'organico', 'granja', 'gallina', 'feliz'],
        categories: ['despensa', 'huevos'],
      },
      {
        type: 'product',
        name: 'Guantes desechables de látex(100u)',
        description: 'Guantes de látex desechables',
        images:
          'https://dys70dal14h42.cloudfront.net/wp-content/uploads/2020/03/latex-con-456x456.jpg',
        price: 20000,
        tags: ['guantes', 'latex', 'covid-19', 'higiene', 'salud'],
        categories: ['covid-10', 'higiene y salud'],
      },
    ],
  },
  {
    store: {
      id: 'cf8e05f8-e2fb-43cc-88e7-1e5e86456cd1',
      images: [
        'https://www.datoavisos.cl/wp-content/uploads/2018/10/electricista.jpg',
        'https://www.elplural.com/uploads/s1/35/04/0/un-electricista-trabajando-0.jpeg',
      ],
      name: 'Amigos de tu hogar',
      delivery_time: {
        gte: 20,
        lte: 30,
      },
      delivery_area: {
        type: 'Polygon',
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
    },
    products: [
      {
        type: 'service',
        name: 'Corte de Cabello',
        description:
          'Barbero a domicilio, corte de cabello para hombres y niños(a partir de 7 años), todos los utencilios son desinfectados después de cada sesión, para su protección, durante la sesión es requerido que estemos ambos usando mascarilla',
        images:
          'https://static1.abc.es/media/espana/2018/10/02/ayoze-medina-barbero-kP2--540x285@abc.jpg',
        price: 0,
        tags: [
          'servicios',
          'barbero',
          'cabello',
          'hombre',
          'corte de cabello',
          'domicilio',
        ],
        categories: ['belleza', 'corte de cabello'],
      },
      {
        type: 'service',
        name: 'Aquiler de Estacionamiento',
        description:
          'Se alquila estacionamiento(cuota mensual), primer nivel, espacio para dos autos pequeños o auto y moto, alquila directaente su dueño',
        images:
          'https://imgclasificados4.emol.com/Proyectos/imagenes/docs_corredores/archivos/1099/867827/1c98cbbe20ba350a34fca5744be0a8a8.jpg',
        price: 40000,
        tags: ['servicios', 'alquiler', 'estacionamiento', 'auto'],
        categories: ['alquileres', 'servicios'],
      },
      {
        type: 'service',
        name: 'Estilista peluquera',
        description:
          'Peliquería integral, corte de cabello con posibiidad de lavado y masage capilar incluido en el precio. Reserva gratis con 24 hrs de antelación',
        images:
          'https://www.latercera.com/resizer/oaT7SSetv6ur4jonKOqtO4Zcph4=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/LHJCY6NN6VA7DAAALZ3VLLT3QE.jpg',
        price: 0,
        tags: [
          'servicios',
          'peluqueria',
          'cabello',
          'hombre',
          'corte de cabello',
          'domicilio',
          'belleza',
        ],
        categories: ['belleza', 'corte de cabello'],
      },
      {
        type: 'service',
        name: 'Electricista',
        description:
          'Electricista certificado, cosulte gratis y sin compromiso, publico el precio de la evaluación, si realiza el trabajo con nosotros se lo descontamos del precio final, hacemos factura por servicios',
        images:
          'https://reformasintegralesalcobendas.com/wp-content/uploads/2017/02/electricistas-alcobendas-1.jpg',
        price: 10000,
        tags: ['servicios', 'hogar', 'electricista', 'domicilio'],
        categories: ['hogar', 'servicios'],
      },
      {
        type: 'service',
        name: 'Manicure a domicilio',
        description:
          'Esmaltes permanentes, uñas acrilicas, masage de manos con cremas revitalizantes, eliminación de células muertas. No dejes caer tu belleza en estos días de cuarentena',
        images:
          'https://ae01.alicdn.com/kf/HTB1cOhOaFmWBuNjSspdq6zugXXa5/Manos-manicura-sal-n-hogar-arte-decoraci-n-madera-marco-cartel-de-tela-aceptar-personalizaci-n.jpg',
        price: 0,
        tags: ['servicios', 'belleza', 'manos', 'manicure', 'domicilio'],
        categories: ['belleza', 'servicios'],
      },
    ],
  },
  {
    store: {
      id: 'cf8e05f8-e2fb-43cc-88e7-1e5e86456cd4',
      images: [
        'https://ae01.alicdn.com/kf/HTB1cOhOaFmWBuNjSspdq6zugXXa5/Manos-manicura-sal-n-hogar-arte-decoraci-n-madera-marco-cartel-de-tela-aceptar-personalizaci-n.jpg',
        'https://rocnature.com/subidas/6531508142441.png',
      ],
      name: 'Laura Manicure',
      delivery_time: {
        gte: 20,
        lte: 30,
      },
      delivery_area: {
        type: 'Polygon',
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
    },
    products: [
      {
        type: 'product',
        name: 'Queso Llanero 500gr',
        description:
          'El delicioso queso llanero llega a tu puerta, una de las delicias venezolanas que esta a tu alcance con solo pedirlo, especial para preparar empanadas, cachapas, tequeños y tequelloyos',
        images:
          'https://matera.cl/wp-content/uploads/2019/10/QUESO-LLANERO-MADURADO-FOTO-3.jpg',
        price: 4390,
        tags: ['queso', 'venezolano', 'comida venezolana', 'picoteos'],
        categories: ['despensa', 'quesos'],
      },
      {
        type: 'product',
        name: 'Huevos orgánicos(10u)',
        description:
          'Huevos orgánicos XL, de granja donde las gallinas viven libres y hacen sus nidos donde más comodas se sienten, libres de estrés y alimentadas con alimentos orgánicos',
        images: 'https://www.clubplaneta.com.mx/cocina/gif/huevorg1.jpg',
        price: 451,
        tags: ['huevos', 'sano', 'organico', 'granja', 'gallina', 'feliz'],
        categories: ['despensa', 'huevos'],
      },
      {
        type: 'product',
        name: 'Guantes desechables de látex(100u)',
        description: 'Guantes de látex desechables',
        images:
          'https://dys70dal14h42.cloudfront.net/wp-content/uploads/2020/03/latex-con-456x456.jpg',
        price: 20000,
        tags: ['guantes', 'latex', 'covid-19', 'higiene', 'salud'],
        categories: ['covid-10', 'higiene y salud'],
      },
      {
        type: 'service',
        name: 'Corte de Cabello',
        description:
          'Barbero a domicilio, corte de cabello para hombres y niños(a partir de 7 años), todos los utencilios son desinfectados después de cada sesión, para su protección, durante la sesión es requerido que estemos ambos usando mascarilla',
        images:
          'https://static1.abc.es/media/espana/2018/10/02/ayoze-medina-barbero-kP2--540x285@abc.jpg',
        price: 0,
        tags: [
          'servicios',
          'barbero',
          'cabello',
          'hombre',
          'corte de cabello',
          'domicilio',
        ],
        categories: ['belleza', 'corte de cabello'],
      },
      {
        type: 'service',
        name: 'Aquiler de Estacionamiento',
        description:
          'Se alquila estacionamiento(cuota mensual), primer nivel, espacio para dos autos pequeños o auto y moto, alquila directaente su dueño',
        images:
          'https://imgclasificados4.emol.com/Proyectos/imagenes/docs_corredores/archivos/1099/867827/1c98cbbe20ba350a34fca5744be0a8a8.jpg',
        price: 40000,
        tags: ['servicios', 'alquiler', 'estacionamiento', 'auto'],
        categories: ['alquileres', 'servicios'],
      },
      {
        type: 'service',
        name: 'Estilista peluquera',
        description:
          'Peliquería integral, corte de cabello con posibiidad de lavado y masage capilar incluido en el precio. Reserva gratis con 24 hrs de antelación',
        images:
          'https://www.latercera.com/resizer/oaT7SSetv6ur4jonKOqtO4Zcph4=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/LHJCY6NN6VA7DAAALZ3VLLT3QE.jpg',
        price: 0,
        tags: [
          'servicios',
          'peluqueria',
          'cabello',
          'hombre',
          'corte de cabello',
          'domicilio',
          'belleza',
        ],
        categories: ['belleza', 'corte de cabello'],
      },
      {
        type: 'service',
        name: 'Electricista',
        description:
          'Electricista certificado, cosulte gratis y sin compromiso, publico el precio de la evaluación, si realiza el trabajo con nosotros se lo descontamos del precio final, hacemos factura por servicios',
        images:
          'https://reformasintegralesalcobendas.com/wp-content/uploads/2017/02/electricistas-alcobendas-1.jpg',
        price: 10000,
        tags: ['servicios', 'hogar', 'electricista', 'domicilio'],
        categories: ['hogar', 'servicios'],
      },
      {
        type: 'service',
        name: 'Manicure a domicilio',
        description:
          'Esmaltes permanentes, uñas acrilicas, masage de manos con cremas revitalizantes, eliminación de células muertas. No dejes caer tu belleza en estos días de cuarentena',
        images:
          'https://ae01.alicdn.com/kf/HTB1cOhOaFmWBuNjSspdq6zugXXa5/Manos-manicura-sal-n-hogar-arte-decoraci-n-madera-marco-cartel-de-tela-aceptar-personalizaci-n.jpg',
        price: 0,
        tags: ['servicios', 'belleza', 'manos', 'manicure', 'domicilio'],
        categories: ['belleza', 'servicios'],
      },
    ],
  },
];
