import argentBankLogo from "../assets/img/argentBankLogo.png"
import "../style/welcome_style.css"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ResponseApi from "../API/API";
function Header(){

return(
    <div>
        <div className="nav">
            <Link to="/"><img src={argentBankLogo} alt="logo" className="logo" 
            /></Link>
            <div className="logIn">
                <Link to="/Connexion"className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                Sign In
                </Link>
            </div>
        </div>
    </div>
)
}


export default Header 