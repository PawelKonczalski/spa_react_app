import React from 'react'
import {NavLink} from "react-router-dom";
import '../style/Navigation.css'

const list = [
    {name: 'start', path: '/', exact: true},
    {name: 'products', path: '/products'},
    {name: 'contact', path: '/contact'},
    {name: 'admin panel', path: '/admin'},
];

const Navigation = () => {

    const menu = list.map(item => (
        <li>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ));

    return (
        <nav className='main'>
            <ul>
                {menu}
            </ul>
        </nav>
    )
};

export default Navigation