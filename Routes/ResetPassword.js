import express from "express";
import { ResetHelper } from "../ResetHelper.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const book = await ResetHelper(req);
  res.send(book);
});

export const Resets = router;