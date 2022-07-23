import React, { useState } from 'react';
import './Header.css';

const Header = () => {

    function scrollHandler() {
        const header = document.getElementById('nav');
       //  When the scroll is gearet then 50 viewport height, add the scroll-header class to the header tag
       if(this.scrollY >= 50) {
           header.classList.add('scroll-nav');
       } else {
           header.classList.remove('scroll-nav');
       }
   }
   
   window.addEventListener('scroll', scrollHandler);
    
    const themeModeHandler = () => {
        const themMode = document.querySelector('.bxs-moon');
        if (themMode) {
            themMode.classList.toggle('bxs-sun')
            document.querySelector('body').classList.toggle('active-dark')
        } else {
            themMode.classList.add('bxs-moon')
            document.querySelector('body').classList.remove('active-dark')
        }
    }

    return (
        <>
            <div className='nav' id='nav'>
                <div>
                    <a className='nav__logo' href="#">Library</a>
                </div>
                <div>
                    <div className='nav__button'>
                        <i class='bx bxs-moon' onClick={themeModeHandler} ></i>
                        <i class='bx bxs-shopping-bag' ><span>0</span></i>
                    </div>
                </div>
            </div>

            <div className='header'>
                <div className="header__row">
                    <h1>A room without book is like <br /> a body without a soul....</h1>
                </div>
            </div>
        </>
    )
}

export default Header;