import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Cria uma aplicação web usando o framework Express.
const app = express();
app.use(express.static("uploads"));
routes(app);

// Inicia o servidor e escuta por requisições na porta 3000.
app.listen(3000, () => {
  console.log("Servidor escutando...");
});
