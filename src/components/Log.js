import { useContext } from "react";
import { AuthContext } from "../context/auth";

const Log = () => {
  const usuario = useContext(AuthContext);

  

  if (!usuario.isAuthenticated)
    return <h1 className="title is-1 has-text-centered">Log In first</h1>;

  return (
    <div>
      <h1 className="title is-1 has-text-centered">
        Hello {usuario.username}!
      </h1>
    </div>
  );
};
export default Log;
