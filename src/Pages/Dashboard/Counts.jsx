import React from "react";
import css from "./style.module.css";
const Counts = () => {
    return (
        <div className={css.CountContainer}>
            <div className={css.countCard}>
                <div className={css.countHeader}>
                    <i class="fa-solid fa-envelope-open-text"></i>
                    <span className={css.title}> Applications</span>
                </div>
                <div className={css.countNumber}>
                    <span className={css.num}> 1</span>
                </div>
            </div>
            <div className={css.countCard}>
                <div className={css.countHeader}>
                <i class="fa-solid fa-users"></i>
                    <span className={css.title}> Connections</span>
                </div>
                <div className={css.countNumber}>
                    <span className={css.num}> 1</span>
                </div>
            </div>
            <div className={css.countCard}>
                <div className={css.countHeader}>
                    <i className="fa fa-briefcase"></i>
                    <span className={css.title}> Jobs</span>
                </div>
                <div className={css.countNumber}>
                    <span className={css.num}> 1</span>
                </div>
            </div>
            <div className={css.countCard}>
                <div className={css.countHeader}>
                <i class="fa-solid fa-comment"></i>
                    <span className={css.title}> Feedbacks</span>
                </div>
                <div className={css.countNumber}>
                    <span className={css.num}>0</span>
                </div>
            </div>
        </div>
    );
};

export default Counts;
