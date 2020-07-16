import express from "express";
import * as functions from "firebase-functions";
import { userRouter } from "./router/userRouter";
import cors from "cors";
import { adminRouter } from "./router/adminRouter";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/users/", userRouter);

app.use("/admin/", adminRouter);

export const api = functions.https.onRequest(app);
