import React, { useState } from "react";
import Modal from "../../render-model/Modal";
import Swal from 'sweetalert2'
import css from "../../Styles/modal.module.css";
const Body = ({ onClose, style, hidden }) => {
    // const Swal = require('sweetalert2')
    const [hide, setHide] = useState([]);
    console.log(hide);
    const handleHide = (key) => {
        setHide((prev) => {
            if (hide.includes(key)) {
                return hide.filter((e) => e !== key);
            } else {
                return [...prev, key];
            }
        });
    };
    const handleDelete =() =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            allowOutsideClick:true,
            customClass:"customClass"

          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }
    
    return (
        <>
            <div className={style}>
                <div className={css.TableContainer}>
                    <table className="table table-hover  table-responsive-md  align-middle mb-0 ">
                        <thead className="">
                            <tr>
                                <th>
                                    <div class="d-flex align-items-center">
                                        <div class="">
                                            <p class="fw-bold fs-3">
                                                Software Developer
                                            </p>
                                            <p class="text-text-black-50">
                                                For Creative Lead
                                            </p>
                                            <p class="text-muted">
                                                Posted On 12/23/2024
                                            </p>
                                        </div>
                                    </div>
                                </th>
                                <th className="text-center">
                                    <div className="d-flex justify-content-center gap-2   align-items-end flex-column ">
                                        <button className="btn fw-bold   btn-outline-primary  ">
                                            <i class="fa-solid fa-file-pen"></i>{" "}
                                            Edit
                                        </button>
                                        <button className="btn fw-bold  btn-outline-danger"
                                        onClick={() => handleDelete()}
                                        >
                                            <i class="fa-solid fa-trash-can"></i>{" "}
                                            Delete
                                        </button>
                                        <button
                                            className="btn fw-bold   btn-outline-info"
                                            onClick={() => handleHide("job")}
                                        >
                                            {hide.includes("job") ? (
                                                <>
                                                    <i className="fa fa-eye-slash"></i>{" "}
                                                    hide
                                                </>
                                            ) : (
                                                <>
                                                    <i className="fa fa-eye"></i>{" "}
                                                    view
                                                </>
                                            )}
                                            
                                        </button>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <thead className="hand table-info ">
                            <tr className="" onClick={() => handleHide("job")}>
                                <th>
                                    <b>More details</b>
                                </th>
                                <th className="text-end ">
                                    {!hide.includes("job") ? (
                                        <i class="fa-solid fa-caret-right"></i>
                                    ) : (
                                        <i class="fa-solid fa-caret-down"></i>
                                    )}
                                </th>
                            </tr>
                        </thead>
                        <tbody
                            className="table-active "
                            style={
                                !hide.includes("job")
                                    ? {
                                          display: "none",
                                      }
                                    : {}
                            }
                        >
                            <tr>
                                <td>FirstName:</td>
                                <td>Vimal</td>
                            </tr>
                            <tr>
                                <td>LastName:</td>
                                <td>Bhesaniya</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
export default Body;
