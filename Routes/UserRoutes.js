import express from "express";
import { UserHelper } from "../UserHelper.js";

const router = express.Router();

router.get("/", async(req, res) =>
{

     const book = await UserHelper(req);
      res.send(book);


})