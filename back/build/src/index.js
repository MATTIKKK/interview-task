"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./db");
const routers_1 = __importDefault(require("./routers"));
const app = (0, express_1.default)();
const router = express_1.default.Router();
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(body_parser_1.default.json());
app.use(router);
(0, routers_1.default)(router);
const server = http_1.default.createServer(app);
db_1.MongoDatabase.initMainDataBaseConnection();
server.listen(8080, () => {
    console.log('Server running on port http://localhost:8080/');
});
//# sourceMappingURL=index.js.map