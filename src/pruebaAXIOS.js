import axios from "axios";

const cargarPeliculas = async () => {
  try {
    const respuesta = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      {
        params: {
          /* api_key: "3ba880eccd3167111b00500430da36aa", */
          language: "es-MX",
        },
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmE4ODBlY2NkMzE2NzExMWIwMDUwMDQzMGRhMzZhYSIsInN1YiI6IjYyMTY3NGIzZmU1YzkxMDAxYmQ5MTVkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QGMp9cijg67U_wWWffkI8J8IwggCsppd6QMoQs5Qkn8",
          },
      }
    )
    console.log(respuesta);
  } catch (err) {
    console.log(err);
  }
};

cargarPeliculas()