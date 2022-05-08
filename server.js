const express = require('express');
const app = express();
const multer = require('multer')
const port = 3002;

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
      callback(null, './uploads');
  },
  filename: function (req, file, callback) {
      callback(null, file.originalname);
  }
});

const upload = multer({storage: storage})

const { MongoClient, ServerApiVersion } = require('mongodb');
const { redirect } = require('express/lib/response');
const uri = "mongodb+srv://arronabay:Sunshine360&$@cluster0.s1qrw.mongodb.net/shop?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect().then(result => console.log("connected to database"), err => console.log(err));

//const database = client.db("UnlvCsNews"); is database
//const collection = database.collection("admin"); is collection for admin and password
//const collection = database.collection("news"); is collection for news stories

app.get("/api", (req, res) => { //check for connection
    res.json({ message: "Hello from server!" });
  });

  app.use(express.json());
  app.use(express.urlencoded())

app.get("/getadminspassword", (req, res) => { //get the admins username and password
    const database = client.db("UnlvCsNews");
    const collection = database.collection("admin");
    collection.findOne({username:"admin"}).then(admin => res.json(admin));
  });

app.get("/getnews", (req, res) => { // gets all the news in json 
    const database = client.db("UnlvCsNews");
    const collection = database.collection("news");
    collection.find().then(news => res.json(news));
  });

  app.post("/postimage", upload.single("uploaded_file"), (req, res) => { 



    res.redirect(302,'/AdminDashboard');
  

  });

app.post("/postnews", async (req, res) => { //posts news to the database
    console.log(req.body)
    const database = client.db("UnlvCsNews");
    const collection = database.collection("news");

   

    collection.insertOne(req.body, (err, res) =>
    {
        if(err)
        {
            throw err;
        }
        else
        {
            console.log("1 news document inserted");
        }

    });
  
  });


app.delete("/deletenews", async (req, res) => {
    const { news } = req.body;

    const database = client.db("UnlvCsNews");
    const collection = database.collection("news");

    collection.deleteOne(news).then(result => deleted )
    

});



app.listen(port, ()=> console.log(`app is listening on port ${port}!`));