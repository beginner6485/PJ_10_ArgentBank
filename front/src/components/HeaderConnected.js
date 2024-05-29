import argentBankLogo from "../assets/img/argentBankLogo.png"
import "../style/welcome_style.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; 
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../redux/reducers";
import { useNavigate } from "react-router-dom";

function HeaderConnected(){

    const dispatch = useDispatch();
    const firstName = useSelector(state => state.firstName);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logOutUser()); // Appeler l'action de déconnexion
        navigate('/');
    };

return(
    <div>
        <div className="nav">
            <Link to="/"><img src={argentBankLogo} alt="logo" className="logo" 
            /></Link>
            <div className="logOut">
                <div className="border-style">
                    <Link to="/AccountPage"><FontAwesomeIcon icon={faUser} className="user-style" /></Link>
                </div>
                <div className="props">{firstName}</div>
                <div className="main-nav-item" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
                    <span className="SignOuttxt">Sign out</span>
                </div>
            </div>
        </div>
    </div>
)
}

export default HeaderConnected ;