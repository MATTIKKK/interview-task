"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDatabase = void 0;
const _1 = require(".");
const initDatabase = async (options) => {
    if (options?.main) {
        await _1.MongoDatabase.initMainDataBaseConnection();
    }
};
exports.initDatabase = initDatabase;
//# sourceMappingURL=init-database.js.map