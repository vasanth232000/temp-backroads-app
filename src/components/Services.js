import React from 'react'
import Service from './Service'
import Title from './Title'

const Services = () => {
  return (
  <>
      <section className="section services" id="services">
      {/* <div className="section-title">
        <h2>our <span>services</span></h2>
      </div> */}
      <Title title="our" subtitle="services"/>
      <Service/>
    </section>

  </>
  )
}

export default Services