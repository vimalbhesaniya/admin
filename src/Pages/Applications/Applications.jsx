import React, { useCallback, useContext, useEffect, useState } from 'react'
import Tab from '../../Shared/Tab'
import css from "../Dashboard/style.module.css"
import axios from "axios"
import "../Connections/style.css"
import { ActiveModal } from "../../main"
import Navbar from '../../Shared/Navbar'
const Applications = () => {
    const [items, setItems] = useState([])
    const [activeModalState, setActiveModalState] = useContext(ActiveModal);
    const fetch = useCallback(async () => {
        const data = await axios.get("http://localhost:5500/getConnections/65e5b08ce979b2f19b04296e")
        setItems(data)
    })
    useEffect(() => {
        fetch()
    }, [])
    return (
        <>
            <div className={css.body}>
                <div className={css.containerApp}>
                    <div className='p-3 bg-white d-flex justify-content-between align-items-center  flex-wrap w-100'>
                        <div className="">
                            <span className='fs-5 fw-bolder '>Applications</span>
                        </div>
                        <div className="">
                            <span className='fs-5 fw-bolder text-warning '>COUNT 2</span>
                        </div>
                        <div className="">
                            <input type="text" className='btn p-3 btn-light fw-bolder ' placeholder="search..." />
                        </div>
                    </div>
                </div>
                <div className={css.TableContainer}>
                    <table class="table table-responsive-md  align-middle mb-0 bg-white">
                        <thead class="table-primary ">
                            <tr>
                                <th className=''>Name</th>
                                <th className=''>Title</th>
                                <th className=''>Position</th>
                                <th className=''>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                            alt=""
                                            style={{ width: "45px", height: "45px" }}
                                            class="rounded-circle"
                                        />
                                        <div class="ms-3">
                                            <p class="fw-bold mb-1">John Doe</p>
                                            <p class="text-muted mb-0">john.doe@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="fw-normal mb-1 text-nowrap ">Software engineer</p>
                                </td>
                                <td>Senior</td>
                                <td className=''>
                                    <button type="button" onClick={() => setActiveModalState("profileView")} class="btn btn-outline-primary me-2 btn-rounded">
                                        Profile
                                    </button>
                                    <button type="button" onClick={() => setActiveModalState("sendmail")} class="btn btn-outline-success  btn-rounded">
                                        Accept
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                            alt=""
                                            style={{ width: "45px", height: "45px" }}
                                            class="rounded-circle"
                                        />
                                        <div class="ms-3">
                                            <p class="fw-bold mb-1">John Doe</p>
                                            <p class="text-muted mb-0">john.doe@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="fw-normal mb-1 text-nowrap ">Software engineer</p>
                                </td>
                                <td>Senior</td>
                                <td className=''>
                                    <button type="button" onClick={() => setActiveModalState("profileView")} class="btn btn-outline-primary  me-2 btn-rounded">
                                        Profile
                                    </button>
                                    <button type="button" onClick={() => setActiveModalState("sendmail")} class="btn btn-outline-success  btn-rounded">
                                        Accept
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default Applications