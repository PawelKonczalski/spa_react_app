import React from 'react'
import {Route} from "react-router-dom";
import "../style/Footer.css";

const Footer = () => {
    return (
        <div>
            <h2>Footer</h2>

            <Route path='/' exact render={() => {
                return (
                    <p>You are on <span>main page</span></p>
                )
            }}/>

            <Route path='/:page' exact render={props => {
                return (
                    <>
                    <p>You are on <span>{props.match.params.page}</span></p>
                    <p>You are on <span>{props.match.url}</span></p>
                    <p>You are on <span>{props.match.path}</span></p>
                    </>
                )
            }}/>

            <Route path='/:page/:idProduct' exact render={props => {
                return (
                    <>
                    <p>You are on <span>{props.match.params.idProduct}</span></p>
                    <p>You are on <span>{props.match.url}</span></p>
                    <p>You are on <span>{props.match.path}</span></p>
                    </>
                )
            }}/>
        </div>
    )
};

export default Footer