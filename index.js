const express= require('express');
const app= express();
const mongoose= require('mongoose');
const rout = require('./routers/routes');
const cors= require('cors');
require('dotenv').config();


// parsers 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
mongoose.connect(process.env.mongodb_key,{useNewUrlparser:true},()=> {
    console.log('mongoDB is connected')
})
// setting routers 
app.use('/post',rout);

app.get('/',(req,res)=> {
    res.send('wellcome to home page')

})

const port = 5000||process.env.PORT;
app.listen(port , ()=>{
    console.log(`server listning on port ${port}`)
})

