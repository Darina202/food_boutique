import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://food-boutique.b.goit.study/api',
});

export const getAllProducts = async () => {
  const { data } = await instance.get('/products');
  console.log(data);
  return data;
};

export const getPopularProducts = async () => {
  const { data } = await instance.get('/products/popular');
  console.log(data);
  return data;
};

export const getDiscountProducts = async () => {
  const { data } = await instance.get('/products/discount');
  console.log(data);
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
