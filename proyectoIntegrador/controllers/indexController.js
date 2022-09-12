let data = require('../db/data')

let indexController = {
    index : function(req, res) {
        res.render('index', {datos : data.posteos});
      }
}

module.exports = indexController;