const mongoose = require('mongoose')

const uri = "mongodb+srv://adriane0523:Awesome0523@@cluster0.vhxme.mongodb.net/list?retryWrites=true&w=majority";

mongoose
    .connect(uri, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db

/*
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("list").collection("list");
  console.log("database succesful")

  client.close();
});

const db = mongoose.connection

*/