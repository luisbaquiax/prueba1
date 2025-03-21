const UsuarioController = require("../controllers/UsuarioController");
const express = require("express");
const router = express.Router();


router.post("/",UsuarioController.insertUsuario);
module.exports = router;