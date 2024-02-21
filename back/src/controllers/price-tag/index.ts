import express from "express";
import { IPriceTag } from "../../db/price-tag";
import { PriceTagData } from "../../data/price-tag";

export const getAllPriceTags = async (req: express.Request, res: express.Response) => {
  try {

    const priceTags: IPriceTag[] = await PriceTagData.getAll();

    return res.status(200).send({ message: 'OK', priceTags });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
