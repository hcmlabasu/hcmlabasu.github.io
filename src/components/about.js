import { useState } from 'react';
import stdfLogo from '../stdf-logo.png';
import hcmlab1 from '../assets/about/lab3.jpeg';
import hcmlab2 from '../assets/about/lab4.jpeg';

const About = () => {
    return (
      
        <section className="about">
        <h6 className="medium sm-font">ASU</h6>
        <h1 className="bold lg-font">HCM Lab</h1>
        <p  className="medium xmd-font">The Egypt's first interdisciplinary research lab that targets translational research</p>
        <p className="medium md-font">The “Human Centered Mechatronics” at Ain Shams University is an interdisciplinary 
        research Lab targets “translational research”. This research Lab applies the findings from basic science and the 
        mechatronic state-of-the-art trends in rehabilitation and assistive technologies to enhance human health and 
        well-being. This interdisciplinary research Lab is in collaboration between academic staff from Faculty of 
        Engineering and Faculty of Medicine from different departments aiming to design and develop integrated solutions 
        to support and rehabilitate people with disabilities, special needs and motor impairment and translate these 
        solutions into medical practice.</p>
        
        <p  className="medium md-font">The major focus areas of research in the proposed Lab will be 
        biomechanics simulation-based design, microprocessor-based rehabilitation, smart wearable sensors,
        lower and upper limb prostheses, smart exoskeletons and orthoses, game-based rehabilitation robots,
        virtual reality (VR) rehabilitation, and assistive mechatronic devices. 
        </p>
        <img src={hcmlab1} className="about__img"  alt=""/>
        <img src={hcmlab2} className="about__img"  alt=""/>
        <h3  className="bold md-font about__logo-wrapper">HCM Lab is funded by      <img src={stdfLogo} className="stdf-logo"  alt="STDF"/></h3>
        <p  className="medium md-font">The Equipment in Human Centered Mechatronics lab at Ain Shams 
        University is Funded by Science Technology & Innovation Funding Authoriy (Project ID 42885) titled 
        “Establishment of Human Centered Mechatronics Laboratory for Rehabilitation and Assistive Technologies”
        </p>
     </section>
    )
}

export default About