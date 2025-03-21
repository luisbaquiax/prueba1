const { pool } = require("../config/db");

class ClienteService {
  async createCliente(data) {
    const { nombre, correo, telefono } = data;
    const [result] = await pool.execute(
      "INSERT INTO clientes (nombre, correo, telefono) VALUES (?, ?, ?)",
      [nombre, correo, telefono]
    );
    return { id: result.insertId, ...data };
  }

  async getClientes() {
    const [rows] = await pool.execute("SELECT * FROM clientes");
    return rows;
  }

  async deleteCliente(id) {
    await pool.execute("DELETE FROM clientes WHERE id = ?", [id]);
    return { message: "Cliente eliminado" };
  }

  async updateCliente(id, data) {
    const { nombre, correo, telefono } = data;
    await pool.execute(
      "UPDATE clientes SET nombre = ?, correo = ?, telefono = ? WHERE id = ?",
      [nombre, correo, telefono, id]
    );
    return { message: "Cliente actualizado" };
  }
}

module.exports = new ClienteService();
