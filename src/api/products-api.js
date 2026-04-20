import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://food-boutique.b.goit.study/api',
});

export const getAllProducts = async (page = 1, limit = 6, category = '') => {
  const { data } = await instance.get('/products/', {
    params: { page, limit, category },
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

export const getCategoriesProducts = async () => {
  const { data } = await instance.get('/products/categories');
  console.log(data);
  return data;
};

export const getProductById = async id => {
  const { data } = await instance.get(`/products/${id}`);
  console.log(data);
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
