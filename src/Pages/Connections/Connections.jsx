import React, { useCallback, useContext, useEffect, useState } from 'react'
import Tab from '../../Shared/Tab'
import css from "../Dashboard/style.module.css"
import axios from "axios"
import Card from './Card'
import "./style.css"
import DataTable from "react-data-table-component"
import { ActiveModal } from "../../main"
import Navbar from '../../Shared/Navbar'
const Connections = () => {
    const [items, setItems] = useState([])
    const [activeModalState, setActiveModalState] = useContext(ActiveModal);
    const fetch = useCallback(async () => {
        const data = await axios.get("http://localhost:5500/getConnections/65e5b08ce979b2f19b04296e")
        console.log(data);
        setItems(data)
    })
    useEffect(() => {
        fetch()
    }, [])
    return (
        <>
            <div className={css.body}>
                <Navbar />
                <Tab tabName={"Connections"}></Tab>
                <div className={css.TableContainer}>
                    <table class="table table-responsive-md  align-middle mb-0 bg-white">
                        <thead class="bg-light">
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
                                <td className='d-flex flex-column '>
                                    <button type="button" onClick={() => setActiveModalState("profileView")} class="btn btn-link  btn-rounded">
                                        Profile
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

export default Connections