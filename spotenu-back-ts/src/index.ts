import express from "express";
import * as functions from "firebase-functions";
import { userRouter } from "./router/userRouter";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/users/", userRouter);

export const api = functions.https.onRequest(app);
