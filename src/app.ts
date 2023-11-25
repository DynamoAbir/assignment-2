import cors from "cors";
import express, { Application, Request, Response } from "express";
import { userRoutes } from "./Routes/user.route";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "Success",
    message: "Welcome to Assignment-2",
  });
});

app.use("/api/users", userRoutes);

export default app;
