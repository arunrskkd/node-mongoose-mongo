var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Greenhouse = require('../models/greenhouse');
var Dailyreport = require('../models/report');




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
 
  var report = new Dailyreport({
    _id: new mongoose.Types.ObjectId(),
    date:req.body.date,
    Greenhouse:req.body.Greenhouse ,
    // itemRows:[{
    //   description:req.body.description,
    //   manpower:req.body.manpower ,
    //   remarks:req.body.remarks ,

    // }],
    
  })
  report.save((data)=>{  res.end("asd") });

 
}); 

router.get('/addreport', function(req, res, next) {

    Dailyreport.find().exec().then((data) => { res.json(data) }).catch((err) => { console.log(err)});
    });


    
router.get('/reportofid/:id', function(req, res, next) {

  let  id = req.params.id  ;
  console.log(id)
    Dailyreport.findById(id).exec().then((data) => { res.json(data) }).catch((err) => { console.log(err)});

    });


module.exports = router;
