import React from 'react'
import css from "../Pages/Dashboard/style.module.css";
const Tab = ({ tabName , action }) => {
    return (
        <div className={css.activeTab}>
            <div>
                <span className={css.activeTabTitle}>/ {tabName} </span>
            </div>
            <div>
                {action}
            </div>

        </div>
    )
}

export default Tab