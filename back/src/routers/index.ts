import express from "express";
import { getAllPriceTags } from "../controllers/price-tag";

const getPriceTags = (router: express.Router) => {
  router.get("/priceTags", getAllPriceTags);
};

export default getPriceTags;
