import React from 'react'

class Header extends React.Component{
    render(){
        return (
            <header className="hero is-small is-primary is-bold">
                    <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            List Movie
                        </h1>
                        <h2 className="subtitle">
                            explore movie everywhere
                        </h2>
                    </div>
                    </div>
            </header>
        )
    }
}

export default Header;