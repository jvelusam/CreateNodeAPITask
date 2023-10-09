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

