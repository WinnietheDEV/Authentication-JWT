const express = require("express");
const router = express.Router();
const { dashboard } = require("../controllers/controllerDashboard");

router.route("/").get(dashboard);

module.exports = router;
