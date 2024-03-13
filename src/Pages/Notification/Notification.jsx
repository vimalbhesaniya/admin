import React from 'react'
import Tab from '../../Shared/Tab'
import css from "../Dashboard/style.module.css"
import Navbar from '../../Shared/Navbar'
const Notification = () => {
    return (
        <>
            <div className={css.body}>
                <Navbar />
                <Tab tabName={"Notifications"} ></Tab>
                <div className='alert alert-primary  '>
                    <span>you have a new notification</span>
                </div>
            </div>
        </>
    )
}

export default Notification