import api from '../common/services/api'

const getCategories = () => {
  return api.get('categories');
};

export default {
  getCategories
}
