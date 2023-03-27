import React from "react";
function Banner({titulo,footer}) {
    return (
        <div className="banner">
            <i className="titulo">{titulo}</i>
            <h6 className="footer">{footer}</h6>
        </div>

    );
}
export default Banner