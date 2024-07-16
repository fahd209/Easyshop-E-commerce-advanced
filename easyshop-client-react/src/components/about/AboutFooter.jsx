import React from 'react'

import { Link } from 'react-router-dom'

const AboutFooter = () => {
    const footerContainer = {
        backgroundColor: '#c0c0c0'
    }

    const currentYear = new Date().getFullYear();

  return (
    <div style={footerContainer}>
        <div class="container">
            <footer class="py-4 ">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><Link to='/' class="nav-link px-2 text-body-secondary">Home</Link></li>
                    <li class="nav-item"><Link to='/shop' class="nav-link px-2 text-body-secondary">Shop</Link></li>
                    <li class="nav-item"><Link href="/about" class="nav-link px-2 text-body-secondary">About</Link></li>
                    <li class="nav-item"><Link href="/register" class="nav-link px-2 text-body-secondary">Login</Link></li>
                    <li class="nav-item"><Link href="/login" class="nav-link px-2 text-body-secondary">Register</Link></li>
                </ul>
                <p class="text-center text-body-secondary">© {currentYear} Easy Shop, Inc</p>
            </footer>
        </div>
    </div>
  )
}

export default AboutFooter
