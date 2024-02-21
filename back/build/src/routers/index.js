"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const price_tag_1 = require("../controllers/price-tag");
const getPriceTags = (router) => {
    router.get("/priceTags", price_tag_1.getAllPriceTags);
};
exports.default = getPriceTags;
//# sourceMappingURL=index.js.map