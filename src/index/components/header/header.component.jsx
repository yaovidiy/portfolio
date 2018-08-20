import * as React from 'react';

export class Header extends React.Component {
    render(){
        return <div className="header">
            <div className="header__name">Ovdiy Yaroslav</div>
            <div className="header__job">Trainee/Junior Fornt-end</div>
            <div className="header__menu-burger">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="header__menu"></div>
        </div>
    }
}