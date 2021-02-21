import { render } from 'react-dom';
import React from 'react';

import { Container } from './Container';

const mountNode = document.getElementById("app");

render(
    <div className='demo-container'><Container/></div>,
    mountNode
);
