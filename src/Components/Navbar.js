import React, { Component } from 'react'
import logo from '../images/kelar-tour.svg'
import {FaAlignJustify} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import '../App.css'


export default class Navbar extends Component {
    state={
        isOpen:false
    }

    handleToggle= ()=>{
        this.setState({
            isOpen : !this.state.isOpen
        })
        
    }

    printkir = ()=>{
        console.log("kirekhar")
    }

    
    render() {
        return (
            <>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <button 
                        type="button"
                        className="nav-btn"
                        onClick={this.handleToggle} 
                        >
                            <FaAlignJustify className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <h1>{this.state.isOpen}</h1>

            </>

        )
    }
}
