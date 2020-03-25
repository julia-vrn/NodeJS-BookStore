const Product = require('../models/product');

//get shop page
exports.getProducts = (req, res) => {
    Product.fetchAllProducts((products)=>{
        res.render('shop/product-list', {
        pageTitle: 'Welcome to My Shop!',
        products: products,
        path: '/products'
        });
    })
    
   // res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
};

//get index page
exports.getIndex = (req, res) => {
    Product.fetchAllProducts((products)=>{
        res.render('shop/index', {
        pageTitle: 'All Products',
        products: products,
        path: '/'
        });
    });
};

exports.getCart = (req, res) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    });     
}

exports.getOrders = (req, res) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    }); 
}

exports.getCheckout = (req, res) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    })
}