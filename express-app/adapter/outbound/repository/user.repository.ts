import { IUserRepository } from "../../../port/outbound";
import { User } from "../../../model";
import { inject, injectable } from "inversify";
import { DataSource, FindOptionsWhere, Not, Repository } from "typeorm";

@injectable()
export class UserRepository implements IUserRepository {
  private repo: Repository<User>;

  constructor(@inject(DataSource) dataSource: DataSource) {
    this.repo = dataSource.getRepository(User);
  }

  findAll(): Promise<User[]> {
    return this.repo.find();
  }

  insert(user: Omit<User, "id">): Promise<User> {
    return this.repo.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete({ id });
  }

  findById(id: number): Promise<User | null> {
    return this.repo.findOneBy({ id });
  }

  findByEmail(email: string, excludedId?: number): Promise<User | null> {
    const query: FindOptionsWhere<User> = { email };
    if (excludedId) {
      query.id = Not(excludedId);
    }
    return this.repo.findOneBy(query);
  }

  update(user: User): Promise<User> {
    return this.repo.save(user);
  }
}
