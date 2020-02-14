
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var  morgan = require('morgan');
var exphbs = require('express-handlebars');
var mysql =require('mysql');
var app = express();
app.use(bodyParser.json());
var conntection=mysql.createConnection({
host:'localhost',
user :'root',
password: '',
database : 'nodejstest'
});
conntection.connect((err)=>{
if(!err){
    console.log("Connected !");
}
else{
    console.log("Error !");
}
});
app.use(morgan('combined'));

app.use(cors());
app.get('/studentCreate',(req,res)=>{
   conntection.query("Select * from student",(err,rows)=>{
     if(err) console.log("Error get");
     else{
         console.log(rows)
         res.send(rows);
         
     }
   });
});
// Get List Student
app.get('/studentGet/:id',(req,res)=>{
 conntection.query("Select * from student where student_id=?",[req.params.id],(err,rows,field)=>{
  if(!err)
  res.send({rows});
  else
  console.log(err);
 });
});
// Delete 1 student
app.delete('/studentDelete/:id',(req,res)=>{
 conntection.query("Delete from student where student_id=?",[req.params.id],(err,rows,fields)=>{
    if(err)
    
    console.log(err);
 });
});
// insert student
app.post('/studentInsert',(req,res)=>{
    let data=req.body;
    var sql = 'CALL InsertStudent(?,?,?,?)';
    conntection.query(sql,['NULL',data.student_nm,data.student_email,data.student_address],(err,rows)=>{
     if(err)
     {
      console.log(err)
      
     }
     else{
         console.log("Insert suss");
         
     }
    });

});
// Update student
app.put('/studentUpdate/:id',(req,res)=>{
    let data=req.body;
    var sql = 'CALL InsertStudent(?,?,?,?)';
    conntection.query(sql,[req.params.id,data.student_nm,data.student_email,data.student_address],(err,rows)=>{
     if(err)
     {
      console.log(err)
      res.send("Error update student"+req.params.id);
     }
     else{
         console.log("Insert suss");
         res.send(" update 1 student\tid=" + req.params.id);  
     }
    });
});
//get pagging
app.get('/studentPagging/:pageNumber/:pageSize',(req,res)=>{
   var sql="CALL GetStudentPagging(?,?) ";
   conntection.query(sql,[req.params.pageNumber,req.params.pageSize],(err,rows)=>{
    if(err) console.log("Error get");
    else{
        console.log(rows)
        res.send(rows);
        
    }
   });
});
app.get('/studentPagging/:pageNumber/:pageSize',(req,res)=>{
    var sql="CALL GetStudentPagging(?,?) ";
    conntection.query(sql,[req.params.pageNumber,req.params.pageSize],(err,rows)=>{
        if(err) console.log("Error get");
        else{
            console.log(rows)
            res.send({rows});
            
        }
    });
 });
 app.get('/studentFind/:textSearch',(req,res)=>{
    var sql="CALL FindStudent(?) ";
    conntection.query(sql,[req.params.textSearch],(err,rows)=>{
     if(err) console.log("Error get");
     else{
         console.log(rows)
         res.send({rows});
         
     }
    });
 });
const controllers = require('./controllers/routes_product');

app.set('views',path.join(__dirname, '/views/'));
app.engine('hbs',exphbs({extname :'hbs',defaultLayout:'mainlayout' ,layoutsDir:__dirname+'/views/layouts/'}));
app.set('view engine','hbs');
app.use('/products',controllers)
// listen post 3000
const port = process.env.PORT || 3000;

app.listen(port);

console.log('API mockup running http://localhost:' + port);