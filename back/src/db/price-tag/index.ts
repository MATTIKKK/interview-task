import { Schema } from "mongoose";
import { MongoDatabase } from "..";

const COLLECTION_NAME = "PriceTag";

export interface IPriceTag extends Document {
  before: Array<{
    price: number;
    description: string;
  }>;
  after: Array<{
    price: number;
    description: string;
  }>;
}

const PriceDetailSchema = new Schema({
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

const PriceTagSchema = new Schema<IPriceTag>({
  before: [PriceDetailSchema],
  after: [PriceDetailSchema],
});

export const PriceTagModel =
  MongoDatabase.mainDataBaseConnection.model<IPriceTag>(
    COLLECTION_NAME,
    PriceTagSchema,
    COLLECTION_NAME
  );
