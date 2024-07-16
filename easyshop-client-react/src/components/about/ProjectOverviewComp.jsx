import React from 'react'
import ToolsUsed from './toolUsed.png'

const ProjectOverviewComp = () => {
    const overViewContainer = {
        backgroundColor: '#063970'
    }
  return (
    <div style={overViewContainer}>
        <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
                <img src={ToolsUsed} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="500" loading="lazy" />
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold text-light lh-1 mb-3">Overview</h1>
                <p style={{fontWeight: 'bold'}} class="lead text-light">This project was made to show case my skills in full-stack development.
                The front-end was built using react.js, styled with bootstrap, and material UI. The backend of
                the website was built with Java spring boot. The application is containerize using Docker and deployed with AWS.</p>
            </div>
            </div>
    </div>
  </div>
  )
}

export default ProjectOverviewComp
