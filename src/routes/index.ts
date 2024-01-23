import { Application } from "express";
import accessRouter from "./access/access.routes";

function routes(app: Application) {
    app.use("/", accessRouter);
}

export default routes;
