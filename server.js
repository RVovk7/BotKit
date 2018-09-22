const express = require('express'),
  http = require('http'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  dotenv = require('dotenv');

  if (process.env.NODE_ENV !== 'production') {
    dotenv.load();
  }


  mongoose.connect('mongodb://admin:admin7@ds211613.mlab.com:11613/botkit', { useNewUrlParser: true })
  .then(() => console.log('DB running on port 3001'))
  .catch((e) => {
    console.error(`DB fail: ${e}`)
  });

  const app = express(),
  server = http.createServer(app);
  app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))





  const botSchema = new mongoose.Schema({
    user: {
      type: String,
      required: true,
      minlength: 1
    },

  });

  const DB = mongoose.model('botkit', botSchema);
  
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
  });
  app.use(bodyParser.json());



  

  server.listen(process.env.PORT, () => {
    console.log("Express server listening on port " + process.env.PORT );
  });