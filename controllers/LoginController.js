const LoginService = require("../services/LoginService");
const PersonaService = require("../services/PersonaService");
const RolService = require("../services/RolService");
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'Bancuchus3155412531301';
class LoginController {
  async login(req, res) {
    try {
      const usuario = await LoginService.loginUser(req.body);
      if (!usuario) {
        return res.status(401).json({ message: "Credenciales inválidas" });
      }
      const rol = await RolService.getRolByID(usuario.rol);
      const persona = await PersonaService.getPersonaByID(usuario.persona);
      usuario.persona = persona;
      usuario.rol = rol;
      const token = jwt.sign(
        { id: usuario._id, username: usuario.username, rol: usuario.rol },
        SECRET_KEY,
        { expiresIn: '1h' }
      );
      res.setHeader('Authorization', `${token}`);
      res.status(200).json({ usuario });
    } catch (error) {
      res.status(500).json({ message: "Usuario no autenticado", error });
    }
  }

}

module.exports = new LoginController();
