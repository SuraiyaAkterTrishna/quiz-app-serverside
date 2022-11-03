const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");

// middleware
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://quizUser:7isRFZ0uoNSlhtb8@cluster0.p41norg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    await client.connect();
    const userCollection = client.db("mongoCrud").collection("user");
    console.log('db connected');
  } finally {

  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello From backend!");
});

app.listen(port, () => {
  console.log(`App is running on port, ${port}`);
});
