import React from 'react'
import css from './shared.module.css'
import logo from "../Images/black.png";

const Navbar = ({ left, right, center }) => {
    return (
        <>
            <div class="navbarMain">
                    <div className={css.greetings}>
                        <span className={css.greetText}>Hello 👋 Vimal!</span>
                    </div>
            </div>
        </>
    )
}

export default Navbar