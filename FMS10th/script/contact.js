//to insert data in database.

const http=require("http")
const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const contact=express()
//connect to database
mongoose.connect('mongodb://localhost:27017/contact') 
const contact_schema=new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    comment:String,
})
const Data=mongoose.model("Data",contact_schema)

contact.use(bodyParser.urlencoded({extended:true}));
contact.use(express.static("public"));

contact.get('/',(req,res)=>{
   res.sendFile(__dirname + '/public/index.html')
});
contact.get('/contact',(req,res)=>{
    res.sendFile(__dirname + '/html/contact1.html')
 });
contact.post('/submit',async(req,res)=>{
    try{
        const{fname,lname,email,comment}=req.body;
        const data=new Data({
               fname,
               lname,
               email,
               comment,
        });
        await data.save();
        res.send("data submitted successfully");
    }
    catch(error){
        res.status(500).send("internal server error")
    }
})
contact.listen(2000,"127.0.0.1",()=>{
    console.log("my port is 2000")
});