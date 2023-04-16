  import express, { Express, Request, Response } from "express";
  import cors from "cors";
  import { defaultRoute } from "./routes";

  const app: Express = express();

  app.use(express.json());
  app.use(cors());

  app.use('/', defaultRoute);

  const port = 8000;

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
  