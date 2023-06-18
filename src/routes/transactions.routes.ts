import { Router } from "express";
import { UserMiddleware } from "../middleware/user.middleware";
import { TransactionController } from "../controllers/transactions.controller";

export const TransactionsRoutes = () => {
  const app = Router({ mergeParams: true });

  //Criar Transaction
  app.post(
    "/",
    [UserMiddleware.validateUser],
    new TransactionController().createTransactions
  );

  app.get(
    "/:idTransaction",
    [UserMiddleware.validateUser],
    new TransactionController().listTransaction
  );

  app.get(
    "/",
    [UserMiddleware.validateUser],
    new TransactionController().listBalance
  );

  app.put(
    "/:idTransaction",
    [UserMiddleware.validateUser],
    new TransactionController().updateBalance
  );

  app.delete(
    "/:idTransaction",
    [UserMiddleware.validateUser],
    new TransactionController().deleteTransaction
  );

  return app;
};
