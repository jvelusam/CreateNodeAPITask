import express from "express";
import { AddMentor,GetAllMentor,GetStduentsAgentMentor } from "../MentorHelper.js";
const router = express.Router();

router.get("/", async (req, res) => {

    const ment = await GetAllMentor(req);
    res.send(ment)

});

router.post("/", async (req, res) =>
{
   
    let newmentors = req.body;
    console.log(newmentors)
 const mentor = await AddMentor(newmentors) 
res.send(mentor)
});

router.get("/Students", async (req, res) =>
{

    const results = await GetStduentsAgentMentor(req)

    res.send(results)
});
// router.put("/:id", async (req, res) => {});

// router.delete("/:id", async (req, res) => {});

export const mentorRouter = router;
