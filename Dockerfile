FROM node:20

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install --omit=dev

# Copia el resto de la aplicación
COPY . .

# Expone el puerto en el que corre tu aplicación (ajústalo si es necesario)
EXPOSE 3000

# Comando por defecto para ejecutar la aplicación
CMD ["node", "server.js"]
