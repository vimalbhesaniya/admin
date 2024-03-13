import React from 'react'
import css from "./style.module.css";
import Counts from './Counts';
import Tab from '../../Shared/Tab';
import Navbar from '../../Shared/Navbar';
const Dashboard = () => {
    return (
        <>
            <div className={css.body}> 
                    <Navbar />           
                    <Tab  tabName={"Dashboard"}/>                    
                    <Counts />
            </div>
        </>
    )
}

export default Dashboard