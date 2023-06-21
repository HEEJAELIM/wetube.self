import express from "express"; // node_modules에 있는 express를 가져옴
// const express = require("express");
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouters";
import videoRouter from "./routers/videoRouters";
import { localMiddleware } from "./middlewares";

const app = express(); // express application을 사용하게 해줌

const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);

app.use(express.urlencoded({ extended: true })); // req.body의 내용을 이해하기 위해 사용(req.body는 input의 내용으로 name="여기" 여기를 부르기위한것)

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

app.use(localMiddleware);
app.use("/", rootRouter);
app.use("/user", userRouter);
app.use("/videos", videoRouter);

export default app;
