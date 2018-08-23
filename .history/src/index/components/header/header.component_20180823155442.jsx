import * as React from 'react';
import { Link } from 'react-router'

import './header.component.scss';

export class Header extends React.Component {
    toogleBurger(){
        const burger = document.querySelector('.header__menu-burger');
        const menu = document.querySelector('.menu');
        const body = document.querySelector('body');
        if (burger.className==='header__menu-burger'){
            menu.className = 'menu active__menu';
            burger.className = 'header__menu-burger active__burger';
            body.className = 'active__body';
        }
        else {
            body.className = ' ';
            menu.className = 'menu';
            burger.className = 'header__menu-burger';
        }
    }
    render(){
        return <div>
            <ul className="menu">
                <li className="menu__active"><Link to='/'>Главная</Link></li>
                <li><Link>Мое резюме</Link></li>
                <li><Link>Мои проекты</Link></li>
                <li><Link>Контакты</Link></li>
            </ul>
        <div className="header">
            <div className="header__name">Ovdiy Yaroslav</div>
            <div className="header__job">Trainee/Junior Fornt-end</div>
            <div onClick={this.toogleBurger.bind(this)} className="header__menu-burger">
            <div></div>
            <div></div>
            <div></div>
            </div>
            
        </div>
        </div>
    }
}