import React from 'react'
import { pageLinks } from '../data'

const Navigation = () => {
  return (
    <div className='sticky-nav-container'>
        <div className='sticky-nav'>
        {pageLinks.map((link)=>{
            const {href,id}=link;
            return <a href={href} key={id}><i className="fas fa-dot-circle"></i></a>
        })}
        </div>
    </div>
  )
}

export default Navigation