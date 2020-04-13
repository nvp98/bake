import React from "react";
import "./Contact.scss";
import "../carousel/Carousel.scss"
export default function Contact(){
    return(
        <section className="contact">
            <h1 className="contact__title">CONTACT</h1>
            <form action="" method="POST" className="contact__form">
                <div  className="form-group" >
                    <input type="text" className="form-control" placeholder="Name"></input>
                </div>
                <div  className="form-group" >
                    <input type="text" className="form-control" placeholder="Last Name"></input>
                </div>
                <div  className="form-group" >
                    <input type="text" className="form-control" placeholder="Email"></input>
                </div>
                <div  className="form-group" >
                    <input type="text" className="form-control" placeholder="Phone"></input>
                </div>
                <div  className="form-group" >
                    <select className="form-control">
                        <option value="">Title Contact</option>
                        <option value="">Title Contact</option>
                        <option value="">Title Contact</option>
                        
                    </select>
                </div>
                <div  className="form-group" >
                    <select className="form-control">
                        <option value="">Contact content</option>
                        <option value="">Title Contact</option>
                        <option value="">Title Contact</option>
                        
                    </select>
                </div>
                <div className="form-group message">
                    <textarea className="form-control" rows="6" placeholder="Message"></textarea>
                </div>
                <div className="form-group privacy">
                    <input type="checkbox"></input>
                    <span>Agree the privacy policy</span>
                </div>
                <button className="btn_pink btn-submit">Submit</button>
            </form>
        </section>
    );
}