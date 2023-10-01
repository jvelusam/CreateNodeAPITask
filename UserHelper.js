import { client } from "./index.js";

import bcrypt from "bcrypt";

export  async function UserHelper(req)
{

return await client
    .db("Products")
    .collection("UserInfo")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      client.close();
    });
  res.send(book);



}