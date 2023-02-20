require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const cors = require("cors");
// router
const routerAuth = require("./routes/routesAuth");
const routerDashboard = require("./routes/routesDashboard");
// middleware
const authentication = require("./middleware/authentication");
const middlewareNotFound = require("./middleware/middlewareNotFound");
const middlewareErrHandler = require("./middleware/middlewareErrHandler");
// connect to database
const connectDB = require("./db/connect");

app.use(cors());

app.use(express.json());

// app.get("/api/v1", authentication);
app.use("/api/v1", routerAuth);
app.use("/api/v1/dashboard", authentication, routerDashboard);

app.use(middlewareErrHandler);
app.use(middlewareNotFound);
const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
