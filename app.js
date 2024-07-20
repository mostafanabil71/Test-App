const express = require('express');
const path = require('path');
const app = express();
const host = 'localhost';
const port = 8008;


app.use(express.static(path.join(__dirname,'public')));

// Route for serving hello.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'hello.html'))
});

// start server
  app.listen(port, function (error) {
   if(!error)
      console.log(`Server is Successfully Running,and App is listening on http://${host}:${port}/`)
  else 
      console.log("Error occurred, server can't start", error);
});
