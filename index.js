const express = require('express');
const app = express();
app.get('/', (req, res)=>{
res.send("<h1>Welcome to Port 4000  </h1>")
})
app.listen(4000);