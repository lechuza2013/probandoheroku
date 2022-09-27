import * as express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/hola", (req, res) => {
  res.json({
    message: "Hola? XD, my name is heroku",
  });
});

app.listen(port, () => {
  console.log("Express corriendo en el puerto: ", port);
});
