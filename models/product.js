// const product=[];
//save in file
const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductFromFile = (cb) => {
  fs.readFile(p, (err, dataContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(dataContent));
    }
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    //product.push(this);
    getProductFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
    //read File
  }

  static fetchAll(cb) {
    //product.push(this);
    getProductFromFile(cb);
  }
};
