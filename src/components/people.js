import { useState } from 'react';
import peopleImgMI from '../people/mohamed-ibrahim-b.jpeg';
import peopleImgSM from '../people/shady-b.jpeg';
import peopleImgMA from '../people/arafa-b.jpeg';
import peopleImgSH from '../people/sherif-hamad-b.jpeg';
import peopleImgHO from '../people/hamdy-osama-b.jpg';
import peopleImgPlaceholder from '../people/placeholder.png';
const People = () => {
  const data = [{name:"Mohammed I M. H. Awad", src:peopleImgMI,title:"Principal Investigator",email:"email"},
  {src:"",name:"Prof. Tamer H. Emara",title:"Co-PI",email:"email"},
  {src:peopleImgSH,name:"Prof. Sherif Ali Hammad ",title:"experienced in embedded system development and control",email:"email"},
  {src:"",name:"Dr. Mohammed Ahmed El-Skhiekh",title:"",email:"email"},
  {src:"",name:"Dr. Hoda Mohamed Farid Wahba",title:" experienced in technology-based healthcare as per her experience, additionally she has distinctive clinical expertise in the field of Geriatrics and Gerontology.",email:"email"},
  {src:peopleImgSM,name:"Dr. Shady Ahmed Maged",title:" experienced in robotic system development and control.",email:"email"},
  {src:"",name:"Dr.Ahmed Mohamed Abd Elhamid Elbokl",title:"Neurology and EEG expert ",email:"email"},
  {src:"",name:"Dr. Shereen Ismail Fawaz",title:" consultant for several rehabilitation centers for more than 15 years, furthermore, she has an extensive experience in clinical assessment for rehabilitation healthcare.",email:"email"},
  {src:"",name:" Dr. Ehab Tantawy Hafez",title:"practicing rehabilitation physical therapy concerning kinetics, balance and gait disorders for 19 years, an experience that’s relevant to the core activities of the lab for healthcare using state of art technology.",email:"email"},
  {src:"",name:"  Mr. Ayman Amer Ahmed Amer",title:"Orthotist and prosthetist expert",email:"email"},
  {src:peopleImgMA,name:"  Eng. Mostafa Ahmed Arafa",title:"Researcher",email:"email"},
  {src:peopleImgHO,name:"  Eng. Hamdy Osama",title:"Researcher",email:"email"}]
    return (
      
        <section className="people">
                  {/* <h2  className="bold lg-font">People</h2>
                  <p  className="medium sm-font">References and links to papers</p> */}
           {data.map(d => (
                  <div key={d.id} className="people__item">
                  <img className="people__item__img" src={d.src}
                   alt="personal"  onError={(e)=>{e.target.onerror = null; e.target.src=peopleImgPlaceholder}}/>
                  <div  className="people__item__details">
                  <p className="people__item__name md-font bold">{d.name}</p>
                  <p className="people__item__title md-font light">{d.title}</p>
                  {/* <p className="people__item__email md-font light">{d.email}</p> */}
                  </div>
                </div>
                ))} 
      </section>
    )
}

export default People