import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
import { LoginOutlined } from "@mui/icons-material";
import logo from "../../assets/images/logCarwala.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "shakir973019@gmail.com",
    password: "shakirHero",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    setFormData({ ...formData, [name]: value });
  }

  async function handlSubmit(e) {
    try {
      e.preventDefault();
      console.log("called the submit function");
      setLoading(true);
      const response = await axios.post(
        "https://vega-rlo9h50iq-shakir-ansaris-projects.vercel.app/api/v1/user/login",
        formData
      );
      localStorage.setItem("user", JSON.stringify(response.data.data));
      setFormData({
        email: "",
        password: "",
      });
      setLoading(false);
      if (response.data.data.email === formData.email) {
        console.log("navigated run");
        navigate("/dashboard");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <div className="p-0">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 loginleft">
            <div class="row justify-content-center">
              <div class="col-lg-6 ">
                <div class="loginlogo">
                  <img src='https://vega6.com/assets/images/vega-6-logo.png' class="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 align-self-center">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <div class="loginright">
                  <h3>Vega6 Webware Technologies Pvt Ltd</h3>
                  <form
                    class="pt-2"
                    onSubmit={(e) => {
                      handlSubmit(e);
                    }}
                  >
                    <div class="mb-3">
                      <label class="form-label">Email address</label>
                      <input
                        type="email"
                        class="form-control"
                        value={formData.email}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        id="email"
                        name="email"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        value={formData.password}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        id="pass"
                        name="password"
                      />
                    </div>
                    <div class="mb-3">
                      <div class="row">
                        <div class="col-12 text-center my-4">
                          <LoadingButton
                            loading={loading}
                            size="medium"
                            type="submit"
                            variant="contained"
                            startIcon={<LoginOutlined sx={{ fontSize: 1 }} />}
                          >
                            Log-IN
                          </LoadingButton>
                        </div>
                        <div class="col-6 text-right pt-2">
                          <a href="#" class="link-primary">
                            Forgot your password?
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <div class="or">
                        {" "}
                        <span>or</span>{" "}
                      </div>
                    </div>

                    <div class="mb-3">
                      <a href="#" class="btn btn-default d-block sign">
                        <img src="img/li2.jpg" alt="" />
                        Sign in with Facebook
                      </a>
                    </div>
                    <div class="mb-3">
                      <a href="#" class="btn btn-default d-block sign">
                        <img src="img/li3.jpg" alt="" />
                        Sign in with Google
                      </a>
                    </div>
                    <div class="mb-3">
                      <p class="pt-3">
                        Logging in is deemed acceptance of our{" "}
                        <a href="#" class="link-primary">
                          terms View our privacy policy
                        </a>
                      </p>
                      <p>
                        Struggling to login?{" "}
                        <a href="#" class="link-primary">
                          Visit our support page
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
