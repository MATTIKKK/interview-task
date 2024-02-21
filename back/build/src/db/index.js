"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDatabase = void 0;
const mongoose_1 = require("mongoose");
const config_1 = require("../config");
class MongoDatabase {
    static mainDataBaseConnection = new mongoose_1.Mongoose();
    static async initMainDataBaseConnection() {
        console.log(`Trying to connect to ${config_1.Config.mongoUrl}`);
        return MongoDatabase.mainDataBaseConnection
            .connect(config_1.Config.mongoUrl)
            .then(() => console.log(`Connected to ${config_1.Config.mongoUrl}`))
            .catch((err) => {
            console.log(`Couldn't connect to ${config_1.Config.mongoUrl}`);
            throw err;
        });
    }
}
exports.MongoDatabase = MongoDatabase;
//# sourceMappingURL=index.js.map