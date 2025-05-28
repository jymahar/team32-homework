import knex from "knex";
const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "admin",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});

import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// Allowlist of valid fields and directions
const allowedFields = ["id", "first_name", "last_name"];
const allowedDirections = ["asc", "desc"];

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

//Fix 1: To avoid SQL injection
//Added validation by getting the query parameters from request
// and not using orderByRaw()
contactsAPIRouter.get("/", async (req, res) => {
  let query = knexInstance.select("*").from("contacts");

  if (req.query.sort) {
    const parts = req.query.sort.split(" ");
    const field = parts[0];
    const direction = (parts[1] || "asc").toLowerCase();

    if (
      !allowedFields.includes(field) ||
      !allowedDirections.includes(direction)
    ) {
      return res.status(400).json({ error: "Invalid sort parameter." });
    }

    query = query.orderBy(field, direction);
  }
  console.log("SQL", query.toSQL().sql);

  try {
    const contacts = await query;
    res.status(200).json({ data: contacts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

/*Fix 2  To avoid SQL injection by using new route:
/api/contacts/  returns all routes
/api/contacts/sort/first_name/asc returns sorted contacts by first name 
/api/contacts/sort/last_name/desc returns sorted contacts by last name 
*/
contactsAPIRouter.get("/sort/:field/:direction?", async (req, res) => {
  const { field, direction = "asc" } = req.params;

  // Validate inputs
  if (
    !allowedFields.includes(field) ||
    !allowedDirections.includes(direction.toLowerCase())
  ) {
    return res.status(400).json({ error: "Invalid sort parameters." });
  }

  try {
    const data = await knexInstance
      .select("*")
      .from("contacts")
      .orderBy(field, direction.toLowerCase());

    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
