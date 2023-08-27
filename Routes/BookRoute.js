import express from "express";
import { getAllBooks, getBooksByID, updateBooksByID } from "../Helper.js";

const router = express.Router();

// router.get("/", async (req, res) => {
//   const book = await getAllBooks(req);

//   res.send("Hello Everyone 🥳🥳🥳" + book);
// });

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params, id);
  const book = await getBooksByID(id);
  book ? res.send(book) : res.status(404).send({ message: "No Book Found" });
});

router.get("/", async (req, res) => {
  const book = await getAllBooks(req);
  res.send(book);
});

router.post("/", async (req, res) =>
{
    const newBooks = req.body;
    console.log(newBooks);
  const books = await addBooks(newBooks);
  res.send(books);
});

router.put("/:id", async (req, res) =>
{
    const { id } = req.params;
     const updatedBooks = req.body;
    console.log(req.params, id);
    const updates = await updateBooksByID(id, updatedBooks);
    res.send(updates);

})
export const booksRouter = router;
