import * as React from 'react';

import './header.component.scss';

export class Header extends React.Component {
    toogleBurger(){
        const burger = document.querySelector('.header__menu-burger');
        const menu = document.querySelector('.menu');
        if (burger.className==='header__menu-burger'){
            menu.className = 'menu active__menu';
            burger.className = 'header__menu-burger active__burger';
        }
        else {
            menu.className = 'menu';
            burger.className = 'header__menu-burger';
        }
    }
    render(){
        return <div className="header">
            <div className="header__name">Ovdiy Yaroslav</div>
            <div className="header__job">Trainee/Junior Fornt-end</div>
            <div onClick={this.toogleBurger.bind(this)} className="header__menu-burger">
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