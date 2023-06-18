import express, { NextFunction, Request, Response } from "express";
import * as dotenv from "dotenv";
import { users } from "./database/users";
import { UserController } from "./controllers/user.controller";
import { User } from "./models/user";
import { TransactionController } from "./controllers/transactions.controller";

import { UserMiddleware } from "./middleware/user.middleware";
import cors from "cors";
import { UserRoutes } from "./routes/user.routes";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

app.use("/user", UserRoutes());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`API is running ${PORT}`);
});
