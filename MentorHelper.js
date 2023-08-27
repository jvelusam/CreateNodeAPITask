import { client } from "./index.js";


const pipeline = [{
  $lookup:
  {
    from: "Students",
    localField: "Name",
    foreignField: "Mentor",
    as: "result",
  },
},
];

// const pipeline = [];

// const aggCursor = client.db("sample_airbnb")
//                         .collection("listingsAndReviews")
//                         .aggregate(pipeline);

export async function GetAllMentor(req) {
  return await client
    .db("NodeJSAPI")
    .collection("Mentor")
    .find(req.query)
    .toArray();
}
export async function GetMentorByID() {}

export async function AddMentor(mentors)
{
  return await client.db("NodeJSAPI").collection("Mentor").insertMany(mentors);
}

export async function DeleteMentor() { }


export async function GetStduentsAgentMentor(req) {
  return await client.db("NodeJSAPI").aggregate(pipeline).toArray();
}
