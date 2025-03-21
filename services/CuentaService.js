const { pool } = require("../config/db");

class CuentaService{
    async getCuentaByIDUser(idU) {
        const [rows] = await pool.execute("SELECT * FROM cuenta where usuario=?", 
            [idU]
        );
        return rows;
      }
    async insertCuenta(data) {
        const [result] = await pool.execute("insert into cuenta (numero,saldo,creacion,tipoCuenta,usuario) values (?, 0.00,NOW(),?,?);", 
            [data.numero,data.tipoCuenta, data.usuario]
        );
        return {id:result.insertId,numero:data.numero,saldo:result.saldo,tipo:result.tipo}
    } 
}

module.exports = new CuentaService();