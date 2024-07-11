// products-service/controllers/productsController.js

exports.getProducts = (req, res) => {
    res.send('Get all products');
  };
  
  exports.getProduct = (req, res) => {
    const productId = req.params.id;
    res.send(`Get product with id ${productId}`);
  };
  
  exports.createProduct = (req, res) => {
    const { body } = req;
    res.send(`Create product: ${JSON.stringify(body)}`);
  };
  
  exports.updateProduct = (req, res) => {
    const productId = req.params.id;
    const { body } = req;
    res.send(`Update product with id ${productId}: ${JSON.stringify(body)}`);
  };
  
  exports.deleteProduct = (req, res) => {
    const productId = req.params.id;
    res.send(`Delete product with id ${productId}`);
  };
  