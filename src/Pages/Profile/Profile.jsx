import React from 'react'
import Tab from '../../Shared/Tab'
import ProfileView, { Body } from '../../Modals/ProfileView'
import css from "../Dashboard/style.module.css"
import Navbar from '../../Shared/Navbar'
import { useContext } from 'react'
import { ActiveModal } from '../../main'
const Profile = () => {
    const [activeModalState, setActiveModalState] = useContext(ActiveModal);
    return (
        <>
            <div className={css.body}>
                <Navbar />
                <Tab tabName={"Profile"}
                    action={
                        <>
                            <span className='text-info fw-bolder hand ' onClick={() => setActiveModalState("editprofile")}><i class="fa-solid fa-user-pen fw-bolder " ></i> Edit</span>
                        </>
                    }
                />
                <Body style={css.modalBodyTable} hidden={true} />
            </div>
        </>
    )
}

export default Profile