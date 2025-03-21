const express = require("express");
const { connectDB } = require("./config/db");
const loginRouters =  require('./routes/loginRoutes');
const rolRouters = require("./routes/rolRoutes");
const personaRouters = require("./routes/personaRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
const cuentaRoutes = require("./routes/cuentaRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

// Rutas
app.use("/login", loginRouters);
app.use("/roles",rolRouters);
app.use("/persona",personaRouters);
app.use("/usuario",usuarioRoutes);
app.use("/cuenta",cuentaRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
