import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Overview';

it('renders without crashing', () => {
    var div = document.createElement('div');
    ReactDOM.render(<Overview />, div);
    ReactDOM.unmountComponentAtNode(div);
})