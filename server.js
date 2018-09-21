const express = require('express'),
  http = require('http'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');
  mongoose.connect('mongodb://admin:admin7@ds211613.mlab.com:11613/botkit')
  .then(() => console.log('DB running on port 3001'))
  .catch((e) => {
    console.error(`DB fail: ${e}`)
  });

  const app = express(),
  server = http.createServer(app);
  const PORT = process.env.PORT || 3000;

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
  

  server.listen(PORT, () => {
    console.log("Express server listening on port " + PORT || 3000);
  });