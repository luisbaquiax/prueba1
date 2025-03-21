const { pool } = require("../config/db");

class RolService{
    async getRols() {
        const [result] = await pool.execute(
          "select * from rol;"
        );
        return result;
    }
  async getRolByID(UID) {
      const [result] = await pool.execute(
        "select * from rol where UID=?;",
        [UID]
      );
      return result[0];
  }
}

module.exports = new RolService();