import * as React from 'react';

import './header.component.scss';

export class Header extends React.Component {
    
    render(){
        const burger = <div className="header__menu-burger"><div></div><div></div><div></div></div>;
        burger.addEventListener("click", ()=>{
           burger.querySelector(".header__menu-burger").className="header__menu-burger-active"; 
        });
        return <div className="header">
            <div className="header__name">Ovdiy Yaroslav</div>
            <div className="header__job">Trainee/Junior Fornt-end</div>
            { burger }
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