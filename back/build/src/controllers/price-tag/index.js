"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPriceTags = void 0;
const price_tag_1 = require("../../data/price-tag");
const getAllPriceTags = async (req, res) => {
    try {
        const priceTags = await price_tag_1.PriceTagData.getAll();
        return res.status(200).send({ message: 'OK', priceTags });
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};
exports.getAllPriceTags = getAllPriceTags;
//# sourceMappingURL=index.js.map