import express from "express";
import { GetAllStudent,addStudents,UpdateAllStudentById } from "../StudentHelper.js";

const router = express.Router();

router.get("/", async (req, res) => {

    const stude = await GetAllStudent(req);
    res.send(stude);

});

router.post("/", async (req, res) => {
    let students = req.body;
    console.log(students);
    const poststudents = await addStudents(students);
    poststudents ? res.send(poststudents) : res.status(404).send({ message: "No Book Found" });
});

router.put("/:id", async (req, res) =>
{

    let { id } = req.params;
     const updatedStudents = req.body;

    const results = await UpdateAllStudentById(id,updatedStudents)
    res.send(results);

})

export const studentRouter = router;