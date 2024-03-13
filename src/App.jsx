import { useCallback, useContext, useState } from "react";
import Navbar from "./Shared/Navbar";
import { createContext } from "react";
import "./App.css";
import SignIn from "./Pages/Login/SignIn";
import logo from "./Images/2.png";
import Root from "./Pages/Dashboard/Root";
import Registration from "./Pages/Registration/Registration";
import Left from "./Components/left";
import Center from "./Components/center";
import Right from "./Components/right";
import Loader from "./Shared/Loader";
import NotConnected from "./Components/NotConnected";

const RenderScreen = createContext();

function App() {
    const admin = localStorage.getItem("token");
    const activeScreen = admin ? "root" : "signin";
    const [screen, setScreen] = useState(activeScreen);
    const [loaderState, setLoaderState] = useState(false);
    const [isOnline , setIsOnline] = useState(navigator.onLine);

    const renderScreen = useCallback(() => {
        switch (screen) {
            case "signin":
                return <SignIn />;
            case "signup":
                return <Registration />;
            case "root":
                return <Root />;
            default:
                break;
        }
    }, [screen]);
    return (
        <>
            <RenderScreen.Provider value={[screen, setScreen]}>
                {loaderState && <Loader />}
                
                {
                    !isOnline
                    ? 
                    <NotConnected />
                    :
                    renderScreen()

                }
                
            </RenderScreen.Provider>
        </>
    );
}

export default App;
export { RenderScreen };
