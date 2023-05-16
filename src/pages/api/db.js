// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if(req.method === "POST"){
    const data = req.body;

    

    const client = await MongoClient.connect("mongodb+srv://dolittlecosc484:Webdevproject1!@dolittle.ess7wwo.mongodb.net/?retryWrites=true&w=majority")
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).send({message: "inserted!"});
    }
  }

  export default handler;