import express from "express";
import { userdetails } from "../UserHelper.js";

const router = express.Router();

router.get("/", async(req, res) =>
{

     const book = await userdetails(req);
      res.send(book);


})