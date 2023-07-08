import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../css/style.css'

export default class Home extends Component {
    render() {
        return (
            <div className='container-fuild'>
                <div className="row" id='content'>
                    <nav className="col-3 bg-primary bg-opacity-50 p-0 m-0">
                        <button className="navbar-toggler d-lg-none" type="button" />
                        <div className="" id="">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? 'nav-link text-white fs-3 mx-3' : 'nav-link text-dark fs-3 mx-3'}
                                        to=""
                                    >Home</NavLink>
                                    <hr />
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to='detail'
                                        className={({ isActive }) => isActive ? 'nav-link text-white fs-3 mx-3' : 'nav-link text-dark fs-3 mx-3'}
                                    >Shop</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Outlet />
                </div >
            </div >
        )
    }
}
