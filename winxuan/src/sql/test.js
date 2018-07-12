const MongoClient = require('mongodb').MongoClient;
const resuleSet = require('./resultSet');
// //数据库地址
const url = 'mongodb://127.0.0.1:27017';
//数据库名称
const dbName = 'winxuan';
let db = {};


var request = require('request');
var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio')
var express = require('express');
var app = express();

var page=1 ;
var dataurl=`https://m.winxuan.com/`
var data={}
var arr=[];
// var timer=setInterval(()=>{
//   page++;
  request.get({
    url:dataurl,
    rejectUnauthorized: false,
    headers:{
      'Access-Control-Allow-Headers': 'origin, content-type, accept, x-requested-with, sid, mycustom, smuser ',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE, PUT ',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Max-Age': '1800 ',
      'Cache-Control': 'no-cache, no-store, max-age=0',
      'Connection': 'keep-alive ' ,
      'Content-Encoding': 'gzip ',
      'Content-Language': 'zh-CN ',
    }
  },function(err,res,body){
    var $=cheerio.load(body);
    $('.goodsshow-box').each((i,item)=>{
      $(item).find('.item').each((idx,items)=>{
        var imgsrc=$(items).find('img').attr('data-original');
        var title= $(items).find('.name').text();
        var priceN=$(items).find('.price-n').text();
        var priceO=$(items).find('.price-o').text();
        var author=$(items).find('.author').text();
        data={
          pageId:i,
          imgsrc,
          title,
          priceN,
          priceO,
          author,
        };
        arr.push(data)

      })
    })
    arr.forEach((item,i)=>{
      MongoClient.connect(url, function(err, client) {
        db = client.db(dbName);
        var collection = db.collection('homepage');
        const result = db.collection('homepage').insert(item);
        // return resuleSet(result.length > 0, result);
      });
    })

//     var data=JSON.parse(body).jsondata.data.searchResult.commodities;
//     data.forEach((item)=>{
//       MongoClient.connect(url, function(err, client) {
//         db = client.db(dbName);
//         var collection = db.collection('homepage');
//         //db.collection.insert()该方法插入一条或多条数据
//         const result = db.collection('homepage').insert(data);
//         return resuleSet(result.length > 0, result);
//
//       });
//     })
//     // fs.appendFile('./test.html',body,'utf8',(error)=>{})
//
  }) ;
// }, 5000)








// function getContestList(){
//     return new Promise(function(resolve,reject){
//         request.post({
//             url:'https://m.winxuan.com/search?keyword=%E5%BB%BA%E7%AD%91&params[0][categoryid]=1308&page=4&format=json',
//             rejectUnauthorized: false,
//             gzip: true,
//             headers:{
//                'Access-Control-Allow-Headers': 'origin, content-type, accept, x-requested-with, sid, mycustom, smuser ',
//                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE, PUT ',
//                'Access-Control-Allow-Origin':'*',
//                'Access-Control-Max-Age': '1800 ',
//                'Cache-Control': 'no-cache, no-store, max-age=0',
//                'Connection': 'keep-alive ' ,
//                'Content-Encoding': 'gzip ',
//                'Content-Language': 'zh-CN ',
//             },
//             // form: queryString.parse("")  ,
//         },
//         function(err,res,body){
//             // console.log(err);
//             // console.log(res.statusCode);
//             console.log(JSON.parse(body).jsondata.data.serchResult.commodities);
//             if(err){
//                 reject(err);
//             }
//             var contestList =  JSON.parse(body).data;
//             resolve(contestList);
//         });
//     });
// };