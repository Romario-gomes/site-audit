import express from "express";
import dotenv from "dotenv";
import mainRoutes from "./routes/index";
import mustache from "mustache-express";
import path from "path";

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());
server.use(express.urlencoded({extended:false}));
server.use(express.json());
server.use(express.static(path.join(__dirname, '../public')));

// Rotas
server.use(mainRoutes);

server.use((req, res) => {
  res.send('Página não encontrada');
});

server.listen(process.env.PORT);