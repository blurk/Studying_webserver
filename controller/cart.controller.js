var db = require('../db');

module.exports.addToCart = function(req, res, next) {
    let productId = req.params.productId;
    let sessionId = req.signedCookies.sessionId;

    if(!sessionId) {
        res.redirect('/products');
        return;
    }

    let count = db.get('sessions')
                  .find({ id: sessionId })
                  .get('cart.'+productId, 0)//0 is 2nd param which is default
                  .value();

    db.get('sessions')
      .find({ id: sessionId })
      .set('cart.'+productId, count + 1)//1 is 2nd param which is default
      .write();

    res.redirect('/products');
} 

module.exports.showCart = function(req, res, next) {
    let sessionId = req.signedCookies.sessionId;

    if(!sessionId) {
        res.redirect('/products');
        return;
    }

    let cart = db.get('sessions')
                  .find({ id: sessionId })
                  .get('cart')//0 is 2nd param which is default
                  .value();

    let products = [];

    for(let key in cart) {
        products.push(
            db.get('products').find({ id: key }).value()
        );                  
    }    


    res.render('cart/index', {
        cart: cart,
        products: products
    });
}