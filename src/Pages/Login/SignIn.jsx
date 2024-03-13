import React, { useContext, useState } from "react";
import Button from "../../Hoc/Button";
import css from "../../Styles/login.module.css";
import { RenderScreen } from "../../App";
const SignIn = () => {
    const [screen, setScreen] = useContext(RenderScreen);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("token", "veer");
        setScreen("root")
        console.log("Submitted data:", formData);

        setFormData({
            email: "",
            password: "",
        });
    };

    return (
        <div className={css.main}>
            <form onSubmit={handleSubmit} className={css.form}>
                <div className={`${css.formHeader}`}>Login : company</div>
                <div className={`${css.formSlogan} ${css.mt}`}>Step into the realm of security, where each login is a shield against digital intrusion.</div>
                <div className={`${css.row} ${css.mt}`}>
                    <input
                        type="text"
                        className={css.formInput}
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                    />
                </div>
                <div className={`${css.row} ${css.mt}`}>
                    <input
                        type="text"
                        className={css.formInput}
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                    />
                </div>
                <div className={`${css.row} ${css.mt}`}>
                    <Button type="text" text={"Login"} />
                </div>
                <div className={`${css.row} ${css.mt}`}>
                    <span className={css.formFooterText}>
                        don't have an account ? <b className={css.formLink} onClick={() => setScreen("signup")}>Sign Up</b>
                    </span>
                </div>
                <div className={`${css.row} ${css.mt}`}>
                    <span className={css.formFooterText2}>forgot password ? </span>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
