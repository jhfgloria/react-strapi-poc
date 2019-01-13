import React from 'react';
import Header from './navigation/Header.jsx';
import AppRoutes from './navigation/AppRoutes.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import navigationServices from './navigation/navigation-services';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: null
    };
  }
  
  componentWillMount() {
    navigationServices.getCategories()
      .then(categories => this.setState({ categories: categories }))
      .catch(console.error);
  }

  render() {
    return this.state.categories 
      ? (
        <div>
          <h1>Your recipes website 🌭 🌮</h1>
          <p>Find your favorite meals</p>
          <Router>
            <div>
              <Header categories={this.state.categories} />
              <AppRoutes categories={this.state.categories} />
            </div>
          </Router>
        </div>
      ) : (
        <p>Loading your best recipes application... Yummy! TACOSSSS (🌮)</p>
      );
  }
};
