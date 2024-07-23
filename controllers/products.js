const Products = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  //res.sendFile(path.join(rootDir,'views','add-product.html'))
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    //for hbs
    activeAddProduct: true,
    formCSS: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Products(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProduct = (req, res, next) => {
  //In Ejs pug file
  const products = Products.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      docTitle: "Shop",
      pageTitle: "Shop Page",
      path: "/",
      //for hbs
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
