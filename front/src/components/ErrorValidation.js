import { Link } from "react-router-dom";
import "../style/connexion_style.css"

function ErrorValidation(){
        return(
            <div>
                <span className="error">Error with username or password. Please try again</span>
                <Link to="/Connexion"></Link>
            </div>
        )

} 
export default ErrorValidation
