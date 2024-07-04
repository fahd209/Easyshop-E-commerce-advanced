import React from 'react'
import EasyShopIcon from '../images/EasyShopIcon.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
  <div style={{backgroundColor: '#e5eae8'}}>
    <footer class="container d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <div class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <img width="30" height="27" src={EasyShopIcon} />
          </div>
          <span class="mb-3 mb-md-0 text-body-secondary">© 2024 Easy shop, Inc</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3"><a class="text-body-secondary" href="#"><GitHubIcon /></a></li>
          <li class="ms-3"><a class="text-body-secondary" href="#"><LinkedInIcon /></a></li>
        </ul>
    </footer>
  </div>
  )
}
export default Footer
