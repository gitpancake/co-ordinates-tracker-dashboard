import React from 'react';
import ReactDOM from 'react-dom';
import CreateForm from './CreateForm';

it('renders without crashing', () => {
    var div = document.createElement('div');
    ReactDOM.render(<CreateForm />, div);
    ReactDOM.unmountComponentAtNode(div);
})