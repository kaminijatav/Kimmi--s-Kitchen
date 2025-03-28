import express from "express";
import { addToCart, getCart, removeFromCart } from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";
const cartRouter = express.Router();
//add to user cart
cartRouter.post("/add",authMiddleware, addToCart);
//remove items from user cart
cartRouter.post("/remove",authMiddleware, removeFromCart);
//get user cart data
cartRouter.post("/get",authMiddleware, getCart);
export default cartRouter;