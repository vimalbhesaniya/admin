import React from 'react'
import Tab from '../../Shared/Tab'
import css from "../Dashboard/style.module.css"
import Navbar from '../../Shared/Navbar'
const Notification = () => {
    return (
        <>
            <div className={css.body}>
                <Navbar />
                <Tab tabName={"Notifications"} action={
                    <>
                        <span className='fs-5 fw-bold text-primary'>2</span>
                    </>
                } ></Tab>
                <div className={`alert alert-primary d-flex justify-content-between  align-items-center  ${css.notificationCard}`}>
                    <span>you have a new notification</span>
                    <span><i className='fa fa-close'></i></span>
                </div>
            </div>
        </>
    )
}

export default Notification