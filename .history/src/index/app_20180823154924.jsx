import * as React from 'react';
import {render} from 'react-dom';

import {Header} from './components/header/header.component.jsx';
import { Greeting } from './components/greeting/greeting.component.jsx';
import { Home } from './components/home/home.component.jsx';

render(<Header/>, document.querySelector('.head'));
render(<Greeting/>, document.querySelector('.gretting'));
