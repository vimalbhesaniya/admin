import React, { useContext, useState } from "react";
import Button from "../../Hoc/Button";
import css from "../../Styles/login.module.css";
import { RenderScreen } from "../../App";
const Registration = () => {
    const [screen ,setScreen] = useContext(RenderScreen)
    const [formData, setFormData] = useState({
        Email: "",
        Password: "",
        Name: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Submitted data:", formData);

        setFormData({
            Email: "",
            password: "",
            Name: ""
        });
    };

    return (
        <div className={css.main}>
            <form onSubmit={handleSubmit} className={css.form}>
                <div className={`${css.formHeader}`}>Company Regisration</div>
                <div className={`${css.formSlogan} ${css.mt}`}>Let's create your account</div>
                <div className={`${css.row} ${css.mt}`}>
                    <input
                        type="text"
                        className={css.formInput}
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                        value={formData.Email}
                    />
                </div>
                <div className={`${css.row} ${css.g} ${css.mt}`}>
                    <input
                        type="text"
                        className={css.formInput}
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={formData.Password}
                    />
                    <input
                        type="text"
                        className={css.formInput}
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange={handleChange}
                        value={formData.Password}
                    />
                </div>
                <div className={`${css.row} ${css.mt}`}>
                    <input
                        type="text"
                        className={css.formInput}
                        placeholder="Company Name"
                        onChange={handleChange}
                        name="name"
                        value={formData.Email}
                    />
                </div>
                <div className={`${css.row} ${css.mt}`}>
                    <Button type="text" text={"Create account"} />
                </div>
                <div className={`${css.row} ${css.mt}`}>
                    <div className={`${css.row} ${css.mt}`}>
                        <span className={css.formFooterText}>
                            Already have an account ? <b className={css.formLink} onClick={() => setScreen("signin")}>Sign In</b>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Registration;
