const mongoose = require('mongoose'),
Movie = mongoose.model('Movie');

module.exports = {

    index: function(req, res){
        Movie.find({}, function(err, data){
            if(err){
                res.json({'errors': err});
            }else{
                res.json({'message': 'success', data});
            }
        })
    },

    show: function(req, res){
        Movie.find({_id: req.params.id}, function(err, data){
            if(err){
                res.json({'errors': err});
            }else{
                res.json({'message': 'success', data});
            }
        })
    },

    create: function(req, res){
        // var movie = new Movie(req.body, function(err, data){
        // Movie.create(req.body, function(err, movie){
            // console.log(err, movie);
        var movie = new Movie();
        movie.title = req.body.title;
            // if(err){
            //     res.json({'errors': err});
            // }else{
                movie.review.push({name: req.body.name, stars: req.body.stars, review: req.body.review})
                movie.save (function(err,data){
                    if(err){
                        res.json({'errors': err});
                    }else{
                        res.json({'message': 'success', data});
                    }
                })
            // }
        // })
    },

    update: function(req, res){
        Movie.updateOne({_id: req.params.id}, {$set: req.body}, function(err, data){
            if(err){
                res.json({'errors': err});
            }else{
                res.json({'message': 'success', data});
            }
        })
    },
    
    destroy: function(req, res){
        Movie.remove({_id: req.params.id}, function(err, data){
            if(err){
                res.json({'errors': err});
            }else{
                res.json({'message': 'success', data})
            }
        })
    }
}