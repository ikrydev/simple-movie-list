import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import Movies from './components/Movies'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      searchTerm : ''
    }
  }
  handleSearchTerm = event => {
    this.setState({
      searchTerm : event.target.value
    })
  }
  render(){
    return (
      <div className="container">
          <div className="columns is-centered" style={{padding:'20px'}}>
            <div className="column is-half">
              <Header></Header>
              <Search handleSearchTerm={this.handleSearchTerm}></Search>
              <Movies search={this.state.searchTerm}></Movies>
              <Footer></Footer>
            </div>
          </div>
      </div>
    )
  }
}

export default App;