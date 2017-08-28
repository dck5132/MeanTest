var express = require('express');
var router = express.Router();

var eventsData = [ {
                name: 'Event 1',
                description: 'The first event',
                date: '2016.01.01',
                time: '1:00 PM',
                duration: '1 Hour',
                location: {
                    streetAddr: '101 Main St.',
                    city: 'Los Angeles',
                    state: 'CA',
                    zip: '87885',
                    lon: 0,
                    lat: 0
                },
                capacity: 100
                },
                {
                name: 'Event 2',
                description: 'The second event',
                date: '2016.02.02',
                time: '2:00 PM',
                duration: '2 Hour',
                location: {
                    streetAddr: '202 Main St.',
                    city: 'Los Angeles',
                    state: 'CA',
                    zip: '87885',
                    lon: 0,
                    lat: 0
                },
                capacity: 200
                },
                {
                name: 'Event 3',
                description: 'The third event',
                date: '2016.03.03',
                time: '3:00 PM',
                duration: '3 Hour',
                location: {
                    streetAddr: '303 Main St.',
                    city: 'Los Angeles',
                    state: 'CA',
                    zip: '87885',
                    lon: 0,
                    lat: 0
                },
                capacity: 300
                },
                {
                name: 'Event 4',
                description: 'The fourth event',
                date: '2016.04.04',
                time: '4:00 PM',
                duration: '4 Hour',
                location: {
                    streetAddr: '404 Main St.',
                    city: 'Los Angeles',
                    state: 'CA',
                    zip: '87885',
                    lon: 0,
                    lat: 0
                },
                capacity: 400
                }
];

router.get('/', function(req,res,next) {
       res.render('event', {list: ['first event', '2nd event', '3rd event'],
        nav: [
            {Text : 'Services', Link :'services'},
            {Text : 'Portfolio', Link : 'portfolio'},
            {Text : 'About', Link :'about'},
            {Text : 'Team', Link :'team'},
            {Text : 'Contact', Link :'contact'},
            {Text : 'Events', Link :'events'}
            ],
            events : eventsData
    });
    next();
});

router.get('/events',function(req,res,next) {
      res.send('Hello Single Event Test');
      next();
});

module.exports = router;