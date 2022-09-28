import * as express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

console.log(process.env.NODE_ENV);

app.get("/env", (req, res) => {
  res.json({
    environment: process.env.NODE_ENV,
  });
});
app.get("/hola", (req, res) => {
  res.json({
    message: "Hola? XD, my name is heroku",
  });
});

app.listen(port, () => {
  console.log("Express corriendo en el puerto: ", port);
});
