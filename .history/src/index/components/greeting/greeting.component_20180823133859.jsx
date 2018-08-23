import * as React from 'react';

import './greeting.component.scss';

export class Greeting extends React.Component {
    render() {
        return <section>
            <div className="greeting">
                <div className="greeting__text">
                    Здравствуйте, вот немного информации обо мне:
                </div>
                <div className="greeting__circlebox">
                    <div className="greeting__circlebox-resume">Мое резюме</div>
                    <div className="greeting__circlebox-work">Мои работы</div>
                    <div className="greeting__circlebox-skills">Мои навыки</div>
                </div>
            </div>
        </section>
    }
}