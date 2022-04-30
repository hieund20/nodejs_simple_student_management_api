import express from "express";
import bodyParser from "body-parser";
import studentRouters from "./routes/students.js";
import classRouters from "./routes/class.js";
import { connection } from "./db/dbUtils.js";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();
const PORT = process.env.PORT || 5000;

connection.connect((err) => {
  if (err) throw err;
  console.log("The MySQL database connected");
});

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Simple Student Management API",
      version: "1.0.0",
      description: "Coding by hieund20",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJSDoc(options);

app.use(bodyParser.json());
app.use("/hieund20/simplestudentmanagement/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/api/student", studentRouters);
app.use("/api/class", classRouters);

app.get("/", (req, res) =>
  res.send("Go to Simple Student Management API Docs - http://localhost:5000/hieund20/simplestudentmanagement/api-docs/")
);
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
