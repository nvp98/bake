import React from "react";
import "./Home.scss";
import "../../assets/styles/Helpers/variable.scss";
import Header from "../../components/header/HeaderContainer";
import Carousel from "./carousel/CarouselContainer";
import Intro from "./intro/IntroContainer";
import Video from "./video/VideoContainer";
import Team from "./team/TeamContainer";
import Contact from "./contact/ContactContainer";
import Footer from "./footer/FooterContainer";
export default function Home(){
    return(
        <section className="home">
            <Header/>
            <Carousel/>
            <Intro/>
            <Video />
            <Team />
            <Contact />
            <Footer />
        </section>
    );
}