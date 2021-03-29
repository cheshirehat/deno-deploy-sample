import * as express from "express";

const app  = express();

app.get("/", (req, res) =>{
  res.send('Hello Deno!');
});

app.listen(3000, () => console.log("ok 3000"));

export default app;