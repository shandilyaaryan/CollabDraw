import express from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware.js";
import { JWT_SECRET } from "@repo/backend-common/config"

const app = express();

const port = 3001;

app.post("/signup", (req, res) => {
    // db call
    res.json({
        userId: "123"
    })
});

app.post("/signin", (req, res) => {
  const userId = 1;
  const token = jwt.sign({ userId }, JWT_SECRET);
  res.json({ token });
});

app.post("/room", middleware, (req, res) => {
  //db call

  res.json({
    roomId: 123,
  });
});

app.listen(port);
