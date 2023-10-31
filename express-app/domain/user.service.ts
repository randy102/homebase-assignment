import { IUserService } from "../port/inbound";
import { User } from "../model";
import { inject, injectable } from "inversify";
import { IUserRepository, USER_REPOSITORY } from "../port/outbound";

@injectable()
export class UserService implements IUserService {
  constructor(@inject(USER_REPOSITORY) private userRepository: IUserRepository) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async createUser(user: Omit<User, "id">): Promise<User> {
    const existedEmail = await this.userRepository.findByEmail(user.email);
    if (existedEmail) {
      throw new Error("EMAIL_EXISTED");
    }
    return await this.userRepository.insert(user);
  }

  async deleteUser(id: number): Promise<void> {
    const existedUser = await this.userRepository.findById(id);
    if (!existedUser) {
      throw new Error("USER_NOT_FOUND");
    }
    return this.userRepository.remove(id);
  }

  async getUserDetail(id: number): Promise<User> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error("USER_NOT_FOUND");
    }
    return user;
  }

  async updateUser(id: number, user: Partial<Omit<User, "id">>): Promise<User> {
    const existedUser = await this.userRepository.findById(id);
    if (!existedUser) {
      throw new Error("USER_NOT_FOUND");
    }

    if (user.email && existedUser.email !== user.email) {
      const existedEmail = await this.userRepository.findByEmail(user.email, existedUser.id);
      if (existedEmail) {
        throw new Error("EMAIL_EXISTED");
      }
    }

    return this.userRepository.update({ ...existedUser, ...user });
  }
}
