import React, { useState } from 'react'
import Modal from '../render-model/Modal'
import css from "../Styles/modal.module.css"
const Body = ({ onClose , style ,hidden }) => {
    const [hide, setHide] = useState([]);
    console.log(hide);
    const handleHide = (key) => {
        setHide((prev) => {
            if (hide.includes(key)) {
                return hide.filter(e => e !== key);
            }
            else {
                return [...prev, key]
            }
        })
    }
    return (
        <>
            <div className={style}>
                <div className={css.TableContainer}>
                    <table className='table table-hover  table-responsive-md  align-middle mb-0 '>
                        <thead className=''>
                            <tr >
                                <th  colSpan={2}>
                                    <div class="d-flex align-items-center">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                            alt=""
                                            style={{ width: "80px", height: "80px" }}
                                            class="rounded-circle"
                                        />
                                        <div class="ms-3">
                                            <p class="fw-bold mb-1">John Doe</p>
                                            <p class="text-muted mb-0">john.doe@gmail.com</p>
                                        </div>
                                    </div>
                                </th>
                                {!hidden&&<th className='text-end d-flex flex-column  justify-content-start'>
                                    {!hidden&&<i className='fa fa-close hand' onClick={onClose}></i>}
                                </th>}
                            </tr>
                        </thead>
                        <thead className='hand table-info ' >
                            <tr className='' onClick={() => handleHide("pd")}>
                                <th><b>Personal Details</b></th>
                                <th className='text-end '>
                                    {!hide.includes("pd") ? <i class="fa-solid fa-caret-right"></i> :
                                        <i class="fa-solid fa-caret-down"></i>
                                    }
                                </th>
                            </tr>
                        </thead>
                        <tbody className='table-active ' style={
                            !hide.includes("pd") ? {
                                display: "none"
                            } : { }
                        }>
                            <tr>
                                <td>FirstName:</td>
                                <td>Vimal</td>
                            </tr>
                            <tr>
                                <td>LastName:</td>
                                <td>Bhesaniya</td>
                            </tr>
                        </tbody>
                        <thead className='table-info hand '> 
                            <tr onClick={() => handleHide("ed")}>
                                <th><b>Education Details</b></th>
                                <th className='text-end '>
                                    {!hide.includes("ed") ? <i class="fa-solid fa-caret-right"></i> :
                                        <i class="fa-solid fa-caret-down"></i>
                                    }
                                </th>
                            </tr>
                        </thead>
                        <tbody className='table-active' style={
                            !hide.includes("ed") ? {
                                display: "none"
                            } : { }
                        }>
                            <tr>
                                <td className='text-nowrap'>Univercity:</td>
                                <td className='text-nowrap'>Veer Narmad South Gujarat Univercity</td>
                            </tr>
                            <tr>
                                <td>Institute Name:</td>
                                <td>Shree shambhubhai V. patel college of CS&BM</td>
                            </tr>
                        </tbody>
                        <thead className='table-info hand'> 
                            <tr onClick={() => handleHide("ex")}>
                                <th><b>Location Details</b></th>
                                <th className='text-end '>
                                    {!hide.includes("ex") ? <i class="fa-solid fa-caret-right"></i> :
                                        <i class="fa-solid fa-caret-down"></i>
                                    }
                                </th>
                            </tr>
                        </thead>
                        <tbody className='table-active' style={
                            !hide.includes("ex") ? {
                                display: "none"
                            } : { }
                        }>
                            <tr>
                                <td>Company Name:</td>
                                <td className='text-nowrap'>Blue Soft Infotech</td>
                            </tr>
                            <tr>
                                <td>Years:</td>
                                <td className='text-nowrap'>5 years of experience in this company</td>
                            </tr>
                        </tbody>
                        <thead className='table-info hand'> 
                            <tr onClick={() => handleHide("add")}>
                                <th><b>Experience Details</b></th>
                                <th className='text-end '>
                                    {!hide.includes("add") ? <i class="fa-solid fa-caret-right"></i> :
                                        <i class="fa-solid fa-caret-down"></i>
                                    }
                                </th>
                            </tr>
                        </thead>
                        <tbody className='table-active' style={
                            !hide.includes("add") ? {
                                display: "none"
                            } : { }
                        }>
                            <tr>
                                <td>Company Name:</td>
                                <td className='text-nowrap'>Blue Soft Infotech</td>
                            </tr>
                            <tr>
                                <td>Years:</td>
                                <td className='text-nowrap'>5 years of experience in this company</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

const ProfileView = ({ onClose }) => {
    return (
        <Modal
            body={<Body
                onClose={onClose}
                style={css.modalBodyTable}
            />}

        />
    )
}

export default ProfileView
export {Body}
