const express = require("express");
const router = express.Router();
const ClienteController = require("../controllers/ClienteController");

// Rutas para clientes
router.post("/", ClienteController.create);
router.get("/", ClienteController.getAll);
router.delete("/:id", ClienteController.delete);
router.put("/:id", ClienteController.update);

module.exports = router;
