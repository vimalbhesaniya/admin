import { useCallback, useContext } from "react";
import SignupModal from "../Modals/SignupModal";
import { ActiveModal } from "../main";
import ProfileView from "../Modals/ProfileView";
import SendMailTo from "../Modals/SendMailTo";
import EditProfile from "../Pages/Profile/EditProfile";
import PostAjob from "../Pages/Jobs/PostAjob";
const RenderModal = ({}) => {
  const [activeModalState, setActiveModalState] = useContext(ActiveModal);

  const onClose = useCallback(() => {
    setActiveModalState("");
  }, []);
  switch (activeModalState) {
    case "form":
      return <SignupModal onClose={onClose} />;
    case "profileView":
      return <ProfileView onClose={onClose} />;
    case "sendMail":
      return <SendMailTo onClose={onClose} />;
    case "editprofile":
      return <EditProfile onClose={onClose} />;
    case "postajob":
      return <PostAjob onClose={onClose} />;
    default:
      return;
  }
};

export default RenderModal;
