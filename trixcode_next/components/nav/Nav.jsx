import React from "react"
import styles from '../../styles/header.module.scss'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from '../../pages/index'
import Essentials from "../../pages/essentials"

function Nav() {
    return (
        <Router>
            <div>
                <nav className={styles.header_nav}>
                    <Link to="/" >Home</Link>
                    <Link to="/essentials" >Es</Link>
                </nav>
                <Switch>
                    <Route path="/Essentials">
                        <Essentials />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
    
}

export default Nav

