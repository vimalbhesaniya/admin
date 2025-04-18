import React, { useContext, useState } from "react";
import Button from "../../Hoc/Button";
import css from "../../Styles/login.module.css";
import { RenderScreen } from "../../App";
import useAPI from "../../Hooks/useAPI";
import { toast } from "react-toastify";

const SignIn = () => {
    const [screen, setScreen] = useContext(RenderScreen);
    const api = useAPI();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const { mutate } = api.usePostREQUEST({
      PATH: "Clogin",
      onSuccess: (response) => {
        if (response?.token) {
          localStorage.setItem("token", response.token);
          localStorage.setItem("id", response.data._id);
          toast.success("Login Successfully.");
          setScreen("root");
        } else {
          toast.error(response?.error);
          setFormData({
            email: "",
            password: "",
          });
        }
      },
      onError:(error)=>{
        toast.error(error?.response?.data?.message);
      }
    });

    const handleSubmit = () => {
      if (formData.email.length >= 2 && formData.password.length >= 8) {
        mutate(JSON.stringify(formData));
      } else {
        toast.warning("provide email and passowrd");
        setFormData({
          email: "",
          password: "",
        });
      }
    };

    return (
      <div className={css.main}>
        <div className={css.form}>
          <div className={`${css.formHeader}`}>Sing In</div>
          <div className={`${css.formSlogan} ${css.mt}`}>
            Step into the realm of security, where each login is a shield
            against digital intrusion.
          </div>
          <div className={`${css.row} ${css.mt}`}>
            <input
              type="email"
              className={css.formInput}
              placeholder="Email"
              onChange={handleChange}
              required
              name="email"
              value={formData.email}
            />
          </div>
          <div className={`${css.row} ${css.mt}`}>
            <input
              type="password"
              className={css.formInput}
              placeholder="Password"
              required
              name="password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <div className={`${css.row} ${css.mt}`}>
            <button className={css.botton} onClick={() => handleSubmit()} type="text">
              Login
            </button>
          </div>
          <div className={`${css.row} ${css.mt}`}>
            <span className={css.formFooterText}>
              Don't have an account ?{" "}
              <b className={css.formLink} onClick={() => setScreen("signup")}>
                Sign Up
              </b>
            </span>
          </div>
          <div className={`${css.row} mt-1`}>
            <span className={css.formFooterText2}>Forgot Password ? </span>
          </div>
          <span className="text-center small">
            By clicking Agree & Join, you agree to the LinkedIn{" "}
            <span className="text-primary-emphasis ">User Agreement</span> and{" "}
            <span className="text-primary-emphasis ">Privacy Policy.</span>
          </span>
        </div>
      </div>
    );
};

export default SignIn;
