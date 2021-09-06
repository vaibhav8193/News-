import React, { Component } from 'react'
import { Link } from "react-router-dom";


export class Navbar extends Component {


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                    <div className="container-fluid">
                        {/*<Link className="navbar-brand" to="/">Trending News</Link>*/}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/" style={{color: '#e6e6e6'}}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business" style={{color: '#e6e6e6'}}>Business</Link >
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment" style={{color: '#e6e6e6'}}>Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/general" style={{color: '#e6e6e6'}}>General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health" style={{color: '#e6e6e6'}}>Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science" style={{color: '#e6e6e6'}}>Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports" style={{color: '#e6e6e6'}}>Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology" style={{color: '#e6e6e6'}}>Technology</Link>
                                </li>


                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
