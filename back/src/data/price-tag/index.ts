import { IPriceTag, PriceTagModel } from "../../db/price-tag"

export class PriceTagData {
    public static async getAll(): Promise<IPriceTag[]> {
        return await PriceTagModel.find({});

    }
}

