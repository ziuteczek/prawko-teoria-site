import { MongoClient } from "mongodb";

const mongo = await new MongoClient("mongodb://localhost:27017", {}).connect();
const mongoDB = mongo.db("prawko-teoria");
export default mongoDB;
export const users = mongoDB.collection("users");
