import { IUserService, USER_SERVICE } from "../../port/inbound";
import { Request, Response, Router } from "express";
import { Container } from "inversify";
import { CreateUserSchema, GetUserDetailSchema } from "./validation";
import { ZodError } from "zod";

function handleError(handler: (req: Request, res: Response) => Promise<any>) {
  return async (req: Request, res: Response) => {
    try {
      const result = await handler(req, res);
      return res.json(result);
    } catch (error) {
      const errorResponse =
        error instanceof ZodError
          ? { error: "VALIDATION_FAILED", details: error }
          : { error: (error as Error).message };
      return res.status(500).json(errorResponse);
    }
  };
}

export function setupAPIHandler(router: Router, appContainer: Container) {
  const userService = appContainer.get<IUserService>(USER_SERVICE);

  router.get(
    "/users",
    handleError(async () => {
      return await userService.getAllUsers();
    }),
  );

  router.get(
    "/user/:id",
    handleError(async (req) => {
      const dto = GetUserDetailSchema.parse({ id: Number(req.params.id) });
      return await userService.getUserDetail(dto.id);
    }),
  );

  router.post(
    "/user",
    handleError(async (req) => {
      const data = CreateUserSchema.parse(req.body);
      return await userService.createUser(data);
    }),
  );

  router.patch(
    "/user/:id",
    handleError(async (req) => {
      const id = Number(req.params.id);
      const data = req.body;
      return await userService.updateUser(id, data);
    }),
  );

  router.delete(
    "/user/:id",
    handleError(async (req) => {
      const id = Number(req.params.id);
      await userService.deleteUser(id);
      return "success";
    }),
  );
}
