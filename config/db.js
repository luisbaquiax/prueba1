const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

const connectDB = async () => {
  try {
    await pool.getConnection(); 
    console.log("✅ Conectado a MySQL");
  } catch (error) {
    console.error("❌ Error en la conexión:", error);
    process.exit(1);
  }
};

module.exports = { pool, connectDB };
