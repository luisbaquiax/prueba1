const express = require("express");
const router = express.Router();
const authenticateToken = require('../utilities/authMiddleware');

const CuentaController = require("../controllers/CuentaController");

router.get("/:idU", authenticateToken, CuentaController.getCuentaUsuario);
router.post("/", CuentaController.insertCuenta);
module.exports = router;