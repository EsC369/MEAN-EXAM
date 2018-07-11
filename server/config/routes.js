const path = require('path');
const movies = require('../controllers/movies.js');
module.exports = function(app){
    app.get('/index', function(req, res){
        movies.index(req, res);
    });
    app.get('/show/:id', function(req, res){
        movies.show(req, res);
    });
    app.post('/create', function(req, res){
        movies.create(req, res);
    });
    app.post('/create/:id/review', function(req, res){
        movies.createReview(req, res);
    });
    app.put('/edit/:id', function(req, res){
        movies.update(req, res);
    });
    app.delete('/destroy/:id', function(req, res){
        movies.destroy(req, res);
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./angular-app/dist/angular-app/index.html"));
    });
}