import axios from "axios";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router";

const NewUser = () => {
  const email = useInput();
  const password = useInput();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post("/api/newUser", {
        email: email.value,
        password: password.value,
      });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container is-fluid">
      <h1 className="title is-1 has-text-centered">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="field is-horizontal ">
          <div className="field-label is-normal">
            <label className="label">Email</label>
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
            <label className="label">Password</label>
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

        <button className="button navbar-end is-responsive label">Send</button>
      </form>
    </div>
  );
};

export default NewUser;
