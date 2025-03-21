const PersonaService = require("../services/PersonaService");

class PersonaController {
  async getPersonaByUID(req, res) {
    try {
        const { id } = req.params;
      const persona = await PersonaService.getPersonaByID(id);
      res.status(200).json(persona);
    } catch (error) {
      res.status(500).json({ message: "Error al encontrar a persona", error });
    }
  }

  async insertPersona(req, res) {
    try {
      const persona = await PersonaService.insertPersona(req.body);
      res.status(200).json(persona);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error al insertar la nueva persona", error });
    }
  }
}

module.exports = new PersonaController();
