import express from "express";
import { ForgotHelper } from "../ForgotHelper.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const book = await ForgotHelper(req);
  res.send(book);
});

export const Forgots = router;