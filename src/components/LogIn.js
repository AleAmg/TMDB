import axios from "axios";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import swal from "sweetalert";

const LogIn = () => {
  const email = useInput();
  const password = useInput();
  const navigate = useNavigate();
  const usuario = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/user/login`, {
        email: email.value,
        password: password.value,
      });
      usuario.toggleAuth(data.id, data.username);
      navigate("/log");
    } catch (err) {
      console.log(err);
      swal({
        title: "Error",
        text: "Incorrect user or password",
        icon: "error",
      });
    }
  };

  return (
    <div className="max">
      <div className="inputMax">
        <div className="container is-fluid  ">
          <h1 className="title is-1 has-text-centered has-text-light">
            Log In
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="field is-horizontal ">
              <div className="field-label is-normal">
                <label className="label has-text-light">Email</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      {...email}
                      className="input"
                      type="email"
                      placeholder="Email"
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label has-text-light">Password</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      {...password}
                      className="input"
                      type="password"
                      placeholder="Password"
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            <button className="button navbar-end is-responsive label">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
