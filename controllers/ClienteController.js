const ClienteService = require("../services/ClienteService");

class ClienteController {
  async create(req, res) {
    try {
      const cliente = await ClienteService.createCliente(req.body);
      res.status(201).json(cliente);
    } catch (error) {
      res.status(500).json({ message: "Error al crear cliente", error });
    }
  }

  async getAll(req, res) {
    try {
      const clientes = await ClienteService.getClientes();
      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener clientes", error });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const response = await ClienteService.deleteCliente(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar cliente", error });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const response = await ClienteService.updateCliente(id, req.body);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar cliente", error });
    }
  }
}

module.exports = new ClienteController();
