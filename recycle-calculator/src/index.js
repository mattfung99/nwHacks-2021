import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexTitle = "Welcome to the Recycling Calculator"
const ButtonBegin = "Begin"

function CreateWelcomePage() {
    return (
        <section>
            <div class="centerTitle">
                <p class="border border-primary rounded">{IndexTitle}</p>
            </div>
            <div class="centerButton">
                <Button variant="outline-primary">{ButtonBegin}</Button>{' '}
            </div>
        </section>
    );
}

ReactDom.render(<CreateWelcomePage />, document.getElementById('root'));
