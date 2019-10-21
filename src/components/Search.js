import React from 'react'

class Search extends React.Component{
    render(){
        return (
            <div className="columns is-centered" style={{marginTop:'5px',margiBottom:'5px'}}>
                <div className="column is-four-fifths">
                    <input className="input" placeholder="Search Movie by name" onChange={this.props.handleSearchTerm}></input>
                </div>
                <div className="column">
                    <button className="button is-secondary is-fullwidth" onClick={this.props.handleSearch} >Cari</button>
                </div>
            </div>
        )
    }
}

export default Search