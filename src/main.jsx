import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import RenderModal from "./render-model/RenderModal.jsx";
import { createContext } from 'react';
import 'react-tooltip/dist/react-tooltip.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import firebase from "firebase/compat/app"
const firebaseConfig = {
    storageBucket: import.meta.env.REACT_APP_STORAGE_BUCKET
};
firebase.initializeApp(firebaseConfig)
// import 'sweetalert2/src/sweetalert2.scss'

// Create context
const ActiveModal = createContext([()=>{}]);
const ActiveToolTip = createContext([()=>{}]);

const Root = () => {
    let [activeModalState, setActiveModalState] = useState("");
    let [toolTip, setToolTip] = useState(false);

    return (
        <ActiveToolTip.Provider value={[toolTip , setToolTip]}>
            <ActiveModal.Provider value={[activeModalState, setActiveModalState]}>
                <React.StrictMode>
                    <RenderModal />
                    <App />
                </React.StrictMode>
            </ActiveModal.Provider>
        </ActiveToolTip.Provider>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <Root />

);

export { ActiveModal , ActiveToolTip };
