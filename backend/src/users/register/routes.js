const { Router } = require("express");
const controller = require("./controller");

const router = Router();
router.post("/", controller.userRegister);

module.exports = router;
