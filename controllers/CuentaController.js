const CuentaService = require("../services/CuentaService");

class CuentaController{
    async getCuentaUsuario(req, res) {
        try {
            const { idU } = req.params;
          const cuenta = await CuentaService.getCuentaByIDUser(idU);
          res.status(200).json(cuenta);
        } catch (error) {
          res.status(500).json({ message: "Error al encontrar la cuenta", error });
        }
      }
    
      async insertCuenta(req, res) {
        try {
          const cuenta = await CuentaService.insertCuenta(req.body);
          res.status(200).json(cuenta);
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: "Error al insertar la nueva cuenta", error });
        }
      }
}

module.exports = new CuentaController();