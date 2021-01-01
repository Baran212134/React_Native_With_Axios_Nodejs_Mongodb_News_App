// mongodb+srv://baran:baran@baran.t1zck.mongodb.net/baran?retryWrites=true&w=majority  const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })


//********************* */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://baran:baran@baran.t1zck.mongodb.net/baran?retryWrites=true&w=majority";
//******************** */
 

app.get('/get_kullanciciler', function (req, res) {
  //  res.send('burası get olması konu olunur.... ')
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ataylay_odev");
    dbo.collection("kullaniciler").find({}).toArray(function(err,sonuc){
    if (err) throw err;
    res.json(sonuc)
//  res.json(JSON.stringify(sonuc))
    db.close();
    });
  });
  })

  app.post('/post_kullanici_olustur', jsonParser ,function (req, res) {
  // res.send('welcome, ' + req.body.username)
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ataylay_odev");
    var myobj = { kullaniciler_db: req.body.kullanicilerw ,sifreler_db: req.body.sifrelerw };
    dbo.collection("kullaniciler").insertOne(myobj, function(err, doc) {
      if (err) throw err;
      console.log("kullanıcı veri tabanına ekleme işlemi tamamlandı.");
     res.send("true")
    // console.log("true")
      db.close();
    });
  });
  })
  
// -------------------------------------------------------------------------------------------
  app.get('/get_butun_haberler', function (req, res) {
//   res.send('burası get olması konu olunur....')
    
     MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("ataylay_odev");
      dbo.collection("haberler").find({}).toArray(function(err,sonuc){
      if (err) throw err;
      res.json(sonuc)
 //  res.json(JSON.stringify(sonuc))
    
      db.close();
      });
    });
     
  })

  app.post('/post_haber_olustur', jsonParser ,function (req, res) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("ataylay_odev");
      var myobj = { haber_baslik_db: req.body.haber_basligi ,haber_icerik_db: req.body.haber_icerik };
      dbo.collection("haberler").insertOne(myobj, function(err, doc) {
        if (err) throw err;
        console.log("haber veri tabanına ekleme işlemi tamamlandı.");
       res.send("true")
        db.close();
      });
    });
  })

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.listen(3000, () => console.log("yayın başladı.."))