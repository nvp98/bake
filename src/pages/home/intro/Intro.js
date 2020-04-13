import React from "react";
import "./Intro.scss";
import Img1 from "../../../assets/image/ab1.jpg";
export default function Intro(){
    return(
        <section className="intro">
            <div className="intro__item intro__tradition">
                <div >
                    <h2>Tradition</h2>
                    <p>Lorem ipsum dolor sit amet sonsectetus adipisicung elit. Minima dolor harum expedita aspernatur
                        facilisquo
                    </p>
                </div>
            </div>
            <div className="intro__item intro__img-1">
                <img src={require('../../../assets/image/ab1.jpg')} alt="a"></img>
            </div>
            <div className="intro__item intro__creativity">
                <div >
                    <h2>Creativity</h2>
                    <p>Lorem ipsum dolor sit amet sonsectetus adipisicung elit. Minima dolor harum expedita aspernatur
                        facilisquo
                    </p>
                </div>
            </div>
            <div className="intro__item intro__things">
                <div >
                    <h2>Things</h2>
                    <p>Lorem ipsum dolor sit amet sonsectetus adipisicung elit. Minima dolor harum expedita aspernatur
                        facilisquo
                    </p>
                </div>
            </div>
            <div className="intro__item intro__img-2">
                <img src={require('../../../assets/image/ab2.jpg')}></img>
            </div>
            <div className="intro__item intro__quality">
                <div >
                    <h2>Quality</h2>
                    <p>Lorem ipsum dolor sit amet sonsectetus adipisicung elit. Minima dolor harum expedita aspernatur
                        facilisquo
                    </p>
                </div>
            </div>
            <div className="intro__item intro__img-3">
                <img src={require('../../../assets/image/ab3.jpg')}></img>
            </div>
            <div className="intro__item intro__cakes">
                <div >
                    <h2>Cakes</h2>
                    <p>Lorem ipsum dolor sit amet sonsectetus adipisicung elit. Minima dolor harum expedita aspernatur
                        facilisquo
                    </p>
                </div>
            </div>
            <div className="intro__item intro__img-4">
                <img src={require('../../../assets/image/ab4.jpg')}></img>
            </div>
        </section>
    );
}