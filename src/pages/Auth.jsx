import { useState } from "react";

const Auth = () => {
  const [isLogin, setLogin] = useState(true);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 offset-lg-4">
          <form>
            {!isLogin && (
              <div className="mt-3">
                <label htmlFor="fullname">Fullname</label>
                <input type="text" className="form-control" name="fullname" />
              </div>
            )}
            <div className="mt-3">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" name="email" />
            </div>
            <div className="mt-3">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" />
            </div>
            {!isLogin && (
              <div className="mt-3">
                <label htmlFor="confirmation">Confirmation</label>
                <input
                  type="password"
                  className="form-control"
                  name="confirmation"
                />
              </div>
            )}
            <div className="mt-3">
              <button type="submit" className="btn btn-primary form-control">
                {isLogin ? "Login" : "Regiter"} Now
              </button>
            </div>
            <div className="mt-3">
              <button
                type="button"
                className="btn btn-secondary form-control"
                onClick={() => setLogin(!isLogin)}
              >
                {isLogin ? "I don't" : "I already"} have an accound
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
