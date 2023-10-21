import express from "express";
import { ForgotHelper,AddUsers,updateByID } from "../ForgotHelper.js";

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

router.put("/:Email", async (req, res) =>
{
    const { Email } = req.params;
     const updatedBooks = req.body;
    console.log(req.params, Email);
    const updates = await updateByID(Email, updatedBooks);
    res.send(updates);

})
export const Forgots = router;
