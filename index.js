import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req,res)=>{
    res.render("index.ejs");
})
app.get("/about", (req,res)=>{
    res.render("about.ejs");
})
app.get("/breakfast", (req,res)=>{
    res.render("breakfast.ejs");
})

app.get("/dinner", (req,res)=>{
    res.render("dinner.ejs");
})
app.get("/lunch", (req,res)=>{
    res.render("lunch.ejs");
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });