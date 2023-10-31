import "reflect-metadata";
import { Container } from "inversify";
import { IUserService, USER_SERVICE } from "./port/inbound";
import { UserService } from "./domain/user.service";
import { IUserRepository, USER_REPOSITORY } from "./port/outbound";
import { UserRepository } from "./adapter/outbound/repository";
import { DataSource } from "typeorm";
import { AppDataSource } from "./adapter/outbound/typeorm/datasource";

const appContainer = new Container();

appContainer.bind(DataSource).toConstantValue(AppDataSource);

appContainer.bind<IUserRepository>(USER_REPOSITORY).to(UserRepository);

appContainer.bind<IUserService>(USER_SERVICE).to(UserService);

export { appContainer };
