import { MongoClient } from "mongodb";
const Handle = async (req, res) => {
  if (req.method === "POST") {
    const data =JSON.parse(req.body)[0]; 
    console.log(data)
    const responsedata=await MongoClient.connect(process.env.MONGO_URL);
    console.log(responsedata)
    const database=responsedata.db();
    const collection=database.collection('meetsup');
    const result=await collection.insertOne(data);
    console.log(result);
    responsedata.close();
    res.status(201).json({message:'Data Added succesfully'})
  }
};
export default Handle;