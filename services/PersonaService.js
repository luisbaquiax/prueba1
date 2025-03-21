const { pool } = require("../config/db");

class PersonaService {
  async getPersonaByID(UID) {
    const [rows] = await pool.execute("SELECT * FROM persona where UID=?", 
        [UID]
    );
    return rows[0];
  }
  async insertPersona(data) {
    const [result] = await pool.execute("insert into persona(nombre, apellido,nacimiento,direccion,sexo,telefono,dpi) values (?, ?,?,?,?,?,?);", 
        [data.nombre,data.apellido, data.nacimiento, data.direccion, data.sexo, data.telefono, data.dpi]
    );
    return {id:result.insertId,nombre:data.nombre,apellido:data.apellido,nacimiento: data.nacimiento,direccion: data.direccion, sexo:data.sexo, telefono:data.telefono, dpi:data.dpi};
  }
  async deletePersonaByID(UID) {
    const [result] = await pool.execute("DELETE FROM persona WHERE UID = ?", [UID]);
    return { message: "Persona eliminada correctamente", affectedRows: result.affectedRows };
  }
  
}

module.exports = new PersonaService();
