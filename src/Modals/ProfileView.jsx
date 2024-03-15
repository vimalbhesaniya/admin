import Modal from '../render-model/Modal'
import css from "../Styles/modal.module.css"
import { GlobalState } from '../App'
import react ,{ useContext, useState } from 'react'

const Body = ({ onClose, style, hidden, setValue }) => {
    const [currentState, setCurrentState] = useContext(GlobalState);
    const [hide, setHide] = useState([]);

    const handleHide = (key) => {

    setValue((prev) => {
            if (hide.includes(key)) {
                return hide.filter(e => e !== key);
            }
            else {
                return [...prev, key]
            }
        })
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
                    <table className='table  table-hover bg-white table-borderless  table-responsive-md  align-middle mb-0 '>
                        <thead className=''>
                            <tr >
                                <th  >
                                    <div class="d-flex align-items-center">
                                        <img
                                            src={currentState.Logo}
                                            onError={(e) =>
                                                e.target.src = "https://i.pinimg.com/originals/ec/d9/c2/ecd9c2e8ed0dbbc96ac472a965e4afda.jpg"
                                            }
                                            alt=""
                                            style={{ width: "80px", height: "80px" }}
                                            class="rounded-circle"
                                        />
                                        <div class="ms-3">
                                            <p class="fw-bold fs-5 mb-1">{currentState?.Name}</p>
                                            <p class="text-muted mb-0">{currentState.Email}</p>
                                        </div>
                                    </div>
                                </th>
                                {!hidden && <th className='text-end d-flex flex-column  justify-content-start'>
                                    {!hidden && <i className='fa fa-close hand' onClick={onClose}></i>}
                                </th>}
                            </tr>
                        </thead>
                        <thead className='hand table-info ' >
                            <tr className='' onClick={() => handleHide("PersonalDetails")}>
                                <th><b>Personal Details</b></th>
                                <th className='text-end '>
                                    {!hide.includes("PersonalDetails") ? <i class="fa-solid fa-caret-right"></i> :
                                        <i class="fa-solid fa-caret-down"></i>
                                    }
                                </th>
                            </tr>
                        </thead>
                        <tbody className='table-active table-bordered border-1 border-light' style={
                            !hide.includes("PersonalDetails") ? {
                                display: "none"
                            } : {}
                        }>
                            <tr>
                                <td>FirstName:</td>
                                <td>veer</td>
                            </tr>
                            <tr>
                                <td>LastName:</td>
                                <td>Bhesaniya</td>
                            </tr>
                        </tbody>
                        <thead className='table-info hand '>
                            <tr onClick={() => handleHide("EducationDetails")}>
                                <th><b>Education Details</b></th>
                                <th className='text-end '>
                                    {!hide.includes("EducationDetails") ? <i class="fa-solid fa-caret-right"></i> :
                                        <i class="fa-solid fa-caret-down"></i>
                                    }
                                </th>
                            </tr>
                        </thead>
                        <tbody className='table-active' style={
                            !hide.includes("EducationDetails") ? {
                                display: "none"
                            } : {}
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
                            <tr onClick={() => handleHide("ExperienceDetails")}>
                                <th><b>Exprience Details</b></th>
                                <th className='text-end '>
                                    {!hide.includes("ExperienceDetails") ? <i class="fa-solid fa-caret-right"></i> :
                                        <i class="fa-solid fa-caret-down"></i>
                                    }
                                </th>
                            </tr>
                        </thead>
                        <tbody className='table-active' style={
                            !hide.includes("ExperienceDetails") ? {
                                display: "none"
                            } : {}
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
                            <tr onClick={() => handleHide("LocationDetails")}>
                                <th><b>Location Details</b></th>
                                <th className='text-end '>
                                    {!hide.includes("LocationDetails") ? <i class="fa-solid fa-caret-right"></i> :
                                        <i class="fa-solid fa-caret-down"></i>
                                    }
                                </th>
                            </tr>
                        </thead>
                        <tbody className='table-active' style={
                            !hide.includes("LocationDetails") ? {
                                display: "none"
                            } : {}
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
    const [tmp, setTmp] = useState([]);
    return (
        <Modal
            body={<Body
                onClose={onClose}
                style={css.modalBodyTable}
                setValue={setTmp}
            />}

        />
    )
}

export default ProfileView
export { Body }
