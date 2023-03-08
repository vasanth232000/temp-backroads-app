import React from 'react'
import { serviceData } from '../data'

const Service = () => {
  return (
    <div className="section-center services-center">
     {serviceData.map((data)=>{
        const {id,title,text,icon}=data;
        return <article className="service" key={id}>
          <span className="service-icon"><i className={icon}></i></span>
          <div className="service-info">
            <h4 className="service-title">{title}</h4>
            <p className="service-text">{text}</p>
          </div>
        </article>
     })}
        </div>
  )
}

export default Service