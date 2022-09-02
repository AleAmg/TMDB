// Configuración del server
const express = require("express");
const morgan = require("morgan");
const db = require("./config/db");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const passportConfig = require("./config/passport");

const router = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use(
  sessions({
    secret: "user",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(passportConfig.localStrategyInstance);

passport.serializeUser(passportConfig.serializeUserCb);

passport.deserializeUser(passportConfig.deserializeUserCb);

app.use("/api", router); 

app.use("/api", (req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

const PORT = process.env.PORT || 3001;
db.sync({ force: false }).then(() =>
  app.listen(PORT, () => console.log(`Listening in port ${PORT}`))
);
