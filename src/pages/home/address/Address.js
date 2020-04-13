import React from "react";
import "./Address.scss";
export default function Address(){
    return(
        <section className="address">
            <div className="address__map">
                <div className="map__pointer">
                    <span className="pointer"> </span>
                    <span className="pulse"></span>
                </div>
            </div>
        </section>
    );
}