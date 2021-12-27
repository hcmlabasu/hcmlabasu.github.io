import { useState } from 'react';
import logo from '../logo.png';
const Research = () => {
  const data = [{src:"",title:"Biomechanics",description:""},
  {src:"",title:"Smart Wearable Sensors",description:""},
  {src:"",title:"Lower and Upper Limb Prostheses",description:""},
  {src:"",title:"Exoskeletons and Orthoses",description:""},
  {src:"",title:"Game-Based Rehabilitation Robot",description:""},
  {src:"",title:" Assistive Technologies",description:""},
  {src:"",title:" Robotics in Healthcare",description:""},]
    return (
      
        <section className="research">
                <h2 className="bold lg-font">Research & Discoveries</h2>
                <p  className="medium sm-font">Current Areas of Study</p>
                {data.map(d => (
                  <a key={d.id} className="research__item">
                  <img className="research__item__img" src={d.src} alt="research area" onError={(e)=>{e.target.onerror = null; e.target.style.visibility="hidden"}} />
                  <h4 className="research__item__title">{d.title}</h4>
                  <p className="research__item__description">{d.description}</p>
                </a>
                ))} 
      </section>
    )
}

export default Research