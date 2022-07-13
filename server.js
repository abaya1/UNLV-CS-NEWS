const express = require('express');
const app = express();
const multer = require('multer')
const path = require('path');
const port = process.env.PORT || 3002

app.use(express.static(path.resolve(__dirname, "./Frontend/build")));

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
      callback(null, './Frontend/src/uploads');
  },
  filename: function (req, file, callback) {
      callback(null, file.originalname);
  }
});

const upload = multer({storage: storage})

const { MongoClient, ServerApiVersion, ObjectId, MongoInvalidArgumentError } = require('mongodb');
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
    collection.find({}).toArray((err, result) => { res.json(result)})
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


app.post("/deletenews", async (req, res) => {


    const database = client.db("UnlvCsNews");
    const collection = database.collection("news");
    console.log(req.body);
    collection.deleteOne({Title: req.body.Title}).then(() => console.log("deleted succesfully"))
    

});

app.post("/updatenews", async (req, res) => {

  var _id = new ObjectId
   req.body._id = new ObjectId(req.body._id)

  const database = client.db("UnlvCsNews");
  const collection = database.collection("news");
  console.log(req.body);
  collection.updateOne({_id: req.body._id},{$set: req.body},{upsert: true}).then(() => console.log("updated successfully"));
  

});



app.listen(port, ()=> console.log(`app is listening on port ${port}!`));
