const express = require("express");
const router = express.Router();
const PersonaController = require("../controllers/PersonaController");

// Rutas para clientes
router.get("/:id", PersonaController.getPersonaByUID);
router.post("/",PersonaController.insertPersona);
module.exports = router;