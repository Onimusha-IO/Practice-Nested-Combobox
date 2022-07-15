import { Router } from "express";

import auth from "../middlewares/auth";
import * as CombinationsController from "../controllers/combinations";

const CombinationsRouter = Router();

CombinationsRouter.get(
  "/combinations",
  auth,
  CombinationsController.Combinations
);

export default CombinationsRouter;
