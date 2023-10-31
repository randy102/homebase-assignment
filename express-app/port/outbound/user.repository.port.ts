import { User } from "../../model";

export const USER_REPOSITORY = Symbol("USER_REPOSITORY");

export interface IUserRepository {
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User | null>;
  findByEmail(email: string, excludedId?: number): Promise<User | null>;
  insert(user: Omit<User, "id">): Promise<User>;
  update(user: User): Promise<User>;
  remove(id: number): Promise<void>;
}
