import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexTitle = "Welcome to the Recycling Calculator"
const ButtonBegin = "Begin"

<<<<<<< HEAD
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
=======
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 
>>>>>>> dab330db89a1b177ab02ccfc1844aa936655749d
