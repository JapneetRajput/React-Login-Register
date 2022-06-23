const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000'],
  methods:["GET","POST"],
  credentials:true,
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
  key:'userId',
  secret:'arjun',
  resave:false,
  saveUninitialized:false,
  cookie:{
    expires:60*60*24*7,
  },

}))

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "fsb",
  port:'3306'
});

app.post("/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  bcrypt.hash(password,saltRounds,(err,hash)=>{

    if(err){
      console.log(err);
    }

    db.query(
      "INSERT INTO users (name, email, username,password, confirmPassword) VALUES (?,?,?,?,?)",
      [name, email, username, hash, confirmPassword],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  })

});

app.get('/login',(req,res)=>{
  if(req.session.user){
    res.send({loggedIn:true,user:req.session.user});
  }
  else{
    res.send({loggedIn:false});
  }
})

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query("SELECT * FROM users where username = ?;",
  [username], (err, result) => {
    if (err) {
      res.send(err);
    } 
    // else {
    //   res.send(result);
    // }
    if(result.length>0){
      bcrypt.compare(password,result[0].password,(error,response)=>{
        if(response){
          req.session.user = result;
          console.log(req.session.user);
          res.send(result);
        } else if(error) {
          res.send(error);
        }
        else{
          res.send({message:"Wrong credentials!"});
        }
      });
    }
    else{
      res.send({message:"User doesn't exist!"});
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    "UPDATE employees SET wage = ? WHERE id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yay, your server is running on port 3001");
});