const UsuarioService = require("../services/UsuarioService");
const PersonaService = require("../services/PersonaService");

class UsuarioController {
    async insertUsuario(req, res) {
        let UIDPersona;
        try {
            const persona = await PersonaService.insertPersona(req.body);
            
            // Verificamos si la persona fue creada correctamente
            if (!persona || !persona.id) {
                return res.status(500).json({ message: "Error al insertar la persona" });
            }
            UIDPersona=persona.id;
            const usuario = await UsuarioService.createUser(req.body, persona.id);
            if(!usuario||!usuario.id){
                console.log(PersonaService.deletePersonaByID(UIDPersona));
                return res.status(500).json({ message: "Error al insertar el usuario" });
            }
            usuario.persona=persona;
            res.status(200).json(usuario);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error al insertar el nuevo usuario", error });
        }
    }
}

module.exports = new UsuarioController();
