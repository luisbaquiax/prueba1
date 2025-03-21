
const { pool } = require("../config/db");
const criptp = require('../utilities/Cripto')


class LoginService {
  async loginUser(data) {
    const { username, password } = data;
    const [result] = await pool.execute(
      "CALL getUser(?,?);",
      [username,(await criptp.encriptar(password))]
    );
    return result[0][0];
  }
}

module.exports = new LoginService();
