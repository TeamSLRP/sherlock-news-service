const express = require('express');
const hbs = require('hbs');

var PORT = process.env.PORT || 3000;

const getNews = require('./jsLogic/getNews');

const key ='e81e0ae782944b61baa781f91d27841a';

var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());

app.set('view engine','hbs');

app.get('/',(req,res)=>{
  res.render('home.hbs');
});

app.post('/getNews',(req,res) => {
  getNews.getNews(req.body.source,(error,results) => {
    if(error){
      res.render('error.hbs');
    } else {
      res.render('news.hbs',results);
    }
  });
});

app.listen(PORT , () => {
  console.log("Server is up and running on port ",PORT);
});
