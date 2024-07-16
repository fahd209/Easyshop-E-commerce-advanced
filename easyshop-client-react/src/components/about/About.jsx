import React from 'react'
import PurposeComp from './PurposeComp'
import ProjectOverviewComp from './ProjectOverviewComp'
import AboutFooter from './AboutFooter'
import './About.css'

const About = () => {
  return (
    <div className='about-container'>
      <PurposeComp />
      <ProjectOverviewComp />
      <AboutFooter />
    </div>
  )
}

export default About