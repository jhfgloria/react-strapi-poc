import React from 'react';
import FeaturedRecipes from '../featured-recipes/FeaturedRecipes.jsx';
import { Route } from 'react-router-dom';

const _setCustomRoutes = (categories) => {
  return categories.map(category => (
    <Route key={category.title} path={`/${category.title.toLowerCase()}`} component={null} />
  ));
}

const AppRoutes = ({ categories }) => {
  return (
    <React.Fragment>
      <Route exact path='/' component={FeaturedRecipes} />
      { _setCustomRoutes(categories) }
      <Route exact path='/faq' component={null} />
    </React.Fragment>
  );
};

export default AppRoutes;
