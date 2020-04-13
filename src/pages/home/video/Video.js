import React from "react";
import "./Video.scss";
export default function Video(){
    return (
        <section className="video">
            <div className="statistic">
                <div className="statistic__item">
                    <h2>455</h2>
                    <p>coffee</p>
                </div>
                <div className="statistic__item">
                    <h2>85</h2>
                    <p>coffee</p>
                </div>
                <div className="statistic__item">
                    <h2>1</h2>
                    <p>coffee</p>
                </div>
                <div className="statistic__item">
                    <h2>126</h2>
                    <p>coffee</p>
                </div>
            </div>
            <div className="video__content">
                <div className="video__content__left">
                    <video src={require("../../../assets/videos/videolfc.mp4")} controls></video>
                </div>
                <div className="video__content__right">
                    <iframe src={"https://www.youtube.com/watch?v=ZLs1LvO5IiA"} frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    );
}