const RolService = require("../services/RolService");

class RolController{
    async getRoles(req, res) {
        try {
          const roles = await RolService.getRols();
          res.status(201).json(roles);
        } catch (error) {
          res.status(500).json({ message: "Roles no ecnontrados", error });
        }
    }
    async getRolByUID(req, res) {
        try {
            const { id } = req.params;
          const rol = await RolService.getRolByID(id);
          res.status(200).json(rol);
        } catch (error) {
          res.status(500).json({ message: "Error al encontrar a rol", error });
        }
      }
}

module.exports = new RolController();