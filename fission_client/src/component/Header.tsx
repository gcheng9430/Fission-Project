import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component<any>{
    constructor(props:{}){
        super(props);
    }
    
    render(){
        return(

            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                Social Fission Simulation
            </nav>

        );
    }
}
