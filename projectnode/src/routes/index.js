var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {list: ['first val', '2nd val', '3rd val'],
        nav: [
            {Text : 'Services', Link :'services'},
            {Text : 'Portfolio', Link : 'portfolio'},
            {Text : 'About', Link :'about'},
            {Text : 'Team', Link :'team'},
            {Text : 'Contact', Link :'contact'},
            {Text : 'Events', Link :'events'}
            ]
    });
    next();
});

// var eventsData = [ {
//                 name: 'Event 1',
//                 description: 'The first event',
//                 date: '2016.01.01',
//                 time: '1:00 PM',
//                 duration: '1 Hour',
//                 location: {
//                     streetAddr: '101 Main St.',
//                     city: 'Los Angeles',
//                     state: 'CA',
//                     zip: '87885',
//                     lon: 0,
//                     lat: 0
//                 },
//                 capacity: 100
//                 },
//                 {
//                 name: 'Event 2',
//                 description: 'The second event',
//                 date: '2016.02.02',
//                 time: '2:00 PM',
//                 duration: '2 Hour',
//                 location: {
//                     streetAddr: '202 Main St.',
//                     city: 'Los Angeles',
//                     state: 'CA',
//                     zip: '87885',
//                     lon: 0,
//                     lat: 0
//                 },
//                 capacity: 200
//                 },
//                 {
//                 name: 'Event 3',
//                 description: 'The third event',
//                 date: '2016.03.03',
//                 time: '3:00 PM',
//                 duration: '3 Hour',
//                 location: {
//                     streetAddr: '303 Main St.',
//                     city: 'Los Angeles',
//                     state: 'CA',
//                     zip: '87885',
//                     lon: 0,
//                     lat: 0
//                 },
//                 capacity: 300
//                 },
//                 {
//                 name: 'Event 4',
//                 description: 'The fourth event',
//                 date: '2016.04.04',
//                 time: '4:00 PM',
//                 duration: '4 Hour',
//                 location: {
//                     streetAddr: '404 Main St.',
//                     city: 'Los Angeles',
//                     state: 'CA',
//                     zip: '87885',
//                     lon: 0,
//                     lat: 0
//                 },
//                 capacity: 400
//                 }
// ];

// router.get('/event', function(req,res,next) {
//       res.render('events', {list: ['first event', '2nd event', '3rd event'],
//         nav: [
//             {Text : 'Services', Link :'services'},
//             {Text : 'Portfolio', Link : 'portfolio'},
//             {Text : 'About', Link :'about'},
//             {Text : 'Team', Link :'team'},
//             {Text : 'Contact', Link :'contact'},
//             {Text : 'Events', Link :'events'}
//             ],
//             events : eventsData
//     });
//     next();
// });



module.exports = router;
