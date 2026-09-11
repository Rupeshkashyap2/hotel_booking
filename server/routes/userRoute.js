import express from "express";
import { protect } from "../middleware/authMiddleware";
import { getUserData, storeRecentSearchedCities } from "../controllers/userController";
import { User } from "@clerk/express";

const UserRouter = express.Router();

UserRouter.get('/', protect,getUserData);
UserRouter.get('/store-recent-search', protect,storeRecentSearchedCities);

export default UserRouter;
