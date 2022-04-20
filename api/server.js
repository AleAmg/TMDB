// Configuración del server
const express = require("express");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const { Users } = require("./models/User");
const ListFilm = require("./models/ListFilm");


const app = express();
const router = require("./routes");

app.use(express.json());

app.use(cookieParser());

app.use(
  sessions({
    secret: "tmdb",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      Users.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              console.log("Contraseña incorrecta");
              return done(null, false);
            }
            return done(null, user);
          });
        })
        .catch(done);
    }
  )
);

// le decimos que queremos que guarde
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// para sacar lo que guardamos
passport.deserializeUser((id, done) => {
  Users.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

// routes
app.use("/api", router);

const PORT = 3001;
Users.sync({ force: false })
  .then(() => {
    console.log("Base de datos conectada");
    app.listen(PORT, () => {
      console.log(`puerto ${PORT} funcionando`);
    });
  })
  .catch((err) => console.log(err));
