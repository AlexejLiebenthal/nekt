import express, { Request, Response } from "express";

const app = express();

app.get("/api/hello", (req: Request, res: Response) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
