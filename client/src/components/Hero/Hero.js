import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo3.png'
// import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-content">
                <div className='mil'>
                    <div className='hero-logo'>
                        <img className='logo-central fadeInDown' src={logo} alt='logo' />
                    </div>
                    <div className="hero-title fadeIn second">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odit quia debitis repellendus maiores eum. Alias repellendus sint, ullam eveniet reprehenderit id voluptas, perspiciatis tempore blanditiis eius aperiam recusandae a.
                        Voluptates assumenda consequuntur ut, non rem reprehenderit a adipisci mollitia,
                    </div>
                    <div className="les_liens">
                        <ul>
                            <li className="liens fadeIn third"><Link to='/signin'>Вход</Link></li>
                            <li className="liens2 fadeIn fourth"><Link to='/signup'>Регистрироваться</Link></li>
                        </ul>
                    </div>
                    <p className="hero-footer fadeIn fourth">Tout droits réservés - Jacques Katsuva - Copyright 2019</p>
                </div>
            </div>
        </div>
    )
}

export default Hero