import React from 'react'
import { tourData } from '../data'

const Tour = () => {
  return (
    <div className="section-center featured-center">
    {tourData.map((tour)=>{
        const {id,img,title,logo,country,rate,days,date,text} = tour;
         return<article className="tour-card" key={id}>
          <div className="tour-img-container">
            <img src={img} className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>{text}</p>
            <div className="tour-footer">
              <p>
                <span><i className={logo}></i></span> {country}
              </p>
              <p>{days}</p>
              <p>{`from ${rate}`}</p>
            </div>
          </div>
        </article>
    })}
      </div>
  )
}

export default Tour