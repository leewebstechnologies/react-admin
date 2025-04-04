import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* Left column with illustration (desktop only) */}
          <div className="col-lg-6 bg-custom-yellow illustration-container">
            <img
              src="assets/img/bg.png"
              alt="AI-DOMPn"
              className="img-fluid desktop-illustration"
            />
          </div>
          {/* Right column with form */}
          <div className="col-lg-6 form-section d-flex align-items-center">
            <div className="form-container">
              {/* Mobile illustration */}
              <img
                src="assets/img/bg2.png"
                alt="AI-DOMP"
                className="img-fluid mobile-illustration"
              />
              <h2 className="mb-3 fw-bold">AI-DOMP Sign IN</h2>
              <p className="text-muted mb-4">
                Enter your email and password to Sign In
              </p>
              <form id="login-form">
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="login-email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="login-password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-dark w-100 py-3 mb-3 fw-semibold"
                >
                  Sign Up
                </button>
                <div className="text-center">
                  <span className="text-muted">Already have an account? </span>
                  <Link
                    to="/login"
                    className="text-danger text-decoration-none fw-semibold"
                  >
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
