import React, { createContext, useCallback, useContext, useState } from 'react'
import Button from '../../Hoc/Button'
import css from "./style.module.css"
import Sidebar from '../../Shared/Sidebar'
import Tab from '../../Shared/Tab'
import Dashboard from './Dashboard'
import Profile from '../Profile/Profile'
import Jobs from '../Jobs/Jobs'
import Notification from '../Notification/Notification'
import Connections from '../Connections/Connections.jsx'
const RenderPage = createContext()
const Root = () => {
    const [page, setPage] = useState("dashboard")
    console.log(page);
    const renderScreen =useCallback(() => {
        switch (page) {
            case "dashboard":
                return <Dashboard />
            case "Connections":
                return <Connections />
            case "profile":
                return <Profile/>
            case "jobs":
                return <Jobs />
            case "notifications":
                return <Notification />
            default:
                break;
        }
    } , [page])
    return (
        <>
            <RenderPage.Provider value={[page ,setPage]}>
                <div className={css.main}>
                    <Sidebar />          
                    {renderScreen()}
                </div>
            </RenderPage.Provider>
        </>
    )
}

export default Root
export {RenderPage}