const express = require('express');
const routing = express.Router();
let cards = [{
    title: 'Camera 1',
    rotate: 0,
    state: 'stand',
    content: {type: 'text'},
    image:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg',
    data: {text: 'Objects Detected: 4'},
    params: {x: 0, y: 0, width: 0, height: 0, left: 'auto', top: 'auto'},
    cols: 1,
    rows: 1,
    rowNumber: 0,
    toggleDragged: false,
  }, {
    title: 'Camera 2',
    rotate: 0,
    state: 'stand',
    content: {type: 'text'},
    image:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg',
    data: {text: 'Objects Detected: 2'},
    params: {x: 0, y: 0, width: 0, height: 0, left: 'auto', top: 'auto'},
    cols: 1,
    rows: 1,
    rowNumber: 0,
    toggleDragged: false,
  }, {
    title: 'Camera 3',
    rotate: 0,
    state: 'stand',
    content: {type: 'text'},
    image:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg',
    data: {text: 'Objects Detected: 2'},
    params: {x: 0, y: 0, width: 0, height: 0, left: 'auto', top: 'auto'},
    cols: 1,
    rows: 1,
    rowNumber: 0,
    toggleDragged: false,
  }, {
    title: 'Camera 4',
    rotate: 0,
    state: 'stand',
    content: {type: 'text'},
    image:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg',
    data: {text: 'Objects Detected: 2'},
    params: {x: 0, y: 0, width: 0, height: 0, left: 'auto', top: 'auto'},
    cols: 1,
    rows: 1,
    rowNumber: 0,
    toggleDragged: false,
  }, {
    title: 'Camera 5',
    rotate: 0,
    state: 'stand',
    content: {type: 'text'},
    image:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg',
    data: {text: 'Objects Detected: 2'},
    params: {x: 0, y: 0, width: 0, height: 0, left: 'auto', top: 'auto'},
    cols: 1,
    rows: 1,
    rowNumber: 0,
    toggleDragged: false,
  }, {
    title: 'Camera 6',
    rotate: 0,
    state: 'stand',
    content: {type: 'text'},
    image:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg',
    data: {text: 'Objects Detected: 2'},
    params: {x: 0, y: 0, width: 0, height: 0, left: 'auto', top: 'auto'},
    cols: 1,
    rows: 1,
    rowNumber: 0,
    toggleDragged: false,
  }, {
    title: 'Camera 7',
    rotate: 0,
    state: 'stand',
    content: {type: 'text'},
    image:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg',
    data: {text: 'Objects Detected: 2'},
    params: {x: 0, y: 0, width: 0, height: 0, left: 'auto', top: 'auto'},
    cols: 1,
    rows: 1,
    rowNumber: 0,
    toggleDragged: false,
  }, {
    title: 'Camera 8',
    rotate: 0,
    state: 'stand',
    content: {type: 'text'},
    image:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg',
    data: {text: 'Objects Detected: 2'},
    params: {x: 0, y: 0, width: 0, height: 0, left: 'auto', top: 'auto'},
    cols: 1,
    rows: 1,
    rowNumber: 0,
    toggleDragged: false,
  }, {
    title: 'Camera 9',
    rotate: 0,
    state: 'stand',
    content: {type: 'text'},
    image:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg',
    data: {text: 'Objects Detected: 2'},
    params: {x: 0, y: 0, width: 0, height: 0, left: 'auto', top: 'auto'},
    cols: 1,
    rows: 1,
    rowNumber: 0,
    toggleDragged: false,
  }
];



routing.post('/card-modify',  (req, res, next) => {
    cards=req.body;
})


routing.get('/card-data',(req, res, next) => {
    
    
        res.json(cards);
   
})


module.exports = routing;