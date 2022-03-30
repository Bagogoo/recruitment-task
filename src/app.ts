import express, { Application } from "express";
import { movieRouter, testRouter } from "./routes";

const app: Application = express();

app.use(express.json());

app.use('/movie', movieRouter)
.use('/test', testRouter);

export default app;

