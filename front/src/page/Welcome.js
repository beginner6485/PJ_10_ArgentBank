import Header from "../components/Header";
import HeaderConnected from "../components/HeaderConnected";
import BankValue from "../components/BankValue";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

function Welcome(){
    const token = useSelector(state => state.token);
    console.log(token);
    if (!token){
        return(
            <div>
                <Header/>
                <BankValue/>
                <Footer/>
            </div>
        )

    } else{
        return(
            <div>
                <HeaderConnected/>
                <BankValue/>
                <Footer/>
            </div>
        )
    }

}

export default Welcome