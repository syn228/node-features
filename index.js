const express = require('express');
const app = express();

function doWork(duration){
  const start = Date.now();
  while(Date.now() - start < duration){

  }
}

app.get('/', (req, res) => {
  doWork(5000);
  res.send("Hello there")
});

app.listen(3000);