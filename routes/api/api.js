var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Greenhouse = require('../models/greenhouse');





router.get('/view', function(req, res, next) {
  Greenhouse.find().exec().then((data) => { res.json(data) }).catch((err) => { console.log(err)});


});

// router.get('/view/:id', function(req, res, next) {
//   let  id= req.params.id;
//    Report.findById(id).exec().then((data) => { res.json(data) }).catch((err) => { console.log(err)});
 
 
//  });


router.post('/add', function(req, res) {
  var person = new Greenhouse({
    name:req.body.name,
    _id: new mongoose.Types.ObjectId()

  }); 
  person.save((data)=>{  res.end("sucess news"+req.body.name) });

});


router.post('/addreport', function(req, res) {
//   console.log(req.body)
//   mongoclient.connect(url, function(err, conn) {
//     if (err) throw err;
//     var db = conn.db("mydb");
   
//    myobj = req.body;
//     db.collection("dailyreport").insertOne(myobj, function(err, ress) {
//      if (err) throw err;
//       res.json({ message: 'dailyreport created!' });
//       conn.close();
//    });


//       });
 
}); 

// router.get('/addreport', function(req, res, next) {
//   mongoclient.connect(url, function(err, conn) {
//     if (err) throw err;
//     var db = conn.db("mydb");
//     db.collection("dailyreport").find().toArray(function(error, result) {
//           if (error) throw err;
//           res.json(result); 
//           conn.close();
//         });
//       });
// });

// router.get('/reportofid/:id', function(req, res, next) {
 
  
// });

module.exports = router;
