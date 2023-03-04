import axios from "axios";
const baseUrl = "http://localhost:3003/api/products";

const getProducts = async (param) => {
  const response = await axios.get(`${baseUrl}/${param}`);
  return response.data;
};
const createProducts = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};
const update = async (newObject) => {
  const response = await axios.put(`${baseUrl}/${newObject.id}`, newObject);
  return response.data;
};
const deleteNode = async (objectId) => {
  const response = await axios.delete(`${baseUrl}/${objectId}`);
  return response.data;
};
export default { getProducts, createProducts, update, deleteNode };
