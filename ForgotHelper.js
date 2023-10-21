import { client } from "./index.js";

import bcrypt from "bcrypt";

export  async function ForgotHelper(req)
{

return await client
    .db("b46-we")
    .collection("UserDetails")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      client.close();
    });
  res.send(book);



}
//insertMany
export async function AddUsers(mentors)
{
 return await client.db("b46-we").collection("UserDetails").insertMany(mentors);
}


export async function updateByID(email, updatedBooks) {
  return await client
    .db("b46-we")
    .collection("UserDetails")
    .updateOne({ Email: email }, { $set: updatedBooks });
}
