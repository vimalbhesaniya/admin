import React, { useContext } from 'react'
import Tab from '../../Shared/Tab'
import css from "../Dashboard/style.module.css"
import Navbar from '../../Shared/Navbar'
import Body from './Body'
import { ActiveModal } from '../../main'
import Button from '../../Hoc/Button'
import { GlobalState } from '../../App'
const Jobs = () => {
    const [activeModalState ,setActiveModalState] = useContext(ActiveModal);
    const [currentState , setCurrentState] = useContext(GlobalState);

    return (
        <div className={css.body}>
            <Navbar 
                    left={`Hello 👋 ${currentState.HRDetail.Name}!`}
                    />
            <Tab tabName={"Jobs"}
                action={
                    <>
                        <button className='btn btn-dark ' onClick={() => {
                            setActiveModalState("postajob")
                        }}><i className='fa fa-plus'></i>  post a job</button>
                    </>
                } ></Tab>
            <Body style={css.modalBodyTable} hidden={true} />

        </div>
    )
}

export default Jobs