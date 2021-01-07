const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MONGOURI } = require('./keys');
const port = 5000;
require('./models/user');
app.use(express.json());
app.use(require('./routes/auth'))


mongoose.connect(MONGOURI, { useUnifiedTopology: true,useNewUrlParser:true,useCreateIndex: true });
mongoose.connection.on('connected',()=>{
    console.log("Database Connected");
    
})
mongoose.connection.on("error", (err) => {
  console.log("Database Connection",err);
});

app.listen(port,()=>{
    console.log(`Server is listening in ${port}`)
})