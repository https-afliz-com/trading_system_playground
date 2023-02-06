import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { getDataDrift } from "./utils/driftService";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", async (req: Request, res: Response) => {
  const data = await getDataDrift();
  res.send(data);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
