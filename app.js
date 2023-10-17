const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "juan camilo",
    titulo: "Aprendiendo Node.js",
  });
});

// app.get("/", (req, res) => {
//   res.send("Home-page");
// });

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "juan camilo",
    titulo: "Aprendiendo Node.js",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "juan camilo",
    titulo: "Aprendiendo Node.js",
  });
});

// app.get("*", (req, res) => {
//   res.sendFile(__dirname + "/public/404.html");
// });

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
