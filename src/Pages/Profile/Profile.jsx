import React, { useState } from "react";
import Tab from "../../Shared/Tab";
import ProfileView, { Body } from "../../Modals/ProfileView";
import css from "../Dashboard/style.module.css";
import Navbar from "../../Shared/Navbar";
import { useContext } from "react";
import { ActiveModal } from "../../main";
import { GlobalState } from "../../App";
const Profile = () => {
    const [activeModalState, setActiveModalState] = useContext(ActiveModal);
    const [currentState , setCurrentState] = useContext(GlobalState);

    var x = " / "
    const [value, setValue] = useState([]);
    return (
        <>
            <div className={css.body}>
            <Navbar 
                    left={`Hello 👋 ${currentState.HRDetail.Name}!`}
                    />
                <Tab
                    tabName={`Profile${value.length !== 0?x.concat(value[value?.length-1]):""}`}
                    action={
                        <>
                            <span
                                className="text-info fw-bolder hand "
                                onClick={() =>
                                    setActiveModalState("editprofile")
                                }
                            >
                                <i class="fa-solid fa-user-pen fw-bolder "></i>{" "}
                                Edit
                            </span>
                        </>
                    }
                />
                <Body
                    setValue={setValue}
                    style={css.modalBodyTable}
                    hidden={true}
                />
            </div>
        </>
    );
};

export default Profile;
