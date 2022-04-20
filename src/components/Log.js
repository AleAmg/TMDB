import { useContext } from "react";
import { AuthContext } from "../context/auth";

const Log = () => {
  const usuario = useContext(AuthContext);

  const username = (user) => {
    for (let i = 1; i < user.length; i++) {
      if (user[i] === "@") {
        return user.slice(0, i);
      }
    }
  };

  if (!usuario.isAuthenticated)
    return <h1 className="title is-1 has-text-centered">Log In first</h1>;

  return (
    <div>
      <h1 className="title is-1 has-text-centered">
        Hello {username(usuario.email)}!
      </h1>
    </div>
  );
};
export default Log;
