const express = require('express');
const db = require('./db');
// 创建路由容器
const router = express.Router();

const fs = require('fs')
//把路由都挂载到router路由容器中
// router.get('/',function(req,res){
//   fs.readFile('./public/dist/index.html','utf-8',function(err,data){
//     if (err){
//       console.log(err)
//     }
//     res.send(data);
//   })
// })



router.get('/getbanner', function(req, res) {
  db.select('banner').then(data => {
    res.send(data);
  });
});


router.get('/pagehome', function(req, res) {
  db.select('homepage').then(data => {
    res.send(data);
  });
});

router.get('/children', function(req, res) {
  db.select('children').then(data => {
    res.send(data);
  });
});

router.get('/literature', function(req, res) {
  db.select('literature').then(data => {
    res.send(data);
  });
});

router.get('/build', function(req, res) {
  db.select('build').then(data => {
    res.send(data);
  });
});

// router.get('/getlist', function(req, res) {
//   db.select('list').then(data => {
//     res.send(data);
//   });
// });
//
// router.get('/getbronav', function(req, res) {
//   db.select('bronav').then(data => {
//     res.send(data);
//   });
// });
//
// router.get('/getbrolist', function(req, res) {
//   db.select('brolist', {"id": parseInt(req.query.id)}).then(data => {
//     res.send(data);
//   });
// });
//
// router.get('/getbrogoods', function(req, res) {
//   db.select('brogoods', {"id": parseInt(req.query.id)}).then(data => {
//     res.send(data);
//   });
// });
//
// router.post('/postlogin', function(req, res) {
//
//   db.select('user', req.body ).then(data => {
//     console.log(data.data[0])
//     if (data.data[0] && data.data[0].name === req.body.name && data.data[0].password === req.body.password) {
//       res.send(true);
//     } else {
//       res.send(false);
//     }
//   });
// });



module.exports = router;