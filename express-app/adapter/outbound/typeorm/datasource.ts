import { DataSource } from "typeorm";
import { User } from "../../../model";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db.sqlite3",
  entities: [User],
  synchronize: true,
  logging: false,
});

AppDataSource.initialize()
  .then(() => console.log("Database initialize successfully"))
  .catch((error) => console.log(error));

export { AppDataSource };
