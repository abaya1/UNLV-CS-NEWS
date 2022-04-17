const express = require('express');
const app = express();
const port = 3002;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://arronabay:Sunshine360&$@cluster0.s1qrw.mongodb.net/shop?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect().then(result => console.log("connected to database"), err => console.log(err));

//const database = client.db("UnlvCsNews"); is database
//const collection = database.collection("admin"); is collection for admin and password
//const collection = database.collection("news"); is collection for news stories

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.get("/getadminspassword", (req, res) => {
    const database = client.db("UnlvCsNews");
    const collection = database.collection("admin");
    collection.findOne({username:"admin"}).then(admin => res.json(admin));
  });

app.get("/getnews", (req, res) => {
    const database = client.db("UnlvCsNews");
    const collection = database.collection("news");
    collection.find().then(news => res.json(news));
  });


app.post("/postnews", async (req, res) => {
    const { news } = req.body;
    const database = client.db("UnlvCsNews");
    const collection = database.collection("news");
    collection.insertOne(news, (err, res) =>
    {
        if(err)
        {
            throw err;
        }
        else
        {
            res.status(200);
            console.log("1 news document inserted");
        }

    });

app.delete"/deletenews", async (req, res) => {
    

    });



  
    

  });



app.listen(port, ()=> console.log(`app is listening on port ${port}!`));