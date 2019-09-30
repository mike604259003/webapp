import React from 'react';
export default class HeaderComponent extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default bootsnav navbar-fixed no-background white">

                <div className="container">



                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <i className="fa fa-bars"></i>
                        </button>
                        <a className="navbar-brand" href="#brand">
                            <img src="assets/images/logo.png" className="logo" alt="" />

                        </a>

                    </div>

                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#features">About</a></li>
                            <li><a href="#service">Service</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#test">Testimonial</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>

            </nav>
        )
    }
}