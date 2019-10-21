import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import Movies from './components/Movies'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      tempSearchTerm : '',
      searchTerm : ''
    }
  }
  handleSearchTerm = event => {
    this.setState({
      tempSearchTerm : event.target.value
    })
  }
  handleSearch = () => {
    this.setState({
      searchTerm : this.state.tempSearchTerm
    })
  }
  render(){
    return (
      <div className="container">
          <div className="columns is-centered" style={{padding:'20px'}}>
            <div className="column is-half">
              <Header></Header>
              <Search handleSearch={this.handleSearch} handleSearchTerm={this.handleSearchTerm}></Search>
              <Movies search={this.state.searchTerm}></Movies>
              <Footer></Footer>
            </div>
          </div>
      </div>
    )
  }
}

export default App;