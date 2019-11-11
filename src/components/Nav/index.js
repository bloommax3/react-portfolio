import React, {Component} from 'react';
import {
    Link,
    withRouter
} from 'react-router-dom';
import "./style.css"

class Nav extends Component{

    constructor(props) {
        super(props);
        this.state = {
          open: false,
          width: window.innerWidth
        };
    }
    
    
    updateWidth = () => {
        const newState = { width: window.innerWidth };
    
        if (this.state.open && newState.width > 991) {
          newState.open = false;
        }
    
        this.setState(newState);
    };
    
    toggleNav = () => {
        this.setState({ open: !this.state.open });
    };
    
    componentDidMount() {
        window.addEventListener("resize", this.updateWidth);
    }
    
    componentWillUnMount() {
        window.removeEventListener("resize", this.updateWidth);
    }

    render(){
        return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <ul className="navbar-nav">
            <li>
            <Link
                to="/"
                className={
                  window.location.pathname === "/" ? "nav-link active" : "nav-link"}
              >
                Home
            </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={
                  window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
              >
                About
            </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
              >
                Portfolio
            </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
              >
                Contact
            </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
    }
}

export default Nav;