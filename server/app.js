const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req,res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
