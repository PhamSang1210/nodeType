import express, { Application } from "express";
const app: Application = express();
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import routes from "./routes";

//* middleware
app.use(compression());
app.use(cors());
app.use(helmet());
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//* Init routes
routes(app);

export default app;
