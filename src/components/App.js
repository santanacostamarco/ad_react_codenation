import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home'
import RecipePage from './RecipePage'
import { slugify } from '../helpers'
import recipes from '../sample_data/recipes.json'

const home = ({match}) => {
  return(
    <Home recipes={recipes.results} searchString={match.params.searchString}/>
  )
}

class App extends Component {
  state = {
    searchString: ''
  }

  handleChange = (e) => {
    this.props.history.push(e.target.value);
    this.setState({searchString: e.target.value})
  }

  render() {
    return (
      <div className="App">
          {/* TODO: Navbar precisa receber a string da URL */}
          <Navbar
            searchString={this.state.searchString}
            onChange={this.handleChange}
          />
        )}/>
    
        <div className="container mt-10">
          {/* TODO: Implementar rotas  */}
          <Route exact path="/" component={home} />
          <Route exact path="/:searchString" component={home} />
        </div>
      </div>
    )
  }
}

export default App
