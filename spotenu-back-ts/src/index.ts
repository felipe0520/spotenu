import express from "express";
import * as functions from "firebase-functions";
import { userRouter } from "./router/userRouter";
import cors from "cors";
import { adminRouter } from "./router/adminRouter";
import { adminAndBandRouter } from "./router/adminAndBandRouter";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/users/", userRouter);

app.use("/admin/", adminRouter);

app.use("/adminorband/", adminAndBandRouter);

export const api = functions.https.onRequest(app);
