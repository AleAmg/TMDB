// Configuración del server
const express = require("express");
const db = require("./config/db");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const passportConfig = require("./config/passport");

const router = require("./routes");

const app = express();

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

const PORT = 3001;
db.sync({ force: true }).then(() =>
  app.listen(PORT, () => console.log(`Listening in port ${PORT}`))
);
