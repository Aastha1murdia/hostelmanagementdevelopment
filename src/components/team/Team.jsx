import React from 'react';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import TeamCard from './TeamCard';

import pp1 from "../../pp1.jpg";
import pp2 from "../../pp2.jpg";
import pp3 from "../../pp3.jpg";
import pp4 from "../../pp4.jpg";
import "./Team.css";

const Team = () =>{

    return(
        <>
        <Navbar/>
        <section id="team" class="pb-5">
            <div class="container">
                <div class="section-title h1">OUR TEAM</div>
                <div class="row">
                    <TeamCard image={pp1} name="Aastha Murdia" position="Frontend Developer"/>
                    <TeamCard image={pp2} name="Divya Kumari" position="Backend Developer"/>
                    <TeamCard image={pp3} name="Rahul Basrani" position="Frontend Developer"/>
                    <TeamCard image={pp4} name="Ruchi" position="Backend Developer"/>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Team;