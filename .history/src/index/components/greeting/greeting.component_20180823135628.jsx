import * as React from 'react';

import './greeting.component.scss';

export class Greeting extends React.Component {
    render() {
        return <section>
            <div className="greeting">
                <div className="greeting__text">
                    <b>Здравствуйте</b>, вот немного информации обо мне:
                </div>
                <div className="greeting__circlebox">
                    <div className="greeting__circlebox-circle">Мое резюме</div>
                    <div className="greeting__circlebox-circle">Мои работы</div>
                    <div className="greeting__circlebox-circle">Мои навыки</div>
                </div>
            </div>
        </section>
    }
}