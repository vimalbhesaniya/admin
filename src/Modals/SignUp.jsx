import React, { useState, useEffect, useContext } from "react";
import css from "../Styles/modal.module.css";
import { toast } from "react-toastify";
import { ActiveModal } from "../main";
import Modal from "../render-model/Modal";
import useAPI from "../Hooks/useAPI";
import { RenderPage } from "../Pages/Dashboard/Root";
const Body = ({ onClose }) => {
    const api = useAPI();
    let [activerModalState, setActiveModalState] = useContext(ActiveModal);
    let [page, setPage] = useContext(RenderPage);
    const id = localStorage.getItem("id");
    const [ownerName, setOwnerName] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');
    const [hrName, setHRName] = useState('');
    const [hrEmail, setHREmail] = useState('');
    const [personalAddress, setPersonalAddress] = useState('');
    const [city, setCity] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [state, setState] = useState('');
    const [formData, setFormData] = useState({
        isProfileComplete: true,
        Name: "",
        Address: [{
            personalAddress: personalAddress,
            pinCode: pinCode,
            state: state,
            city:city,
        }],
        Industry: "",
        Email: "",
        Password: "",
        Logo: "",
        TagLine: "",
        Websites: [],
        establishedYear: "",
        Description: [],
        secretKey: "",
        OwnerDetail: {
            Name: ownerName,
            EmailID: ownerEmail,
        },
        HRDetail: {
            Name: hrName,
            EmailID: hrEmail,
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    console.log(localStorage.getItem("id"));
    const handleSubmit = async (e) => {
        alert("submitt")
        setPage("dashboard")

        e.preventDefault();
        try {
            // You need to replace 'API_ENDPOINT' with your actual API endpoint
            const response = await api.patchREQUEST("updateDetails", "companies", id, formData);
            console.log(response);
            // Handle success
        } catch (error) {
            console.error("Error:", error);
            // Handle error
        }
    };

    return (
        <div className={css.modalBody}>
            <div className="p-4">
                <span className="fs-3 m">Welcome to JobDuniya : you have to fill your profile</span>
                <div className="container">
                    <form onSubmit={handleSubmit} >
                        <label>
                            Name:
                        </label>
                        <input
                            required
                            className="form-control p-3"
                            placeholder={"Name"}
                            type="text"
                            name="Name"
                            style={{
                                width: "100%"
                            }}
                            width={"100%"}
                            value={formData.Name}
                            onChange={handleChange}
                        />
                        <div className="form-group">
                            <label>
                                Industry:
                            </label>
                            <input
                                required
                                className="form-control p-3"
                                placeholder={"Industry"}
                                type="text"
                                name="Industry"
                                value={formData.Industry}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Email:
                            </label>
                            <input
                                required
                                className="form-control p-3"
                                placeholder={"Email"}
                                type="text"
                                name="Email"
                                value={formData.Email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <div className="form-group d-flex gap-2" >
                                <div className="d-flex flex-grow-1  flex-column ">
                                    <label>
                                        Personal Address:
                                    </label>
                                    <input
                                        required
                                        className="form-control p-3"
                                        placeholder={"Personal Address"}
                                        type="text"
                                        name="Personal Address"
                                        value={personalAddress}
                                        onChange={(e) => setPersonalAddress(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex flex-grow-1  flex-column ">
                                    <label>
                                        Pincode:
                                    </label>
                                    <input
                                        required
                                        className="form-control p-3"
                                        placeholder={"Pincode"}
                                        type="text"
                                        name="Pincode"
                                        value={pinCode}
                                        onChange={(e) => setPinCode(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-group d-flex gap-2">
                                <div className="d-flex flex-grow-1  flex-column ">
                                    <label>
                                        State:
                                    </label>
                                    <input
                                        required
                                        className="form-control p-3"
                                        placeholder={"State"}
                                        type="text"
                                        name="State"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex flex-grow-1  flex-column ">
                                    <label>
                                        City:
                                    </label>
                                    <input
                                        required
                                        className="form-control p-3"
                                        placeholder={"City"}
                                        type="text"
                                        name="City"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="form-group">
                            <label>
                                Tagline:
                            </label>
                            <input
                                required
                                className="form-control p-3"
                                placeholder={"TagLine"}
                                type="text"
                                name="TagLine"
                                value={formData.TagLine}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Websites:(Comma(,) saperated)
                            </label>
                            <input
                                required
                                className="form-control p-3"
                                placeholder={"Websites"}
                                type="text"
                                name="Websites"
                                value={formData.Websites}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Established Year:
                            </label>
                            <input
                                required
                                className="form-control p-3"
                                placeholder={"Established Year"}
                                type="text"
                                name="establishedYear"
                                value={formData.establishedYear}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Description:(Comma(,) saperated)
                            </label>
                            <input
                                required
                                className="form-control p-3"
                                placeholder={"Description"}
                                type="text"
                                name="Description"
                                value={formData.Description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Owner Name:
                            </label>
                            <input
                                required
                                className="form-control p-3"
                                placeholder={"Owener Name"}
                                type="text"
                                name="OwnerDetail.Name"
                                value={ownerName}
                                onChange={(e) => setOwnerName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Owner Email:
                            </label>
                            <input
                                required
                                className="form-control p-3"
                                placeholder={"Owner Email"}
                                type="text"
                                name="OwnerDetail.EmailID"
                                value={ownerEmail}
                                onChange={(e) => setOwnerEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                HR Name:
                            </label>
                            <input
                                required
                                className="form-control p-3"
                                placeholder={"HR Name"}
                                type="text"
                                name="HRDetail.Name"
                                value={hrName}
                                onChange={(e) => setHRName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                HR Email:
                            </label>
                            <input
                                required
                                className="form-control p-3"
                                placeholder={"HR Email"}
                                type="text"
                                name="HRDetail.EmailID"
                                value={hrEmail}
                                onChange={(e) => setHREmail(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="bg-primary-subtle btn mt-3 text-center">Submit</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

const SignUp = ({ onClose }) => {
    return (
        <>
            <Modal body={<Body onClose={onClose} />} />
        </>
    );
};
export default SignUp;
