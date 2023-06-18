import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { TransactionsRoutes } from "./transactions.routes";

export const UserRoutes = () => {
  const app = Router();

  //Rota de usuários
  //listar usuários
  app.get("/", new UserController().list);

  // listar por id
  app.get("/:id", new UserController().listUserId);

  // criar usuario
  app.post("/", new UserController().create);

  // atualizar usuário
  app.put("/:id", new UserController().update);

  // deletar usuário
  app.delete("/:id", new UserController().delete);

  app.use("/:userId/transactions", TransactionsRoutes());

  return app;
};
