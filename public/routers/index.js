const { Router } = require("express");
const productos = require("./productos");
const test = require("./test");

const router = Router();

router.use("/productos", productos);

router.use("/productos-test", test);

module.exports = router;
