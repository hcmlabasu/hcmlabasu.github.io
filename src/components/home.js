import { useState } from 'react';
import img1 from '../assets/home/eeg.jpg';
import img2 from '../assets/home/gamebased.jpg';

const Home = () => {
    return (
      
        <section className="home">
        <h1 className="lg-font bold title">We Tech Care</h1>
        <p className="description md-font medium">    
          We develop solutions using the state-of-the-art technologies and mechatronic design approaches to overcome the current limitations with traditional approaches in rehabilitation and assistive devices. Our approach is using mechatronics to enhance human functionality, mobility and compensate or restore the loss of human physiological functions which is known as biomechatronics. Our research Lab is applying the concept of biomechatronic by synergistically integrating biology with the components to offer new generations of rehabilitation and assistive technologies.
          </p>
        <div className="home__img-wrapper">
          <img className="home__img" src={img1} alt="" onError={(e)=>{e.target.onerror = null; e.target.style.visibility="hidden"}} />
          <img className="home__img" src={img2} alt="" onError={(e)=>{e.target.onerror = null; e.target.style.visibility="hidden"}} />
          </div>
          <p className="description md-font medium">    
          Our Lab aims to develop assistive and rehabilitation solutions for approximately 10 million disabled in Egypt in addition to the elderly population who may suffer from balance problems, delayed reflexes and muscle weakness leading to increased risk of falls. According to statistics, nearly 200 thousand Egyptians fall victim to a stroke annually and more than 500 thousand suffers from either upper and lower limb amputations. Stroke, amputations and other motor impairment cause complications to the patients which limit their movements and functionality and make them dependent on a caregiver or at least need some assistance.
          </p>
         
          <p className="description md-font medium">    
          This constitutes a considerable indirect cost of disability in the form of caregiver absence from work, depression and caregiver stress treatment. 
          Our Lab targets to study the disabled and patients’ needs and identify the current technology limitations through data collection from both able-bodied (healthy) and disabled subjects or patients to develop biomechanical models which will be used for guided design and system developments. 
        </p>
      </section>
    )
}

export default Home