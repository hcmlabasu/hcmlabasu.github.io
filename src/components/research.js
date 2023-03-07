
import {  
  Link } from "react-router-dom";
import reasearchBM from '../assets/research/researchBM.png';
import researchSWS from '../assets/research/researchSWS.jpg';
import researchLP from '../assets/research/researchLP.png';
import researchEO from '../assets/research/researchEO.jpg';
import researchGB from '../assets/research/researchGB.png';
import researchAT from '../assets/research/researchAT.png';
// import researchR from '../assets/research/researchR.png';

const Research = () => {
  const data = [{id:"1" , src:reasearchBM,title:"Biomechanics",description:""},
  {id:"2" , src:researchSWS,title:"Smart Wearable Sensors",description:""},
  {id:"3" , src:researchLP,title:"Lower and Upper Limb Prostheses",description:""},
  {id:"4" , src:researchEO,title:"Exoskeletons and Orthoses",description:""},
  {id:"5" , src:researchGB,title:"Game-Based Rehabilitation Robot",description:""},
  {id:"6" , src:researchAT,title:" Assistive Technologies",description:""},
  {id:"7" , src:"",title:" Robotics in Healthcare",description:""},]
    return (
        <section className="research">
                <h1 className="bold lg-font">Research & Discoveries</h1>
                <p  className="medium sm-font">Current Areas of Study</p>
                <div className="research__items-wrapper">
                {data.map(d => (
                  <Link to="/research/area1" key={d.id} className="research__item">
                  <img className="research__item__img" src={d.src} alt="research area" onError={(e)=>{e.target.onerror = null; e.target.style.visibility="hidden"}} />
                  <h4 className="research__item__title">{d.title}</h4>
                  <p className="research__item__description sm-font medium">This is your Project description. Whether your work is based on text, 
                  images, videos or a different medium, providing a brief summary will help visitors understand the context and background. 
                  Then use the media section to showcase your project.</p>
                  <button className="research__item__btn sm-font medium">Read more</button>
                </Link>
                ))} 
                    </div>
      </section>
    )
}

export default Research