import React from 'react'
import EasyShopIcon from './EasyShopIcon.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
  <div style={{backgroundColor: '#c0c0c0', height: '78px', display: 'flex', fontFamily: 'Roboto, sans-serif'}}>
    <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 border-top ">
        <div className="col-md-4 d-flex align-items-center">
          <div className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <img width="30" height="27" alt='Easy shop icon' src={EasyShopIcon} />
          </div>
          <span className="mb-3 mb-md-0 text-body-secondary">© {currentYear} Easy shop, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a class="text-body-secondary" ><GitHubIcon /></a></li>
          <li className="ms-3"><a class="text-body-secondary" ><LinkedInIcon /></a></li>
        </ul>
    </footer>
  </div>
  )
}
export default Footer
