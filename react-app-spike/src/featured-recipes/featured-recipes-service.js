import api from '../common/services/api'

const getFeaturedRecipes = () => {
  return api.get('recipes');
};

export default {
  getFeaturedRecipes
}
