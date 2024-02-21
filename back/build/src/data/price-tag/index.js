"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceTagData = void 0;
const price_tag_1 = require("../../db/price-tag");
class PriceTagData {
    static async getAll() {
        return await price_tag_1.PriceTagModel.find({});
    }
}
exports.PriceTagData = PriceTagData;
//# sourceMappingURL=index.js.map