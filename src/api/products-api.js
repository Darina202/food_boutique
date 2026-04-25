import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://food-boutique.b.goit.study/api',
});

export const getAllProducts = async (page = 1, limit = 6, keyword, category, byABC, byPrice, byPopularity) => {
  const { data } = await instance.get('/products/', {
    params: { page, limit, keyword, category, byABC, byPrice, byPopularity },
  });
  return data;
};

export const getPopularProducts = async () => {
  const { data } = await instance.get('/products/popular');
  return data;
};

export const getDiscountProducts = async () => {
  const { data } = await instance.get('/products/discount');
  return data;
};

export const getCategoriesList = async () => {
  const { data } = await instance.get('/products/categories');
  return data;
};

export const getProductById = async id => {
  const { data } = await instance.get(`/products/${id}`);
  return data;
};

export const requestOrder = async body => {
  const { data } = await instance.post('/orders', body);
  return data;
};

export const requestSubscription = async body => {
  const { data } = await instance.post('/subscription', body);
  return data;
};
