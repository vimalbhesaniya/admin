import React, { useContext, useState, useCallback, useEffect } from 'react'
import Tab from '../../Shared/Tab'
import css from "../Dashboard/style.module.css"
import Navbar from '../../Shared/Navbar'
import { GlobalState } from '../../App'
import useAPI from '../../Hooks/useAPI'

const Notification = () => {
    const [currentState, setCurrentState] = useContext(GlobalState);
    const [users, setUsers] = useState([]);
    const [jobs, setJobs] = useState([]);
    const api = useAPI();

    const cid = localStorage.getItem("id");
    const fetchJobs = useCallback(async () => {
        const data = await api.getREQUEST(`applied-users/${cid}`)
        if (data) {
            setJobs(data);
        }
        
    })
    const fetchUsers = useCallback(async () => {
        const data = await api.getREQUEST(`getConnections/${cid}`);
        if (data) {
            setUsers(data);
        }
        
    })

    useEffect(() => {
        fetchJobs();
        fetchUsers();
    }, [])
    return (
        <>
            <div className={css.body}>
                <Navbar
                    left={`Hello 👋 ${currentState.HRDetail.Name}!`}
                />
                <Tab tabName={"Notifications"} action={
                    <>
                        <span className='fs-5 fw-bold text-primary'>2</span>
                    </>
                } ></Tab>
                {
                    !jobs && !users && <>no data</>
                
                }

                {
                    jobs && Array.isArray(users) && jobs?.map((e) => {
                        return (
                            <div className={`alert alert-success d-flex justify-content-between  align-items-center  ${css.notificationCard}`}>
                                <span>{e?.userId?.firstName} {e?.userId?.lastName} has applied for the {e?.jobId?.Title} position.</span>
                                {/* <span></span> */}
                                <span><i className='fa fa-close'></i></span>
                            </div>
                        )
                    })
                }
                {
                    users && Array.isArray(users) && users?.map((e) => {
                        return (
                            <div className={`alert alert-primary d-flex justify-content-between  align-items-center  ${css.notificationCard}`}>
                                <span>You've gained a new connection: {e?.firstName} {e?.lastName}</span>
                                <span><i className='fa fa-close'></i></span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Notification