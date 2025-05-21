import express from "express";
import fs from "fs";
import { readFile } from "fs/promises";
import { StatusCodes } from "http-status-codes";

const app = express();
const port = 3000;

let documents;

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

try {
  const rawData = fs.readFileSync("documents.json");
  documents = JSON.parse(rawData);
} catch (error) {
  console.error("Failed to load documents.json:", error);
  documents = [];
}
/*
GET /search
*/
app.get("/search", (req, res) => {
  try {
    const query = req.query.q;
    //If query parameter 'q' is not provided
    //return all documents
    if (!query) {
      return res.status(StatusCodes.OK).json(documents);
    }
    // If q is provided, the endpoint will return the documents with some field that matches the value of q
    const filtered = documents.filter((doc) =>
      Object.values(doc).some((value) =>
        String(value).toLowerCase().includes(query.toLowerCase())
      )
    );
    console.log(filtered);
    if (filtered.length === 0) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: "Queried Data not found",
      });
    } else {
      res.status(StatusCodes.OK).json(filtered);
    }
  } catch (err) {
    console.error("Error fetching documents.json", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Server error while fetching documents",
    });
  }
});
/*
GET /documents/:id
*/
app.get("/documents/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log(id);

    const document = documents.find((doc) => doc.id === id);
    console.log(document);
    if (!document) {
      console.log("inside error");
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: `Document by id: ${id} not found` });
    }

    res.json(document);
  } catch (err) {
    console.error("Error fetching document by id", err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Server error while fetching documents by ID",
    });
  }
});

/*
POST: /search
*/
app.post("/search", (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields || {};

  let results = documents;

  if (query) {
    results = results.filter((doc) =>
      Object.values(doc).some((value) =>
        String(value).toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  // Apply field-based filtering if fields are provided
  if (Object.keys(fields).length > 0) {
    results = results.filter((doc) =>
      Object.entries(fields).every(
        ([key, value]) =>
          doc[key] &&
          String(doc[key]).toLowerCase() === String(value).toLowerCase()
      )
    );
  }

  if (!results || results.length === 0) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ error: `Search not found` });
  }

  res.status(StatusCodes.OK).json(results);
});
