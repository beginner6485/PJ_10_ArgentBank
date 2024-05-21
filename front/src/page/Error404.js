import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Error404(){

    return(
        <div>
            <Header/>
                <div className="error-Space">
                    <span className="errorPage">Oops! Error 404</span>
                    <span className="errorText">We can't find the page you're looking for! Here are some helpful links instead:</span>
                    <div className="errorLink">
                        <li><span className="linksHelp"><Link to="/">Home</Link></span></li>
                        <li><span className="linksHelp"><Link to="/Connexion">Connexion</Link></span></li>
                    </div>
                    
                </div>
            <Footer/>
        </div>
    )
}

export default Error404;