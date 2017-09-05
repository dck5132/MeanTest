var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;


router.get('/', function(req,res,next) {
    var url = 'mongodb://localhost:27017/eventsApp';
    mongodb.connect(url, function(err, db) {
          var collection = db.collection('events');
          collection.find({}).toArray(function(err, results){
            if (err) {
                res.send(err);
            }
            else {
                res.render('events', {list: ['first event', '2nd event', '3rd event'],
                nav: [
                    {Text : 'Services', Link :'services'},
                    {Text : 'Portfolio', Link : 'portfolio'},
                    {Text : 'About', Link :'about'},
                    {Text : 'Team', Link :'team'},
                    {Text : 'Contact', Link :'contact'},
                    {Text : 'Events', Link :'events'}
                    ],
                    events : results
                });
            }
            db.close();
        });
    });
});

router.get('/:id',function(req,res,next) {
    var id = req.params.id;
      res.render('event', {list: ['first event', '2nd event', '3rd event'],
        nav: [
            {Text : 'Services', Link :'services'},
            {Text : 'Portfolio', Link : 'portfolio'},
            {Text : 'About', Link :'about'},
            {Text : 'Team', Link :'team'},
            {Text : 'Contact', Link :'contact'},
            {Text : 'Events', Link :'events'}
            ],
            events : eventsData[id]
    });
      next();
});

module.exports = router;