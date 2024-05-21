import React from 'react';
import { Link } from 'react-router-dom';
import "../style/connexion_style.css";

const ErrorMessage = ({ title, message, links }) => (
    <div className="error-Space">
        <span className="errorPage">{title}</span>
        <span className="errorText">{message}</span>
        <div className="errorLink">
            <ul>
                {links.map((link, index) => (
                    <li key={index}><span className="linksHelp"><Link to={link.to}>{link.label}</Link></span></li>
                ))}
            </ul>
        </div>
    </div>
);

const ErrorType = ({ status }) => { // la props provient de connexion
    if(status === "400"){
           return null
    } 
        const errorMessages = {
           
            "404": {
                title: "Oops! Error 404",
                message: "We can't find the page you're looking for! Here are some helpful links instead:",
                links: [{ to: "/", label: "Home" }, { to: "/Connexion", label: "Connexion" }]
            },
            "500": {
                title: "Error 500",
                message: "Sorry, Internet Server Error...",
                links: [{ to: "/", label: "Home" }, { to: "/Connexion", label: "Connexion" }]
            },
            "default": {
                title: "An Error Occurred",
                message: "Something went wrong. Please try again later.",
                links: [{ to: "/", label: "Home" }, { to: "/Connexion", label: "Connexion" }]
            }
    }

    const { title, message, links } = errorMessages[status] || errorMessages["default"];
    
    return (
        <div className="error-container">
            <ErrorMessage title={title} message={message} links={links} />
        </div>
    );
};

export default ErrorType;
