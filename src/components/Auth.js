import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="some-email@xyz.com" disabled />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="********" disabled />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
