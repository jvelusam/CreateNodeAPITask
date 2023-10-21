import express from "express";
import { ForgotHelper,AddUsers } from "../ForgotHelper.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const book = await ForgotHelper(req);
  res.send(book);
});

router.post("/", async (req, res) => {
  let newmentors = req.body;
  console.log(newmentors);
  const mentor = await AddUsers(newmentors);
  res.send(mentor);
});
export const Forgots = router;
