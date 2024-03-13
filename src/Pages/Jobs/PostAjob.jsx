import React, { useState, useEffect } from 'react';
import Modal from '../../render-model/Modal';
import css from "../../Styles/modal.module.css"
const Body = ({onClose}) => {
    const [jobData, setJobData] = useState({
        Title: '',
        Position: '',
        Description: [],
        Experience: [],
        JobType: '',
        Salary: '',
        Responsiblities: [],
        Overview: [],
        Qualificaion: [],
        Benifits: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleArrayChange = (e) => {
        const { name, value } = e.target;
        setJobData(prevState => ({
            ...prevState,
            [name]: value.split(',').map(item => item.trim())
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform any additional validations before submitting the form
        // Then send the job data to your server
        console.log('Job Data:', jobData);
        // Clear the form fields after submission
        setJobData({
            Title: '',
            Position: '',
            Description: [],
            Experience: [],
            JobType: '',
            Salary: '',
            Responsiblities: [],
            Overview: [],
            Qualificaion: [],
            Benifits: []
        });
    };

    return (
        <div className={css.modalBody}>
            <div className="p-4">
                <h1>Post a Job</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className='fs-6 fw-bolder ' htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control p-3"
                            id="title"
                            name="Title"
                            value={jobData.Title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className='fs-6 fw-bolder ' htmlFor="position">Position</label>
                        <input
                            type="text"
                            className="form-control p-3"
                            id="position"
                            name="Position"
                            value={jobData.Position}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className='fs-6 fw-bolder ' htmlFor="description">Description (comma-separated)</label>
                        <input
                            type="text"
                            className="form-control p-3"
                            id="description"
                            name="Description"
                            value={jobData.Description}
                            onChange={handleArrayChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className='fs-6 fw-bolder ' htmlFor="experience">Experience (comma-separated)</label>
                        <input
                            type="text"
                            className="form-control p-3"
                            id="experience"
                            name="Experience"
                            value={jobData.Experience}
                            onChange={handleArrayChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className='fs-6 fw-bolder ' htmlFor="jobType">Job Type</label>
                        <select
                            className="form-control p-3"
                            id="jobType"
                            name="JobType"
                            value={jobData.JobType}
                            onChange={handleChange}
                        >
                            <option value="">Select Job Type</option>
                            <option value="FullTime">Full Time</option>
                            <option value="PartTime">Part Time</option>
                            <option value="Remote">Remote</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className='fs-6 fw-bolder ' htmlFor="salary">Salary</label>
                        <input
                            type="text"
                            className="form-control p-3"
                            id="salary"
                            name="Salary"
                            value={jobData.Salary}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className='fs-6 fw-bolder ' htmlFor="responsiblities">Responsiblities (comma-separated)</label>
                        <input
                            type="text"
                            className="form-control p-3"
                            id="responsiblities"
                            name="Responsiblities"
                            value={jobData.Responsiblities}
                            onChange={handleArrayChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className='fs-6 fw-bolder ' htmlFor="overview">Overview (comma-separated)</label>
                        <input
                            type="text"
                            className="form-control p-3"
                            id="overview"
                            name="Overview"
                            value={jobData.Overview}
                            onChange={handleArrayChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className='fs-6 fw-bolder ' htmlFor="qualificaion">Qualification (comma-separated)</label>
                        <input
                            type="text"
                            className="form-control p-3"
                            id="qualificaion"
                            name="Qualificaion"
                            value={jobData.Qualificaion}
                            onChange={handleArrayChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className='fs-6 fw-bolder ' htmlFor="benifits">Benefits (comma-separated)</label>
                        <input
                            type="text"
                            className="form-control p-3"
                            id="benifits"
                            name="Benifits"
                            value={jobData.Benifits}
                            onChange={handleArrayChange}
                        />
                    </div>
                    <div className='d-flex justify-content-end '>
                        <div className='d-flex justify-content-end mt-4 gap-2  w-25'>
                            <button type="submit" onClick={onClose} className="btn btn-outline-primary">Cancle</button>
                            <button type="submit" className="btn btn-primary text-nowrap ">Publish</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

const PostAjob = ({ onClose }) => {
    return (
        <>
            <Modal
                body={<Body
                    onClose={onClose}
                />}
            />
        </>
    )
}
export default PostAjob;
