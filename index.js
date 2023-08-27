import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import { booksRouter } from "./Routes/BookRoute.js";
import { mentorRouter } from "./Routes/MentorRoute.js";
import { studentRouter } from "./Routes/StudentRoute.js";
dotenv.config();
const app = express();
// req ->  what we request/send to server
// res => wat we receive from server

const MONGO_URL = process.env.MONGO_URL;
const PORT = 9000;
//Inbuilt Middleware
//interceptor | converting body to JSON
app.use(express.json());

//mongodb connection

async function createConnection()
{
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("MongoDB is connected");
  return client;
}

export const client = await createConnection();

//REST API endpoints
app.get("/", (req, res) => {
  res.send("Hello Everyone 🥳🥳🥳");
});

app.use("/books", booksRouter);

app.use("/mentor", mentorRouter);

app.use("/student", studentRouter);



// app.get("/", async  ( req, res) =>
// {
//   res.send("Hello Everyone 🥳🥳🥳");
// });
app.listen(PORT, () => console.log("Server started on the PORT", PORT));