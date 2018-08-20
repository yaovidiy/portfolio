import * as React from 'react';

import './header.component.scss';

export class Header extends React.Component {
    addBurger(){
        const burger = document.querySelector('.header__menu-burger');
        burger.addEventListener('click', function (){
            console.log('its working');
        });
    }
    render(){
        return <div className="header">
            <div className="header__name">Ovdiy Yaroslav</div>
            <div className="header__job">Trainee/Junior Fornt-end</div>
            <div className="header__menu-burger">
            <div></div>
            <div></div>
            <div></div>
            </div>
            <div className="header__menu">
            <ul className="menu">
                <li className="menu__active">Главная</li>
                <li>Мое резюме</li>
                <li>Мои проекты</li>
                <li>Контакты</li>
            </ul>
            </div>
        </div>
    }
}