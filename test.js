const Contenedor = require("./index.js");

const productos = new Contenedor("productos.txt");

const test = async () => {
  let save = await productos.save({
    title: "SamsungS22",
    price: 185000,
    thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.samsung.com%2Far%2Fsmartphones%2Fgalaxy-s22%2Fbuy%2F&psig=AOvVaw3M0fT9JEp5NrU-zkPKIDdz&ust=1667690675294000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKjj6YTWlfsCFQAAAAAdAAAAABAG",
  });

  let getAll = await productos.getAll();
  let getById = await productos.getById(2);
  let deleteById = await productos.deleteById(1);
  let deleteAll = await productos.deleteAll();
  console.log(save);
  console.log(getAll);
  console.log(getById);
  console.log(deleteById);
  console.log(deleteAll);
};

test();
