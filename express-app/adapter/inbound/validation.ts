import { z, ZodObject, ZodRawShape } from "zod";

export const Id = z.number();

export const GetUserDetailSchema = z.object({
  id: Id,
});

export const CreateUserSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
});

export const UpdateUserSchema = z.object({
  id: Id,
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
});

export const DeleteUserSchema = z.object({
  id: Id,
});

// export function validateDTO<T extends ZodRawShape>(schema: ZodObject<T>, dto: any) {
//   const result = schema.parse(dto);
//   ;
// }
