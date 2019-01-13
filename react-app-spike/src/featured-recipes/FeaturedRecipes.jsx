import React, { Component } from 'react';
import service from './featured-recipes-service';
import Recipe from '../common/ui/Recipe.jsx';

export default class FeaturedRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featured: null
    };
  }

  componentWillMount() {
    service.getFeaturedRecipes()
      .then(recipes => {
        this.setState({
          featured: recipes
        })
      })
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    return <section>{this._displayFeatured()}</section>;
  }

  _displayFeatured() {
    return this.state.featured
      ? this.state.featured.map((recipe, key) => <Recipe {...recipe} key={key} />)
      : <p>Waiting for the best recipes EVER... TACO!! (🌮)</p>
  }
};
