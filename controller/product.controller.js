const db = require('../db');

module.exports.index = function (req, res) {
    let page = +req.query.page || 1; //n
    const itemsPerPage = 8; 
    
    let begin = (page - 1) * itemsPerPage;
    let end = begin + itemsPerPage;

    // let drop = (page - 1) * itemsPerPage;

    const collection = db.get('products').value();

    const pagesCount = Math.ceil(collection.length / itemsPerPage);

    res.render('product/index',{ 
        /*
            Using lodash
            products: db.get('products').drop(drop).take(itemsPerPage).value()
        */ 
       products: db.get('products').value().slice(begin, end),
       current: page,
       count: pagesCount,
       pre: page-1,
       next: page+1
    })    
}