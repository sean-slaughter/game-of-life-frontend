import React, { Component } from 'react'
import logo from '../conway_logo.png'

export class Logo extends Component {
    render() {
        return (
            <img className="logo" src={logo} alt=""/>
        )
    }
}

export default Logo
