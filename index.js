const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = 3000;

(async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    app.get('/', function (req, res) {
      res.send('Hello World')
    });
  
    app.listen(port, function () {
      console.log(`On port http://localhost:${port}`);
    });
    
  } catch (e) {
    console.log(e);
  }
})();
