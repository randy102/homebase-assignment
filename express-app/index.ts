import * as express from "express";
import { setupAPIHandler } from "./adapter/inbound/api-handler";
import { appContainer } from "./inversify.config";

const router = express.Router();
setupAPIHandler(router, appContainer);

const app = express();
app.use(express.json());
app.use("/api", router);

app.listen(3000, () => console.log("Server running on port 3000"));
