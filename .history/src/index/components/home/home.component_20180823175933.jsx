import * as React from 'react';
import { Greeting } from '../greeting/greeting.component.jsx';

import './home.component.scss';

export class Home extends React.Component {
    render(){
        return <section>
            <Greeting />
        </section>
    }
}