import * as React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import {render} from 'react-dom';

import {Header} from './components/header/header.component.jsx';
import { Greeting } from './components/greeting/greeting.component.jsx';
import { Home } from './components/home/home.component.jsx';

render(<Router>
    <div className="page">
    <Header />
    <Route path='/' exact component={ Home } />
    </div>
</Router>, document.querySelector('#app'));