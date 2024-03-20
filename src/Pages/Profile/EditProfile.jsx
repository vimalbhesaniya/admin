import React, { useState } from 'react'
import css from "../../Styles/modal.module.css"
import Modal from '../../render-model/Modal'
import useAPI from '../../Hooks/useAPI'
import { useEffect, useCallback } from 'react'


const Body = ({ onClose }) => {
    const api = useAPI();
    const id=localStorage.getItem("id");
    const [companyData, setCompanyData] = useState({
        Name: '',
        Industry: '',
        Email: '',
        TagLine: '',
        Websites: [],
        establishedYear: '',
        Description: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompanyData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(companyData);
        const result = await api.patchREQUEST("updateDetails","companies",id,companyData);
        console.log(result);
    };

    return (
        <>
            <div className={css.modalBody}>
                <div className="container-fluid p-4">
                    <div className='d-flex justify-content-between align-items-center'>
                        <h1>Edit Your Profile</h1>
                        <span onClick={onClose}>
                            <i className='fa fa-close fs-3 hand'></i>
                        </span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {/* Input fields for company profile */}
                        <div className="form-group">
                            <label className='fs-5 fw-bolder ' htmlFor="name" >Company Name</label>
                            <input
                                type="text"
                                className="form-control p-3"
                                id="name"
                                name="Name"
                                value={companyData.Name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className='fs-5 fw-bolder ' htmlFor="indus className=''try">Industry</label>
                            <input
                                type="text"
                                className="form-control p-3"
                                id="industry"
                                name="Industry"
                                value={companyData.Industry}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className='fs-5 fw-bolder ' htmlFor="email className=''">Email</label>
                            <input
                                type="email"
                                className="form-control p-3"
                                id="email"
                                name="Email"
                                value={companyData.Email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className='fs-5 fw-bolder ' htmlFor="tagli className=''ne">Tagline</label>
                            <input
                                type="text"
                                className="form-control p-3"
                                id="tagline"
                                name="TagLine"
                                value={companyData.TagLine}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className='fs-5 fw-bolder ' htmlFor="websi className=''tes">Websites</label>
                            <input
                                type="text"
                                className="form-control p-3"
                                id="websites"
                                name="Websites"
                                value={companyData.Websites}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className='fs-5 fw-bolder ' htmlFor="estab className=''lishedYear">Established Year</label>
                            <input
                                type="text"
                                className="form-control p-3"
                                id="establishedYear"
                                name="establishedYear"
                                value={companyData.establishedYear}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className='fs-5 fw-bolder ' htmlFor="descr className=''iption">Description</label>
                            <textarea
                                className="form-control p-3"
                                id="description"
                                name="Description"
                                rows="3"
                                value={companyData.Description}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Update Profile</button>
                    </form>
                </div>
            </div>
        </>
    )
}

const EditProfile = ({ onClose }) => {
    return (
        <Modal
            body={<Body onClose={onClose} />}
        />
    )
}

export default EditProfile
