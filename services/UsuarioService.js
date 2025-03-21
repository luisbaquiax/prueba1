const {pool}= require("../config/db");
const Cripto = require("../utilities/Cripto");
class UsuarioService{
    async createUser(data, id_persona){
        console.log(data);
        console.log(id_persona);
        const hashedPassword = await Cripto.encriptar(data.password);
        const [result] = await pool.execute("insert into usuario(username,email,password,persona,rol) values (?,?,?,?,?); ",
            [data.username,data.email, hashedPassword,id_persona,data.rol]
        );  
        return {id:result.insertId, email:data.email, username:data.username,persona:id_persona,rol:data.rol}
    }
}

module.exports = new UsuarioService();