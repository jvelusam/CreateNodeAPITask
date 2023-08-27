import { client } from "./index.js";


export async function addStudents(students)
{

    return await client.db("NodeJSAPI").collection("Students").insertMany(students);
}

export async function GetAllStudent(req)
{

    return await client.db("NodeJSAPI").collection("Students").find(req.query).toArray();
}

export async function UpdateAllStudentById(id,updatedStudents)
{

    return await client.db("NodeJSAPI").collection("Students").updateOne({ id: id },{$set:updatedStudents})
}