
import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://snowchr000:iamtheadmin@cluster0.qzyoo70.mongodb.net/"

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("users");

export default db;
