import { client } from "./index.js";
import bcrypt from "bcrypt";

export async function getAllBooks(req) {
  return await client
    .db("b46-we")
    .collection("books")
    .find(req.query)
    .toArray();
}

export async function getBooksByID(id) {
  return await client.db("b46-we").collection("books").findOne({ id: id });
}

export async function updateBooksByID(id, updatedBooks) {
  return await client
    .db("b46-we")
    .collection("books")
    .updateOne({ id: id }, { $set: updatedBooks });
}

export async function addBooks(newBooks) {
  return client.db("BWE-46").collection("books").insertMany(newBooks);
}

export async function deleteBookByID(req) {}
