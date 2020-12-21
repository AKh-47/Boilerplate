const router = require("express").Router();
const authController = require("../controllers/auth");

router.post("/register", authController.registerHandler);
router.post("/login", authController.loginHandler);
router.get("/validate/:token", authController.validationHandler);

module.exports = router;
