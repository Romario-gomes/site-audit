"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./routes/index"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const server = (0, express_1.default)();
server.set('view engine', 'mustache');
server.set('views', path_1.default.join(__dirname, 'views'));
server.engine('mustache', (0, mustache_express_1.default)());
server.use(express_1.default.urlencoded({ extended: false }));
server.use(express_1.default.json());
server.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Rotas
server.use(index_1.default);
server.use((req, res) => {
    res.send('Página não encontrada');
});
server.listen(process.env.PORT);