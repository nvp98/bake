import React from "react";
import "./Team.scss";
export default function Team(){
    return(
        <section className="team">
            <h1 className="team__title">BAKE TEAM</h1>
            <div className="team__content">
                <div className="team__member">
                    <img src={require("../../../assets/image/t1.jpg")}></img>
                    <div className="team__member__detail">
                        <h2>Jorn Simon</h2><p>-Coffee Maker</p>
                    </div>
                </div>
                <div className="team__member">
                    <img src={require("../../../assets/image/t1.jpg")}></img>
                    <div className="team__member__detail">
                        <h2>Jorn Simon</h2><p>-Coffee Maker</p>
                    </div>
                </div>
                <div className="team__member">
                    <img src={require("../../../assets/image/t1.jpg")}></img>
                    <div className="team__member__detail">
                        <h2>Jorn Simon</h2><p>-Coffee Maker</p>
                    </div>
                </div>
                <div className="team__member">
                    <img src={require("../../../assets/image/t1.jpg")}></img>
                    <div className="team__member__detail">
                        <h2>Jorn Simon</h2><p>-Coffee Maker</p>
                    </div>
                </div>
                <div className="team__member">
                    <img src={require("../../../assets/image/t1.jpg")}></img>
                    <div className="team__member__detail">
                        <h2>Jorn Simon</h2><p>-Coffee Maker</p>
                    </div>
                </div>
                <div className="team__member">
                    <img src={require("../../../assets/image/t1.jpg")}></img>
                    <div className="team__member__detail">
                        <h2>Jorn Simon</h2><p>-Coffee Maker</p>
                    </div>
                </div>
            </div>
        </section>
    );
}