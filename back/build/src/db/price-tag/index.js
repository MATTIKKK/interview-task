"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceTagModel = void 0;
const mongoose_1 = require("mongoose");
const __1 = require("..");
const COLLECTION_NAME = "PriceTag";
const PriceDetailSchema = new mongoose_1.Schema({
    price: { type: Number, required: true },
    description: { type: String, required: true },
});
const PriceTagSchema = new mongoose_1.Schema({
    before: [PriceDetailSchema],
    after: [PriceDetailSchema],
});
exports.PriceTagModel = __1.MongoDatabase.mainDataBaseConnection.model(COLLECTION_NAME, PriceTagSchema, COLLECTION_NAME);
//# sourceMappingURL=index.js.map