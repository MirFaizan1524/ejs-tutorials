const express = require('express');
const app = express();
const path = require('path');
let portNumber = 3000;

app.set('veiw engine',"ejs");
app.set('veiws',path.join(__dirname,'veiws'));
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

let arr = ["C","Python","Javascript","C++","Ruby","Rail","Swift","C#","B#","Fortran","Pascal"];

app.get('/',(req,res)=>{
  res.render('index.ejs',{pageTitle:"Hompage",languages:arr});
})
app.post('/',(req,res)=>{
    console.log(req.body.plname);
      arr.push(req.body.plname);  
        res.redirect('/');
})

app.get('/contact',(req,res)=>{
    res.render('contact.ejs');
})





app.listen(portNumber,()=>{
  console.log(`listening to the portNumber`,portNumber)
})
